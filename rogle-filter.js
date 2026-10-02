/*
 * rogle-filter.js: search box and selects for the long lists (projects table, publication list).
 * Plain JavaScript, no libraries and no network. Without it, every row shows and the filter
 * stays hidden. A [data-filter] block holds:
 *   - one input[type=search] (every word must appear in the item, ignoring accents and case),
 *   - optional selects [data-filter-field="year"] and [data-filter-field="member"],
 *   - a clear button [data-clear] and a status line [data-status],
 *   - items [data-filter-item] with data-year and data-members (space-separated ids),
 *   - optional groups [data-filter-group] that hide when none of their items shows.
 * The address #year=2020&member=id&q=text picks a filter on load (and when the hash changes).
 */
(function () {
  "use strict";

  function fold(text) {
    // Lower case and no accents, so "gestion" finds "Gestión".
    return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function fromHash() {
    var found = {};
    location.hash
      .replace(/^#/, "")
      .split("&")
      .forEach(function (pair) {
        var parts = pair.split("=");
        if (parts.length === 2) {
          found[parts[0]] = decodeURIComponent(parts[1]);
        }
      });
    return found;
  }

  function setup(block) {
    var tools = block.querySelector("[data-filter-tools]");
    var input = block.querySelector("input[type=search]");
    var clear = block.querySelector("[data-clear]");
    var status = block.querySelector("[data-status]");
    var items = Array.prototype.slice.call(block.querySelectorAll("[data-filter-item]"));
    var groups = Array.prototype.slice.call(block.querySelectorAll("[data-filter-group]"));
    var year = block.querySelector('[data-filter-field="year"]');
    var member = block.querySelector('[data-filter-field="member"]');
    if (!tools || !input || !status || items.length === 0) {
      return;
    }
    var haystack = items.map(function (item) {
      return fold(item.textContent);
    });
    var template = block.getAttribute("data-text-showing") || "{n} / {total}";
    var none = block.getAttribute("data-text-none") || "";
    var timer = null;

    function apply() {
      var words = fold(input.value).split(/\s+/).filter(Boolean);
      var wantedYear = year ? year.value : "";
      var wantedMember = member ? member.value : "";
      var visible = 0;
      items.forEach(function (item, index) {
        var show = words.every(function (word) {
          return haystack[index].indexOf(word) !== -1;
        });
        if (show && wantedYear) {
          show = item.getAttribute("data-year") === wantedYear;
        }
        if (show && wantedMember) {
          var ids = " " + (item.getAttribute("data-members") || "") + " ";
          show = ids.indexOf(" " + wantedMember + " ") !== -1;
        }
        item.hidden = !show;
        if (show) {
          visible += 1;
        }
      });
      groups.forEach(function (group) {
        group.hidden = !group.querySelector("[data-filter-item]:not([hidden])");
      });
      var active = words.length > 0 || wantedYear !== "" || wantedMember !== "";
      clear.hidden = !active;
      var text = template.replace("{n}", visible).replace("{total}", items.length);
      status.textContent = visible === 0 && none ? text + " " + none : text;
    }

    function fromAddress() {
      var wanted = fromHash();
      if (year && wanted.year !== undefined) {
        year.value = wanted.year;
      }
      if (member && wanted.member !== undefined) {
        member.value = wanted.member;
      }
      if (wanted.q !== undefined) {
        input.value = wanted.q;
      }
      apply();
    }

    input.addEventListener("input", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(apply, 120);
    });
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && input.value) {
        input.value = "";
        apply();
      }
    });
    [year, member].forEach(function (select) {
      if (select) {
        select.addEventListener("change", apply);
      }
    });
    clear.addEventListener("click", function () {
      input.value = "";
      if (year) {
        year.value = "";
      }
      if (member) {
        member.value = "";
      }
      apply();
      input.focus();
    });
    window.addEventListener("hashchange", fromAddress);

    tools.hidden = false;
    fromAddress();
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-filter]"), setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

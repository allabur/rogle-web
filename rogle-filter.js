/*
 * rogle-filter.js: search box for the long tables (projects and papers).
 * Plain JavaScript, no libraries and no network. Without it the tables show all rows and the
 * search box stays hidden. Each [data-table-filter] block holds an input, a clear button, a
 * status line [data-status] and one table. Typing hides the rows that do not contain every word.
 */
(function () {
  "use strict";

  function fold(text) {
    // Lower case and no accents, so "gestion" finds "Gestión".
    return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function setup(block) {
    var tools = block.querySelector(".table-tools");
    var input = block.querySelector("input");
    var clear = block.querySelector("[data-clear]");
    var status = block.querySelector("[data-status]");
    var rows = Array.prototype.slice.call(block.querySelectorAll("tbody tr"));
    if (!tools || !input || !status || rows.length === 0) {
      return;
    }
    var haystack = rows.map(function (row) {
      return fold(row.textContent);
    });
    var template = block.getAttribute("data-text-showing") || "{n} / {total}";
    var none = block.getAttribute("data-text-none") || "";
    var timer = null;

    function report(visible) {
      var text = template.replace("{n}", visible).replace("{total}", rows.length);
      status.textContent = visible === 0 && none ? text + " " + none : text;
    }

    function apply() {
      var words = fold(input.value).split(/\s+/).filter(Boolean);
      var visible = 0;
      rows.forEach(function (row, index) {
        var show = words.every(function (word) {
          return haystack[index].indexOf(word) !== -1;
        });
        row.hidden = !show;
        if (show) {
          visible += 1;
        }
      });
      clear.hidden = words.length === 0;
      report(visible);
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
    clear.addEventListener("click", function () {
      input.value = "";
      apply();
      input.focus();
    });

    tools.hidden = false;
    apply();
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-table-filter]"), setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

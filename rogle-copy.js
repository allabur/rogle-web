/*
 * rogle-copy.js: "copy" buttons (citation, BibTeX, colour values).
 * Plain JavaScript, no libraries and no network. The buttons are hidden until the script runs
 * and only when the browser can write to the clipboard, so without JavaScript nothing breaks.
 * A [data-copy] button copies, in this order: its data-copy-text, the text of the element that
 * data-copy-target names (an id), or its own visible value ([data-copy-value] or the button text).
 * After copying, the label [data-copy-label] shows data-label-copied for two seconds.
 */
(function () {
  "use strict";

  function textOf(button) {
    var explicit = button.getAttribute("data-copy-text");
    if (explicit) {
      return explicit;
    }
    var targetId = button.getAttribute("data-copy-target");
    if (targetId) {
      var target = document.getElementById(targetId);
      return target ? target.textContent.trim() : "";
    }
    var value = button.querySelector("[data-copy-value]");
    return (value || button).textContent.trim();
  }

  function setup(button) {
    var label = button.querySelector("[data-copy-label]");
    var original = label ? label.textContent : "";
    button.hidden = false;
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(textOf(button)).then(function () {
        if (label) {
          label.textContent = button.getAttribute("data-label-copied") || original;
          window.setTimeout(function () {
            label.textContent = original;
          }, 2000);
        }
      });
    });
  }

  function init() {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

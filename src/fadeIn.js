// fade in

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) >= 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

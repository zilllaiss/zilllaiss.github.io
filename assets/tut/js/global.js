"use strict";

function themeSwitch() {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
}

function progressBar() {
  let progress = 25;

  const progBar = document.getElementById("prog-bar");
  const decrBtn = document.getElementById("prog-decr");
  const incrBtn = document.getElementById("prog-incr");

  if (!progBar || !decrBtn || !incrBtn) {
    console.error(
      "one of progress components not found",
      progBar,
      decrBtn,
      incrBtn,
    );
    return;
  }

  function updateBar() {
    const fillBar = progBar.querySelector(".fill-bar");
    fillBar.style.width = `${progress}%`;
  }

  decrBtn.addEventListener("click", () => {
    if (progress >= 0) {
      if (progress <= 10) {
        progress = 0;
      } else {
        progress = progress - 10;
      }
      updateBar();
    }
  });
  incrBtn.addEventListener("click", () => {
    if (progress <= 100) {
      if (progress >= 90) {
        progress = 100;
      } else {
        progress = progress + 10;
      }
      updateBar();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  progressBar();
});

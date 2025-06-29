const inner = document.querySelector(".progress-bar-inner");
const count = document.querySelector(".progress-count");

let num = 1;
const percentage = "%";

setInterval(function () {
  const z = num + percentage;
  inner.style.width = z;
  num++;
  count.innerHTML = `Progress ${z}`;
  if (num > 100) num = 1;
}, 150);

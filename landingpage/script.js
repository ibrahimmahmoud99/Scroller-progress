let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 50) {
    console.log(`Scrolling Y Value Is ${window.scrollY}`);
    btn.style.display = "block";
  }
  else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
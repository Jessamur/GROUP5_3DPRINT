const menu = document.querySelector("#menuLinks");
const btn = document.querySelector("#mIcon");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
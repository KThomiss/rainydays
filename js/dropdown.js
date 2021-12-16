const button = document.querySelector("#arrow-down");
const sideBar = document.querySelector(".drop-down");

button.addEventListener("click", function() {
    sideBar.classList.toggle("active");
});


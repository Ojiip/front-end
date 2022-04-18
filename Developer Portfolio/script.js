const mobileMenu = document.querySelector(".hamb")
const navbar = document.querySelector(".links")

mobileMenu.addEventListener("click", () => {
    navbar.classList.toggle("active")
})
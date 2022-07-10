let burger = document.querySelector(".burger");
let image = document.querySelector("#closeIcon");
let nav = document.querySelector("nav");
let account = document.querySelector(".account");
let back = document.querySelector(".back");

burger.addEventListener("click", function() {
    console.log("yes");
    if (image.getAttribute("src") == "images/icon-menu.svg") {
        image.setAttribute("src", "images/icon-close-menu.svg");
        burger.classList.add("show");
        nav.className = "responsive";
        account.classList.add("responsive");
        back.style.display = "block";
    }else {
        image.setAttribute("src", "images/icon-menu.svg");
        burger.classList.remove("show");
        nav.className = "";
        account.classList.remove("responsive");
        back.style.display = "none";
    }
    
});
//console log/alert to test if webpack is working

//call home.js loader
import "./style.css"; //import css
import { loadHome } from "./home.js"; 
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";


//initial load
loadHome(); //home load


//tab buttons selectors
const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");


//switching logic for tabs
function handleTabClick(e) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
}


//event listeners for tab buttons
homeButton.addEventListener("click", (e) => {
    loadHome();
    handleTabClick(e);
});

menuButton.addEventListener("click", (e) => {
    loadMenu();
    handleTabClick(e);
});

contactButton.addEventListener("click", (e) => {
    loadContact();
    handleTabClick(e);
});


homeButton.classList.add("active");

console.log("Webpack is working!");

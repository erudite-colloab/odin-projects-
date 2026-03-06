//home loader

import resturantImg from "./assets/pic.png"; //import image

export function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to the Mama de Casa";
    

    const image = document.createElement("img");
    image.src = resturantImg;
    image.alt = "Resturant Interior";
    image.classList.add("home-image");
    image.style.width = "400px";

    const description = document.createElement("p");
    description.textContent = "Experience the authentic flavors of our home-cooked meals, crafted with love and served in a cozy atmosphere. Join us for a delightful dining experience that feels just like home.";

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);;

}
export function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const info = document.createElement("p");
    info.textContent = " Visit us at :📍 Danfa St, Oyarifa 419";

    const phone = document.createElement("p");
    phone.textContent = "📞 +233 123 456 1220";

    content.appendChild(headline);
    content.appendChild(info);
    content.appendChild(phone);
}
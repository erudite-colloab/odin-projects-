export function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const list = document.createElement("ul");
    const items = [
        "Spaghetti Carbonara - $12.99 - Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
        "Margherita Pizza - $15.99 - Fresh tomatoes, mozzarella, and basil on a thin crust.",
        "Chicken Alfredo - $14.99 - Grilled chicken served over fettuccine with Alfredo sauce.",
        "Caesar Salad - $9.99 - Crisp romaine lettuce with Caesar dressing and croutons.",
        "Tiramisu - $8.99 - Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."
    ];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    content.appendChild(headline);
    content.appendChild(list);
}
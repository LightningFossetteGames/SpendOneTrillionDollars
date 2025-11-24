const items = [
    {name: "Burger", price: 25, image: "images/burger.png"},
    {name: "Soda", price: 15, image: "images/soda.png"},
    {name: "Pizza", price: 12, image: "images/pizza.png"},
    {name: "Phone", price: 800, image: "images/phone.png"},
    {name: "Laptop", price: 1500, image: "images/laptop.png"},
    {name: "TV", price: 2000, image: "images/tv.png"},
    {name: "Bike", price: 350, image: "images/bike.png"},
    {name: "Car", price: 30000, image: "images/car.png"},
    {name: "Motorcycle", price: 12000, image: "images/motorcycle.png"},
    {name: "Watch", price: 5000, image: "images/watch.png"},
    {name: "Shoes", price: 120, image: "images/shoes.png"},
    {name: "Clothes", price: 250, image: "images/clothes.png"},
    {name: "Ring", price: 12000, image: "images/ring.png"},
    // Continue adding all items here...
];

let netWorth = 1_000_000_000_000; // 1 trillion
let totalSpent = 0;

function updateNetWorth() {
    document.getElementById("netWorth").innerText =
        "Net Worth: $" + netWorth.toLocaleString();
}

function createShop() {
    const shop = document.getElementById("shop");

    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toLocaleString()}</p>
            <p>Bought: <span id="count-${index}">0</span></p>
            <button onclick="buy(${index})">Buy</button>
        `;

        shop.appendChild(card);
    });
}

function buy(index) {
    const item = items[index];

    if (netWorth - item.price < 0) return;

    netWorth -= item.price;
    totalSpent += item.price;

    let count = document.getElementById(`count-${index}`);
    count.innerText = Number(count.innerText) + 1;

    updateNetWorth();
}

document.getElementById("finishBtn").addEventListener("click", () => {
    if (totalSpent === 0) {
        document.getElementById("resultText").innerText =
            "You didn’t buy anything!";
    } else {
        document.getElementById("resultText").innerText =
            "You spent $" + totalSpent.toLocaleString() + "!";
    }
});

createShop();
updateNetWorth();

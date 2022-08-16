var products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 50000, title: "Springfield Shirt" },
    { id: 2, price: 60000, title: "Black Monastery" },
];
const N = document.querySelector(".card-group").childElementCount;
// console.log(N);
for (let i = 0; i < N; i++) {
    const num = document.querySelectorAll(".card-body")[i].dataset.id;
    document.querySelectorAll(".title")[num].innerHTML = products[num].title;
    document.querySelectorAll(".price")[num].innerHTML = products[num].price;
}

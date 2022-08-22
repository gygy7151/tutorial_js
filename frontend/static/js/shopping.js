var products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 50000, title: "Springfield Shirt" },
    { id: 2, price: 60000, title: "Black Monastery" },
];
// const N = document.querySelector(".card-group").childElementCount;
// console.log(N);
// for (let i = 0; i < N; i++) {
//     const num = document.querySelectorAll(".card-body")[i].dataset.id;
//     document.querySelectorAll(".title")[num].innerHTML = products[num].title;
//     document.querySelectorAll(".price")[num].innerHTML = products[num].price;
// }

function templateOutput(data) {
    let 템플릿 = "";
    data.forEach(a => {
        템플릿 += `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}.price}</p>
        </div>`;
    });
    return 템플릿;
}

document.querySelector(".row").innerHTML = templateOutput(products);

// ajax요청하기
// $.get("https://codingapple1.github.io/hello.txt")
//     .done(function (data) {
//         console.log(data);
//     })
//     .fail(function () {
//         console.log("fail");
//     });

// fetch("https://codingapple1.github.io/price.json")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

document.querySelector(".btn").addEventListener("click", e => {
    fetch("https://codingapple1.github.io/js/more1.json")
        .then(data => data.json())
        .then(data => {
            let addedGoods = templateOutput(data);
            document
                .querySelector(".row")
                .insertAdjacentHTML("beforeend", addedGoods);
            console.log(document.querySelector(".row").childElementCount);
            if (document.querySelector(".row").childElementCount == 9) {
                document.querySelector(".btn").classList.add("unshow");
            }
        })
        .catch(e => {
            console.log(e);
        });
});

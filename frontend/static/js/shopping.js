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
    data = sorting(data);
    data.forEach(a => {
        템플릿 += `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}.price}</p>
        </div>`;
    });
    return 템플릿;
}
// - 초기 템플릿 값
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

document.querySelector("#condition1").addEventListener("click", e => {
    // 다나가순 정렬및 6만원이하 상품보기 기능 구현완료
    let data = sortingRe(products, "title").filter(x => x.price <= 60000);
    console.log(data);
    let addedGoods = templateOutput(data);
    let selector = document.querySelector(".row");

    selector.innerHTML = "";
    selector.insertAdjacentHTML("beforeend", addedGoods);

    if (document.querySelector(".row").childElementCount == 9) {
        document.querySelector(".btn").classList.add("unshow");
    }
});

function sorting(arr, key) {
    arr.sort(function (a, b) {
        if (a[key] > b[key]) {
            return 1;
        } else {
            return -1;
        }
    });

    return arr;
}

function sortingRe(arr, key) {
    arr.sort(function (a, b) {
        if (a[key] < b[key]) {
            return 1;
        } else {
            return -1;
        }
    });

    return arr;
}

console.log(sorting(products));

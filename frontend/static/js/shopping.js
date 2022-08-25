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
    data.forEach((a, i) => {
        템플릿 += `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        <button class="buy-button" data-id="${i}">구매</button>
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

document.querySelector(".row").addEventListener("click", function (e) {
    // 구매버튼을 누르면 로컬스토리지에 선택한 상품이 있는지 확인
    // 구매버튼을 클릭한 상품명을 가져온다.
    // key명을 cart로 정하자.
    // 로컬스토리지에 구매를 클릭한 상품명이 없으면 상품명을 추가해준다
    // 만약있으면
    const childs = document.querySelector(".row").childNodes;
    let childOrder = e.target.dataset.id;
    const nameOfProduct = childs[childOrder].childNodes[3].innerHTML;
    console.log(
        e.target.previousElementSibling.previousElementSibling.innerHTML
    ); //이렇게 두개로 접근도 가능함

    // - !표로 해주면 true반대인 false가 아님
    if (localStorage.hasOwnProperty("cart") == false) {
        localStorage.setItem("cart", JSON.stringify([nameOfProduct]));
        // - 값이 있으면 값을 객체 변수에 담고 새로 추가할 상품
    } else {
        let nowCart = JSON.parse(localStorage.getItem("cart"));
        // nowCart에 값이 없으면 추가해준다

        if (nowCart.indexOf(nameOfProduct) == -1) {
            nowCart.push(nameOfProduct);
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(nowCart));
    }
});
//만약 없으면

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(key);
//     console.log(localStorage.getItem(key));
// }

// - 장바구니 버튼 클릭시 특정 페이지로 이동
document.querySelector("#basket").addEventListener("click", function () {
    window.location.href = "./basket.html";
});

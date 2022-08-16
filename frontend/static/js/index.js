/*버튼 0 누르면 */
/**모든 버튼에 붙은 orange 클래스명 제거 */ /**모든 버튼에 붙은 orange 클래스명 제거 */
window.addEventListener("scroll", function () {
    let scroller = document.querySelector("html");
    let heightIn = window.scrollY + scroller.clientHeight;
    let heightOut = scroller.scrollHeight;
    console.log(heightIn, heightOut);
    let percentage = ((heightIn / heightOut) * 100).toFixed(0);

    document.querySelector(".loading-bar").style.width = percentage + "%";
});
// const scroller = document.querySelector(".rorem");
// scroller.addEventListener("scroll", function () {
//     let A = scroller.clientHeight + scroller.scrollTop;
//     let B = scroller.scrollHeight;
// if (A > B - 20) {
//     alert("모두 다 읽으셨습니다!");
// }
// });
let N = document.querySelector(".list").childElementCount;

function openTab(num) {
    for (let i = 0; i < N; i++) {
        let tabHead = document.querySelectorAll(".tab-button")[i];
        let tab = document.querySelectorAll(".tab-content")[i];
        tabHead.classList.remove("orange");
        tab.classList.remove("show");
    }
    document.querySelectorAll(".tab-button")[num - 1].classList.add("orange");
    document.querySelectorAll(".tab-content")[num - 1].classList.add("show");
}
document.querySelector(".list").addEventListener("click", function (e) {
    console.log(e.target.dataset.id);
    openTab(Number(e.target.dataset.id));
});

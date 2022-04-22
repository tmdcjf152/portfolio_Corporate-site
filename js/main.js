const main = document.querySelector("main");

let tags = "";

for (let i = 0; i < 397; i++) {
    tags += `<article><img src="img/index/pic${i}.jpg"></article>`
}

main.innerHTML = tags;

const items = main.querySelectorAll("article");

window.addEventListener("mousemove", (e) => {
    let posX = e.pageX;
    let totalWid = window.innerWidth;
    let percent = (posX / totalWid) * 397;

    percent = parseInt(percent);

    for (let el of items) {
        el.style.display = "none";
    }
    items[percent].style.display = "block";

})
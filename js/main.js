const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

btnCall.addEventListener("click", (e) => {
    e.preventDefault();

    let isOn = btnCall.classList.contains("on");
    (isOn) ? btnCall.classList.remove("on") : btnCall.classList.add("on");

    let isOnM = menuMo.classList.contains("on");
    (isOnM) ? menuMo.classList.remove("on") : menuMo.classList.add("on");
})
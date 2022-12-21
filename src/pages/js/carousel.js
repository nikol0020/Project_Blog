let carousel = document.querySelector("#carousel");
let itemsLeft = document.querySelector("#items-left");
let itemsRight = document.querySelector("#items-right");
let itemsCenter = document.querySelector("#items-center");
let btnLeft = document.querySelector("#btn-left");
let btnRight = document.querySelector("#btn-right");

let moveLeft = () => {
    carousel.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
};

let moveRight = () => {
    carousel.classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
};

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

carousel.addEventListener("animationend", (e) => {
    let changedItem = itemsCenter.innerHTML;

    if (e.animationName === "transition-left") {
        carousel.classList.remove("transition-left");
        document.querySelector("#items-center").innerHTML = itemsLeft.innerHTML;
        document.querySelector("#items-left").innerHTML = itemsRight.innerHTML;
        document.querySelector("#items-right").innerHTML = changedItem;
    }

    if (e.animationName === "transition-right") {
        carousel.classList.remove("transition-right");
        document.querySelector("#items-center").innerHTML = itemsRight.innerHTML;
        document.querySelector("#items-right").innerHTML = itemsLeft.innerHTML;
        document.querySelector("#items-left").innerHTML = changedItem;
    }

    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
})

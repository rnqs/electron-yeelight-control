var sliderR = document.querySelector("input#R");
var sliderG = document.querySelector("input#G");
var sliderB = document.querySelector("input#B");

var red = 123;
var green = 124;
var blue = 125;

var setColorBtn = document.querySelector("button#setcolorbtn");

function updateStyleBtn(r, g, b) {
    setColorBtn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    setColorBtn.style.boxShadow = `rgba(${r}, ${g}, ${b}, 0.5) 2px 2px 2px`
}

sliderR.oninput = function () {
    red = Number(this.value);
    updateStyleBtn(red, green, blue)
};
sliderG.oninput = function () {
    green = Number(this.value);
    updateStyleBtn(red, green, blue)
};
sliderB.oninput = function () {
    blue = Number(this.value)
    updateStyleBtn(red, green, blue)
};

setColorBtn.onclick = function () {
    setColor(red, green, blue)
};
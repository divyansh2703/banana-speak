// var username = prompt("give me your name?")
// alert("this script is working" + username )
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler(){
    outputDiv.innerText = "ajajajaaj "+ txtInput.value
};
btnTranslate.addEventListener("click", clickHandler)
// console.log(btnTranslate)
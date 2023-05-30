// var username = prompt("give me your name?")
// alert("this script is working" + username )
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput)

function clickHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);
    
};
btnTranslate.addEventListener("click", clickHandler)
// console.log(btnTranslate)
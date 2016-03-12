/*Created by Miroslava Yaremenko on 06.03.2016.*/

"use strict";

function arrayCreation() {

    var input;
    var arr = new Array();
    var arrayBlock = document.getElementById("arrayBlock");
    var setButtonValue = document.getElementById("reset");

    fillingAnArray(input, arr);
    addArrayInDOM(arr, arrayBlock);
    displayArray(arr, setButtonValue);
}

var startIndex = 0;
var swapped = false;

function bubbleSortStep(){

    var values = document.getElementById("arrayBlock").childNodes;
    var vLength = values.length-1;

    clear();
    if(!swapped){
        startIndex = 0;
    }

    for(var i = startIndex; i < vLength; i++) {
        swapped=false;
        if (+values[i].innerHTML > +values[i+1].innerHTML) {
            startIndex = i;
            swapElements(values[i], values[i+1]);
            glowElements(values[i], values[i+1]);
            return;
        }
    }
}

function fillingAnArray(input, array){
    while (input !== null) {
        input = prompt("Please, enter a number value for array element.\n" +
            "If you want to stop filling the array, you should click 'cancel' button ", "");
        if (!isNaN(parseInt(input))) {
            array.push(parseInt(input));
        }
    }
}

function addArrayInDOM(array, blockForArray){
    for (var i = 0; i < array.length; i++) {
        var div = document.createElement("div");
        div.className = "box";
        div.innerHTML = array[i];
        blockForArray.appendChild(div);
    }
}

function displayArray(array, buttonValue){
    if (array.length > 0) {
        var container = document.getElementById("container");
        buttonValue.setAttribute("value","Reset");
        container.style.visibility = "visible";
    }
    else{
        var message = document.getElementsByTagName("h1")[0];
        message.innerHTML = "Sorry, You didn`t fill the array :(";
        message.style.visibility = "visible";
        buttonValue.setAttribute("value","Try again");
        buttonValue.style.visibility = "visible";
    }
}

function clear(){
    var values = document.getElementsByClassName("box");
    for(var j = 0; j < values.length; j++){
        values[j].classList.remove("glow");
    }
}

function swapElements(firstEl, secondEl){
    var temp = firstEl.innerHTML;
    firstEl.innerHTML = secondEl.innerHTML;
    secondEl.innerHTML = temp;
    swapped = true;
}

function glowElements(first, second){
    first.classList.add("glow");
    second.classList.add("glow");
}

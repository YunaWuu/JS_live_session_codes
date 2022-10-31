"use strict";

// global variable
const fruits = ["Apple", "apple", "Pear", "Grapes", "Banana"];

function doSort() {
    document.getElementById("ans").innerHTML = fruits.sort();
}

function doReverse() {
    document.getElementById("ans").innerHTML = fruits.reverse();
}

function doPop() {
    let str = "";
    if(fruits.length == 0)
    {
        str += "There is nothing left to pop!"
    }
       
    else
    {
    // removes an element from the end of an array
    let popped = fruits.pop();
    str += "Popped element: " + popped;
    str += "<br>Array now: " + fruits;
    } 

    document.getElementById("ans").innerHTML = str;
}

function doPush() {
    let str = "";
    let ele = document.getElementById("myTxt").value;
    ele = ele.trim(); // removes whitespace from both side of the string

    if(ele == "")
    {
        str += "You must enter an element to put on the array!"
        document.getElementById("myTxt").focus();
    }
    else
    {
    // push ele to end of the array
    fruits.push(ele);
    str += "New array: " + fruits;
    }

    document.getElementById("ans").innerHTML = str;
}

function doShift() {
    let str = "";

    if(fruits.length == 0)
    {
        str += "There is nothing left to shift!"
    }
    else
    {
        let shifted = fruits.shift();
        str += "Shifted element: " + shifted;
        str += "<br>Array now: " + fruits;
    }

    document.getElementById("ans").innerHTML = str;
}

function doUnshift() {
    let str = "";
    let ele = document.getElementById("myTxt").value;
    ele = ele.trim();

    if(ele == "")
    {
        str += "You must enter an element to put on the array!"
        document.getElementById("myTxt").focus();
    }
    else
    {
        fruits.unshift(ele);
        str += "New array: " + fruits;
    }

    document.getElementById("ans").innerHTML = str;
}
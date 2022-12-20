function add(a, b){
    return a + b;
}

var addFun = function (a, b){
    return a + b;
}

// max of 3 numbers
function max (a, b, c) {
    if (a > b) {
        if (a > c){
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c){
            return b;
        } else {
            return c;
        }
    }
}


function maxAge (a, b, c) {
    if (a.age > b.age) {
        if (a.age > c.age){
            return a;
        } else {
            return c;
        }
    } else {
        if (b.age > c.age){
            return b;
        } else {
            return c;
        }
    }
}

function maxLengthOfName (a, b, c) {
    if (a.name.length > b.name.length) {
        if (a.name.length > c.name.length){
            return a;
        } else {
            return c;
        }
    } else {
        if (b.name.length > c.name.length){
            return b;
        } else {
            return c;
        }
    }
}

// max of 3 items
let s1 = {name: "Qiao Li", age: 40}
let s2 = {name: "Jane Adsafasdfasdfa", age: 20}
let s3 = {name: "John", age: 30}

// compareFun(a,b) reutn 3 possible values
// + means a > b
// 0 means a == b
// - means a < b
function maxOfAnything (a, b, c, compareFun) {
    if (compareFun(a, b) > 0) {
        if (compareFun(a, c) > 0){
            return a;
        } else {
            return c;
        }
    } else {
        if (compareFun(a, b) ){
            return b;
        } else {
            return c;
        }
    }
}

maxofAnything(s1, s2, s3, function(x, y){
    return x.age - y.age;
})


// challenge yourself
let students = [
    {name: "Qiao Li", age: 40},
    {name: "Jane Adsafasdfasdfa", age: 20},
    {name: "John", age: 30}
    // ...
]

function maxInArray(array, compareFun){
    // your codes
}

// call the function
maxInArray(students, function(x, y){

    // return + / 0 / -
})
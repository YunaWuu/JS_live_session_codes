var todoList = [
    {title: "buy food 1 - Qiao", finished: true},
    {title: "buy food 2 - Mom", finished: false},
    {title: "buy food 3 - Jack", finished: false},
    {title: "buy food 4 - Jack", finished: true},
];

// filter is a callback function
function shortList(filter) {
    for(let i = 0; i < todoList.length; i++){
        let item = todoList[i];
        if(filter(item)) {
            console.log(item);
        }
    }
}

// case 1 - display finished items
console.log("case 1 - display finished items");
shortList(function (a) {
    return a.finished;
});

// case 2 - display unfinished items
console.log("case 2 - display unfinished items");
shortList(function (a) {
    return !a.finished;
});

// case 3 - display all items include the word "Jack"
console.log("case 3 - display all items include the word 'Jack'");
shortList(function (a) {
    return a.title.includes("Jack");
});

// case 4 - display all items include the word "Jack" and unfinished
console.log("case 4 - display all items include the word 'Jack' and unfinished");
shortList(function (a) {
    return (a.title.includes("Jack") && !a.finished);
});

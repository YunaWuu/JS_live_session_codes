"use strict";
// global variable
let todoList;

function createList() {
    let initData = [
        {"title" : "Go to Gymn", "finished" : false},
        {"title" : "Buy eggs", "finished" : true},
        {"title" : "Walk the dog", "finished" : false},
        {"title" : "Clean kitchen", "finished" : false},
        {"title" : "Cook dinner", "finished" : true},
        {"title" : "Read a book", "finished" : true}
    ];
    todoList = new TodoList("todo-item", initData);
}

function addItem() {
    let newTitle = prompt("Enter new item: ");
    todoList.add(newTitle);
}

function updateItem() {
    let num = prompt("Which item number do you wish to update?");
    num = parseInt(num);
    let newTitle = prompt("Enter new title: ");
    todoList.edit(num, newTitle);
}

function deleteItem() {
    let num = prompt("Which item number do you wish to delete?");
    num = parseInt(num);
    todoList.delete(num);
}
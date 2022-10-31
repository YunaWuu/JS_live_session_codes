class TodoList {
    constructor(rootId, itemArray)  // rootId - where to display, itemArray - array of items
    {
        this.rootId = rootId;
        this.itemArray = itemArray;
        this.refresh();
    }

    add(title) {
        // add a new item to the array
        this.itemArray.push(
            {"title": title, "finished": false}
        );
        this.refresh();
    }

    edit(index, newTitle) {
        // can add error checking
        if(index < 0 || index > this.itemArray.length - 1)
            alert("You can not edit an element that does not exist!")
        else
            this.itemArray[index].title = newTitle;
        this.refresh();
    }

    delete(index) {
        if(index < 0 || index > this.itemArray.length - 1)
            alert("You can not delete an element that does not exist!")
        else
            this.itemArray.splice(index, 1);
        this.refresh();
    }

    refresh() {
        let htmlString = this.todoListString(this.itemArray);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = htmlString;
    }

    todoListString() {
        let htmlStr = ``;
            // loop thru the array and process each element
            for (let item of this.itemArray)
                htmlStr += this.todoItemListStr(item.title, item.finished);
            return htmlStr;
    }

    todoItemListStr(title, finished) {
        return `<div class="todo-item ${finished? 'finished': 'unfinished'}">
            <span>${title}</span>
            <input type="checkbox" ${finished? "checked": ""} />
            </div>`; 
    }
}
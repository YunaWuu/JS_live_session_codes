"use strict"

        function listItemClick(item) {
            console.log(item.classList);
            item.classList.toggle("selected");
        }

        function selectNoneClick() {
            let allItems = document.getElementsByClassName("list-item");  // returns an array
            for(let item of allItems ) {
                item.classList.remove("selected");
            }
        }

        function selectAllClick() {
            let allItems = document.getElementsByClassName("list-item");  // returns an array
            for(let item of allItems ) {
                item.classList.add("selected");
            } 
        }
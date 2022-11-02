let initMovies = [
    {title: "The Shawshank Redemption", year: 1994},
    {title: "The Godfather", year: 1972},
    {title: "The Godfather: Part II", year: 1974},
    {title: "The Dark Knight", year: 2008}
];
let movieList = new MovieListClass("list", initMovies);

function searchClick() {
    // this returns 
    let formElements = document.getElementById("form-list-control").elements;
    // return just the value in the text box
    let text = document = formElements["search-string"].value;
    // call the function in the Class definition file
    movieList.search(text);
}

function aTozClick() {
    movieList.sortAtoZ();
}

function zToaClick() {
    movieList.sortZtoA();
}

function addClick() {
    let formElements = document.getElementById("form-add").elements;
    let title = formElements["title"].value;
    let year = formElements["year"].value;
    movieList.add(title, year);
    formElements["title"].value = "";
    formElements["year"].value = "";
}

function updateClick() {
    let formElements = document.getElementById("form-update").elements;
    let index = formElements["index"].value - 1;
    let title = formElements["title"].value;
    let year = formElements["year"].value;
    movieList.update(index, title, year);
    formElements["index"].value = "";
    formElements["title"].value = "";
    formElements["year"].value = "";
}

function deleteClick() {
    let formElements = document.getElementById("form-delete").elements;
    let index = formElements["index"].value - 1;
    movieList.delete(index);
    formElements["index"].value = "";
}
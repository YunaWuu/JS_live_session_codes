class MovieListClass{

    // define a constructor function
    constructor(rootId, movies) {
        this.rootId = rootId;
        this.movieList = movies;
        this.refresh();
    }

    search(nameString) {
        let shortList = [];  // store all the movies that have a similar name
        for(let movie of this.movieList) {
            if(movie.title.includes(nameString))
                shortList.push(movie);
        }
        // display all movies that are similar
        let elementString = this.movieListString(shortList);
        let rootElement = document.getElementById(this.rootId).innerHTML = elementString;
    }
 
    sortAtoZ() {
        this.movieList.sort(function(a,b){
            return a.title.localeCompare(b.title);
        });
        this.refresh();
    }

    sortZtoA() {
        this.movieList.sort(function(a,b){
            return b.title.localeCompare(a.title);
        });
        this.refresh();
    }

    add(title, year) {
        // add a new object to the array of movies
        this.movieList.push({"title" : title, "year" : year});
        this.refresh();
    }

    update(index, title, year) {
        this.movieList[index].title = title;
        this.movieList[index].year = year;
        this.refresh();
    }

    delete(index) {
        this.movieList.splice(index, 1);
        this.refresh();
    }

    movieListString(movies) {
        let html = ``;
        // loop through the list of movies
        for(let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            html += this.movieItemString(i+1, movie.title, movie.year); 
            // html += `<div class="row">${i+1}. ${movie.title}. (${movie.year})</div>`;   
        }
        return html;
    }

    // generating each row in the displayed list
    movieItemString(number, title, year) {
        return `<div class="row">${number}. ${title}. (${year})</div>`;
        // return "<div class='row'>" + number + ". " + title + " (" + year + ")</div>";
    }

    // refreshes the list when you change it
    refresh() {
        let elementString = this.movieListString(this.movieList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }
}
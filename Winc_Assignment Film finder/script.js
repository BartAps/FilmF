const movieTitles = movies.map(movie => {
    return movie.title;
});
// console.log(movieTitles);

const ul = document.querySelector('.info-movie');
const search = document.querySelector('.searchForm input');

let html = ``;

movies.forEach(function(movie){
    html += `<li>${movie.title}</li>`;
    html += `<li><img src=${movie.poster}></li>`;
});

ul.innerHTML = html;

// const latestMovies = movies.filter(movie => movie.year > 2013);
// const latestMovieTitles = latestMovies.map(movie => movie.title);
// console.log(latestMovieTitles);


// Search //

const form = document.querySelector('.searchForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.search.value);
});

const filterSearch = (term) => {
    Array.from(ul.children)
        .filter((film) => !film.textContent.toLowerCase().includes(term))
        .forEach((film) => film.classList.add('filtered'));

    Array.from(ul.children)
        .filter((film) => film.textContent.toLowerCase().includes(term))
        .forEach((film) => film.classList.remove('filtered'));
};


//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterSearch(term);
});


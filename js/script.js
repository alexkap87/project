const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

 const personalMovieDB = {
    count: numberOfFilms,
 movies: {},
 actors: {},
 genres:[],
privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('На колько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На колько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





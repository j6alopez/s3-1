// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( film => film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array
    .filter(film => film.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  const totalScore = moviesFromDirector.reduce((accumulator, film) => accumulator + film.score,0);
  return (totalScore === 0)
    ? 0
    : totalScore / moviesFromDirector.length
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  films = [...array];
  films.map (film => film.title);

  return films
  .map (film => film.title)
  .sort((filmOne, filmTwo) => compareTitles(filmOne, filmTwo))
  .slice(0,20);

  function compareTitles(filmOne, filmTwo) {
    const titleOne = filmOne.toUpperCase();
    const titleTwo = filmTwo.toUpperCase();

    if (titleOne < titleTwo) {
      return -1;
    }
    if (titleOne > titleTwo) {
      return 1;
    }
  
    return 0;

  }
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  array.sort(film => compareYears(filmOne.year, filmTwo.year))
  


  function compareYears(filmOneYear, filmTwoYear) {

    if (filmOneYear < filmTwoYear) {
      return -1;
    }
    if (filmOneYear > filmTwoYear) {
      return 1;
    }
  
    return 0;

  }
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

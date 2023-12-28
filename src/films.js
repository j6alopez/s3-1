// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((film) => film.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((film) => film.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  const totalScore = moviesFromDirector.reduce(
    (accumulator, film) => accumulator + film.score,
    0
  );
  return totalScore !== 0 ? totalScore / moviesFromDirector.length : 0;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  films = [...array];
  films.map((film) => film.title);

  return films
    .map((film) => film.title)
    .sort((filmOne, filmTwo) => compareTitles(filmOne, filmTwo))
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let films = [...array];
  return films.sort((filmOne, filmTwo) => {
    const yearsComparison = compareYears(filmOne.year, filmTwo.year);
    if (yearsComparison !== 0) {
      return yearsComparison;
    }
    return compareTitles(filmOne.title, filmTwo.title);
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const filteredFilms = array.filter((film) => film.genre.includes(category));
  const totalScore = filteredFilms.reduce(
    (accumulator, film) => accumulator + film.score,
    0
  );

  return totalScore !== 0 ? totalScore / filteredFilms.length : 0;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map((film) => {
    return {
      ...film,
      duration: calculateTotalMinutes(film.duration)
    };
  });

  function calculateTotalMinutes(duration) {
    const currentDuration = duration
      .replace('h', '')
      .replace('min', '')
      .split(' ');

    let hours = 0;
    let minutes = 0;
    if (currentDuration.length === 1) {
      hours = currentDuration;
    } else {
      [hours, minutes] = currentDuration;
    }

    hours = parseInt(hours);
    minutes = parseInt(minutes);

    const totalMinutes = hours * 60 + minutes;
    return totalMinutes;
  }
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestFilm = array
    .filter((film) => film.year === year)
    .reduce((maxFilmMovie, currentMovie) => {
      return currentMovie.score > maxFilmMovie.score
        ? currentMovie
        : maxFilmMovie;
    }, array[0]);
  
  return [bestFilm];
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
    bestFilmOfYear
  };
}

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

function compareYears(yearOne, yearTwo) {
  if (yearOne < yearTwo) {
    return -1;
  }
  if (yearOne > yearTwo) {
    return 1;
  }

  return 0;
}

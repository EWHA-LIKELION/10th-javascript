const APIKEY = '6172371aaf5ad0cbd467b315bf13cb63';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};
const popularURL =
  'https://api.themoviedb.org/3/movie/popular?api_key=' +
  APIKEY +
  '&language=en-US&page=1';
const now_playingURL =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
  APIKEY +
  '&language=en-US&page=1';
const topURL =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
  APIKEY +
  '&language=en-US&page=1';
const upcomingURL =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=' +
  APIKEY +
  '&language=en-US&page=1';
const now_playing = document.getElementById('now-playing');
const toprated = document.getElementById('top-rated');
const upcoming = document.getElementById('upcoming');
const popular = document.getElementById('popular');
fetch(now_playingURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.title);

      let movie = document.createElement('li');
      let moviediv = document.createElement('div');
      let backdrop = document.createElement('img');
      backdrop.setAttribute('src', IMAGE_URL + element.backdrop_path);
      let title = document.createElement('h4');
      title.innerText = element.title;
      let rate = document.createTextNode('span');
      rate.innerText = '★' + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      now_playing.appendChild(movie);
    });
  });
fetch(popularURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.title);

      let movie = document.createElement('li');
      let moviediv = document.createElement('div');
      let backdrop = document.createElement('img');
      backdrop.setAttribute('src', IMAGE_URL + element.backdrop_path);
      let title = document.createElement('h4');
      title.innerText = element.title;
      let rate = document.createTextNode('span');
      rate.innerText = '★' + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      popular.appendChild(movie);
    });
  });
fetch(topURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.title);

      let movie = document.createElement('li');
      let moviediv = document.createElement('div');
      let backdrop = document.createElement('img');
      backdrop.setAttribute('src', IMAGE_URL + element.backdrop_path);
      let title = document.createElement('h4');
      title.innerText = element.title;
      let rate = document.createTextNode('span');
      rate.innerText = '★' + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      toprated.appendChild(movie);
    });
  });
fetch(upcomingURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.title);

      let movie = document.createElement('li');
      let moviediv = document.createElement('div');
      let backdrop = document.createElement('img');
      backdrop.setAttribute('src', IMAGE_URL + element.backdrop_path);
      let title = document.createElement('h4');
      title.innerText = element.title;
      let rate = document.createTextNode('span');
      rate.innerText = '★' + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      upcoming.appendChild(movie);
    });
  });

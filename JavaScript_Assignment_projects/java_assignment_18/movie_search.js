const apiKey = "d5879cf9"; // Your API Key
const searchForm = document.getElementById('search-form');
const movieTitleInput = document.getElementById('movie-title');
const yearFilterInput = document.getElementById('year-filter');
const movieListDiv = document.getElementById('movie-list');
const loadingDiv = document.getElementById('loading');

async function fetchMovies(title, year = "") {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}${year ? "&y=" + year : ""}`;
  try {
    // Show loading indicator
    loadingDiv.style.display = 'block';

    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      showError(data.Error);
    }
  } catch (error) {
    showError("An error occurred while fetching data.");
  } finally {
    // Hide loading indicator
    loadingDiv.style.display = 'none';
  }
}

function displayMovies(movies) {
  movieListDiv.innerHTML = ''; // Clear previous results

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.innerHTML = `
      <h3>${movie.Title} (${movie.Year})</h3>
      <p>IMDb Rating: ${movie.imdbRating}</p>
      <img src="${movie.Poster}" alt="${movie.Title} Poster" style="width: 100px;">
    `;
    movieListDiv.appendChild(movieElement);
  });
}

function showError(error) {
  movieListDiv.innerHTML = `<p style="color: red;">${error}</p>`;
}

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const title = movieTitleInput.value;
  const year = yearFilterInput.value;

  fetchMovies(title, year);
});

// Fetch movie data from the JSON file
fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const movies = data;  // Store the movie data

    // Function to display all movies
    function displayMovies(moviesToDisplay) {
      const movieList = document.getElementById('movie-list');
      movieList.innerHTML = '';  // Clear previous movie list

      moviesToDisplay.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
          <h3>${movie.title}</h3>
          <p><strong>Director:</strong> ${movie.director}</p>
          <p><strong>Release Date:</strong> ${movie.release_date}</p>
        `;
        movieList.appendChild(movieDiv);
      });
    }

    // Initially display all movies when the page loads
    displayMovies(movies);

    // Function to search for a movie by title
    function searchMovie() {
      const searchTerm = document.getElementById('search-bar').value.toLowerCase(); // Get the input value
      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
      displayMovies(filteredMovies); // Update the displayed movies based on the search
    }

    // Attach the searchMovie function to the search button
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', searchMovie);

    // You can also add the search functionality to the input field (optional)
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', searchMovie);

  })
  .catch(err => {
    console.log('Error fetching movie data:', err);
  });

const apiKey = "api_key=0f5c3f0277f545b85f85d9aa8a0ef6df";
const baseURL = "https://api.themoviedb.org/3";
const imageURL = "https://image.tmdb.org/t/p/w500/";
let latestShows = "/tv/top_rated?";
let latestMovies = "/movie/popular?";
let url = baseURL + latestShows + apiKey;
let MovieUrl = baseURL + latestMovies + apiKey;
const shows = document.querySelector(".shows");
const movies = document.querySelector(".movies");
const form = document.querySelector("#search-form");
const search = document.querySelector("#search");
const searchBase = baseURL + "/search/tv?" + apiKey + "&query=";
const mainContent = document.querySelector("#main-content");

// // LATEST TV SHOWS
getLatestShows(url);

function getLatestShows(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);

      displayShows(data.results);
    });
}

function displayShows(data) {
  shows.innerHTML = "";

  data.forEach((show) => {
    const showEl = document.createElement("div");
    showEl.classList.add("col", "show");
    const { name, poster_path, vote_average, first_air_date } = show;
    showEl.innerHTML = `

    <div class="card h-100 bg-primary">
                <span class="show-rating badge bg-primary position-absolute end-0 fs-5 rounded-start"><i class="fas fa-star fs-6 pe-2 text-warning"></i>${vote_average}</span>
                <img src="${imageURL}${poster_path}" class="card-img-top h-100" alt="${name}">
                <div class="card-body p-1 py-2">
                  <h5 class="card-title m-0 fw-lighter">${name}</h5>
                </div>
                <div class="card-footer p-1">
                  <small class="text-muted year">${first_air_date}</small>
                </div>
              </div>

`;
    shows.appendChild(showEl);
  });
}

// LATEST MOVIES
getLatestMovies(MovieUrl);

function getLatestMovies(MovieUrl) {
  fetch(MovieUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);

      displayMovies(data.results);
    });
}

function displayMovies(data) {
  movies.innerHTML = "";

  data.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("col", "movie");
    const { original_title, poster_path, vote_average, release_date } = movie;
    movieEl.innerHTML = `

    <div class="card h-100 bg-primary">
                <span class="badge bg-primary position-absolute end-0 fs-5 rounded-start"><i class="fas fa-star fs-6 pe-2 text-warning"></i>${vote_average}</span>
                <img src="${imageURL}${poster_path}" class="card-img-top" alt="${original_title}">
                <div class="card-body p-1 py-2">
                  <h5 class="card-title m-0">${original_title}</h5>
                </div>
                <div class="card-footer p-1">
                  <small class="text-muted year">${release_date}</small>
                </div>
              </div>

`;
    movies.appendChild(movieEl);
  });
}

// BACK TO TOP BUTTON
const backtoTop = document.querySelector("#to-top");
window.onload = (e) => {
  backtoTop.style.display = "none";
};
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 200) {
    backtoTop.style.display = "block";
  } else {
    backtoTop.style.display = "none";
  }
}

// GET SEARCH RESULTS

function getSearchResults(searchURL) {
  fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      displayResults(data.results);
    });
}

function displayResults(data) {
  mainContent.innerHTML = "";

  // ADDING SEARCH CONTENT
  let searchContent = document.createElement("div");
  searchContent.classList.add("container-fluid", "text-white");
  searchContent.innerHTML = `
  <h4 class="heading mb-5">Search Result for: <strong>Searched Text</strong></h4>
  `;

  data.forEach((result) => {
    const searchEl = document.createElement("div");
    const searchGrid = document.createElement("div");
    searchGrid.classList.add(
      "row",
      "row-cols-2",
      "row-cols-md-5",
      "row-cols-sm-4",
      "g-2",
      "g-md-4",
      "mx-1",
      "mx-md-3",
      "search-content"
    );
    searchEl.classList.add("col", "result");
    const { name, poster_path, vote_average, first_air_date } = result;
    searchEl.innerHTML = `
    
    <div class="card h-100 bg-primary">
                <span class="show-rating badge bg-primary position-absolute end-0 fs-5 rounded-start"><i class="fas fa-star fs-6 pe-2 text-warning"></i>${vote_average}</span>
                <img src="${imageURL}${poster_path}" class="card-img-top h-100" alt="${name}">
                <div class="card-body p-1 py-2">
                  <h5 class="card-title m-0 fw-lighter">${name}</h5>
                </div>
                <div class="card-footer p-1">
                  <small class="text-muted year">${first_air_date}</small>
                </div>
              </div>

`;
    mainContent.appendChild(searchGrid);
    searchGrid.appendChild(searchEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  console.log(searchTerm);

  if (searchTerm) {
    let searchURL = `${searchBase}${searchTerm}`;
    console.log(searchURL);
    getSearchResults(searchURL);
  }
});

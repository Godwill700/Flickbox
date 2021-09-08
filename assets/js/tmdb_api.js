// TMDB API KEY
const apiKey = "api_key=0f5c3f0277f545b85f85d9aa8a0ef6df";
const baseURL = "https://image.tmdb.org/t/p/w500/";
// https://image.tmdb.org/t/p/w500/clDFqATL4zcE7LzUwkrVj3zHvk7.jpg
let requestOptions = {
  method: "GET",
  redirect: "follow",
};

// HERO FEATURED
const api =
  "https://api.themoviedb.org/3/trending/all/day?api_key=0f5c3f0277f545b85f85d9aa8a0ef6df";
fetch(api, requestOptions)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // HERO 1
    let heroImage1 = document.querySelector("#hero-image-1");
    let heroTitle1 = document.querySelector("#hero-title-1");
    let heroOverview1 = document.querySelector("#hero-overview-1");
    heroIdNumber1 = Math.floor(Math.random() * 20);
    let heroId1 = data.results[heroIdNumber1];

    console.log(data.results);
    console.log(data.results[heroIdNumber1]);
    heroImage1.src = `${baseURL}${heroId1.poster_path}`;
    heroTitle1.innerHTML = heroId1.original_title;
    heroOverview1.innerHTML = heroId1.overview;

    // HERO 2
    let heroImage2 = document.querySelector("#hero-image-2");
    let heroTitle2 = document.querySelector("#hero-title-2");
    let heroOverview2 = document.querySelector("#hero-overview-2");
    heroIdNumber2 = Math.floor(Math.random() * 20);
    let heroId2 = data.results[heroIdNumber2];

    heroImage2.src = `${baseURL}${heroId2.poster_path}`;
    heroTitle2.innerHTML = heroId2.original_title;
    heroOverview2.innerHTML = heroId2.overview;

    // HERO 3
    let heroImage3 = document.querySelector("#hero-image-3");
    let heroTitle3 = document.querySelector("#hero-title-3");
    let heroOverview3 = document.querySelector("#hero-overview-3");
    heroIdNumber3 = Math.floor(Math.random() * 20);
    let heroId3 = data.results[heroIdNumber3];

    console.log(data.results);
    heroImage3.src = `${baseURL}${heroId3.poster_path}`;
    heroTitle3.innerHTML = heroId3.original_title;
    heroOverview3.innerHTML = heroId3.overview;

    // HERO 4
    let heroImage4 = document.querySelector("#hero-image-4");
    let heroTitle4 = document.querySelector("#hero-title-4");
    let heroOverview4 = document.querySelector("#hero-overview-4");
    heroIdNumber4 = Math.floor(Math.random() * 20);
    let heroId4 = data.results[heroIdNumber4];

    heroImage4.src = `${baseURL}${heroId4.poster_path}`;
    heroTitle4.innerHTML = heroId4.original_title;
    heroOverview4.innerHTML = heroId4.overview;
  })
  .catch((error) => console.log("error", error));

// TOP RATED TV SHOWS
// const api = "https://api.themoviedb.org/3/tv/top_rated?api_key=0f5c3f0277f545b85f85d9aa8a0ef6df&language=en-US&page=2"

// DISCOVER Top TV SHOWS API
let topTV = "Top250TVs";

// const api = "https://api.themoviedb.org/3/tv/top_rated?api_key=0f5c3f0277f545b85f85d9aa8a0ef6df&language=en-US&page=1";
// fetch(api, requestOptions)
//   .then((response) => response.json())
//   .then((data) => console.log(data.results[3]))
//   .catch((error) => console.log("error", error));

//   {
//     //   DEFINE SHOW ID 1
//     // console.log(data);
//     let showRating1 = document.querySelector("#show-rating-1");
//     let showImage1 = document.querySelector("#show-image-1");
//     let showTitle1 = document.querySelector("#show-title-1");
//     let showYear1 = document.querySelector("#show-year-1");
//     showIdNumber = Math.floor(Math.random() * 250) + 1;
//     let showId = data.items[showIdNumber];

//     // INSERT DATA
//     showRating1.innerHTML = showId.imDbRating;
//     showImage1.src = showId.image;
//     showTitle1.innerHTML = showId.title;
//     showYear1.innerHTML = showId.year;

//     //   DEFINE SHOW ID 2
//     let showRating2 = document.querySelector("#show-rating-2");
//     let showImage2 = document.querySelector("#show-image-2");
//     let showTitle2 = document.querySelector("#show-title-2");
//     let showYear2 = document.querySelector("#show-year-2");
//     showIdNumber2 = Math.floor(Math.random() * 250);
//     let showId2 = data.items[showIdNumber2];

//     showRating2.innerHTML = showId2.imDbRating;
//     showImage2.src = showId2.image;
//     showTitle2.innerHTML = showId2.title;
//     showYear2.innerHTML = showId2.year;

//     //   DEFINE SHOW ID 3
//     let showRating3 = document.querySelector("#show-rating-3");
//     let showImage3 = document.querySelector("#show-image-3");
//     let showTitle3 = document.querySelector("#show-title-3");
//     let showYear3 = document.querySelector("#show-year-3");
//     showIdNumber3 = Math.floor(Math.random() * 250);
//     let showId3 = data.items[showIdNumber3];

//     showRating3.innerHTML = showId3.imDbRating;
//     showImage3.src = showId3.image;
//     showTitle3.innerHTML = showId3.title;
//     showYear3.innerHTML = showId3.year;

//     //   DEFINE SHOW ID 4
//     let showRating4 = document.querySelector("#show-rating-4");
//     let showImage4 = document.querySelector("#show-image-4");
//     let showTitle4 = document.querySelector("#show-title-4");
//     let showYear4 = document.querySelector("#show-year-4");
//     showIdNumber4 = Math.floor(Math.random() * 250);
//     let showId4 = data.items[showIdNumber4];

//     showRating4.innerHTML = showId4.imDbRating;
//     showImage4.src = showId4.image;
//     showTitle4.innerHTML = showId4.title;
//     showYear4.innerHTML = showId4.year;

//     //   DEFINE SHOW ID 5
//     let showRating5 = document.querySelector("#show-rating-5");
//     let showImage5 = document.querySelector("#show-image-5");
//     let showTitle5 = document.querySelector("#show-title-5");
//     let showYear5 = document.querySelector("#show-year-5");
//     showIdNumber5 = Math.floor(Math.random() * 250);
//     let showId5 = data.items[showIdNumber5];

//     showRating5.innerHTML = showId5.imDbRating;
//     showImage5.src = showId5.image;
//     showTitle5.innerHTML = showId5.title;
//     showYear5.innerHTML = showId5.year;
//   })

// console.log(showIdNumber);

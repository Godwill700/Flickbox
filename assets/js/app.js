const apiKey = "pk_vv57m4wjiqmzbsx93";
let requestOptions = {
  method: "GET",
  redirect: "follow",
};

// HERO FEATURED MOVIES

// DISCOVER Top TV SHOWS API
let topTV = "Top250TVs";

// const api = `https://imdb-api.com/API/${topTV}/${apiKey}`;
fetch(api, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    //   DEFINE SHOW ID 1
    // console.log(data);
    let showRating1 = document.querySelector("#show-rating-1");
    let showImage1 = document.querySelector("#show-image-1");
    let showTitle1 = document.querySelector("#show-title-1");
    let showYear1 = document.querySelector("#show-year-1");
    showIdNumber = Math.floor(Math.random() * 250);
    let showId = data.items[showIdNumber];

    // INSERT DATA
    showRating1.innerHTML = showId.imDbRating;
    showImage1.src = showId.image;
    showTitle1.innerHTML = showId.title;
    showYear1.innerHTML = showId.year;

    //   DEFINE SHOW ID 2
    let showRating2 = document.querySelector("#show-rating-2");
    let showImage2 = document.querySelector("#show-image-2");
    let showTitle2 = document.querySelector("#show-title-2");
    let showYear2 = document.querySelector("#show-year-2");
    showIdNumber2 = Math.floor(Math.random() * 250);
    let showId2 = data.items[showIdNumber2];

    showRating2.innerHTML = showId2.imDbRating;
    showImage2.src = showId2.image;
    showTitle2.innerHTML = showId2.title;
    showYear2.innerHTML = showId2.year;

    //   DEFINE SHOW ID 3
    let showRating3 = document.querySelector("#show-rating-3");
    let showImage3 = document.querySelector("#show-image-3");
    let showTitle3 = document.querySelector("#show-title-3");
    let showYear3 = document.querySelector("#show-year-3");
    showIdNumber3 = Math.floor(Math.random() * 250);
    let showId3 = data.items[showIdNumber3];

    showRating3.innerHTML = showId3.imDbRating;
    showImage3.src = showId3.image;
    showTitle3.innerHTML = showId3.title;
    showYear3.innerHTML = showId3.year;

    //   DEFINE SHOW ID 4
    let showRating4 = document.querySelector("#show-rating-4");
    let showImage4 = document.querySelector("#show-image-4");
    let showTitle4 = document.querySelector("#show-title-4");
    let showYear4 = document.querySelector("#show-year-4");
    showIdNumber4 = Math.floor(Math.random() * 250);
    let showId4 = data.items[showIdNumber4];

    showRating4.innerHTML = showId4.imDbRating;
    showImage4.src = showId4.image;
    showTitle4.innerHTML = showId4.title;
    showYear4.innerHTML = showId4.year;

    //   DEFINE SHOW ID 5
    let showRating5 = document.querySelector("#show-rating-5");
    let showImage5 = document.querySelector("#show-image-5");
    let showTitle5 = document.querySelector("#show-title-5");
    let showYear5 = document.querySelector("#show-year-5");
    showIdNumber5 = Math.floor(Math.random() * 250);
    let showId5 = data.items[showIdNumber5];

    showRating5.innerHTML = showId5.imDbRating;
    showImage5.src = showId5.image;
    showTitle5.innerHTML = showId5.title;
    showYear5.innerHTML = showId5.year;
  })
  .catch((error) => console.log("error", error));

// console.log(showIdNumber);

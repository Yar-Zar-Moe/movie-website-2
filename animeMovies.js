
    /* anime Movies*/
    let PagesBtn = document.querySelectorAll(".pageSwichter")
    let currentPage = document.getElementById("currentPage");
    let totalPage = document.getElementById("totalPage");   

    let AnimeMovieArray = AnimeMovieAndSeriesArray.filter((movie) =>{
        return movie.animetype.toLowerCase().includes("movie");
      })

    let animemoviesslide1 = document.getElementById("anime-movies-slide-1");
    let animemoviesslide2 = document.getElementById("anime-movies-slide-2");
    let animemoviesslide3 = document.getElementById("anime-movies-slide-3");
    let animemoviesslide4 = document.getElementById("anime-movies-slide-4");
    let paginationSlide = document.getElementById("moviepagination");
    let AnimeSeriesCarousel = document.getElementById("anime-series-carousel");
    let TOTALPAGE = document.getElementById("TOTALPAGE");

    if(AnimeMovieArray.length > 20){
      TOTALPAGE.innerHTML = 2;
      paginationSlide.innerHTML += `
      <button class="my-page-item btn btn-outline-warning m-1" id="button2">1</button>
      <button class="my-page-item btn btn-outline-warning m-1" id="button2">2</button>`
    }
    
    if(AnimeMovieArray.length > 40){
      TOTALPAGE.innerHTML = 3;
      paginationSlide.innerHTML += `
      <button class="my-page-item btn btn-outline-warning m-1">3</button>`
    }
    
    if(AnimeMovieArray.length > 60){
      TOTALPAGE.innerHTML = 4;
      paginationSlide.innerHTML += `
      <button class="my-page-item btn btn-outline-warning m-1">4</button>`
    }
  
    if(AnimeMovieArray.length > 80){
      TOTALPAGE.innerHTML = 5;
      paginationSlide.innerHTML += `
      <button class="my-page-item btn btn-outline-warning m-1">5</button>`
    }

    let SwitchBtn = document.querySelectorAll(".my-page-item");
    let CURRENTPAGE = document.getElementById("CURRENTPAGE");
  
    SwitchBtn.forEach(item => {
      item.addEventListener("click", (event)=>{
        let ClickBtn = event.target.innerHTML;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        CURRENTPAGE.innerHTML = ClickBtn;
        if(ClickBtn == "1"){
          AnimeSeriesCarousel.style.left = "0";
        }
        if(ClickBtn == "2"){
          AnimeSeriesCarousel.style.left = "-100" + "vw";
        }
        if(ClickBtn == "3"){
          AnimeSeriesCarousel.style.left = "-200vw";
        }
        if(ClickBtn == "4"){
          AnimeSeriesCarousel.style.left = "-300vw";
        }
      })
    })
    
    for (let i = 0; i < 20; i++) {
      const Source = AnimeMovieArray[i].Source;
      const Name = AnimeMovieArray[i].name;
      const Year = AnimeMovieArray[i].year;
      const Href = AnimeMovieArray[i].href;
      let animeType = AnimeMovieArray[i].animetype;
      let sub = AnimeMovieArray[i].sub;
      let rating = AnimeMovieArray[i].rating;
        ResultDiv = `
        <div class="col-6 col-sm-4 col-md-4 col-lg-3">
        <a href="${Href}" class="text-decoration-none" target="_blank">
          <div class="card bg-black text-warning overflow-hidden  rounded-0 border border-1 border-dark">
              <div class="position-relative">
                <img src="${Source}" class="card-img-top">
                  <div id="Rating" class="position-absolute bottom-0 pe-3 ps-1">
                     <ion-icon style="font-size: 16px;" name="star"></ion-icon><span class="ms-1">${rating}</span>
                  </div>
                  <div id="overlay" class="overlay">
                     <ion-icon size="large" name="play-circle-outline"></ion-icon>
                  </div>
              </div>
          <span class="badge bg-warning text-black position-absolute m-lg-1 m-md-1">${animeType}</span>
          <span class="badge bg-warning text-dark position-absolute bot end-0 m-lg-1 m-md-1">${sub}</span>        
            <div class="d-flex justify-content-between flex-column p-2 text-center">
                <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                <h6>(${Year})</h6>
            </div>
        </div>
        </a>
   </div>`
      
      animemoviesslide1.innerHTML += ResultDiv;
      

}


for (let i = 20; i < 40; i++) {
const Source = AnimeMovieArray[i].Source;
const Name = AnimeMovieArray[i].name;
const Year = AnimeMovieArray[i].year;
const Href = AnimeMovieArray[i].href;
let animeType = AnimeMovieArray[i].animetype;
let sub = AnimeMovieArray[i].sub;
let rating = AnimeMovieArray[i].rating;
ResultDiv = `
<div class="col-6 col-sm-4 col-md-4 col-lg-3">
<a href="${Href}" class="text-decoration-none" target="_blank">
<div class="card bg-black text-warning overflow-hidden  rounded-0 border border-1 border-dark">
    <div class="position-relative">
      <img src="${Source}" class="card-img-top">
        <div id="Rating" class="position-absolute bottom-0 pe-3 ps-1">
           <ion-icon style="font-size: 16px;" name="star"></ion-icon><span class="ms-1">${rating}</span>
        </div>
        <div id="overlay" class="overlay">
           <ion-icon size="large" name="play-circle-outline"></ion-icon>
        </div>
    </div>
<span class="badge bg-warning text-black position-absolute m-lg-1 m-md-1">${animeType}</span>
<span class="badge bg-warning text-dark position-absolute bot end-0 m-lg-1 m-md-1">${sub}</span>        
  <div class="d-flex justify-content-between flex-column p-2 text-center">
      <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
      <h6>(${Year})</h6>
  </div>
</div>
</a>
</div>`

animemoviesslide2.innerHTML += ResultDiv;


}

for (let i = 40; i < 60; i++) {
const Source = AnimeMovieArray[i].Source;
const Name = AnimeMovieArray[i].name;
const Year = AnimeMovieArray[i].year;
const Href = AnimeMovieArray[i].href;
let animeType = AnimeMovieArray[i].animetype;
let sub = AnimeMovieArray[i].sub;
let rating = AnimeMovieArray[i].rating;
ResultDiv = `
<div class="col-6 col-sm-4 col-md-4 col-lg-3">
<a href="${Href}" class="text-decoration-none" target="_blank">
<div class="card bg-black text-warning overflow-hidden  rounded-0 border border-1 border-dark">
    <div class="position-relative">
      <img src="${Source}" class="card-img-top">
        <div id="Rating" class="position-absolute bottom-0 pe-3 ps-1">
           <ion-icon style="font-size: 16px;" name="star"></ion-icon><span class="ms-1">${rating}</span>
        </div>
        <div id="overlay" class="overlay">
           <ion-icon size="large" name="play-circle-outline"></ion-icon>
        </div>
    </div>
<span class="badge bg-warning text-black position-absolute m-lg-1 m-md-1">${animeType}</span>
<span class="badge bg-warning text-dark position-absolute bot end-0 m-lg-1 m-md-1">${sub}</span>        
  <div class="d-flex justify-content-between flex-column p-2 text-center">
      <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
      <h6>(${Year})</h6>
  </div>
</div>
</a>
</div>`

animemoviesslide3.innerHTML += ResultDiv;


}

for (let i = 60; i < 80; i++) {
const Source = AnimeMovieArray[i].Source;
const Name = AnimeMovieArray[i].name;
const Year = AnimeMovieArray[i].year;
const Href = AnimeMovieArray[i].href;
let animeType = AnimeMovieArray[i].animetype;
let sub = AnimeMovieArray[i].sub;
let rating = AnimeMovieArray[i].rating;
ResultDiv = `
<div class="col-6 col-sm-4 col-md-4 col-lg-3">
<a href="${Href}" class="text-decoration-none" target="_blank">
<div class="card bg-black text-warning overflow-hidden  rounded-0 border border-1 border-dark">
    <div class="position-relative">
      <img src="${Source}" class="card-img-top">
        <div id="Rating" class="position-absolute bottom-0 pe-3 ps-1">
           <ion-icon style="font-size: 16px;" name="star"></ion-icon><span class="ms-1">${rating}</span>
        </div>
        <div id="overlay" class="overlay">
           <ion-icon size="large" name="play-circle-outline"></ion-icon>
        </div>
    </div>
<span class="badge bg-warning text-black position-absolute m-lg-1 m-md-1">${animeType}</span>
<span class="badge bg-warning text-dark position-absolute bot end-0 m-lg-1 m-md-1">${sub}</span>        
  <div class="d-flex justify-content-between flex-column p-2 text-center">
      <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
      <h6>(${Year})</h6>
  </div>
</div>
</a>
</div>`

animemoviesslide4.innerHTML += ResultDiv;


}
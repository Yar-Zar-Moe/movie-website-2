let oldbutgoldanimecards1 = document.getElementById("oldbutgold-anime-slide-1");
let oldbutgoldanimecards2 = document.getElementById("oldbutgold-anime-slide-2");
let oldbutgoldanimecards3 = document.getElementById("oldbutgold-anime-slide-3");
let oldbutgoldanimecards4 = document.getElementById("oldbutgold-anime-slide-4");
let oldbutgoldpagination = document.getElementById("oldbutgoldpagination");
let AnimeSeriesCarousel = document.getElementById("anime-series-carousel");
let oldbutgoldTOTALPAGE = document.getElementById("oldbutgoldTOTALPAGE");

let oldbutgoldanime = AnimeMovieAndSeriesArray.filter((movie) =>{
  return movie.year < 2010;
})
  
if(oldbutgoldanime.length > 20){
  oldbutgoldTOTALPAGE.innerHTML = 2;
  oldbutgoldpagination.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1" id="button2">1</button>
  <button class="my-page-item btn btn-outline-warning m-1" id="button2">2</button>`
}

if(oldbutgoldanime.length > 40){
  oldbutgoldTOTALPAGE.innerHTML = 3;
  oldbutgoldpagination.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1">3</button>`
}

if(oldbutgoldanime.length > 60){
  oldbutgoldTOTALPAGE.innerHTML = 4;
  oldbutgoldpagination.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1">4</button>`
}

if(oldbutgoldanime.length > 80){
  oldbutgoldTOTALPAGE.innerHTML = 5;
  oldbutgoldpagination.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1">5</button>`
}

let SwitchBtn = document.querySelectorAll(".my-page-item");
let oldbutgoldCURRENTPAGE = document.getElementById("oldbutgoldCURRENTPAGE");

SwitchBtn.forEach(item => {
  item.addEventListener("click", (event)=>{
    let ClickBtn = event.target.innerHTML;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    oldbutgoldCURRENTPAGE.innerHTML = ClickBtn;  
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
  const Source = oldbutgoldanime[i].Source;
  const Name = oldbutgoldanime[i].name;
  const Year = oldbutgoldanime[i].year;
  const Href = oldbutgoldanime[i].href;
  let animeType = oldbutgoldanime[i].animetype;
  let sub = oldbutgoldanime[i].sub;
  let rating = oldbutgoldanime[i].rating;
    ResultDiv = `
    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <a href="${Href}" class="text-decoration-none" target="_blank">
      <div class="card bg-black text-warning overflow-hidden rounded-0 border border-1 border-dark">
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
oldbutgoldanimecards1.innerHTML += ResultDiv;
}

for (let i = 20; i < 40; i++) {
  const Source = oldbutgoldanime[i].Source;
  const Name = oldbutgoldanime[i].name;
  const Year = oldbutgoldanime[i].year;
  const Href = oldbutgoldanime[i].href;
  let animeType = oldbutgoldanime[i].animetype;
  let sub = oldbutgoldanime[i].sub;
  let rating = oldbutgoldanime[i].rating;
    ResultDiv = `
    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <a href="${Href}" class="text-decoration-none" target="_blank">
      <div class="card bg-black text-warning overflow-hidden rounded-0 border border-1 border-dark">
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
oldbutgoldanimecards2.innerHTML += ResultDiv;
}

for (let i = 40; i < 60; i++) {
  const Source = oldbutgoldanime[i].Source;
  const Name = oldbutgoldanime[i].name;
  const Year = oldbutgoldanime[i].year;
  const Href = oldbutgoldanime[i].href;
  let animeType = oldbutgoldanime[i].animetype;
  let sub = oldbutgoldanime[i].sub;
  let rating = oldbutgoldanime[i].rating;
    ResultDiv = `
    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <a href="${Href}" class="text-decoration-none" target="_blank">
      <div class="card bg-black text-warning overflow-hidden rounded-0 border border-1 border-dark">
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
oldbutgoldanimecards3.innerHTML += ResultDiv;
}

for (let i = 60; i < 80; i++) {
  const Source = oldbutgoldanime[i].Source;
  const Name = oldbutgoldanime[i].name;
  const Year = oldbutgoldanime[i].year;
  const Href = oldbutgoldanime[i].href;
  let animeType = oldbutgoldanime[i].animetype;
  let sub = oldbutgoldanime[i].sub;
  let rating = oldbutgoldanime[i].rating;
    ResultDiv = `
    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <a href="${Href}" class="text-decoration-none" target="_blank">
      <div class="card bg-black text-warning overflow-hidden rounded-0 border border-1 border-dark">
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
oldbutgoldanimecards4.innerHTML += ResultDiv;
}
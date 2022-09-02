

  /*anime series*/
  let SeriesBtn = document.getElementById("SeriesBtn");
  let AnimeSlideSeries = AnimeMovieAndSeriesArray.filter((movie) =>{
    return movie.sugget.toLowerCase().includes("yes");
  })
  
  AnimeSlideSeries.sort((a,b) => a.year - b.year);
  
  let animeseriesslide1 = document.getElementById("anime-series-slide-1");
  let animeseriesslide2 = document.getElementById("anime-series-slide-2");
  let animeseriesslide3 = document.getElementById("anime-series-slide-3");
  let animeseriesslide4 = document.getElementById("anime-series-slide-4");
  let SeriesPagination = document.getElementById("seriespagination");
  let AnimeSeriesCarousel = document.getElementById("anime-series-carousel");
  let suggestTOTALPAGE = document.getElementById("suggestTOTALPAGE");
  
  if(AnimeSlideSeries.length > 20){
    suggestTOTALPAGE.innerHTML = 2;
    SeriesPagination.innerHTML += `
    <button class="my-page-item btn btn-outline-warning m-1" id="button2">1</button>
    <button class="my-page-item btn btn-outline-warning m-1" id="button2">2</button>`
  }
  
  if(AnimeSlideSeries.length > 40){
    suggestTOTALPAGE.innerHTML = 3;
    SeriesPagination.innerHTML += `
    <button class="my-page-item btn btn-outline-warning m-1">3</button>`
  }
  
  if(AnimeSlideSeries.length > 60){
    suggestTOTALPAGE.innerHTML = 4;
    SeriesPagination.innerHTML += `
    <button class="my-page-item btn btn-outline-warning m-1">4</button>`
  }

  if(AnimeSlideSeries.length > 80){
    suggestTOTALPAGE.innerHTML = 5;
    SeriesPagination.innerHTML += `
    <button class="my-page-item btn btn-outline-warning m-1">5</button>`
  }

  let SwitchBtn = document.querySelectorAll(".my-page-item");
  let suggestCURRENTPAGE = document.getElementById("suggestCURRENTPAGE");

  SwitchBtn.forEach(item => {
    item.addEventListener("click", (event)=>{
      let ClickBtn = event.target.innerHTML;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      suggestCURRENTPAGE.innerHTML = ClickBtn;
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
              const Source = AnimeSlideSeries[i].Source;
              const Name = AnimeSlideSeries[i].name;
              const Year = AnimeSlideSeries[i].year;
              const Href = AnimeSlideSeries[i].href;
              let animeType = AnimeSlideSeries[i].animetype;
              let sub = AnimeSlideSeries[i].sub;
              let rating = AnimeSlideSeries[i].rating;
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
              
              animeseriesslide1.innerHTML += ResultDiv;
              
    
  }
  
  
  for (let i = 20; i < 40; i++) {
    const Source = AnimeSlideSeries[i].Source;
    const Name = AnimeSlideSeries[i].name;
    const Year = AnimeSlideSeries[i].year;
    const Href = AnimeSlideSeries[i].href;
    let animeType = AnimeSlideSeries[i].animetype;
    let sub = AnimeSlideSeries[i].sub;
    let rating = AnimeSlideSeries[i].rating;
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
    
    animeseriesslide2.innerHTML += ResultDiv;
    
  
  }
  
  for (let i = 40; i < 60; i++) {
    const Source = AnimeSlideSeries[i].Source;
    const Name = AnimeSlideSeries[i].name;
    const Year = AnimeSlideSeries[i].year;
    const Href = AnimeSlideSeries[i].href;
    let animeType = AnimeSlideSeries[i].animetype;
    let sub = AnimeSlideSeries[i].sub;
    let rating = AnimeSlideSeries[i].rating;
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
    
    animeseriesslide3.innerHTML += ResultDiv;
    
  
  }

  for (let i = 60; i < 80; i++) {
    const Source = AnimeSlideSeries[i].Source;
    const Name = AnimeSlideSeries[i].name;
    const Year = AnimeSlideSeries[i].year;
    const Href = AnimeSlideSeries[i].href;
    let animeType = AnimeSlideSeries[i].animetype;
    let sub = AnimeSlideSeries[i].sub;
    let rating = AnimeSlideSeries[i].rating;
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
    
 animeseriesslide4.innerHTML += ResultDiv;
    
  
  }
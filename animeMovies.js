
    /* anime Movies*/
    let AnimeMovieArray = AnimeMovieAndSeriesArray.filter((movie) =>{
        return movie.animetype.toLowerCase().includes("movie");
      })
    
    let animemoviesslide1 = document.getElementById("anime-movies-slide-1");
    let animemoviesslide2 = document.getElementById("anime-movies-slide-2");
    let animemoviesslide3 = document.getElementById("anime-movies-slide-3");
    let paginationSlide = document.getElementById("pagination");
    
    if(AnimeMovieArray.length > 16){
      paginationSlide.innerHTML += `
      <button class="page-item btn btn-primary m-1" id="button2" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">2</button>`
    }
    
    if(AnimeMovieArray.length > 32){
      paginationSlide.innerHTML += `
      <button class="page-item btn btn-primary m-1" id="button3" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">3</button>`
    }
    
    if(AnimeMovieArray.length > 48){
      paginationSlide.innerHTML += `
      <button class="page-item btn btn-primary m-1" id="button4" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4">4</button>`
    }
    
    for (let i = 0; i < 16; i++) {
                const Src = AnimeMovieArray[i].src;
                const Name = AnimeMovieArray[i].name;
                const Year = AnimeMovieArray[i].year;
                const Href = AnimeMovieArray[i].href;
                let animeType = AnimeMovieArray[i].animetype;
                let sub = AnimeMovieArray[i].sub;
                let rating = AnimeMovieArray[i].rating;
                  ResultDiv = `
                  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                  <a href="${Href}" class="text-decoration-none" target="_blank">
                    <div class="card bg-black text-warning overflow-hidden">
                        <div class="position-relative">
                          <img src="${Src}" class="card-img-top">
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
    
    
    for (let i = 16; i < 32; i++) {
      const Src = AnimeMovieArray[i].src;
      const Name = AnimeMovieArray[i].name;
      const Year = AnimeMovieArray[i].year;
      const Href = AnimeMovieArray[i].href;
      let animeType = AnimeMovieArray[i].animetype;
      let sub = AnimeMovieArray[i].sub;
      let rating = AnimeMovieArray[i].rating;
        ResultDiv = `
        <div class="col-6 col-sm-4 col-md-4 col-lg-3">
        <a href="${Href}" class="text-decoration-none" target="_blank">
          <div class="card bg-black text-warning overflow-hidden">
              <div class="position-relative">
                <img src="${Src}" class="card-img-top">
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
    
    for (let i = 32; i < 48; i++) {
      const Src = AnimeMovieArray[i].src;
      const Name = AnimeMovieArray[i].name;
      const Year = AnimeMovieArray[i].year;
      const Href = AnimeMovieArray[i].href;
      let animeType = AnimeMovieArray[i].animetype;
      let sub = AnimeMovieArray[i].sub;
      let rating = AnimeMovieArray[i].rating;
        ResultDiv = `
        <div class="col-6 col-sm-4 col-md-4 col-lg-3">
        <a href="${Href}" class="text-decoration-none" target="_blank">
          <div class="card bg-black text-warning overflow-hidden">
              <div class="position-relative">
                <img src="${Src}" class="card-img-top">
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
  

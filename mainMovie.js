let animemoviescards = document.getElementById("anime-movies-cards");


let AnimeMovieArrayForMain = AnimeMovieArray.filter((movie)=>{
    return movie.animetype.toLocaleLowerCase().includes("movie");
  });

  console.log(AnimeMovieArrayForMain);

  for (let i = 0; i < 8; i++) {
    const Source = AnimeMovieArrayForMain[i].Source;
    const Name = AnimeMovieArrayForMain[i].name;
    const Year = AnimeMovieArrayForMain[i].year;
    const Href = AnimeMovieArrayForMain[i].href;
    let animeType = AnimeMovieArrayForMain[i].animetype;
    let sub = AnimeMovieArrayForMain[i].sub;
    let rating = AnimeMovieArrayForMain[i].rating;
      ResultDiv = `
      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
      <a href="${Href}" class="text-decoration-none" target="_blank">
        <div class="card bg-black text-warning overflow-hidden">
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
 animemoviescards.innerHTML += ResultDiv;
}
let animeseriescards = document.getElementById("anime-series-cards");

let MainSeries = AnimeMovieAndSeriesArray.filter((movie) =>{
  return movie.animetype.toLowerCase().includes("series");
})

for (let i = 0; i < 8; i++) {
  const Source = MainSeries[i].Source;
  const Name = MainSeries[i].name;
  const Year = MainSeries[i].year;
  const Href = MainSeries[i].href;
  let animeType = MainSeries[i].animetype;
  let sub = MainSeries[i].sub;
  let rating = MainSeries[i].rating;
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
animeseriescards.innerHTML += ResultDiv;
}

let AnimeMovieAndSeriesArray = [
    {
        name : "Your Name (Kimi no na wa)",
        year : "2016",
        id : "YourName",
        src : "images/kimi-no-na-wa_2560x1440.jpg",
        geners : "action adventure comedy fantasy",
        href : "Your Name/YourName.html"
    },
    {
        name : "Demon Slayer (Kimetsu no Yaiba)",
        year : "2019",
        id : "YourName",
        src : "images/demonslayer2.jpg",
        geners : "action adventure comedy fantasy",
        href : "Demon Slayer/DemonSlayer.html"
    },
    {
        name : "Hunter X Hunter",
        year : "2013",
        id : "YourName",
        src : "images/hunterxhunter.jpg",
        geners : "action adventure comedy fantasy",
        href : "Hunter X Hunter/HunterXHunter.html"
    },
    {
        name : "Spy X Family",
        year : "2022",
        id : "YourName",
        src : "images/spyxfamily.jpg",
        geners : "action adventure comedy fantasy",
        href : "Spy X Family/SpyXFamily.htmll"
    },
    {
        name : "Kaguya-Sama: Love Is War",
        year : "2019",
        id : "YourName",
        src : "images/Kaguya-sama-love-is-war.jpg",
        geners : "action adventure comedy fantasy",
        href : "Love Is War/LoveIsWar.html"
    }
]




let SearchBox = document.getElementById("MainSearchBox");
let SearchResultDiv = document.getElementById("MainSearchResult");



SearchBox.addEventListener("keyup" , (event) =>{
    console.log(event.target.value)
    SearchResultDiv.innerHTML = ""
    let SearchText = event.target.value.toLowerCase();
    let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
        return movie.name.toLowerCase().includes(SearchText);
    })
    console.log(filteredMovie)
    if(event.key == "Enter"){

        if(filteredMovie.length === 0){
            SearchResultDiv.innerHTML = `  
            <div id="" class="text-warning text-center p-3 border-bottom border-warning ">
            Nothing matchs with "${event.target.value}"
            </div>
            "`
        }

        
        for (let i = 0; i < filteredMovie.length; i++) {
            const Id = filteredMovie[i].id;
            const Src = filteredMovie[i].src;
            const Name = filteredMovie[i].name;
            const Year = filteredMovie[i].year;
            const Href = filteredMovie[i].href;

            let ResultDiv;

            if(SearchBox.classList.contains("anime-page")){
                console.log("this is anime page");
                ResultDiv = `
                <a href="${Href}" class="text-decoration-none">
                <div class="d-flex text-white align-items-center border border-warning p-1 border-top-0">
                        <img src="../${Src}" class="float-start img-thumbnail search-img bg-dark ms-lg-2 mt-1 rounded-0" alt="...">
        
                        <div style="width:2px ;color: yellow;" class="vr ms-2"></div>
        
                        <div class="d-flex flex-lg-column text-center align-items-center">
                          <h5 class="ms-2">${Name}</h5>
                          <h6 class="ms-2 text-color-yellow">(${Year})</h6>
                        </div>
                      </div>
                      </a>
                `
            }else{
                ResultDiv = `
                <a href="${Href}" class="text-decoration-none">
                <div class="d-flex text-white align-items-center border border-warning p-1 border-top-0">
                        <img src="${Src}" class="float-start img-thumbnail search-img bg-dark ms-lg-2 mt-1 rounded-0" alt="...">
        
                        <div style="width:2px ;color: yellow;" class="vr ms-2"></div>
        
                        <div class="d-flex flex-lg-column text-center align-items-center">
                          <h5 class="ms-2">${Name}</h5>
                          <h6 class="ms-2 text-color-yellow">(${Year})</h6>
                        </div>
                      </div>
                      </a>
                `
            }


        SearchResultDiv.innerHTML += ResultDiv;
        }
    }
})
/*Search Box*/

/*Gender button*/

let ActionBtn = document.getElementById("Action");

ActionBtn.addEventListener("click" , ()=>{
    SearchResultDiv.innerHTML = "";
    innerSlide.style.left = "-300%"
    let ActionAnime = document.querySelectorAll(".action");

    for (let i = 0; i < ActionAnime.length; i++) {
        let clone = ActionAnime[i].cloneNode(true);
        SearchResultDiv.append(clone);
    }
})

let ComedyBtn = document.getElementById("Comedy");

ComedyBtn.addEventListener("click" , ()=>{
    SearchResultDiv.innerHTML = ""
    innerSlide.style.left = "-300%"
    let ComedyAnime = document.querySelectorAll(".comedy");
   

    for (let i = 0; i < ComedyAnime.length; i++) {
        let clone = ComedyAnime[i].cloneNode(true)
        SearchResultDiv.append(clone);
    }
})

/*Gender button*/

/*Year button*/
let two019 = document.getElementById("2019");

two019.addEventListener("click" , ()=>{
    SearchResultDiv.innerHTML = ""
    innerSlide.style.left = "-300%"
    let two019Anime = document.querySelectorAll(".year_2019");

    for (let i = 0; i < two019Anime.length; i++) {
        SearchResultDiv.append(two019Anime[i])
        
    }
})

/*Year button*/

document.querySelectorAll('.card-img-top').forEach(item => {
    item.addEventListener('click', event => {
      console.log(event.target.id)
    })
  })
  
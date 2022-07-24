let AnimeMovieAndSeriesArray = [
    {
        shortName : "Your Name",
        name : "Your Name (Kimi no na wa)",
        year : "2016",
        src : "images/kimi-no-na-wa_2560x1440.jpg",
        geners : "Romance Drama Fantasy School",
        href : "Your Name/YourName.html"
    },
    {
        shortName : "Demon Slayer",
        name : "Demon Slayer (Kimetsu no Yaiba)",
        year : "2019",
        src : "images/demonslayer2.jpg",
        geners : "Action Adventure Comedy Demon",
        href : "Demon Slayer/DemonSlayer.html"
    },
    {
        shortName : "Hunter X Hunter",
        name : "Hunter X Hunter",
        year : "2013",
        src : "images/hunterxhunter.jpg",
        geners : "Action Adventure Comedy Supernatural Fantasy",
        href : "Hunter X Hunter/HunterXHunter.html"
    },
    {
        shortName : "Spy X Family",
        name : "Spy X Family",
        year : "2022",
        src : "images/spyxfamily.jpg",
        geners : "Action Comedy Spy",
        href : "Spy X Family/SpyXFamily.html",
    },
    {
        shortName : "Love Is War",
        name : "Kaguya-Sama: Love Is War",
        year : "2019",
        src : "images/wp4051808-kaguya-sama-love-is-war-wallpapers-scaled.jpg",
        geners : "School Romance Comedy Psychological",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "A Silent Voice",
        name : "A Silent Voice",
        year : "2016",
        src : "images/a silent voice.jpg",
        geners : "School Romance Comedy Psychological",
        href : "",
    },
    {
        shortName : "Assassination Classrooms 365days",
        name : "Assassination Classrooms 365days",
        year : "2016",
        src : "images/assassination the moviej.jpg",
        geners : "Action, School, Comedy, Supernatural",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "Goblin Slayer:Goblin crown's",
        name : "Goblin Slayer:Goblin crown's",
        year : "2020",
        src : "images/goblin slayer golin crown's.jpg",
        geners : "Action, DarkFantasy",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "Saga of Tanya The Evil: The Movie",
        name : "Saga of Tanya The Evil: The Movie",
        year : "2019",
        src : "images/saga of the tanya the evil.jpg",
        geners : "Action, Isekai, Military, DarkFantasy",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "I Want to eat Your Pencreas",
        name : "I Want to eat Your Pencreas",
        year : "2018",
        src : "images/I want to eat your pencreas.jpg",
        geners : "School, Romance, Drama",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "Violet Evergarden The Movie",
        name : "Violet Evergarden The Movie",
        year : "2020",
        src : "images/violetevergarde.png",
        geners : "Drama, Romance, Military",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "Weathering with You",
        name : "Weathering with You",
        year : "2019",
        src : "images/weathering with you.jpg",
        geners : "Romance, Drama, Fantasy",
        href : "Love Is War/LoveIsWar.html",
    },
    {
        shortName : "Dr Stone Ryusui",
        name : "Dr Stone Ryusui",
        year : "2022",
        src : "images/featured-drstone-ryusui.jpg",
        geners : "Adventure, Action, Science fiction, Comedy",
        href : "Love Is War/LoveIsWar.html",
    }
]




let SearchBox = document.getElementById("MainSearchBox");
let SearchResultDiv = document.getElementById("MainSearchResult");

SearchBox.placeholder = "Search..."

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
                <a href="../${Href}" class="text-decoration-none">
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

let GenderBtn = document.querySelectorAll(".dropdown-item");
let MainSliderItem = document.getElementById("mainSlider-item-1");
let mainSliderResultDiv = document.getElementById("mainSliderResultDiv");
let mainSliderResultDivH2 = document.getElementById("mainSliderResultDivH2");

GenderBtn.forEach(item => {
    item.addEventListener("click" , (event)=>{
    let ClickBtn = event.target.innerHTML;
    mainSliderResultDivH2.innerHTML = "";
    mainSliderResultDivH2.innerHTML = `${ClickBtn} Anime List`;
    MainSliderItem.innerHTML = "";
    mainSliderResultDiv.innerHTML = "";

            if(ClickBtn == "Action"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("action");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }
            
            if(ClickBtn == "Adventure"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("adventure");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Comedy"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("comedy");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Demon"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("demon");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }
        
            if(ClickBtn == "Drama"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("drama");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Ecchi"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("ecchi");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Fantasy"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("fantasy");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Game"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("game");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Harem"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("harem");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Horror"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("horror");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Magic"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("magic");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Mecha"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("mecha");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Military"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("military");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Music"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("music");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Romance"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("romance");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "School"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("school");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Scifi"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("scifi");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Shoujo"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("shoujo");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Slice of life"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("slice of life");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Sport"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("sport");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Supernatural"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("supernatural");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "Vampire"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.geners.toLowerCase().includes("vampire");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2022"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2022");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2021"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2021");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2020"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2020");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2019"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2019");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2018"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2018");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2017"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2017");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2016"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2016");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2015"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2015");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2014"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2014");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2013"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2013");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2012"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2012");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2011"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2011");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }

            if(ClickBtn == "2010"){
                let filteredMovie = AnimeMovieAndSeriesArray.filter((movie) =>{
                    return movie.year.toLowerCase().includes("2010");
                })
                console.log(filteredMovie);
                for (let i = 0; i < filteredMovie.length; i++) {
                    let Src = filteredMovie[i].src;
                    let Year = filteredMovie[i].year;
                    let Name = filteredMovie[i].shortName;
                    let Href = filteredMovie[i].href;
    
                    let ResultDiv;
    
                    if(SearchBox.classList.contains("anime-page")){
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="../${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }else{
                        ResultDiv = `
                        
                        <div id="HunterXHunter" class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <a href="${Href}" class="text-decoration-none">
                        <div class="card bg-black text-warning overflow-hidden">
                            <img src="${Src}" class="card-img-top" alt=""><div class="overlay ">
                  
                                        <i class="bi bi-play-circle my-auto"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                        </svg>
                                      
                                      </div>
                              <div class="d-flex justify-content-between flex-column bg-gradient p-2 text-center">
                              <h5 class="text-white border border-top-0 border-start-0 border-end-0 border-bottom-1">${Name}</h5>
                              <h6 class="">(${Year})</h6>
                            </div>
                        </div>
                        </a>
                      </div>
                      
                        `
                    }
    
                   
    
                    mainSliderResultDiv.innerHTML += ResultDiv;
                }
            }
    })
})

/*Gender button*/

/*Year button*/
// let two019 = document.getElementById("2019");

// two019.addEventListener("click" , ()=>{
//     SearchResultDiv.innerHTML = ""
//     innerSlide.style.left = "-300%"
//     let two019Anime = document.querySelectorAll(".year_2019");

//     for (let i = 0; i < two019Anime.length; i++) {
//         SearchResultDiv.append(two019Anime[i])
        
//     }
// })

/*Year button*/

document.querySelectorAll('.card-img-top').forEach(item => {
    item.addEventListener('click', event => {
      console.log(event.target.id)
    })
  })
  
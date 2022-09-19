let AnimeNewsArray = [
            {
              sOurce : "https://www.youtube.com/embed/h_zevO9kh7Y"
            },{
              sOurce : "https://www.youtube.com/embed/F7nQ0VUAOXg"
            },{
              sOurce : "https://www.youtube.com/embed/b1miJsAVYJA"
            },{
              sOurce : "https://www.youtube.com/embed/--K49563xfA"
            },{
              sOurce : "https://www.youtube.com/embed/mnQTohspiYk"
            },{
              sOurce : "https://www.youtube.com/embed/WFVY88Urzuc"
            },{
              sOurce : "https://www.youtube.com/embed/dMxt6rYowTE"
            },{
              sOurce : "https://www.youtube.com/embed/9UASePstNOs"
            },{
              sOurce : "https://www.youtube.com/embed/qtWfYBxTMYQ"
            },{
              sOurce : "https://www.youtube.com/embed/jk7QSGwupPA"
            },{
              sOurce : "https://www.youtube.com/embed/BZuTQMdluqo"
            },{
              sOurce : "https://www.youtube.com/embed/kPCf7kO80do"
            },{
              sOurce : "https://www.youtube.com/embed/UqzhE46HKz4"
            },{
              sOurce : "https://www.youtube.com/embed/8MratBffxug"
            },{
              sOurce : "https://www.youtube.com/embed/W6YtbfxVx6U"
            },{
              sOurce : "https://www.youtube.com/embed/Rg9K5ryqiDA"
            },{
              sOurce : "https://www.youtube.com/embed/DO_PN3_8m4E"
            },{
              sOurce : "https://www.youtube.com/embed/o7HVa5P_4WA"
            },{
              sOurce : "https://www.youtube.com/embed/5ycHAx46szQ"
            },{
              sOurce : "https://www.youtube.com/embed/Yvvo3PGn7Vg"
            },{
              sOurce : "https://www.youtube.com/embed/2JgHfI-4bfw"
            },{
              sOurce : "https://www.youtube.com/embed/vwlulN6OPyw"
            },{
              sOurce : "https://www.youtube.com/embed/CGj59j8RDVo"
            },{
              sOurce : "https://www.youtube.com/embed/cMvuPDUWr7o"
            },{
              sOurce : "https://www.youtube.com/embed/sn9Rufl_RIc"
            },{
              sOurce : "https://www.youtube.com/embed/Oqd2C3oZkBU"
            },{
              sOurce : "https://www.youtube.com/embed/65eg00G7aGY"
            },{
              sOurce : "https://www.youtube.com/embed/a4577xu7c7M"
            },{
              sOurce : "https://www.youtube.com/embed/zaJ-Fk64Bas"
            },{
              sOurce : "https://www.youtube.com/embed/ZAgMhHmxAfE"
            }
]
console.log(AnimeNewsArray.length)
let PagesBtn = document.querySelectorAll(".pageSwichter")
let currentPage = document.getElementById("currentPage");
let totalPage = document.getElementById("totalPage");   

let animemoviesslide1 = document.getElementById("anime-movies-slide-1");
let animemoviesslide2 = document.getElementById("anime-movies-slide-2");
let animemoviesslide3 = document.getElementById("anime-movies-slide-3");
let animemoviesslide4 = document.getElementById("anime-movies-slide-4");
let paginationSlide = document.getElementById("moviepagination");
let AnimeSeriesCarousel = document.getElementById("anime-series-carousel");
let TOTALPAGE = document.getElementById("TOTALPAGE");

if(AnimeNewsArray.length > 15){
  TOTALPAGE.innerHTML = 2;
  paginationSlide.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1" id="button2">1</button>
  <button class="my-page-item btn btn-outline-warning m-1" id="button2">2</button>`
}

if(AnimeNewsArray.length > 30){
  TOTALPAGE.innerHTML = 3;
  paginationSlide.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1">3</button>`
}

if(AnimeNewsArray.length > 45){
  TOTALPAGE.innerHTML = 4;
  paginationSlide.innerHTML += `
  <button class="my-page-item btn btn-outline-warning m-1">4</button>`
}

if(AnimeNewsArray.length > 60){
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

for (let i = 0; i < 15; i++) {
  let src = AnimeNewsArray[i].sOurce;
  let ResultDiv = `
  <iframe src="${src}" class="col-lg-4 col-md-6 col-12 col-sm-6" height="250" frameborder="0" allowfullscreen></iframe>
  `
  animemoviesslide1.innerHTML += ResultDiv;
  

}


for (let i = 15; i < 30; i++) {
    let src = AnimeNewsArray[i].sOurce;
    let ResultDiv = `
    <iframe src="${src}" class="col-lg-4 col-md-6 col-12 col-sm-6" height="250" frameborder="0" allowfullscreen></iframe>
    `

animemoviesslide2.innerHTML += ResultDiv;


}

for (let i = 30; i < 45; i++) {
    let src = AnimeNewsArray[i].sOurce;
    let ResultDiv = `
    <iframe src="${src}" class="col-lg-4 col-md-6 col-12 col-sm-6" height="250" frameborder="0" allowfullscreen></iframe>
    `

animemoviesslide3.innerHTML += ResultDiv;


}

for (let i = 45; i < 80; i++) {
    let src = AnimeNewsArray[i].sOurce;
    let ResultDiv = `
    <iframe src="${src}" class="col-lg-4 col-md-6 col-12 col-sm-6" height="250" frameborder="0" allowfullscreen></iframe>
    `

animemoviesslide4.innerHTML += ResultDiv;


}
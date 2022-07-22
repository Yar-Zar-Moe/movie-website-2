/*Navbar buttons*//*
let mainBodyNoNav = document.getElementById("MainBodyNoNav");
let moviesButton = document.getElementById("Movies");
let seriesButton = document.getElementById("Series");
let newsButton = document.getElementById("News");

let ActionBtn = document.getElementById("Action");

ActionBtn.addEventListener("click" , ()=>{
  mainBodyNoNav.innerHTML = `
  <h2 class="ms-2 text-color-yellow border border-top-0 border-start-0 border-end-0">Your Search Result</h2>

  `
})

moviesButton.addEventListener("click" , ()=>{
mainBodyNoNav.innerHTML=`
<div class="p-2">
  <h2 class="ms-2 text-color-yellow border border-top-0 border-start-0 border-end-0">Anime Movies</h2>

  <div id="Movie-cards" class="row g-1">

    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
      <div class="card">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        </a>
      </div>
    </div>

    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
      <div class="card position-relative text-center">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
          <h4 class="position-absolute bottom-0 text-dark movie-name bg-light w-100">Hunter X Hunter</h4>
        </a>
        
      </div>
    </div>

    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
      <div class="card">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        </a>
      </div>
    </div>

    <div class="col-6 col-sm-4 col-md-4 col-lg-3">
      <div class="card">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        </a>
      </div>
    </div>

  </div>
  
</div>
`
})

seriesButton.addEventListener("click" , ()=>{
    mainBodyNoNav.innerHTML=`
    <!--Slide-->
    <div id="carouselExampleDark" class="carousel carousel-dark slide h-100" data-bs-ride="carousel">

      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>

<div class="carousel-inner">



      <div class="carousel-item active  h-100" data-bs-interval="5000">
        <div class="Mycarousel">
          <img src="images/hunterxhunter.jpg" class="d-block w-100 carousel-image h-100" alt="...">
          <div class="Mycarousel-Caption">
            <h1 class=" border border-top-0 border-start-0 border-end-0 border-2">Hunter X Hunter</h1>
            <h4>ကမ္ဘာပတ်ပြီး စွန့်စားဖို့ တွေးဖူးပါသလား?
              ဒီကားလေးကတော့ Gon ဆိုတဲ့ ကောင်လေးတစ်ယောက်နဲ့စခဲ့ပါတယ်
              ဒီကောင်လေးက သူ့အဖေလို Pro Hunter တစ်ယောက်ဖြစ်ဖို့ ကမ္ဘာပတ်ပြီး ခရီးထွက်ခဲ့တဲ့အကြောင်းလေးပေါ့
              အမျိုးမျိုးသော လူတွေ ပုံစံတွေ နေရာတွေ ဂိမ်းတွေအပြင် Action မျိုးစုံကို ကြည့်ရမှာဖြစ်ပါတယ်
              ချတဲ့အခန်းတွေ ညဏ်သုံးပြီး သွားလာရတာတွေ အပြင် Comedy လေးလည်း နည်းနည်းပါးပါးပါတာကြောင့် Action, Adventure နဲ့ Fantasty ကိုသဘောကျတဲ့သူတွေဆို ကြည့်ဖို့ Recommend ပါရစေ...</h4>
            <button class="Mycarousel-caption"><h4>watch</h4></button>
          </div>
      </div>
    </div>

    <div class="carousel-item  h-100" data-bs-interval="5000">
      <div class="Mycarousel">
        <img src="images/wp4051808-kaguya-sama-love-is-war-wallpapers-scaled.jpg" class="d-block w-100 carousel-image h-100" alt="...">
        <div class="LoveIsWar-Mycarousel-Caption">
          <h1 class=" border border-top-0 border-start-0 border-end-0 border-2">Love Is War</h1>
          <h4>Kaguya Shinomiya နဲ့ Miyuki Shirogane တို့ဟာ နာမည်ကြီးအစဉ်အလာရှိခဲ့တယ့် ကျောင်းတစ်ကျောင်းရဲ့ ထိပ်တန်းအတော်ဆုံးကျောင်းကောင်စီအသင်းဝင်ကျောင်းသား၂ ယောက်ပါ
            တကယ့်အတော့်အတော်ဆုံးကျောင်းသား ၂ ယောက်ဖြစ်တဲ့အတွက် အမြဲတမ်း ပထမ နေရာအတွက်အနိုင်မခံ အရှုံးမပေးယှဉ်ပြိုင်နေကြပါတယ်
            ဒီလိုနဲ့ သူတို့ ၂ ယောက်ဟာတစ်ယောက်အတွက် တစ်ယောက်ကိုယ်စီ ရင်ထဲမှာခံစားချက်တွေဖြစ်တည်လာတဲ့အခါမှာတော့...</h4>
          <button class="Mycarousel-caption"><a href="#"><h4>watch</h4></a></button>
        </div>
      </div>
  </div>

    <div class="carousel-item  h-100" data-bs-interval="5000">
      <div class="Mycarousel">
        <img src="images/demonslayer2.jpg" class="d-block w-100 carousel-image h-100" alt="...">
        <div class="Mycarousel-Caption">
          <h1 class=" border border-top-0 border-start-0 border-end-0 border-2">Demon Slayer</h1>
          <h4>လွန်ခဲ့သောနှစ်များစွာကတည်းက လူတွေကိုသတ်ဖြတ်စားသောက်တဲ့ Demon (မကောင်းဆိုးဝါး) တွေဟာ တောတွေထဲမှာ နေထိုင်ကျက်စားကြတယ် သူတို့ရန်ကိုကြောက်လန့်ရတဲ့လူတွေဟာ ညဘက်ဆိုအပြင်မထွက်ရဲလောက်အောင်ပါပဲ
            အဲ့ဒီ မကောင်းဆိုးဝါးတွေ ကို နှိမ်နင်းနေတဲ့မကောင်းဆိုးဝါးနှိမ်နင်းသူတွေ ရွိတယ်လို့လဲ ဆိုကြပါတယ်
            Tanjiro Kamado ဆိုတဲ့ လူငယ်လေးဟာ ရိုးသားပြီး ကြင်နာတတ်တဲ့လူငယ်လေးတစ်ယောက်ဖြစ်ပါတယ် 
            သူ့မိသားစုရဲ့နွေးထွေးငြိမ်းချမ်းတဲ့ဘဝက တစ်နေ့သောအခါမှာ အရာရာပြောင်းလဲဖို့အကြောင်းဖန်လာပါတော့တယ်
            ...</h4>
                  <button class="Mycarousel-caption"><a href="Demon Slayer/demonslayer.html"><h4>watch</h4></a></button>
              </div>
            </div>
          </div>

        <div class="carousel-item  h-100" data-bs-interval="5000">
          <div class="Mycarousel">
            <img src="images/kimi-no-na-wa_2560x1440.jpg" class="d-block w-100 carousel-image h-100" alt="...">
            <div class="Mycarousel-Caption">
              <h1 class=" border border-top-0 border-start-0 border-end-0 border-2">Your Name</h1>
              <h4>Your Name ကြောင့် Anime ပရိသတ် ဖြစ်လာကြတဲ့သူတွေချည်းပါပဲ…
                ဒါပေမဲ့ အခုထိမကြည့်ရသေးတဲ့သူတွေ ရှိနေနိုင်သေးတာကြောင့် နည်းနည်းလောက် ပြန်ညွှန်းပါရစေ…
                တိုကျိုမှာနေတဲ့ အထက်တန်းကျောင်းသားလေး
                တာချီဘာနာ တကိ နဲ့ အိတိုမိုရိ ဆိုတဲ့ နယ်မြို့လေးက မိယမိဇု မိဆုဟ ဆိုတဲ့ ကောင်မလေးတို့ဟာ ခန္ဓာကိုယ်ချင်းလဲသွားကြသတဲ့…
                အမှန်က ခန္ဓာကိုယ်လဲတယ်ဆိုတာထက် စိတ်ချင်းလဲသွားတယ်ဆို ပိုမှန်ပါတယ်…
                ဒါကို သူတို့တွေက အိပ်မက်လို့ ထင်နေကြပေမယ့် တကယ်ဖြစ်နေမှန်းသိတဲ့အခါမှာတော့
                
                ...</h4>
                      <button class="Mycarousel-caption"><a href="#"><h4>watch</h4></a></button>
                  </div>
                </div>
              </div>

          <div class="carousel-item  h-100" data-bs-interval="5000">
            <div class="Mycarousel">
              <img src="images/spyxfamily.jpg" class="d-block w-100 carousel-image h-100" alt="...">
              <div class="LoveIsWar-Mycarousel-Caption">
                <h1 class=" border border-top-0 border-start-0 border-end-0 border-2">Spy X Family</h1>
                <h4>ဇာတ်လမ်းအကျဉ်းကတော့
                  သိပ်ကိုတော်တဲ့ စပိုင်တစ်ယောက်ဟာ
                  ရုပ်ပေါင်းများစွာဖျက်ပြီး မစ်ရှင်တွေကို
                  တခုပြီးတခုအောင်မြင်စွာ ဆောင်ရွက်နေနိုင်ခဲ့ပါတယ်
                  သူ့နာမည်ဝှက်ကတော့ “ဆည်းဆာ”ပါ….
                  တနေ့တော့ သူ့အတွက်မစ်ရှင်ကို
                  ကုတ်ဖော်ပြီး သူရလိုက်တဲ့မစ်ရှင်က
                 ကလေးတစ်ယောက်ကို
                  တပတ်အတွင်းမွေးပြီး သူစပိုင်လုပ်ရမယ့်
                  လူကြီးတစ်ယောက်ပိုင်တဲ့ကျောင်းမှာ
                  သတင်းသွားယူဖို့ပါပဲကလေးတစ်ယောက်ကို အလွယ်တကူမွေးစားလိုက်ပြီး
                  အဲ့ဒီကလေးက သာမန်မဟုတ်တဲ့အခါမှာတော့
                  
                  ...</h4>
                        <button class="Mycarousel-caption"><a href="#"><h4>watch</h4></a></button>
                    </div>
                  </div>
                </div>

  </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span  class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
</div>

<!--Slide-->

<!--Series Cards-->
<div class="p-2">
<h2 class="ms-2 text-color-yellow border border-top-0 border-start-0 border-end-0">Anime Series</h2>

<div id="anime-series-cards" class="row g-1">

  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <div class="card">
      <a href="#">
        <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
      </a>
    </div>
  </div>

  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <div class="card position-relative text-center">
      <a href="#">
        <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        <h4 class="position-absolute bottom-0 text-dark movie-name bg-light w-100">Hunter X Hunter</h4>
      </a>
      
    </div>
  </div>

  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <div class="card">
      <a href="#">
        <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
      </a>
    </div>
  </div>

  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <div class="card">
      <a href="#">
        <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
      </a>
    </div>
  </div>

</div>

</div>
<!--Series Cards-->


<!--Pagination-->
<navaria-label="Page navigation example">
<ul class="pagination d-flex justify-content-center">

  <button class="page-item btn btn-primary m-1" id="button1">1</button>
  <button class="page-item btn btn-primary m-1" id="button2">2</button>
  <button class="page-item btn btn-primary m-1" id="button3">3</button>
  <button class="page-item btn btn-primary m-1" id="button4">4</button>
  <button class="page-item btn btn-primary m-1" id="button5">5</button>
  <button class="page-item btn btn-primary m-1" id="button6">6</button>

</ul>
</navaria-label=>
<!--Pagination-->
    `
})

newsButton.addEventListener("click" , () =>{
mainBodyNoNav.innerHTML = `
<h2 class="ms-2 text-color-yellow border border-top-0 border-start-0 border-end-0">Anime News</h2>
`
})
/*Navbar buttons*/



/* Pagination

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let animeSeries = document.getElementById("anime-series-cards")

button1.addEventListener("click", ()=>{
    console.log("helloworld")
    animeSeries.innerHTML = `
    <div class="col-4 col-sm-4 col-md-4 col-lg-3">
      <div class="card">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        </a>
      </div>
    </div>

    <div class="col-4 col-sm-4 col-md-4 col-lg-3">
      <div class="card position-relative text-center">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
          <h4 class="position-absolute bottom-0 text-dark movie-name bg-light w-100">Hunter X Hunter</h4>
        </a>
        
      </div>
    </div>

    <div class="col-4 col-sm-4 col-md-4 col-lg-3">
      <div class="card">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        </a>
      </div>
    </div>

    <div class="col-4 col-sm-4 col-md-4 col-lg-3">
      <div class="card">
        <a href="#">
          <img src="images/hunterxhunter.jpg" class="card-img-top" alt="">
        </a>
      </div>
    </div>
  `

})

button2.addEventListener("click", ()=>{
    console.log("helloworld")
    animeSeries.innerHTML = `


    
  `

})

/* Pagination*/
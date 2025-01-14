

let featured_books = document.getElementById("featured_books")
let best_selling = document.getElementById("best_selling")
let all_geners = document.getElementById("all_geners")
let offer_books =document.getElementById("offer_books")
//feature books start

window.onload= showData(data);
window.onload= bestSeller(data)
window.onload= allGeners(data)
window.onload= offerBooks(data)





function showData(data){
  featured_books = document.getElementById("featured_books")
    featured_books.innerHTML= ""

    data.filter((ele) => ele.category == "featured").map((ele) => {
        featured_books.innerHTML += `
      
      
              <div class="col">
                        <div class="" >
                  <div class="box light-text-color mb-4 p-5">
                  <img src="${ele.image}" class="w-100 img-fluid" alt="${ele.title}">
                  </div>

                            
                            <div class="card-body text-center">
                              <h4 class="card-title heading accent-clr ">${ele.title}</h4>
                              <h5 class="card-text body-text-color pt-3">${ele.author}</h5>
                              <h5 class="card-text accent-clr">INR. ${ele.price}</h5>
                              <a href="#" >
<button class="cart-btn mt-3 w-100">
  <div class="default-btn">
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="#ffffff"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cart-icon"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      ></path>
    </svg>
    <span>Add to Cart</span>
  </div>
  <div class="hover-btn text-center">
    
    <span>INR. ${ele.price}</span>
  </div>
</button>
</a>
                            </div>
                          </div>
                    </div>
        `
    }
)
}

//feature books end

// best seller start


function bestSeller(data){
  
  best_selling.innerHTML = ""

  data.filter((ele)=> ele.title == "Birds Gonna Be Happy").map((ele)=>{

    best_selling.innerHTML += `
    
         <div class="col  py-3 p-5 h-100">
              <div class="box p-5 py-3 ">
                <img src="${ele.image}" class="img-thumbnail p-5" alt="">
              </div>
            </div>
            <div class="col  h-100 text-start lh-lg p-5 d-flex flex-column justify-content-between align-items-start">
              <div class="title mb-5">
                <h1 class="heading display-4 mb-0 pb-0">Best Selling Book <span class="active">--</span></h1>
               
              </div>
              <div class="author">
                <p class="fs-5 fw-lighter">By ${ele.author}</p>
              </div>
              <div class="title my-3">
                <h2 class="heading">${ele.title}</h2>
              </div>

              <div class="content py-3">
                <p class="fs-5 fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              </div>
              <div class="pricew">
                <h5 class="accent-clr fw-medium my-3 ">INR. ${ele.price}</h5>
              </div>
            
              <div class="shop-now">
                <h5 class="fw-bolder text-black  mt-4 text-start">shop It Now<i class="ri-arrow-right-line"></i></h5>
              </div>
            </div>
    
    `
  } )
}


// best seller end

// business filter start


function businessData(){
 let filterData = data.filter((ele) => ele.category == "business")
  allGeners(filterData)
}
function romanticData(){
 let filterData = data.filter((ele) => ele.category == "romantic")
  allGeners(filterData)
}
function allBook(){
 let filterData = data.filter((ele) => ele)
  allGeners(filterData)
}
function technologyData(){
 let filterData = data.filter((ele) => ele.category == "technology")
  allGeners(filterData)
}
function adventureData(){
 let filterData = data.filter((ele) => ele.category == "adventure")
  allGeners(filterData)
}
// business filter end

// all geners start


  function allGeners(data){

    all_geners.innerHTML = ""
    data.filter((ele) => ele.cat == "all_geners").map((ele) => {
      all_geners.innerHTML += `
    
    
            <div class="col">
                      <div class="" >
                <div class="box light-text-color mb-4 p-5">
                <img src="${ele.image}" class="w-100 img-fluid" alt="${ele.title}">
                </div>

                          
                          <div class="card-body text-center">
                            <h4 class="card-title heading accent-clr ">${ele.title}</h4>
                            <h5 class="card-text body-text-color pt-3">${ele.author}</h5>
                            <h5 class="card-text accent-clr">INR. ${ele.price}</h5>
                            <a href="#" >
<button class="cart-btn mt-3 w-100">
<div class="default-btn">
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="#ffffff"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="cart-icon"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path
      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    ></path>
  </svg>
  <span>Add to Cart</span>
</div>
<div class="hover-btn text-center">
  
  <span>INR. ${ele.price}</span>
</div>
</button>
</a>
                          </div>
                        </div>
                  </div>
      `
  }
)

  }
// all geners end



// offer books start

function offerBooks(data) {
  offer_books.innerHTML = ""

  data.filter((ele)=> ele.category == "featured").map((ele)=>{
    offer_books.innerHTML +=`
          <div class="col">
                        <div class="" >
                  <div class="box light-text-color mb-4 p-5">
                  <img src="${ele.image}" class="w-100 img-fluid" alt="${ele.title}">
                  </div>

                            
                            <div class="card-body text-center">
                              <h4 class="card-title heading accent-clr ">${ele.title}</h4>
                              <h5 class="card-text body-text-color pt-3">${ele.author}</h5>
                              <h5 class="card-text accent-clr">  <span class="fs-6 body-text-color"><s>INR.999 </s></span> INR. ${ele.price}</h5>
                              <a href="#" >
<button class="cart-btn mt-3 w-100">
  <div class="default-btn">
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="#ffffff"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cart-icon"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      ></path>
    </svg>
    <span>Add to Cart</span>
  </div>
  <div class="hover-btn text-center">
  
    <span>INR. ${ele.price}</span>
  </div>
</button>
</a>
                            </div>
                          </div>
                    </div>
      
    `
  })
}

// offer books end
// slider start
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// slider end
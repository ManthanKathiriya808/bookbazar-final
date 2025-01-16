

let featured_books = document.getElementById("featured_books")
let best_selling = document.getElementById("best_selling")
let all_geners = document.getElementById("all_geners")
let offer_books =document.getElementById("offer_books")
let auth =document.getElementById("auth")

//feature books start

window.onload= showData(data);
window.onload= bestSeller(data)
window.onload= allGeners(data)
window.onload= offerBooks(data)
activeUser = JSON.parse(localStorage.getItem("activeUser")) 
window.onload= authData()



function setcartData(cd){
  localStorage.setItem("cartData",JSON.stringify(cd))
}
cartData= JSON.parse(localStorage.getItem("cartData")) || []

function checkData(id){
  let cartData= JSON.parse(localStorage.getItem("cartData")) || []

  cartData = cartData.filter((ele) => ele.id == id)

  return !cartData[0]
}

function checkQuentity(id){
  let cartData= JSON.parse(localStorage.getItem("cartData")) || []

  let cData = cartData.filter((ele) => ele.id == id)

  return cData[0].quantity
  
}




function inCount(id){
  cartData = cartData.map((ele)=>{
      if(ele.id==id){
          ele.quantity+=1
      }
      return ele
  })

  setcartData(cartData)
  showData(data)
bestSeller(data)
offerBooks(data)
allGeners(data)
}
function decCount(id){
  cartData =cartData.map((ele) =>{
    if(ele.id == id){
      if(ele.quantity > 1){
        ele.quantity -= 1;
      }
      else{
        return ele =null
      }
    }
    return ele
  }).filter((ele) => ele!=null)

  setcartData(cartData)
  showData(data)
  bestSeller(data)
  offerBooks(data)
  allGeners(data)

 

}

  featured_books = document.getElementById("featured_books")
function showData(data){
  activeUser = JSON.parse(localStorage.getItem("activeUser")) 
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
                              <h5 class="card-text accent-clr">&#x20b9; ${ele.price}</h5>
                              
                              ${!checkData(ele.id) && activeUser ? `
                                      <div class="btn-group mt-3 w-100" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-dark btn-sm"  onclick="inCount(${ele.id})">
                                  <i class="ri-add-fill  "></i></button>
                                <button type="button" class="btn btn-outline-dark disabled btn-sm">
                                  ${checkQuentity(ele.id)}
                                  </button>
                                <button type="button" class="btn btn-danger btn-sm" onclick="decCount(${ele.id})"><i class="ri-subtract-fill"  ></i></button>
                              </div>
                          
                                ` :
                              
                              `
                              
                            
                            <button class="cart-btn mt-3 w-100" onclick="addCart(${ele.id})">
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
    
    <span>&#x20b9; ${ele.price}</span>
  </div>
</button>
                            
                              `}
                            


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
                <h5 class="accent-clr fw-medium my-3 ">&#x20b9; ${ele.price}</h5>
              </div>
            
              <div class="shop-now">
                <h5 class="fw-bolder btn text-black fs-5  mt-4 text-start" onclick="addCart(${ele.id})">shop It Now<i class="ri-arrow-right-line"></i></h5>
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
                            <h5 class="card-text accent-clr">&#x20b9; ${ele.price}</h5>
                            
                             ${!checkData(ele.id) && activeUser? `
                                      <div class="btn-group mt-3 w-100" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-dark btn-sm"  onclick="inCount(${ele.id})">
                                  <i class="ri-add-fill  "></i></button>
                                <button type="button" class="btn btn-outline-dark disabled btn-sm">
                                  ${checkQuentity(ele.id)}
                                  </button>
                                <button type="button" class="btn btn-danger btn-sm" onclick="decCount(${ele.id})"><i class="ri-subtract-fill"  ></i></button>
                              </div>
                          
                                ` :
                              
                              `
                              
                            
                            <button class="cart-btn mt-3 w-100" onclick="addCart(${ele.id})">
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
    
    <span>&#x20b9; ${ele.price}</span>
  </div>
</button>
                            
                              `}
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
                              <h5 class="card-text accent-clr">  <span class="fs-6 body-text-color"><s>&#x20b9;999 </s></span> &#x20b9; ${ele.price}</h5>
                           
                             ${!checkData(ele.id) && activeUser? `
                                      <div class="btn-group mt-3 w-100" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-dark btn-sm"  onclick="inCount(${ele.id})">
                                  <i class="ri-add-fill  "></i></button>
                                <button type="button" class="btn btn-outline-dark disabled btn-sm">
                                  ${checkQuentity(ele.id)}
                                  </button>
                                <button type="button" class="btn btn-danger btn-sm" onclick="decCount(${ele.id})"><i class="ri-subtract-fill"  ></i></button>
                              </div>
                          
                                ` :
                              
                              `
                              
                            
                            <button class="cart-btn mt-3 h-100 w-100" onclick="addCart(${ele.id})">
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
    
    <span>&#x20b9; ${ele.price}</span>
  </div>
</button>
                            
                              `}
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
cartData = JSON.parse(localStorage.getItem("cartData")) || []

function addCart(id){


  if(activeUser){
      let addCartData = data.filter((ele) => ele.id == id).map((ele)=>{
      if(ele.id == id){
          ele.quantity = 1
      }
      return ele
  })
  cartData = [...cartData, ...addCartData]


  setcartData(cartData)

  document.getElementById("cartLen").innerHTML = cartData.length
  showData(data)
  bestSeller(data)
  offerBooks(data)
  allGeners(data)
  }

  else{
    location.href = "registation.html"
  }

  
}


document.getElementById("cartLen").innerHTML = cartData.length



// auth start


function logout(){
  localStorage.removeItem("activeUser")
  location.reload();
}

function authData(){
  
auth = document.getElementById("auth")



  auth.innerHTML = `

  ${
    activeUser ?
      ` 
      
<div class="card1">
    <div class="card__img"><svg xmlns="http://www.w3.org/2000/svg" width="100%"><rect fill="#ffffff" width="540" height="450"></rect><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#FC726E"></stop></linearGradient><pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900"><g fill-opacity="0.5"><polygon fill="#444" points="90 150 0 300 180 300"></polygon><polygon points="90 150 180 0 0 0"></polygon><polygon fill="#AAA" points="270 150 360 0 180 0"></polygon><polygon fill="#DDD" points="450 150 360 300 540 300"></polygon><polygon fill="#999" points="450 150 540 0 360 0"></polygon><polygon points="630 150 540 300 720 300"></polygon><polygon fill="#DDD" points="630 150 720 0 540 0"></polygon><polygon fill="#444" points="810 150 720 300 900 300"></polygon><polygon fill="#FFF" points="810 150 900 0 720 0"></polygon><polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon><polygon fill="#444" points="990 150 1080 0 900 0"></polygon><polygon fill="#DDD" points="90 450 0 600 180 600"></polygon><polygon points="90 450 180 300 0 300"></polygon><polygon fill="#666" points="270 450 180 600 360 600"></polygon><polygon fill="#AAA" points="270 450 360 300 180 300"></polygon><polygon fill="#DDD" points="450 450 360 600 540 600"></polygon><polygon fill="#999" points="450 450 540 300 360 300"></polygon><polygon fill="#999" points="630 450 540 600 720 600"></polygon><polygon fill="#FFF" points="630 450 720 300 540 300"></polygon><polygon points="810 450 720 600 900 600"></polygon><polygon fill="#DDD" points="810 450 900 300 720 300"></polygon><polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon><polygon fill="#444" points="990 450 1080 300 900 300"></polygon><polygon fill="#222" points="90 750 0 900 180 900"></polygon><polygon points="270 750 180 900 360 900"></polygon><polygon fill="#DDD" points="270 750 360 600 180 600"></polygon><polygon points="450 750 540 600 360 600"></polygon><polygon points="630 750 540 900 720 900"></polygon><polygon fill="#444" points="630 750 720 600 540 600"></polygon><polygon fill="#AAA" points="810 750 720 900 900 900"></polygon><polygon fill="#666" points="810 750 900 600 720 600"></polygon><polygon fill="#999" points="990 750 900 900 1080 900"></polygon><polygon fill="#999" points="180 0 90 150 270 150"></polygon><polygon fill="#444" points="360 0 270 150 450 150"></polygon><polygon fill="#FFF" points="540 0 450 150 630 150"></polygon><polygon points="900 0 810 150 990 150"></polygon><polygon fill="#222" points="0 300 -90 450 90 450"></polygon><polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon><polygon fill="#FFF" points="180 300 90 450 270 450"></polygon><polygon fill="#666" points="180 300 270 150 90 150"></polygon><polygon fill="#222" points="360 300 270 450 450 450"></polygon><polygon fill="#FFF" points="360 300 450 150 270 150"></polygon><polygon fill="#444" points="540 300 450 450 630 450"></polygon><polygon fill="#222" points="540 300 630 150 450 150"></polygon><polygon fill="#AAA" points="720 300 630 450 810 450"></polygon><polygon fill="#666" points="720 300 810 150 630 150"></polygon><polygon fill="#FFF" points="900 300 810 450 990 450"></polygon><polygon fill="#999" points="900 300 990 150 810 150"></polygon><polygon points="0 600 -90 750 90 750"></polygon><polygon fill="#666" points="0 600 90 450 -90 450"></polygon><polygon fill="#AAA" points="180 600 90 750 270 750"></polygon><polygon fill="#444" points="180 600 270 450 90 450"></polygon><polygon fill="#444" points="360 600 270 750 450 750"></polygon><polygon fill="#999" points="360 600 450 450 270 450"></polygon><polygon fill="#666" points="540 600 630 450 450 450"></polygon><polygon fill="#222" points="720 600 630 750 810 750"></polygon><polygon fill="#FFF" points="900 600 810 750 990 750"></polygon><polygon fill="#222" points="900 600 990 450 810 450"></polygon><polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon><polygon fill="#444" points="180 900 270 750 90 750"></polygon><polygon fill="#FFF" points="360 900 450 750 270 750"></polygon><polygon fill="#AAA" points="540 900 630 750 450 750"></polygon><polygon fill="#FFF" points="720 900 810 750 630 750"></polygon><polygon fill="#222" points="900 900 990 750 810 750"></polygon><polygon fill="#222" points="1080 300 990 450 1170 450"></polygon><polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon><polygon points="1080 600 990 750 1170 750"></polygon><polygon fill="#666" points="1080 600 1170 450 990 450"></polygon><polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon></g></pattern></defs><rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect><rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect></svg></div>
    <div class="card__avatar"><svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" fill="#ff8475" r="60"></circle><circle cx="64" cy="64" fill="#f85565" opacity=".4" r="48"></circle><path d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z" fill="#7f3838"></path><path d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z" fill="#393c54" opacity=".4"></path><circle cx="89" cy="65" fill="#fbc0aa" r="7"></circle><path d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z" fill="#4bc190"></path><path d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z" fill="#356cb6" opacity=".3"></path><path d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z" fill="#356cb6" opacity=".3"></path><path d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z" fill="#fff"></path><path d="m64 88.75v9.75" fill="none" stroke="#fbc0aa" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"></path><circle cx="39" cy="65" fill="#fbc0aa" r="7"></circle><path d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z" fill="#ffd8c9"></path><path d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z" fill="#bc5b57"></path><path d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5" style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"></path><path d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3" style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"></path><circle cx="76" cy="62.28" fill="#515570" r="3"></circle><circle cx="52" cy="62.28" fill="#515570" r="3"></circle><ellipse cx="50.42" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse><ellipse cx="77.58" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m64 67v4" stroke="#fbc0aa" stroke-width="4"></path><path d="m55 56h-9.25" opacity=".2" stroke="#515570" stroke-width="2"></path><path d="m82 56h-9.25" opacity=".2" stroke="#515570" stroke-width="2"></path></g><path d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z" fill="#f85565" opacity=".4"></path><path d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z" fill="#f85565"></path></svg></div>
    <div class="card__title fs-5">${activeUser.name}</div>
    <div class="card__subtitle fs-5 w-100">Email : ${activeUser.email}</div>
    <div class="card__subtitle   fs-5 w-100">Phone : ${activeUser.phone}</div>
    
</div>
        
             <li><a class="dropdown-item" >
             <button class="btn btn-danger w-100" onclick="logout()">
  LogOut
</button>
             
             
             </a></li>
      
      `

      :
      `


      <div class="card1 mb-0 pb-0">
    <div class="card__img"><svg xmlns="http://www.w3.org/2000/svg" width="100%"><rect fill="#ffffff" width="540" height="450"></rect><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#FC726E"></stop></linearGradient><pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900"><g fill-opacity="0.5"><polygon fill="#444" points="90 150 0 300 180 300"></polygon><polygon points="90 150 180 0 0 0"></polygon><polygon fill="#AAA" points="270 150 360 0 180 0"></polygon><polygon fill="#DDD" points="450 150 360 300 540 300"></polygon><polygon fill="#999" points="450 150 540 0 360 0"></polygon><polygon points="630 150 540 300 720 300"></polygon><polygon fill="#DDD" points="630 150 720 0 540 0"></polygon><polygon fill="#444" points="810 150 720 300 900 300"></polygon><polygon fill="#FFF" points="810 150 900 0 720 0"></polygon><polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon><polygon fill="#444" points="990 150 1080 0 900 0"></polygon><polygon fill="#DDD" points="90 450 0 600 180 600"></polygon><polygon points="90 450 180 300 0 300"></polygon><polygon fill="#666" points="270 450 180 600 360 600"></polygon><polygon fill="#AAA" points="270 450 360 300 180 300"></polygon><polygon fill="#DDD" points="450 450 360 600 540 600"></polygon><polygon fill="#999" points="450 450 540 300 360 300"></polygon><polygon fill="#999" points="630 450 540 600 720 600"></polygon><polygon fill="#FFF" points="630 450 720 300 540 300"></polygon><polygon points="810 450 720 600 900 600"></polygon><polygon fill="#DDD" points="810 450 900 300 720 300"></polygon><polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon><polygon fill="#444" points="990 450 1080 300 900 300"></polygon><polygon fill="#222" points="90 750 0 900 180 900"></polygon><polygon points="270 750 180 900 360 900"></polygon><polygon fill="#DDD" points="270 750 360 600 180 600"></polygon><polygon points="450 750 540 600 360 600"></polygon><polygon points="630 750 540 900 720 900"></polygon><polygon fill="#444" points="630 750 720 600 540 600"></polygon><polygon fill="#AAA" points="810 750 720 900 900 900"></polygon><polygon fill="#666" points="810 750 900 600 720 600"></polygon><polygon fill="#999" points="990 750 900 900 1080 900"></polygon><polygon fill="#999" points="180 0 90 150 270 150"></polygon><polygon fill="#444" points="360 0 270 150 450 150"></polygon><polygon fill="#FFF" points="540 0 450 150 630 150"></polygon><polygon points="900 0 810 150 990 150"></polygon><polygon fill="#222" points="0 300 -90 450 90 450"></polygon><polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon><polygon fill="#FFF" points="180 300 90 450 270 450"></polygon><polygon fill="#666" points="180 300 270 150 90 150"></polygon><polygon fill="#222" points="360 300 270 450 450 450"></polygon><polygon fill="#FFF" points="360 300 450 150 270 150"></polygon><polygon fill="#444" points="540 300 450 450 630 450"></polygon><polygon fill="#222" points="540 300 630 150 450 150"></polygon><polygon fill="#AAA" points="720 300 630 450 810 450"></polygon><polygon fill="#666" points="720 300 810 150 630 150"></polygon><polygon fill="#FFF" points="900 300 810 450 990 450"></polygon><polygon fill="#999" points="900 300 990 150 810 150"></polygon><polygon points="0 600 -90 750 90 750"></polygon><polygon fill="#666" points="0 600 90 450 -90 450"></polygon><polygon fill="#AAA" points="180 600 90 750 270 750"></polygon><polygon fill="#444" points="180 600 270 450 90 450"></polygon><polygon fill="#444" points="360 600 270 750 450 750"></polygon><polygon fill="#999" points="360 600 450 450 270 450"></polygon><polygon fill="#666" points="540 600 630 450 450 450"></polygon><polygon fill="#222" points="720 600 630 750 810 750"></polygon><polygon fill="#FFF" points="900 600 810 750 990 750"></polygon><polygon fill="#222" points="900 600 990 450 810 450"></polygon><polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon><polygon fill="#444" points="180 900 270 750 90 750"></polygon><polygon fill="#FFF" points="360 900 450 750 270 750"></polygon><polygon fill="#AAA" points="540 900 630 750 450 750"></polygon><polygon fill="#FFF" points="720 900 810 750 630 750"></polygon><polygon fill="#222" points="900 900 990 750 810 750"></polygon><polygon fill="#222" points="1080 300 990 450 1170 450"></polygon><polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon><polygon points="1080 600 990 750 1170 750"></polygon><polygon fill="#666" points="1080 600 1170 450 990 450"></polygon><polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon></g></pattern></defs><rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect><rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect></svg></div>
    <div class="card__avatar"><svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" fill="#ff8475" r="60"></circle><circle cx="64" cy="64" fill="#f85565" opacity=".4" r="48"></circle><path d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z" fill="#7f3838"></path><path d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z" fill="#393c54" opacity=".4"></path><circle cx="89" cy="65" fill="#fbc0aa" r="7"></circle><path d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z" fill="#4bc190"></path><path d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z" fill="#356cb6" opacity=".3"></path><path d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z" fill="#356cb6" opacity=".3"></path><path d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z" fill="#fff"></path><path d="m64 88.75v9.75" fill="none" stroke="#fbc0aa" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"></path><circle cx="39" cy="65" fill="#fbc0aa" r="7"></circle><path d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z" fill="#ffd8c9"></path><path d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z" fill="#bc5b57"></path><path d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5" style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"></path><path d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3" style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"></path><circle cx="76" cy="62.28" fill="#515570" r="3"></circle><circle cx="52" cy="62.28" fill="#515570" r="3"></circle><ellipse cx="50.42" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse><ellipse cx="77.58" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m64 67v4" stroke="#fbc0aa" stroke-width="4"></path><path d="m55 56h-9.25" opacity=".2" stroke="#515570" stroke-width="2"></path><path d="m82 56h-9.25" opacity=".2" stroke="#515570" stroke-width="2"></path></g><path d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z" fill="#f85565" opacity=".4"></path><path d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z" fill="#f85565"></path></svg></div>
    <div class="card__title fs-5"><h4>No User Found</h4></div>
    <div class="card__subtitle fs-5"><p>Login First</p> </div>
    
</div>
        
         <div style="width:300px mt-0 pt-0" class"border border-danger">
             
                      <li><hr class="dropdown-divider py-3"></li>
                    <li>     <a href="register.html"><button  class="btn btn-danger w-100 mb-2">👤SignIn</button></a></li>
                    <li>   <a href="login.html" ><button  class="btn btn-warning w-100">👤Login</button></a></li>
                 
   </div>
      
      `
  }
`

}
// auth end


let featured_books = document.getElementById("featured_books")
//feature books start

window.onload= showData(data);
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



// slider start
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// slider end
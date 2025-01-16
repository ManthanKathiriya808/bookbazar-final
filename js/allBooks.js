
// all books start

 allBook = document.getElementById("allBook")
 


window.onload = allBooks(data)
window.onload = authData()
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
document.getElementById("cartLen").innerHTML = cartData.length
function inCount(id){
    cartData = cartData.map((ele)=>{
        if(ele.id==id){
            ele.quantity+=1
        }
        return ele
    })
  
    setcartData(cartData)
    allBooks(data)
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
    allBooks(data)
  
   
  
  }
  
function allBooks(data){

    activeUser = JSON.parse(localStorage.getItem("activeUser")) 
    allBook.innerHTML= ""

    data.map((ele) => {
        allBook.innerHTML += `
      
      
              <div class="col  ">
                        <div class="shadow d-flex flex-column   justify-content-end align-items-center text-center p-3 h-100  " data-aos="fade-up"
            data-aos-duration="500" >
                  <div class="box light-text-color w-100 p-3 h-100  mb-4 " >
                  <img src="${ele.image}" class=" img-fluid h-100" style="width:150px !important"  alt="${ele.title}">
                  </div>

                            
                            <div class="card-body w-100 d-flex flex-column   justify-content-end align-items-center text-center">
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
// all books end



// cartdata start



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

  allBooks(data)
  }

  else{
    location.href = "registation.html"
  }

  
}
// cartdata end






// auth start


function logout(){
  localStorage.removeItem("activeUser")
  location.reload();
}


// aos start 



// aos end
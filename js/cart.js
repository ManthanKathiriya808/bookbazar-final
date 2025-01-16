


let cartData = JSON.parse(localStorage.getItem("cartData")) || []
window.onload= showCart(cartData);
window.onload= showTotal();



document.getElementById("cartLen").innerHTML = cartData.length

function setcartData(cd){
    localStorage.setItem("cartData",JSON.stringify(cd))
}


function inCount(id){
    cartData = cartData.map((ele)=>{
        if(ele.id==id){
            ele.quantity+=1
        }
        return ele
    })

    setcartData(cartData)
    showCart(cartData)

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
    showCart(cartData)

   

  }
  


function deleCartData(id){
    let deleData = cartData.filter((ele) => ele.id != id)

    setcartData(deleData)
    cartData = JSON.parse(localStorage.getItem("cartData"))

    showCart(cartData)
}

function showCart(cartData){
    let cart = document.getElementById("cart")
    cart.innerHTML =""
    document.getElementById("cartLen").innerHTML = cartData.length
    cartData.map((ele) => {

        cart.innerHTML += `
                        <tr class="align-middle">
                            <td>
                                <img src=${ele.image} class="img-fluid p-2" style="width:100px !important" alt="">
                            </td>
                            <td>
                                ${ele.title}
                            </td>
                            <td class="qprice">
                                ${ele.price * ele.quantity}
                            </td>
                            <td class="align-middle">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-dark btn-sm"  onclick="inCount(${ele.id})">
                                  <i class="ri-add-fill  "></i></button>
                                <button type="button" class="btn btn-outline-dark disabled btn-sm">
                                  ${ele.quantity}
                                  </button>
                                <button type="button" class="btn btn-danger btn-sm" onclick="decCount(${ele.id})"><i class="ri-subtract-fill"  ></i></button>
                              </div>
                                      
                                     
                                     </td>
                                     <td class="align-middle"><button class="btn-close" onclick="deleCartData(${ele.id})" </button></td>
                          </tr>
        `
    })
    
    showTotal()

}


function buyNow(){
  location.href = "checkout.html"

}
let qPrice = document.querySelectorAll(".qprice")
function showTotal(){

    let total =0;

    let qPrice = document.querySelectorAll(".qprice")

    qPrice.forEach((ele) => {
        total += +ele.innerHTML
    })

    let gtotal = document.getElementById("gtotal")
    gtotal.innerHTML=" "

    gtotal.innerHTML += `
    <tr class=" align-middle w-100">
                    <td><h3 class="heading  w-100">Grand Total</h3></td>
                    <td ><h5 class="text-end  pe-4">&#x20b9; ${total} /-</h5></td>
                    <td class=" ">
<a  class="  text-decoration-none text-white" onclick="buyNow()">
    <div data-tooltip= "&#x20b9; ${total}" class="button-shop ">
<div class="button-wrapper">
  <div class="text ">Buy Now</div>
    <span class="icon" >
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>
</a>

</td>
                </tr>
       
    `

   
}
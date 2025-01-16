


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


function showTotal(){

    let total =0;

    let qPrice = document.querySelectorAll(".qprice")

    qPrice.forEach((ele) => {
        total += +ele.innerHTML
    })

    let gtotal = document.getElementById("gtotal")
    gtotal.innerHTML=" "

    gtotal.innerHTML += `
       <h5 class="">&#x20b9; ${total} /-</h5>
    `
}
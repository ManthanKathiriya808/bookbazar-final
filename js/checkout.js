
document.getElementById("cartLen").innerHTML = cartData.length

let promo = document.getElementById("promo")
let promoTotal = document.getElementById("promoTotal")
document.getElementById("cartLen1").innerHTML = cartData.length
window.onload = showPromo(cartData)
window.onload= promoTotals();
cartData = JSON.parse(localStorage.getItem("cartData")) || []
window.onload= showCart(cartData);
window.onload = authData()



 
function showPromo(cartData){
    
 
    cartData.map((ele) => {

        promo.innerHTML += `
                <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div >
              <h6 class="my-0">${ele.title}</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">&#x20b9;${ele.price * ele.quantity}</span>
          </li>
        `
    })
}

 qPrice1 = document.querySelectorAll(".qprice1")


function promoTotals(){
    let total1 =0;

    let qPrice1 = document.querySelectorAll(".qprice1")

    qPrice1.forEach((ele) => {
        total1 += +ele.innerHTML
    })


let promoTotal = document.getElementById("promoTotal")
    promoTotal.innerHTML = ""

    promoTotal.innerHTML +=`
    
        <span>Total (INR)</span>
          <strong>${total1}</strong>
    `
    


}










function orderSuccess(){

    location.href= "unsuccessPayment.html"
}
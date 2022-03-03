let inputBtn = document.querySelector(".count .link");
let addBtn = document.querySelector(".count .plus");
let subBtn = document.querySelector(".count .minus");

let priceDis = document.querySelector(".price-box ");
let befDis = priceDis.querySelector(".bot .discount");
let aftDis = priceDis.querySelector(".top .headline");

let mobV = document.querySelector(".hero .mobile-section");
let x = 1;

let deskV = document.querySelector(".preview");
let deskI = deskV.getElementsByClassName("box");
let mainPic = document.querySelector(".main-pic");

let mobileNav = document.querySelector(" .navbar-left .mobile-nav");
let links = document.querySelector(".navbar-mobile-view");
let exit = document.querySelector(".exit");

let cart = document.querySelector(".cart");
let holder = document.querySelector('.items');
let addToCart = document.querySelector('.full-btn');

let deleteCart = document.querySelector('.bxs-trash');

let holderTwo = document.querySelector('.items').addEventListener('click', event => {
  if (event.target.matches('.bxs-trash')) {
    cart.classList.remove('pointer');
    holder.children[0].remove();
    holder.innerHTML = empty;
  };
});



let empty = `<div class="empty link">Your cart is empty</div>`;

function getData(number,total){
  let checkout = `<div class="checkout">
    <div class="description link">
      <div class="item-photo">
        <img src="./images/image-product-1-thumbnail.jpg" alt="item">
      </div>
      <div class="item-price">
        <div class="name">Fall Limited Edition Sneakers</div>
        <div class="q-p">
          <div class="item-price-total">$125.00</div>
          <div class="item-quantity-total">x ${number}</div>
          <div class="item-total">${total}</div>
        </div>
      </div>
      <i class='bx bxs-trash'></i>
    </div>
    <a href="#" class="checkout-btn btn">Checkout</a>
    </div>`;
  return checkout;
}


addToCart.onclick = function(){
  if(holder.children[0].classList.contains('checkout')){
    cart.setAttribute('data-before', parseInt(cart.getAttribute('data-before')) + parseInt(inputBtn.innerHTML) );
    holder.innerHTML = getData(parseInt(inputBtn.innerHTML) + parseInt(document.querySelector('.item-quantity-total').innerHTML.replace('x','')) , '$' + (parseInt(aftDis.innerHTML.replace('$','')) + parseInt(document.querySelector('.item-total').innerHTML.replace('$','')) ));
  }else{
    holder.children[0].remove();
    cart.classList.add('pointer');
    cart.setAttribute('data-before', inputBtn.innerHTML);
    holder.innerHTML = getData(inputBtn.innerHTML,aftDis.innerHTML);
  }
  
}



cart.querySelector("img").onclick = function (e) {
  e.stopPropagation();
  cart.querySelector(".cart-inv").classList.toggle("active");
};

document.querySelector('main').addEventListener('click', function(e){
  cart.querySelector('.cart-inv').classList.remove('active');
})

mobileNav.onclick = function () {
  links.classList.add("mobile-menu");
  document.body.classList.add("popup");
};

exit.onclick = function () {
  links.classList.remove("mobile-menu");
  document.body.classList.remove("popup");
};

for (let i = 0; i < deskI.length; i++) {
  deskI[i].onclick = function () {
    for (let i = 0; i < deskI.length; i++) {
      deskI[i].classList.remove("clicked");
    }
    this.classList.add("clicked");
    mainPic.setAttribute(
      "src",
      `${this.children[0].getAttribute("src").replace("-thumbnail", "")}`
    );
  };
}

addBtn.onclick = function () {
  if (inputBtn.innerHTML > 14) {
  } else {
    ++inputBtn.innerHTML;
    befDis.innerHTML = "$" + 250 * inputBtn.innerHTML;
    aftDis.innerHTML = "$" + 125 * inputBtn.innerHTML;
  }
};

subBtn.onclick = function () {
  if (inputBtn.innerHTML > 1) {
    --inputBtn.innerHTML;
    befDis.innerHTML = "$" + (befDis.innerHTML.slice(1) - 250);
    aftDis.innerHTML = "$" + (aftDis.innerHTML.slice(1) - 125);
  } else {
    inputBtn.innerHTML = 1;
  }
};

mobV.querySelector(".right").onclick = function () {
  ++x;
  if (x === 5) {
    x = 1;
  }
  mobV.style.backgroundImage = `url('../../images/image-product-${x}.jpg')`;
};

mobV.querySelector(".left").onclick = function () {
  --x;
  if (x === 0) {
    x = 4;
  }
  mobV.style.backgroundImage = `url('../../images/image-product-${x}.jpg')`;
};

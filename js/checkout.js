function postAddress() {
    const fname = localStorage.getItem('fullname');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');
    const city = localStorage.getItem('city');
    const typeAdress = localStorage.getItem('typeAddress');
}

function payment() {
    confirm('Do you want to pay for it');
}

function getCart() {
    var cart = document.getElementsByClassName('cart-wrapper');
    for (i = 0; i < cart.length; i++) {
        cart[i].onclick = function() {
            var cartDetail = document.querySelector('input');
        }
    }
}
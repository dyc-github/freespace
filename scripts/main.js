for (let o = 1; o <=3; o++) {
    for (let i = 0; i < 4; i++) {
        addItem(o);
    }
}

addToCart();
addToCart();



function addItem(itemContainerNumber) {
    let template = document.getElementById('itemTemplate');
    let itemClone = template.content.cloneNode(true);

    let itemContainer = document.getElementById( 'itemContainer' + itemContainerNumber);
    itemContainer.appendChild(itemClone);
}
function addToCart() {
    let template = document.getElementById('cartItem');
    let itemClone = template.content.cloneNode(true);

    let cart = document.getElementById( 'cart' );
    cart.appendChild(itemClone);
}
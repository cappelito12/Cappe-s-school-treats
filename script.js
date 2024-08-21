// script.js
let basePrice = 0;

function showMenu(drinkName, price) {
    document.getElementById('menu-drink-name').innerText = drinkName;
    document.getElementById('final-price').innerText = `Pris: ${price} kr`;
    basePrice = price;
    document.getElementById('variant-menu').style.display = 'flex';
}

function closeMenu() {
    document.getElementById('variant-menu').style.display = 'none';
}

function selectVariant(variant) {
    let finalPrice = basePrice;
    if (variant === 'sur') {
        finalPrice += 3;
    }
    document.getElementById('final-price').innerText = `Pris: ${finalPrice} kr`;
}

// Shorted version of getElementById()
function getElement(id = ""){
    return document.getElementById(id);
};


function getInputValue(id) {
    return parseInt(getElement(id).value);
}


function calculateTotal() {
    const phoneQuantity = getInputValue("phone-quantity");
    const caseQuantity = getInputValue("case-quantity");

    const subtotal = (phoneQuantity * 1219) + (caseQuantity * 59);
    const tax = Math.round(subtotal * 0.1);
    
    getElement("subtotal").innerHTML = subtotal;
    getElement("tax").innerHTML = tax;
    getElement("grand-total").innerHTML = subtotal + tax;
}


// Handling cart
function handleProduct(product, isIncrease) {
    const productInput = getElement(`${product}-quantity`);
    let productQuantity = parseInt(productInput.value);
    
    if (isIncrease) {
        productQuantity++;
    } else if (isIncrease === false && productQuantity > 1) {
        productQuantity--;
    };
    productInput.value = productQuantity;

    let productPrice = 0;
    if (product === "phone") {
        productPrice = 1219 * productQuantity;
    } else if (product === "case") {
        productPrice = 59 * productQuantity;
    };
    
    getElement(`${product}-price`).innerHTML = productPrice;
    calculateTotal();
};
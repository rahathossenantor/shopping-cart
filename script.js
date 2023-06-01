// Shorted version of getElementById()
function getElement(id = ""){
    return document.getElementById(id);
}

// Function to handle products
function handleCase(isIncrease){
    let caseQuantity = getElement("case-quantity");
    caseQuantity = parseInt(caseQuantity.value);
    if (isIncrease) {
        caseQuantity++;
    }
    if (isIncrease === false && caseQuantity > 0) {
        caseQuantity--;
    }
    getElement("case-quantity").value = caseQuantity;

    let casePrice = 59 * caseQuantity;
    getElement("case-price").innerHTML = casePrice;
}

function handlePhone(isIncrease){
    let phoneQuantity = getElement("phone-quantity");
    phoneQuantity = parseInt(phoneQuantity.value);
    if (isIncrease) {
        phoneQuantity++;
    }
    if (isIncrease === false && phoneQuantity > 0) {
        phoneQuantity--;
    }
    getElement("phone-quantity").value = phoneQuantity;

    let phonePrice = 1219 * phoneQuantity;
    getElement("phone-price").innerHTML = phonePrice;
}
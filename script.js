// Shorted version of getElementById()
function getElement(id = ""){
    return document.getElementById(id);
}

// Adding event listenars on case buttons
getElement("case-plus-btn").addEventListener("click", function(){
    handleProduct(true)
});

getElement("case-minus-btn").addEventListener("click", function(){
    handleProduct(false)
});

function handleProduct(isIncrease) {
    let caseQuantity = getElement("case-quatity");
    caseQuantity = parseInt(caseQuantity.value);
    if (isIncrease) {
        caseQuantity++;
    }
    if (isIncrease === false && caseQuantity > 0) {
        caseQuantity--;
    }
    getElement("case-quatity").value = caseQuantity;

    let casePrice = 59 * caseQuantity;
    getElement("case-price").innerHTML = casePrice;
}
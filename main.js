function updateProductNumber(productName, prices, isincrement) {

    const marsInput = document.getElementById(`${productName}-Quantity`);
    let marsText = marsInput.value;
    if (isincrement == true) {
        marsText = parseFloat(marsText) + 1;
    } else if (marsText > 0) {

        marsText = parseFloat(marsText) - 1;
    }


    marsInput.value = marsText;

    const alltotal = document.getElementById(`${productName}-total`).innerText = marsText * prices;
    calculateTotal()

}

function getInputValue(productName) {
    const marsInput = document.getElementById(`${productName}-Quantity`);
    let marsText = parseFloat(marsInput.value);
    return marsText;


}

function calculateTotal() {

    const marsTotal = getInputValue('mars') * 5000;
    const moonTotal = getInputValue('moon') * 6000;
    const total = marsTotal + moonTotal;

    document.getElementById('cost-total').innerText = total;

}



document.getElementById('marsPlusButton').addEventListener('click', () => {



    updateProductNumber('mars', 5000, true)

})


document.getElementById('marsminusButton').addEventListener('click', () => {


    updateProductNumber('mars', 5000, false)


})


document.getElementById('moonplusButton').addEventListener('click', () => {

    updateProductNumber('moon', 6000, true)


})

document.getElementById('moonminusButton').addEventListener('click', () => {

    updateProductNumber('moon', 6000, false)


})
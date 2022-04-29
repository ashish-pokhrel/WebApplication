window.onload = function () {
    const subTotal = document.getElementById("subtotal");
    const tip = document.getElementById("tip");
    const totalRemaining = document.getElementById("total");
    const calculateTip = document.getElementById("btn");

    calculateTip.onclick = function () {
        const totalAmount = parseFloat(subTotal.value) + (subTotal.value * (tip.value / 100));
        totalRemaining.innerHTML = "$" + totalAmount;
    }

}

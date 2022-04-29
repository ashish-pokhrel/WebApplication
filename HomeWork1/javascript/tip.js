window.onload = function () {
    const subTotal = document.getElementById("subtotal");
    const tip = document.getElementById("tip");
    const totalRemaining = document.getElementById("total");
    const calculateTip = document.getElementById("btn");

    calculateTip.onclick = function () {
        const totalAmount = subTotal.value + (subTotal.value * (tip.value / 100));
        totalRemaining.innerHTML = "$" + totalAmount;
    }

}

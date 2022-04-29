
window.onload = function () {

    var onBigDecoration = document.getElementById("bigDecoration");
    var onBling = document.getElementById("bling");
    var textArea = document.getElementById("text");
    var bodySection = document.getElementById("bodySection");
    let url = "./images/background.gif"

    function onPageLoad() {
        alert("Hello, world!");
    }


    onBigDecoration.onclick = function onBigDecorationClick() {
        if (textArea.style.fontSize == null || textArea.style.fontSize == '')
            textArea.style.fontSize = "12pt";


        setInterval(function () {
            textArea.style.fontSize = parseFloat(textArea.style.fontSize) + 2 + "pt";
        }, 500);
    }

    onBling.onclick = function onBlink() {
        if (this.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            bodySection.style.backgroundImage = `url(${url})`;
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
            bodySection.style.backgroundImage = "none";
        }
    };
}

window.onload = function () {

    const onBigDecoration = document.getElementById("bigDecoration");
    const onBling = document.getElementById("bling");
    const textArea = document.getElementById("text");
    const bodySection = document.getElementById("bodySection");
    const atinlayButton = document.getElementById("atinlay");
    const malkovitchButton = document.getElementById("malkovitch");
    const url = "./images/background.gif"

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

    atinlayButton.onclick = function onBigDecorationClick() {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let value = textArea.value;
        if (value.length > 0) {
            let slicedValue = value.slice(1);
            if (isVowel(value.charAt(0).toLowerCase())) {
                textArea.value = (slicedValue + "-" + "ay" + value.charAt(0));
            }
            else {
                textArea.value = (slicedValue + "-" + value.charAt(0) + "ay");
            }
        }
    }


    malkovitchButton.onclick = function onBigDecorationClick() {
        let value = textArea.value;
        if (value.length >= 5) {
            let malkovichString = "Malkovich" + value.slice(5);
            textArea.value = malkovichString;
        }
    }

    function isVowel(char) {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
    }
}
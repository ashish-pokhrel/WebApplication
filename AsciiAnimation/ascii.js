$(document).ready(function () {
    const startButton = "#start";
    const stopButton = "#stop";
    const animation = "#animation";
    const size = "#size";
    const speed = "#speed";
    const textArea = "#mytextarea";

    function onLoad() {
        $(stopButton).prop("disabled", true);
    }

    $(startButton).click(function(){
        var whichOne = BIKE;
       

        setInterval(function(){
            $("#mytextarea").val(whichOne);
        },250)
    })

    onLoad();
})
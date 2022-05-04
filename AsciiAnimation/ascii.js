$(document).ready(function () {
    const startButton = $("#start");
    const stopButton = $("#stop");
    const animation = $("#animation");
    const size = $("#size");
    const speed = $("#speed");
    const textArea = $("#mytextarea");
    let currentValueInTestBox = "";
    let startInterval = "";
    const blank = BLANK;
    const exercise = EXERCISE;
    const juggler = JUGGLER;
    const bike = BIKE;
    const dive = DIVE;
    const custom = CUSTOM;

    function disabledStartButton(isDisabled) {
        startButton.prop("disabled", isDisabled);
    }
    function disabledStopButton(isDisabled) {
        stopButton.prop("disabled", isDisabled);
    }

    function onLoad() {
        disabledStopButton(true);
    }

    startButton.click(function () {
        currentValueInTestBox = textArea.val();
        var whichOne = BIKE;
        var userInputData = currentValueInTestBox.split('');
        textArea.val('');

        startInterval = setInterval(function () {
            for (const i of userInputData) {
                textArea.val(textArea.val() + "\n" + i +
                    "\n" +
                    "=====\n");
            }
        }, 250)
        disabledStartButton(true);
        disabledStopButton(false);
    })

    stopButton.click(function () {
        textArea.val(currentValueInTestBox);
        disabledStopButton(true);
        disabledStartButton(false)
        clearInterval(startInterval);
    })

    function startAnimation() {
        setInterval(function () {
            textArea.animate({ left: '100%' });
        }, 250)
    }

    animation.change(function () {
        const selectedValue = $(this).find(":selected").val();
        switch (selectedValue) {
            case 'blank':
                textArea.val(blank);
                break;
            case 'exercise':
                textArea.val(exercise);
                break;
            case 'juggler':
                textArea.val(juggler);
                break;
            case 'bike':
                textArea.val(bike);
                startAnimation();
                break;
            case 'dive':
                textArea.val(dive);
                break;
            case 'custom':
                textArea.val(custom);
                break;
        }
    });

    onLoad();
})
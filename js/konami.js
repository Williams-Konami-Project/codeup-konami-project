"use strict";

$(function(){
    /**
     * global variables.
     *
     *      [] array to hold all key inputs
     *      [] array for correct Konami code
     *      boolean to check if code is correct.
     */
    let keyArr = [];
    let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let isCode = false;

    // adjusting volume for audio elements.
    document.getElementById("invalid-audio-volume").volume = 0.1;
    document.getElementById("correct-audio-volume").volume = 0.1;

    /**
     * when a key is released, add it to an array of keys inputted unless
     * Enter/Return is pressed. If Enter/return pressed, then check for
     * a match. display and play media accordingly and reset variables.
     */
    $(document).keyup(function(event){
        if(event.key.toString() === "Enter"){
            if(checkCodeMatch()){
                playCorrectCodeAudio();
                displayCorrectCodeImage();
            } else {
                playInvalidCodeAudio();
                displayInvalidCodeImage();
            }
            resetVariables();
        }else{
            keyArr.push(event.key.toString());
        }
    });

    /**
     * checks to see if code input matches the Konami code
     * arrays of both checked for length and joined string values.
     * @returns {boolean}
     */
    function checkCodeMatch(){
        if(konamiCode.length === keyArr.length){
            if(konamiCode.join(" ").toLowerCase() === keyArr.join(" ").toLowerCase()){
                isCode = true;
            }
        }
        return isCode;
    }

    /**
     * plays the valid/correct code audio.
     */
    function playCorrectCodeAudio(){
        $(".audio-correct-code").trigger("play");
    }

    /**
     * plays the invalid code audio
     */
    function playInvalidCodeAudio(){
        $(".audio-invalid-code").trigger("play");
    }

    /**
     * displays a gif when called.
     * if correct code inputted then
     * gifs are set accordingly.
     */
    function displayCorrectCodeImage(){
        if($("#code-correct-gif").hasClass("d-none")){
            $("#code-correct-gif").removeClass("d-none");
        }
        if(!$("#code-invalid-gif").hasClass("d-none")){
            $("#code-invalid-gif").addClass("d-none");
        }
    }

    /**
     * displays a gif when called.
     * if invalid code inputted then
     * gifs are set accordingly.
     */
    function displayInvalidCodeImage(){
        if($("#code-invalid-gif").hasClass("d-none")){
            $("#code-invalid-gif").removeClass("d-none");
        }
        if(!$("#code-correct-gif").hasClass("d-none")){
            $("#code-correct-gif").addClass("d-none");
        }
    }

    /**
     * resets all variables to default values
     * should be called each time a code input
     * has been checked.
     */
    function resetVariables(){
        keyArr = [];
        isCode = false;
    }

});
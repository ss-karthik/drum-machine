
let numberOfButtons = document.querySelectorAll('.d').length;



//detects button clicks and passes on to soundPlayer
for (i=0; i<numberOfButtons; i++) {
    document.querySelectorAll('.d')[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;
        soundPlayer(buttonInnerHTML);
        }
    )
}



//detects key presses and passes on to soundPlayer
document.addEventListener("keydown", function(event) {
    soundPlayer(event.key);
} )





//this makes the sounds, by cheking the input value
function soundPlayer (key) {
    switch (key) {
        case "w":
            kickDrm();
        break;
        
        case "d":
            snareDrm();
        break;
        
        case "g":
            crashDrm();
        break;
        
        case "h":
            hatDrm();
        break;
        
        case "j":
            tomOneDrm();
        break;

        case "k":
            tomTwoDrm();
        break;

        case "l":
            tomThreeDrm();
        break;

        default: console.log(key);
}
}









//the functions which actually play each audio file when called on
function kickDrm () {
    var audio = new Audio('sounds/kick.mp3');
    audio.play();
}

function snareDrm () {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}

function crashDrm () {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}

function hatDrm () {
    var audio = new Audio('sounds/hi-hat.mp3');
    audio.play();
}

function tomOneDrm () {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

function tomTwoDrm () {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}

function tomThreeDrm () {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}

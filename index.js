//  Detect Button Press

var nOfDrums = document.querySelectorAll(".drum").length;
// Detect Button Press
for (var i = 0; i < nOfDrums; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
                var buttonClicked = this.innerHTML;
                makeAudio(buttonClicked);       // Making Sound
                animateButton(buttonClicked);  //Animating Button
    });
}
// Detect Key Press
document.addEventListener("keypress", function (e) {
        var keyPressed = e.key;
        makeAudio(keyPressed);         // Making Sound
        animateButton(keyPressed);     // Animate Button
});

// Making Audio Function

function makeAudio(key) {

        switch(key) {
                case "w" :
                        var audio = new Audio("sounds/w.mp3");
                        audio.play();
                break;
                case "a" :
                        var audioA = new Audio("sounds/a.mp3");
                        audioA.play();
                break;
                case "s" :
                        var audioS = new Audio("sounds/s.mp3");
                        audioS.play();
                break;
                case "d" :
                        var audioD = new Audio("sounds/d.mp3");
                        audioD.play();
                break;
                case "j" :
                        var audioJ = new Audio("sounds/j.mp3");
                        audioJ.play();
                break;
                case "k" :
                        var audioK = new Audio("sounds/k.mp3");
                        audioK.play();
                break;
                case "l" :
                        var audioL = new Audio("sounds/l.mp3");
                        audioL.play();
                break;
                default:
                        console.log(this.key);
                break;

        }
}

//     Creating Button Animation

function animateButton (buttonUsed) {

        var buttonUsed = document.querySelector("." + buttonUsed);

        buttonUsed.classList.add("pressed");

        setTimeout(function(){ buttonUsed.classList.remove("pressed");}, 100);
}
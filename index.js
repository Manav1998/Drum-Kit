function playAudio(audioFile){
    var audio = new Audio(audioFile);
    audio.play();
}

function buttonAnimation(letter){
    var activeBtn = document.querySelector("."+letter);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    },200);
}

function handleClick(letter){
    buttonAnimation(letter);
    switch(letter){
        case 'w':
            playAudio("sounds/tom-1.mp3");
            break;
        case 'a':
            playAudio("sounds/tom-2.mp3");
            break;
        case 's':
            playAudio("sounds/tom-3.mp3");
            break;
        case 'd':
            playAudio("sounds/tom-4.mp3");
            break;
        case 'j':
            playAudio("sounds/snare.mp3");
            break;
        case 'k':
            playAudio("sounds/crash.mp3");
            break;
        case 'l':
            playAudio("sounds/kick-bass.mp3");
            break;
        default:
            break;
    }
    
}

// Detecting button press
var btns = document.querySelectorAll(".set button");
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function() {
        handleClick(this.innerHTML);
    });
}


// Detecting Keyboard press
document.addEventListener("keydown", (event) => {
    handleClick(event.key);
});
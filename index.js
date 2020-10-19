
//Detect Button Click

  for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      let buttonInnerHTML = this.innerHTML;

      playSound(buttonInnerHTML);

    });

}


//Detect Keyboard Press

document.addEventListener("keydown", function(event) {

  playSound(event.key);

})


function playSound(key) {

  switch (key) {
    case "w":
      let audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "a":
      let audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    case "s":
      let audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    case "d":
      let audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;
    case "j":
      let audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;
    case "k":
      let audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    case "l":
      let audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }

}

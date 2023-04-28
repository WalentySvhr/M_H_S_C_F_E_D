let offset = 0; // зміщеня від лівого краю
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 1200; //offset +=256
    if (offset>5400){
        offset =0;
    }
    sliderLine.style.left = -offset + 'px';

});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 1200; //offset -/+=256
    if (offset<0){
        offset =5400;
    }
    sliderLine.style.left = -offset + 'px';

});
//*********************************************** */

var dropbox = document.querySelector(".program-box");

function settingsMenuToggle() {
    dropbox.classList.toggle("program-box-line");
    
}

var button = document.querySelector('.program-button');

button.addEventListener('click', function() {
  if (button.textContent === 'Закрити') {
    button.textContent = 'Відкрити';
  } else {
    button.textContent = 'Закрити';
  }
});





var dropboxTwo = document.querySelector(".program-box-two");

function myFunctionToggle() {
    dropboxTwo.classList.toggle("program-box-line");
}

var buttonTwo = document.querySelector(".program-button-two");

buttonTwo.addEventListener('click', function() {
  if (buttonTwo.textContent === 'Закрити') {
    buttonTwo.textContent = 'Відкрити';
  } else {
    buttonTwo.textContent = 'Закрити';
  }
});




var dropboxThree = document.querySelector(".program-box-three");
var buttonThree = document.querySelector('.program-button-three');

function myFunctionThreeToggle() {
    dropboxThree.classList.toggle("program-box-line");
  }
 
  buttonThree.addEventListener('click', function() {
  if (buttonThree.textContent === 'Закрити') {
    buttonThree.textContent = 'Відкрити';
  } else {
    buttonThree.textContent = 'Закрити';
  }
});


var dropboxFour = document.querySelector(".program-box-four");

function myFunctionFourToggle() {
  dropboxFour.classList.toggle("program-box-line");
}

var buttonFour = document.querySelector(".program-button-four");

buttonFour.addEventListener('click', function() {
  if (buttonFour.textContent === 'Закрити') {
    buttonFour.textContent = 'Відкрити';
  } else {
    buttonFour.textContent = 'Закрити';
  }
});


var dropboxFive = document.querySelector(".program-box-five");

function myFunctionFiveToggle() {
  dropboxFive.classList.toggle("program-box-line");
}

var buttonFive = document.querySelector(".program-button-five");

buttonFive.addEventListener('click', function() {
  if (buttonFive.textContent === 'Закрити') {
    buttonFive.textContent = 'Відкрити';
  } else {
    buttonFive.textContent = 'Закрити';
  }
});


var dropboxSixe = document.querySelector(".program-box-sixe");

function myFunctionSixeToggle() {
  dropboxSixe.classList.toggle("program-box-line");
}

var buttonSixe = document.querySelector(".program-button-sixe");

buttonSixe.addEventListener('click', function() {
  if (buttonSixe.textContent === 'Закрити') {
    buttonSixe.textContent = 'Відкрити';
  } else {
    buttonSixe.textContent = 'Закрити';
  }
});

/****************************************** */

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






var dropboxThree = document.querySelector(".program-box-three");

function myFunctionThreeToggle() {

    dropboxThree.classList.toggle("program-box-line");
    
  }
  
/****************************************** */

// 1: selecteer de button
let sendButton = document.querySelector('form button[type="submit"]');
let checkmark = document.querySelector(".checkmark");

// 2: wacht op een klik
sendButton.addEventListener("click", function(){
  // 3: laat de checkmark zien, door een class toe te voegen aan die sectie..
checkmark.classList.toggle("checkmarkyes");

// Het weghalen van de checkmark na 3seconden.
setTimeout(() => {
    checkmark.classList.remove("checkmarkyes");
  }, 3000);

})

  

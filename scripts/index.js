// 1: selecteer de button
let schoolBtn = document.querySelector('.deelbutton');
let deelScholen = document.querySelector('.deelscholen');


// 2: wacht op een klik
schoolBtn.addEventListener("click", function(){
  // 3: laat de deelnemende hogescholen zien.
deelScholen.classList.toggle("yay");

})
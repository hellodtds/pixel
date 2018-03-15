document.addEventListener("DOMContentLoaded", function(evt) {
  console.log("DOM fully loaded and parsed");
  kaos();
  console.log("Hi Kaotikus!");

});


const kaos = function sayKaotikus(){
  console.log("Say hello to Kaos!"+ " ************* ");
}

document.addEventListener("click", function(evt){

  console.log(evt.target);
});
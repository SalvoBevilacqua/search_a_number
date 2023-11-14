const maggiore = document.getElementById("maggiore");

const minore = document.getElementById("minore");

const max = 30000;
let sup = max;
let inf = 0;
let center = max / 2;

console.log("il numero è " + center +" ?");

maggiore.addEventListener("click", function() {
  inf = center;
  center= center + ((sup - center) / 2);  
  console.log("il numero è " + center +" ?");
  console.log("inf: " + inf + " center: " + center + " sup: " + sup);
})

minore.addEventListener("click", function() {
  let temp = center;
  center= center - ((sup - center) / 2);
  sup = temp;
  // center= center / 2;
  console.log("il numero è " + center +" ?");
  console.log("inf: " + inf + " center: " + center + " sup: " + sup);
})
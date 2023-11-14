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
  center = Math.round(center);
  console.log("il numero è " + center +" ?");
  console.log("inf: " + inf + " center: " + center + " sup: " + sup);
})

minore.addEventListener("click", function() {
  let temp = center;
  
  if ((sup - inf) < 3) {
    center = inf + 1;
  } else if ((sup - inf) < 5) {
    sup = center;
    center = inf + 2;  
  } else {
    center= center - ((sup - center) / 2);
    center = Math.round(center);
  }

  sup = temp;

  console.log("il numero è " + center +" ?");
  console.log("inf: " + inf + " center: " + center + " sup: " + sup);
})
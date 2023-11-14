const maggiore = document.getElementById("maggiore");

const minore = document.getElementById("minore");

const max = 30000;
let intervallo_sup = max;
let intervallo_inf = intervallo_sup / 2;
let result = 0;

console.log("il numero è " + max / 2 +" ?");

maggiore.addEventListener("click", function() {  
  result= (intervallo_sup - intervallo_inf) / 2 + intervallo_inf;
  intervallo_inf = result;
  console.log("il numero è " + result +" ?");
  console.log(result, intervallo_inf, intervallo_sup);
})

minore.addEventListener("click", function() {
  intervallo_sup = intervallo_sup / 2;
  result= (intervallo_sup - intervallo_inf) / 2;
  intervallo_inf = result;
  console.log("il numero è " + result +" ?");
  console.log(result, intervallo_inf, intervallo_sup); 
})

function callExcuse() {

  let who = ['El perro','Mi Abuela','Su tortuga','Mi pajaro',"El dragon"];
  let what = ['se lo comio','meo','choco','se rompio','lo quemo'];
  let when = ['antes de clases.','justo en el momento.','cuando termine.','durante mi almuezo.','mientras resaba.'];

  let index= Math.floor(Math.random()*5);

  let primera=[who[index],what[index],when[index]];

  document.getElementById("excuse").innerHTML = primera.join();


 }
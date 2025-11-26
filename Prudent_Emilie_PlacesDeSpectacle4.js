function Validation(){
var Nom = new URL(location.href).searchParams.get('Nom');
var Prenom = new URL(location.href).searchParams.get('Prenom');
var Code = new URL(location.href).searchParams.get('Code');
var Num = new URL(location.href).searchParams.get('Date');
  if (Nom==="&" || Prenom==="&" || Code==="&" || Num==="&"){
    alert("Veuillez remplir toutes les cases.");
  }
  else
  {
    alert("La transaction a été effectuée.");
  }
}  



/*function Reserver(){
for (let y = 0; pas < 6; pas++){
for (let x = 0; pas < 6; pas++){ 
 if (salle[y][x]===1){
let casecochee = "case"+x+y;
var classe = document.getElementById(casecochee);
classe.className="reservee"
 }
  else{
    a=1
  }
}
}
}
}
function Reserver(){
for (let y = 0; pas < 6; pas++){
for (let x = 0; pas < 6; pas++){ 
 if (salle[y][x]===1){
let casecochee = "case"+x+y;
var classe = document.getElementById(casecochee);
classe.className="reservee"
 }
  else{
    a=1
  }
}
}
}
}*\
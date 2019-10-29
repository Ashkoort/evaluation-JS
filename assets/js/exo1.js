/* A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant le port PORT et la remise REM, sachant que :

le port est gratuit si le prix des produits TOT est supérieur à 500 €. Dans le cas contraire, le port est de 2% de TOT
la valeur minimale du port à payer est de 6 €
la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
Testez tous les cas possibles afin de vous assurez que votre script fonctionne. */



var valid = document.getElementById("exo1");
valid.addEventListener("click",exo1);
function exo1(){
     pu = parseInt(prompt("Saisir le prix"));
     QTECOM = parseInt(prompt("Saisir la quantité")) ;
     PAP = pu*QTECOM ;
     PORT = 0;
     REM = 0;
     TOT = 0 ;


    if(PAP>500){
       PORT = 0;
    }else if(PAP<300){
       PORT = 6;
    }else if(PAP>300 && PAP<500){
       PORT = 0.02*PAP;
    } 
    if(PAP >= 100 && PAP <=200){
       REM = 5;
       TOT = 0.95
    }else{
       REM = 10;
       TOT = 0.90; 
    }
    TOT = PAP*TOT+PORT;
    alert("Le prix est : "+PAP+" €"+"\n Vous avez une remise de : "+REM+" %"+"\n Vous avez un port de :"+PORT+" \n Vous devez payée : "+TOT);    
}
var valid = document.getElementById("exo2");
valid.addEventListener("click",exo2);
function exo2(){
   var nb =Number(prompt("saisir un entier"));
   var s = 0;
   for ( i=0; i<=nb; i++ ){
      s += i;
      alert("Somme : "+s);    
   }
}
var valid = document.getElementById("exo3");
valid.addEventListener("click",exo3);
function exo3(){
 var tab = new Array();
 let i = 0;
 do{
     nb = parseInt(prompt("Saisissez des nombres"));
     tab.push(nb); // push rajoute une nouvelle valeurs dans la case de ton tableau
     i++;
     console.log(tab);
 }while(nb !=0);
 tab.pop();
 var max = tab.reduce(function exo3(a,b) { // trouver la valeurs max d'un tableau
    return Math.max(a, b);
  });

  var min = tab.reduce(function exo3(a,b) { 
  return Math.min(a, b);
});
  alert("Le max est :"+max+"\nLe mini est : "+min);
}
var valid = document.getElementById("exo4");
valid.addEventListener("click",exo4);
function exo4(){
    var j = 0;
    var v = 0;
    var m =0;
    do{
        a = parseInt(prompt("Saissiez des âges"));
        if(a < 20){
            j++;
        }else if(a >= 20 && a <= 40){
            m++;
        }else if(a > 40){
            v++;
        }
    }while(a!=100)
    alert("Nombre de jeune : "+j+"\n Nombre de moyens : "+m+"\n Nombre de vieux : "+v);
}
var valid = document.getElementById("exo5");
valid.addEventListener("click",exo5);
function exo5(){
    var N =parseInt(prompt("donner un chiffre")); //multiple 
    var r = 0;  

    for(i =0; i<=10; i++){

    r = i*N;             

    alert(i+"x"+N+"="+r);
    }
}
var valid = document.getElementById("exo6");
valid.addEventListener("click",exo6);
function exo6(){
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var p = String(prompt("Saisir un prénom (oubliez pas de mettre la Majuscule"));
    console.log(tab);
    var i = tab.indexOf(p);
    if(i == -1){
        console.log(" Vous n'avez pas saisie un bon prénom a retirer");
    }else{
        tab.splice((i),1);
        tab.push(" ");
    }
    
    console.log(tab);
}

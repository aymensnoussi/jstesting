//alert('hello my friend why so serious !!!!!!!!!! :D !');
//confirm('message de confirmation ');
/* les var sans types*/
//var x =prompt('votre nom');
/* 1 methode de affichage affichage dans lalert*/
//alert(' welcome ' +x+ ' marhbe si chbeb ');
/* 2 methode de affichage (affichage dans le console )*/
//console.log("ahla "+x);
/* 3 methode de affichage affichage dans lecran*/
//document.write( "<h1> welcome " +x+ "  marhbe si chbeb </h1>");

//var x=3;
//var y=5;
/*
function somme (x, y){
    var s=x+y;
    return s;
}

function divition (x, y){
    var s=x/y;
    return s;
}

do{
x=prompt('enter a number');
y=prompt('enter the second number');
}while(isNaN(x)||isNaN(y))

/*if(isNaN(x)||isNaN(y)){
    x=prompt('enter a number');
    y=prompt('enter the second number');
}*/

/*function saisie() {
    do { var ch=prompt('entrer un entier');
    var x=Number(ch);}
    while(isNaN));
    return x;
}
var x= saisie();
var y=saisie();
document.write('');
*/
/*
document.write("la somme de "+x+"+"+y+"="+somme(x,y)+"<br/>");
document.write("    la divition de "+x+"/"+y+"="+divition(x,y)+"<br/>");
document.write("    la soustraction de "+x+"-"+y+"="+eval(x-y)+"<br/>");
//document.write("    la multiplication de "+x+"*"+y+"="+eval(x*y)); OR
document.write("    la multiplication de "+x+"*"+y+"="+(x*y));
*/
/*  fuction nomfun (params){
    traitement
    return value
} */


/*function verif(){
    //alert('welcome to verif function');
    //recuperation du donnée
    var nom=document.inscriptionform.nom.value;
    //lengeur du nom
    var lnom=nom.length;

    if (lnom <= 0){
        alert('le nom est obligatoire')
        return false;
    }
    return false;
    //false pour qu'il ne passe pas au action qui soccupe du php 
}*/

/*
function aski(){
    var nom=document.inscriptionform.nom.value;
lnom=nom.length;
for(i=0;i<lnom;i++){
  //  if(nom.charCodeAt(i)<=65)&&
    console.log(nom.charCodeAt(i));
}

return false;
}*/

function verif(){
    var nom=document.inscriptionform.nom.value;
    var lnom=nom.length;
if(lnom<=0){
    var div =document.getElementById("erreurNom");
    div.classList.add("alert", "alert-danger");
    div.append("Le champ nom est obligatoire");
    return false;
}
return false;
}
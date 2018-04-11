
//Datos de entrada, por medio de un prompt se le pide al  usuario ingresar los datos de su tarjeta
var card = prompt("Por Favor Ingresa los digitos de tu tarjeta \n nota: favor de no usar espacios o caracteres que no sean numeros tales como letras o caracteres diferentes a un numero");

//Validacion del del dato de entrada(aqui se pretende verificar que el usuario entro informacion correcta)
while (card === null || card.length === 0 || isNaN(card)) {
  card = prompt("Por favor corrige tu informacion e ingresa la numeracion de tu tarjeta\n Nota: que no debes ingresar espacios, letras o caracteres distintos a un numero");
}
//se crean en este punto variables para guardar los numeros de la tarjeta ingresados por el usuario despues de haber sido prosesador por lafunction para devolverlos en un arreglo a la inversa de como se metieron
function isValidCard(isValidCard){
     var str=card.toString();
     var arr=str.split('');
     arr.reverse();
     var prod=1;
     var sum=0;
//si el valor esta en posicion par se debe multiplicar por dos para seguir el preoseso
     for(var i=0; i<arr.length; i++){
         if(i%2===0){
             prod=arr[i]*2;
             if(prod<10){
                 arr[i]=prod;
             }else{
                 resul=Math.floor(prod/10)+(prod%10);
                 arr[i]=resul;
             }
         }
     }
     arr;

     for(i=0; i<arr.length; i++){
       sum=sum+arr[i];
     }

     if(sum%10===0){
         msg=alert("Tarjeta válida");
     }else{
         msg=alert("Tarjeta no válida");
     }


}

 isValidCard(card);
 //4152313380623160

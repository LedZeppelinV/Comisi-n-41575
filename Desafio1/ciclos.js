let numero_usuario = parseInt(prompt("Ingrese un numero de segundos entre 30 y 100 para plantar la bomba."));

if(numero_usuario >= 30 && numero_usuario <= 100){
    console.log("The bomb has been planted.")
    for(let i = 0; i < numero_usuario ; i++){
        console.log(numero_usuario - i);
    }
    console.log("BOOM");
    console.log("Terrorists win.")
}
else{
    console.log("Dato ingresado no valido, no pudo plantar la bomba.");
    console.log("Counter-Terrorists win.");
}
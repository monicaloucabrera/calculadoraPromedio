var nombrealumno=window.prompt("Ingrese el nombre del alumno");
var nombremateria=window.prompt("Ingrese el nombre de la materia");
var nota1;
var nota2;
var nota3;
var promedio;
var bandera = true;

//Ingreso de nota1

while (bandera==true){
    nota1=parseInt(window.prompt("Ingrese la primera nota, un valor entre 0 y 10"));
    if (!isNaN(nota1) && Number.isInteger(nota1)){
    
        console.log("es un numero" + nota1+ typeof(nota1));
        if (nota1>=0 && nota1<=10){
            bandera= false;
          
        }
        else{
            alert("El valor no es valido ");
        }
        
    }
    else{
        alert("El valor no es valido, debe ingresar un valor entre 0 y 10");
    
                
    }
}
 bandera=true;

//Ingreso de nota2

while (bandera==true){
    nota2=parseInt(window.prompt("Ingrese la segunda nota, un valor entre 0 y 10"));
    if (!isNaN(nota2) && Number.isInteger(nota2)){
    
        console.log("es un numero" + nota2+ typeof(nota2));
        if (nota2>=0 && nota2<=10){
            bandera= false;
          
        }
        else{
            alert("El valor no es valido ");
        }
        
    }
    else{
        alert("El valor no es valido, debe ingresar un valor entre 0 y 10");
    
                
    }
}

bandera=true;

//Ingreso de nota3
while (bandera==true){
    nota3=parseInt(window.prompt("Ingrese la tercera nota, un valor entre 0 y 10"));
    if (!isNaN(nota3) && Number.isInteger(nota3)){
    
        console.log("es un numero" + nota3+ typeof
        (nota3));
        if (nota3>=0 && nota3<=10){
            bandera= false;
          
        }
        else{
            alert("El valor no es valido ");
        }
        
    }
    else{
        alert("El valor no es valido, debe ingresar un valor entre 0 y 10");
    
                
    }
}
//Cálculo del promedio
promedio = (nota1 + nota2+nota3)/3;

if (promedio<=7){

    alert(nombrealumno +" Gracias por tu esfuerzo nos vemos pronto en clase. El promedio obtenido es: " + promedio)
}
else{
    alert(nombrealumno+ "  felicidades! haz aprobado con un promedio de " + promedio);
}





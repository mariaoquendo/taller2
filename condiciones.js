/* primer punto:
let altura = parseInt(prompt("Introduce tu altura en centímetros:"));


if (altura <= 150) {
    alert("Persona de altura baja");
} else if (altura >= 151 && altura <= 170) {
    alert("Persona de altura media");
} else if (altura >= 171) {
    alert("Persona alta");
} else {
    alert("Por favor, introduce un valor válido.");
} */


/* segundo Punto */


/* let matematicas = parseFloat(prompt("Introduce la nota de Matemáticas:"));
let espanol = parseFloat(prompt("Introduce la nota de Español:"));
let sociales = parseFloat(prompt("Introduce la nota de Sociales:"));


let promedio = (matematicas + espanol + sociales) / 3;


if (promedio === 10) {
    alert("Excelente");
} else if (promedio > 7 && promedio <= 10) {
    alert("Bueno");
} else if (promedio < 7) {
    alert("Insuficiente");
} else {
    alert("Por favor, introduce notas válidas.");
}
 */


/* tercer ejercicio */


/* let estatura = parseFloat(prompt("Introduce tu estatura en cm:"));
let velocidad = parseFloat(prompt("Introduce tu velocidad en m/s:"));
let edad = parseInt(prompt("Introduce tu edad:"));


if (estatura > 170 && velocidad >= 100) {
    alert("¡Puedes ingresar al equipo!");


    if (edad < 18) {
        alert("Perteneces a las divisiones menores.");
    } else {
        alert("Perteneces al equipo profesional de mayores.");
    }
} else {
    alert("No cumples con los requisitos para ingresar al equipo.");
}
 */

/* cuarto punto */


let precioUnitario = parseInt(prompt("Introduce el precio de un escritorio:"));
let cantidad = parseInt(prompt("Introduce la cantidad de escritorios que deseas comprar:"));
let totalPagar = 0;
let descuento = 0;


if (cantidad < 5) {
    descuento = 0.10;
    totalPagar = precioUnitario - (precioUnitario * descuento)
    document.writeln("el total a pagar es de  ", totalPagar, " es el descuento fue del 10%")


} else if (cantidad >= 5 && cantidad < 10) {
    descuento = 0.20;
    totalPagar = precioUnitario - (precioUnitario * descuento)
    document.writeln("el total a pagar es de  ", totalPagar, " es el descuento fue del 20%")
} else if (cantidad >= 10) {
    descuento = 0.40;
    totalPagar = precioUnitario - (precioUnitario * descuento)
    document.writeln("el total a pagar es de  ", totalPagar, " es el descuento fue del 40%")
}
















/* let valor = parseInt(prompt("digite un numero: ")) */
/* let edad = parseInt(prompt("digite la edad: "))
let sexo = prompt("digite su sexo (m/f): ") */

/* if(sexo == "f" && edad >=18){
    document.writeln("puede ingresar el equipo de futbol femenino")
}else{
    document.writeln("no puede ingresar al equipo de futbol femenino")
} */






/* if(edad<=0){
    alert("numero no valido")
}else if (edad <18){
    alert("pertenece a la liga de memores")
}else{
    alert("pertenece a la liga de mayores")
}




if(edad == 18){
    alert("lentras a la liga de mayores ")
}
    
    else if (edad <18)[

    ]
 */




/* if(valor== 0){
    alert("el valor es 0")
}else if(valor < 0){
alert("el numero es negativo")
}else{
    alert("el nuemro es positivo")
}
 */
/* if( valor == 0){
    alert("el numero es 0")
}else{
    if(valor < 0){
        alert("el valor es negativo")

    }else{
        alert("el  valor es positivo")
    }
} */


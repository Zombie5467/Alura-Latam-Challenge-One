function imcCalc (peso, altura) {

    return (peso / (altura*altura));

}

var nombre = prompt ("cual es tu nombre?");
var pesoInfo = prompt("cual es tu peso?");
var alturaInfo = prompt ("cual es tu altura?");

imcInfo = imcCalc(pesoInfo, alturaInfo);

console.log(nombre + " su imc calculado es " + imcInfo);
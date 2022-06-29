
//// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
function alturaIsoceles(lado1,base){
  const altura = Math.sqrt((lado1*lado1)-((base*base)/4));
  return altura;
}
console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTrianguloLado1");
  const value1 = parseFloat(input.value);
  const input1 = document.getElementById("InputTrianguloLado2");
  const value2 = parseFloat(input1.value);
  const input2 = document.getElementById("InputTrianguloBase");
  const value3 = parseFloat(input2.value);
  //const datos = [value1,value2,value3];
  //const per = math.sum(value1, value2, value3);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const input = document.getElementById("InputTrianguloBase");
  const value = input.value;
  const input1 = document.getElementById("InputTrianguloAltura");
  const value1 = input1.value;

  const area = areaTriangulo(value, value1);
  alert(area);
}

function calcularAlturaIsoceles(){
  const input = document.getElementById("InputIsocelesLado1");
  const value1 = input.value;
  const input1 = document.getElementById("InputIsocelesLado2");
  const value2 = input1.value;
  const input2 = document.getElementById("InputIsocelesBase");
  const value3 = input2.value;

  if(value1 === value2 && value1 != value3){
    const altura = alturaIsoceles(value1,value3);
    alert(altura);
  }
  else{
    alert("Los lados deben ser iguales")
  }
  
}
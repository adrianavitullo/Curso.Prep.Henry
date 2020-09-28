// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:


   return array [0]
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
     return array [array.length -1 ]
}


function obtenerLargoDelArray(array) {
  // Devuelve el argo de un array
  // Tu código:
 return array.length

}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:


for ( var i=0; i < array.length; i++) {
  array[i] = array[i] +1
}
return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

 array[array.length] = elemento
return array

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento)

return array

}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

 return palabras.join(" ")

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
for (var i = 0 ; i < array.length ; i++){

if (array[i]=== elemento)
  return true;
}
return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var suma = 0

for (var i = 0 ; i < numeros.length ; i++){

  var suma = numeros[i] + suma
}
  return suma
 
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

var suma = 0

for (var i = 0 ; i < resultadosTest.length ; i++){

  var suma = resultadosTest[i] + suma

}

var promedio = suma / i
  
  return promedio

 
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

var Mayor = numeros[0]

for (var i = 0 ; i < numeros.length ; i++){

       if (numeros[i] > Mayor)

        Mayor = numeros[i]
}
  return Mayor
 
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

 
 var multiplicacion = 1

if (arguments.length < 1)
   return 0

for (var i = 0 ; i < arguments.length ; i++) {


 var multiplicacion = arguments[i] * multiplicacion
}
return multiplicacion

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};

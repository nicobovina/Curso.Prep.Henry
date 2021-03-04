// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var stringResult = palabras[0];
  for (i = 1; i < palabras.length; i++){
    stringResult = stringResult + ' ' + palabras[i];
  }
  return stringResult;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i = 0; i < array.length; i++){
    if (array[i] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for (i = 0; i < numeros.length; i++){
    total = total + numeros[i];
  }
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var average = 0;
  for (i = 0; i < resultadosTest.length; i++){
    average = average + resultadosTest[i];
  }
  return average / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var bigNumber = 0;
  for (i = 0; i < numeros.length; i++){
    if (bigNumber < numeros[i]){
      bigNumber = numeros[i];
    }
  }
  return bigNumber;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let result = arguments[0];
  
  if (arguments.length === 0){
    return 0;
  }
  for (i = 1; i < arguments.length; i++){
    result = result * arguments[i];
  }

  return result;
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let amountElements = 0;
  for (i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 19){
      amountElements++;
    }
  }
  return amountElements;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }
  return 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numberString = n.toString();
  return numberString[0] === '9';
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i = 1; i < arreglo.length; i++){
    if (arreglo[0] !== arreglo[i]){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

  // La siguiente función comparará los elementos del arreglo que viene como argumento, con los elementos de un arreglo de comparación (que contiene los meses pedidos).
  
  // Declaro dos variables: 
  // Un arreglo que contenga los elementos pedidos.
  // Un arreglo nuevo vacio en el cual se agregarán los elementos que se vayan encontrando.
  let comparisonArray = ['Enero', 'Marzo', 'Noviembre'];
  let newArray = [];
  
  // El siguiente bucle irá recorriendo el arreglo original y comparará si el elemento que se está haciendo foco es alguno de los pedidos.
  for (i = 0; i < array.length & newArray.length < 3; i++){
      // j es un indice para recorrer el arreglo de comparación.
      for (j = 0; j < comparisonArray.length; j++){
        // Si el elemento se encontró:
        // 1) Lo agrego al nuevo arreglo.
        // 2) Lo quito del arreglo de comparación.  
        if (array[i] === comparisonArray[j]){
            newArray.push(comparisonArray[j]);
            comparisonArray.splice(j,1);
            break;
        }
      }
  }
  // A esta altura de la función:
  // a) Ya se recorrió todo el arreglo que vino como argumento y no se encontraron los elementos pedidos, por lo que hago el return "No se encontraron los meses pedidos".
  // b) No se recorrió todo el arreglo que vino como argumento porque ya se encontraron los elementos pedidos, y hago return del nuevo arreglo con los elementos pedidos.
  if (newArray.length < 3){
      return 'No se encontraron los meses pedidos';
  }
  return newArray;
}
  
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = [];
  for (i = 0; i < array.length; i++){
    if (array[i] > 100){
      newArray.push(array[i]);
    }
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let arrayResults = [];
  let copiaNumero = numero;
  for (i = 0; i < 10; i++){
    if (copiaNumero + 2 === i){
      return 'Se interrumpió la ejecución';
    }
    arrayResults.push(copiaNumero + 2);
    copiaNumero = copiaNumero + 2;
  }
  return arrayResults;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arrayResults = [];
  let copiaNumero = numero;
  
  for (i = 0; i < 10; i++){
    if (i === 5){
      continue;
    }
    arrayResults.push(copiaNumero + 2);
    copiaNumero = copiaNumero + 2;
  }
  return arrayResults;
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

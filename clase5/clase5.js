/** TIP: Pensar mi algoritmo 
 *  ¿Cómo lo voy a resolver? Escribir el paso a paso como una receta
 *   1- Necesito una lista de números aleatorios
 *   2- Luego tengo que contar las ocurrencias de cada número
 *   3- Luego tengo que crear un objeto con la información
 *   4- Mostrarlo en consola.
 * 
 *  IMPORTANTE: Intentar crear pequeñas funciones para cada paso.
 *              Elegir nombres de funciones descriptivos y claros.
 *  
 */

function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function createList(size) {
    let list = [];
    for (let i = 0; i < size; i++) {
        list.push(getRandomNumber(1, 20));
    }
    return list;
}

const myList = createList(10000);
console.log(myList);

/** Crear un objeto cuyas claves sean los números salidos y 
 * el valor asociado a cada clave será la cantidad de veces 
 * que salió dicho número */

let repetidos = {};

myList.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});

console.log(repetidos);


/** Con REDUCE
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

// const repetidos = myList.reduce((repetidos, numero) => {
//     repetidos[numero] = (repetidos[numero] || 0) + 1;
//     return repetidos;
// }, {});

// console.log(repetidos);
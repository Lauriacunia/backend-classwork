/**Slide 40
 * 1) Definir la función mostrarLista que reciba una lista de datos y
 *  muestre su contenido si no está vacía,
 * o de lo contrario muestre el mensaje: “lista vacía”.
 * Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
 */
function mostrarLista(lista) {
  if (lista.length === 0) {
    console.log("lista vacía");
  } else {
    console.log(lista);
  }
}

mostrarLista([1, 2, 3]);
mostrarLista([]);

/** Slide 40
 *  2) Definir una función anónima que haga lo mismo que la del punto 1,
 *  e invocarla inmediatamente, pasando una lista con 3 números como argumento.
 */
/**🔥 Immediately Invoked Function Expressions - IIFE
 * https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 * Es una función anónima que se ejecuta inmediatamente después de ser declarada.
 */
(function (lista) {
  if (lista.length === 0) {
    console.log("lista vacía");
  } else {
    console.log(lista);
  }
})([4, 5, 6]);

/**3) Definir la función crearMultiplicador  que reciba un número y
 * devuelva una función anónima que reciba segundo número y
 * dé como resultado el producto de ambos.
 * Luego, a partir de la función definida,
 * crear dos funciones duplicar y triplicar,
 * y probarlas con diferentes valores. */

function crearMultiplicador(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

const duplicar = crearMultiplicador(2);

console.log(duplicar(3));
console.log(duplicar(4));

const triplicar = crearMultiplicador(3);

console.log(triplicar(3));
console.log(triplicar(4));

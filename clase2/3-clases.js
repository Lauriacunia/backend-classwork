/**Slide 51
 * 1-Definir la clase Contador.
   2- Cada instancia de contador debe ser identificada 
   con el nombre de la persona responsable de ese conteo.
   3- Cada instancia inicia su cuenta individual en cero.
   4- La clase en sí misma posee un valor estático con el
   que lleva la cuenta de todo lo contado por sus instancias,
   el cual también inicia en cero.

   Slide 52
  4)Definir un método obtenerResponsable que devuelva el 
  nombre del responsable de la instancia.
  5)Definir un método obtenerCuentaIndividual que devuelva 
  la cantidad contada por la instancia.
  6)Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos 
  los contadores creados hasta el momento.
  7)Definir el método contar que incremente en uno 
  tanto la cuenta individual como la cuenta general
 */

class Contador {
  static cuentaGlobal = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0; // valor inicial para todas las instancias
  }

  obtenerResponsable() {
    return this.responsable;
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual;
  }

  obtenerCuentaGlobal() {
    return Contador.cuentaGlobal;
  }

  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
  }
}

const contadorUno = new Contador("contadorUno");
const contadorDos = new Contador("contadorDos");

contadorUno.contar();
contadorUno.contar();

contadorDos.contar();
contadorDos.contar();
contadorDos.contar();

console.log(
  `contadorUno -> contador individual: ${contadorUno.obtenerCuentaIndividual()}`
);
console.log(
  `contadorUno -> contador global: ${contadorUno.obtenerCuentaGlobal()}`
);

console.log(
  `contadorDos -> contador individual: ${contadorDos.obtenerCuentaIndividual()}`
);
console.log(
  `contadorDos -> contador global: ${contadorDos.obtenerCuentaGlobal()}`
);

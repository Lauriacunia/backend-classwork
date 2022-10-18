/**
1- Definir variables variables que almacenen los siguiente datos:
Un nombre: “pepe”
Una edad: 25
Un precio: $99.90
Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
2- Mostrar todos esos valores por consola
3- Incrementar la edad en 1 y volver a mostrarla
4- Agregar una serie a la lista y volver a mostrarla
 */

/** 1 */
let nombre = 'pepe';
let edad = 25;
let precio = 99.90; // podría ser string
let precioString = '$99.90';
let seriesFavoritas = ['Dark', 'Mr Robot', 'Castlevania'];
let peliculasFavoritas = [
    {
        nombre: 'Dark',
        anio: 2019,
        actores: ['Samuel L. Jackson', 'Margot Robbie', 'Jared Leto']
    },
    {
        nombre: 'Mr Robot',
        anio: 2019,
        actores: ['Will Smith', 'Jared Leto', 'Katherine Langford']
    },
    {
        nombre: 'Castlevania',
        anio: 2019,
        actores: ['Eli Wallach', 'David Boreanaz', 'Michael Keaton']
    }
];

/** 2 */
console.log(nombre);
console.log(edad);
console.log(precio);
console.log(precioString);
console.log(seriesFavoritas);
console.log(peliculasFavoritas);

/** 3 */
// reasignando la variable
// edad = edad + 1;
edad++;
console.log(edad);

// con una función
function incrementarEdad(edad) {
    return edad + 1;
}
console.log(incrementarEdad(edad));

/** 4 */

peliculasFavoritas.push({
    nombre: 'El señor de los anillos',
    anio: 2001,
    actores: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen']
});
console.log(peliculasFavoritas);
/** 
 * 1- Crear package.json
 * npm init -y
 * 2-Instalar libreria moment js
 * docs: https://momentjs.com/
 * npm install moment --save
 * 3- crear archivo .gitignore para que no se suban los node_modules
 */
const moment = requiere('moment');

let now = moment();
console.log(now.format('YYYY-MM-DD'));

console.log("Fechas") 
let formato = moment().format('MMMM Do YYYY, h:mm:ss a') 
let dayWeek = moment().format('dddd') 
let dia = moment().format('M/D/YYYY') 
let momentFecha = moment("01-01-1950 23:45") 
console.log(formato) 
console.log(`Hoy es ${dia}`) 
console.log("Nací el " + momentFecha.format('M/D/YYYY')) 
console.log("Desde que naci ha pasado " + momentFecha.fromNow()) 

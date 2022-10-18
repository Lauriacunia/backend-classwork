/**1-Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro 
 * y permita mostrar una vez por segundo cada uno de sus caracteres. 
 * 2- Al finalizar, debe invocar a la siguiente función que se le pasa 
 * también  como parámetro: const fin = () => console.log('terminé')
 * 3- Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ 
 * y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.
 */

/**1 */
const mostrarLetras = (word, fin) =>{
    let i = 0;
    let interval = setInterval(() => {
        if(i < word.length){
            console.log(word[i]);
            i++;
        }else{
            clearInterval(interval);
            fin();
        }
    }, 1000);    
}

/**2 */
const fin = () => console.log('terminé');


/**3 */
mostrarLetras("Hola", fin);

setTimeout(() => {
    mostrarLetras("Hola", fin);
}
, 250);
setTimeout(() => {
    mostrarLetras("Hola", fin);
}
, 500);


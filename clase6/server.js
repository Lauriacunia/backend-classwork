/** 
 *  1- Crear el package.json con
 *     npm init -y
 *  2- Instalar nodemon de forma global
 *     npm i -g nodemon
 *  3- Instalar express
 *    npm i express
 */

 const http = require('http');

 const mensaje = () =>{ 
   const hora = new Date().getHours();
   if(hora >= 6 && hora <= 12){
     return 'Buenos días';
   }else if(hora >= 13 && hora <= 20){
        return 'Buenas tardes';
    }else if(hora >= 21 && hora <= 6){
        return 'Buenas noches';
    }
 }

 /**Con modulo nativo http */
//  const app = http.createServer((peticion, respuesta) => {
//     respuesta.end(mensaje())
//  })
/** Con express */
 app.get('/', (peticion, respuesta) => {
    respuesta.end(mensaje())
})
 const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    })

//  const connectedServer = server.listen(8080, () => {
//     console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
//  })
 
/** 1- Crear el package json
 *     npm init
 *  2- Instalar nodemon de forma global
 *     npm install nodemon -g
 *  3- Crear un scrips en package json para que nodemon se ejecute en cada cambio
 *   "scripts": {
         "start": "nodemon server.js"
      },
    4- Para que nodemon se ejecute en cada cambio, ejecutar:
    opcion 1: nodemon server.js
    opcion 2 corriendo el script en package json: npm run start
    5-Instalar el modulo de express
    npm install express
 */

const express = require('express');
const app = express();
const PORT = 8000;
const frase = 'Hola mundo desde express';
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/',(req, res) =>{
//     res.send('Hola mundo desde NodeJS');
// });

// app.get('/',(req, res) =>{
//     res.json({msj : 'Hola mundo desde NodeJS'});
// });

// /api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
app.get('/api/frase', (req, res) => {
    res.json({frase});
});

// '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
app.get('/api/letras/:num', (req, res) => {
    const id = req.params.num;
    //validar que id sea numerico
    if(!isNaN(id)){
        const letra = frase[id-1];
        res.json({letra});
    }else{
        res.status(400).json({error : 'El id debe ser numerico'});
    }
});

// '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.
app.get('/api/palabras/:num', (req, res) => {
    const id = req.params.num;
    //validar que id sea numerico
    if(!isNaN(id)){
        const palabra = frase.split(' ')[id-1];
        res.json({palabra});
    }else{
        res.status(400).json({error : 'El id debe ser numerico'});
    }
});

//Ruta get '/api/sumar/5/6' -> devuelve la suma de los dos números recibidos en el path.
app.get('/api/sumar/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    //validar que id sea numerico
    // TIP: la validación podría encapsularse en una función reuilizable
    if(!isNaN(num1) && !isNaN(num2)){
        const suma = parseInt(num1) + parseInt(num2);
        res.json({suma});
    }else{
        res.status(400).json({error : 'Los numeros deben ser numericos'});
    }
});

// Ruta get '/api/sumar?num1=5&num2=62) 
// -> devuelve la suma de los dos números recibidos en el query string.
app.get('/api/sumar', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    //validar que id sea numerico
    // TIP: la validación podría encapsularse en una función reuilizable
    if(!isNaN(num1) && !isNaN(num2)){
        const suma = parseInt(num1) + parseInt(num2);
        res.json({suma});
    }else{
        res.status(400).json({error : 'Los numeros deben ser numericos'});
    }
});

/**Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. */
app.post('/api', (req, res) => {
    res.json({msj : 'ok post'});
});
app.put('/api', (req, res) => {
    res.json({msj : 'ok put'});
});

app.delete('/api', (req, res) => {
    res.json({msj : 'ok delete'});
});

// Documentacion en Postman:
// https://documenter.getpostman.com/view/13362314/UyrDDFxC



app.listen(8000);
console.log('Server running on port ' + PORT);
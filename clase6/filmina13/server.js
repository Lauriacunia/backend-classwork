/**
 *  1- Crear el package.json con
 *     npm init -y
 *  2- Instalar nodemon de forma global
 *     npm i -g nodemon
 *  3- Instalar express
 *    npm i express
 */

/**Consigna: FILMINA 13
 * Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 
 * y responda un mensaje de acuerdo a la hora actual: 
Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
Entre las 13 y las 19 hs será 'Buenas tardes!'. 
De 20 a 5 hs será 'Buenas noches!'.

 */

const http = require("http");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mensaje = () => {
  const hora = new Date().getHours();
  console.log("La hora es", hora);
  if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
    return "Buenos días";
  } else if (hora >= 13 && hora <= 19) {
    console.log("Buenas tardes");
    return "Buenas tardes";
  } else if (hora >= 20  ) {
    console.log("Buenas noches");
    return "Buenas noches";
  } else if (hora <= 5) {
    console.log("Buenas noches");
    return "Buenas noches";
  }
};

/**Con modulo nativo http */
//  const app = http.createServer((peticion, respuesta) => {
//     respuesta.end(mensaje())
//  })
/** Con express */

app.get("/", (peticion, respuesta) => {
  respuesta.end(mensaje());
});

const PORT = process.env.PORT || 3000; //si lo tienen ocupado poner otro puerto

try {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
    )
  );
} catch (error) {
  console.log("Error al iniciar servidor", error);
}

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

//  const connectedServer = server.listen(8080, () => {
//     console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
//  })

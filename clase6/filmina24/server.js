/**Consigna Filmina 24
 * Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
{ fyh: '11/1/2021 11:36:04' }

Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. En caso de error, representar el detalle.

 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let visitas = 0;

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>");
});

app.get("/visitas", (req, res) => {
  visitas++;
  res.send(`La cantidad de visitas es ${visitas}`);
});

app.get("/fyh", (req, res) => {
  const fyh = new Date().toLocaleString();
  res.send({ fyh });
});

try {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
    )
  );
} catch (error) {
  console.log("Error al iniciar servidor", error);
}

/* Considere la siguiente frase: ‘Frase inicial’
Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra
 hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ 
y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’
 y reemplaza en la frase aquella hallada en la posición dada. 
 Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, 
 y en el campo ‘anterior’ la anterior.

 */
const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frase = "Frase inicial";

app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

app.get("/api/palabras/:pos", (req, res) => {
    /**¿cómo harías para evitar que de error si envío una posición que no existe */
    const pos = req.params.pos;
    if (!isNaN(pos)) {
        const palabras = frase.split(" ");
        const buscada = palabras[pos - 1];
        res.json({ buscada });
    } else {
        res.status(400).json({ error: "La posicion debe ser numerica" });
    }
});

app.post("/api/palabras", (req, res) => {
    const palabra = req.body.palabra;
    if (palabra) {
        const palabras = frase.split(" ");
        palabras.push(palabra);
        const agregada = palabras[palabras.length - 1];
        const pos = palabras.length;
        res.json({ agregada, pos });
    } else {
        res.status(400).json({ error: "Debe enviar una palabra" });
    }
});

app.put("/api/palabras/:pos", (req, res) => {
    const pos = req.params.pos;
    const palabra = req.body.palabra;
    if (!isNaN(pos) && palabra) {
        const palabras = frase.split(" ");
        const anterior = palabras[pos - 1];
        palabras[pos - 1] = palabra;
        const actualizada = palabras[pos - 1];
        res.json({ actualizada, anterior });
    } else {
        res.status(400).json({ error: "La posicion debe ser numerica y debe enviar una palabra" });
    }
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
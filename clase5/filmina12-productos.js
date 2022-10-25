const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

/** Obtener A) Los nombres de los productos en un string separados por comas. */

const names = productos.map(producto => producto.nombre);
console.log('🔸 PRODUCTOS: ');
console.log(names);

/** Obtener B) El precio total */
const totalPrice = productos.reduce((total, producto) => total + producto.precio, 0);
console.log('🔸 PRECIO TOTAL: ');
console.log(totalPrice);

/** Obtener C) El precio promedio */

const averagePrice = totalPrice / productos.length;
console.log('🔸 PRECIO PROMEDIO: ');
console.log(averagePrice);

/** Obtener D) El producto con menor precio */

const minPrice = productos.reduce((min, producto) => {
    if(producto.precio < min.precio) return producto;
    return min;
}
, { precio: Infinity });
console.log('🔸 MENOR PRECIO: ');
console.log(minPrice);

/** Obtener E) El producto con mayor precio */
const maxPrice = productos.reduce((max, producto) => {
    if(producto.precio > max.precio) return producto;
    return max;
}
, { precio: 0});
console.log('🔸 MAYOR PRECIO: ');
console.log(maxPrice);

/** Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola */

const staticData = {
    products: names,
    totalPrice: '$'+ totalPrice.toFixed(2),
    averagePrice: '$' + averagePrice.toFixed(2),
    minPriceProduct: minPrice,
    maxPriceProduct: maxPrice
}

console.log('🔸 DATOS ESTATICOS: ');
console.log(staticData);

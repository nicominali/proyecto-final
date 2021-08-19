const carrito = []
const productoHombres = {
    nombre: "ropa hombre",
    precio: "precio no definido",
    stock: true
}

const productoMujeres = {
    nombre: "ropa mujeres",
    precio: "precio no definido",
    stock: true
}

carrito.push(productoHombres)


console.table(carrito)

carrito.push(productoMujeres)
console.table(carrito)

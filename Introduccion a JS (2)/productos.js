/*[D.01] Producto JSON 
Crear, dentro del archivo producto.js, un JSON para representar información acerca de un producto (código 
de barra, nombre, precio y fecha de vencimiento). Asignarle valores a cada una de sus propiedades. 
Validar su buen diseño ingresando en http://jsonviewer.stack.hu/. 
Una vez validado el JSON, mostrar todas sus propiedades por consola.*/

const productos = [{
    idProducto: "01",
    nombreProducto: "Leche Descremada",
    categoríaProducto: "Lacteos",
    precio: 1500.00,
    fechaVencimiento: "10/09/2025"
},{
    idProducto: "02",
    nombreProducto: "Queso Rallado",
    categoríaProducto: "Lacteos",
    precio: 850.00,
    fechaVencimiento: "15/09/2025"
},{
    idProducto: "03",
    nombreProducto: "Aceite de Girasol",
    categoríaProducto: "Aceites",
    precio: 4499.00,
    fechaVencimiento: "22/11/2026"
}]

//productos.forEach((producto, index) => {
//    console.log(`Producto ${index + 1}:`);
//    console.log("ID de Producto:", producto.idProducto);
//    console.log("Nombre:", producto.nombreProducto);
//    console.log("Precio:", producto.precio);
//    console.log("Categoría:",producto.categoríaProducto);
//    console.log("Fecha de Vencimiento:", producto.fechaVencimiento);
//    console.log("-----------");
//  });
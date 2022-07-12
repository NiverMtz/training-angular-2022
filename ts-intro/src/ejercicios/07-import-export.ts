import { calculaISV, Producto } from "./06-desestructiracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 160
    }
];

const [total, isv] = calculaISV( carritoCompras );

console.log( 'Total: ', total );
console.log( 'ISV: ', isv );

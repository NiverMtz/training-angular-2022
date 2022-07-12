interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 45,
    cancion: 'One Love',
    detalles: {
        autor: 'Dua Lipa',
        anio: 2018
    }
}

const autor = 'Fulano'

const { volumen: vol, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor
// const { autor } = detalles

console.log('El volumen actual de: ', vol);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autorDetalle);

const dbz: string[] = ['goku', 'vegeta', 'trunks']
const [ , , p3 ] = dbz;

console.log('Personaje 1: ', );
console.log('Personaje 2: ', );
console.log('Personaje 3: ', p3);
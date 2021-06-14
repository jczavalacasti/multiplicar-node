const { listarTabla, crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(argv);

let option = argv._[0];

switch (option) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreArchivo => console.log('Archivo creado', colors.green(nombreArchivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}

// let comando = argv._[0];

// switch (comando) {
//     case 'listar':
//         // console.log('listar');
//         listarTabla(argv.base, argv.limite);
//         break;
//     case 'crear':
//         // console.log('crear');
//         crearArchivo(argv.base, argv.limite)
//             .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
//             .catch(err => console.log(err));
//         break;
//     default:
//         console.log('Comando no reconocido');
// }
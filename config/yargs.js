// const opts = {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// }

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
//     .help()
//     .argv;

const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'es la base a multiplicar'
        },
        'l': {
            alias: 'limite',
            type: 'number',
            default: 10,
            describe: 'limite de la tabla'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;


module.exports = {
    argv
};
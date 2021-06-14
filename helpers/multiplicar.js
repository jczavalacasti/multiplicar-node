const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('===================');
    console.log('    Tabla del:', base);
    console.log('===================');

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${ base * index }\n`);
    }

};

const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base } no es un número`);
            return;
        }

        let salida = '';
        let consola = '';

        for (let index = 1; index <= limite; index++) {
            salida += `${base} x ${index} = ${ base * index }\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${ base * index }\n`;
        }

        fs.writeFileSync(`tablas/tabla-${base}.txt`, salida, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}--al-limite-${limite}.txt`)
            }
        });

    });

}

module.exports = {
    listarTabla,
    crearArchivo
};
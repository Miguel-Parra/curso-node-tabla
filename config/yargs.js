const argv = require('yargs')
    .option('b', { //me permite utilizar tambien la b y base cualquiera de las dos
        alias: 'base',
        type: 'number',
        demandOption: true, //me obliga a enviar un valor con la base,
        describe: 'Es la base de la tabla multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false, //valor por defecto en el caso de que no se envie
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10, //valor por defecto en el caso de que no se envie
        describe: 'Este es el número hasta donde se multiplicará'
    })
    .check((valorConsola, options) => {//me permite verificar si el valor base cumple con la condicion
        if (isNaN(valorConsola.b)) {
            throw 'La base tiene que ser un número'
        } else {
            return true
        }
    })
    .argv //me interesa que extraiga el argv por eso se coloca el . y la propiedad         

    module.exports = argv;
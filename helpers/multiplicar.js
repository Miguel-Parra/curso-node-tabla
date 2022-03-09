const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
    try {
        let salida = '';
        let consola = ''; //se crea esta para imprimir ya que al guardar en el 
        // archivo estaba guardando el codigo del color
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log('================================'.green);
            // console.log(`          TABLA DEL ${base.blue}`);
            console.log('    TABLA DEL:'.green,colors.blue(base));
            console.log('================================'.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    }
    catch (error) {
        throw error;
    }
}
module.exports = {
    crearArchivo
}
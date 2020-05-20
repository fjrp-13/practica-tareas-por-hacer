//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====== Por Hacer ======');
            console.log(tarea.descripcion);
            let _completado = (tarea.completado == true ? colors.green(tarea.completado) : colors.red(tarea.completado));
            console.log(`Estado: ${_completado}`);
            console.log('=======================');
        }

        break;
    case 'actualizar':
        let _completado = ((argv.completado || 'true').toLowerCase() == 'true');
        let actualizado = porHacer.actualizar(argv.descripcion, _completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando incorrecto');
}
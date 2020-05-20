const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea ToDo'
};

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca una tarea ToDo como Completado o Pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento ToDo', { descripcion })
    .command('actualizar', 'Actualiza un elemento ToDo', { descripcion, completado })
    .command('listar', `Muestra la lista de ToDo's`)
    .command('borrar', 'Elimina un elemento ToDo', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
};
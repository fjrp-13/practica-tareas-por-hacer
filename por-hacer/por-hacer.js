const fs = require('fs');
let listadoPorHacer = [];

const cargarDB = () => {
    try {
        // require, detecta qaue es un JSON y lo "auto-transforma a formato json"
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}; // cargarDB

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log('The file has been saved!');
    });
}; // guardarDB

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}; // crear

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}; // getListado

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}; // actualizar

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length == nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
    /*
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        //listadoPorHacer.splice(index, 1);
        listadoPorHacer.filter()
        guardaDB();
        return true;
    } else {
        return false;
    }
    */
}; // borrar

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};
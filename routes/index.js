const express = require('express');
const router = express.Router();
//logs
const registrologinsController = require('../controllers/logs/registrologinsController');
const proyectoController = require('../controllers/proyectoController');
const postgreController = require('../controllers/postgreController');  // datos que se recibiran de Postgre

module.exports = function () {
    // ruta para el home
    router.get('/', proyectoController.proyectoHome);

    //AQUI VAMOS A TENER UN ORDEN BASTANTE COMPLEJO SINO NOS VAMOS A PERDER
    //LAS RUTAS VAN A ESTAR ORDENADAS SEGUN CARPETAS DE MODELS

    //RUTAS LOGS
    //logs
    router.post('/logs_crear', registrologinsController.crearRegistroLogs);


    // Endpoint para recibir la información de la API de PostgreSQL y guardarla en MongoDB
    router.post('/pagos', postgreController.registrarPago);
    router.put('/pagos/:correlativo',postgreController.actualizarPago);

    return router;
}
// ************ Se requiere el paquete Express ************
const express = require('express');
const router = express.Router();

// ************ Se requiere el Controller ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);

module.exports = router;

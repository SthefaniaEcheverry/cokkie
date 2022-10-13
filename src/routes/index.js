var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
const controller = require('../controllers/mainController')


router.post('/', [
  body('nombre').notEmpty().withMessage('Escribe tu nombre'),
  body('colores').isLength({ min: 1 }).withMessage('Elige un color'),
  body('email').isEmail().withMessage('Escribe tu correo electrónico'),
  body('edad').custom(value => {
    //pregunta si es número
    if (isNaN(value) || value.length < 1) {
      throw new Error('El valor ingresado debe ser un número')
    } else {
      console.log('¿El profe se equivoca?');
      return true
    }
  })
],controller.store);



/* GET home page. */
router.get('/', controller.index);

module.exports = router;

//1.- se traer el router
const router = require('express').Router();

/**
 * peticion GET
 */
router.get('/', (req, res) => {

    res.send('peticion get');
});


//2.- exportar
module.exports = router;
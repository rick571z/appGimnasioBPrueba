//1.- se traer el router
const router = require('express').Router();

/**
 * peticion GET
 */
router.get('/', (req, res) => {

    res.send('peticion get....');
});


/**
 * 
 */
router.get('/new', (req, res) => {
    res.send('peticion get new....');
});

/**
 * 
 */
router.get('/edit/:idCliente', (req, res) => {
    res.send('peticion get editar....');
});

/**
 * 
 */
router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('peticion post create cliente....');
});


/**
 * 
 */
router.post('/update', (req, res) => {
    res.send('peticion post update clientes....');
});

/**
 * 
 */
router.get('/delete/:idCliente', (req, res) => {
    res.send('peticon get delete cliente....');
});


//2.- exportar
module.exports = router;
//1.- se traer el router
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('peticion get profesor....');
});

router.get('/new', (req, res) => {
    res.send('peticion get new profesor....');
});


//2.- exportar
module.exports = router;
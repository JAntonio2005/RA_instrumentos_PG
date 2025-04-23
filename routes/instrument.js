const { Router } = require('express');
const controller = require('../controllers/instrument');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido a la API de Instrumentos 🎷'));
router.post('/instruments', controller.createInstrument);
router.get('/instruments', controller.getAllInstruments);
router.put('/instruments/:id', controller.updateInstrument);
router.delete('/instruments/:id', controller.deleteInstrument);

module.exports = router;

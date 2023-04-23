const { Router } = require('express');
const { getUsuario, putUsuario, postUsuario, deleteUsuario } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', getUsuario);

router.put('/:id', putUsuario);

router.post('/', postUsuario);

router.delete('/', deleteUsuario);

module.exports = router;
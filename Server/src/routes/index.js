const { Router } = require('express');

const getCharById = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const login = require('../controllers/login');

const router = Router();

router.get('/characters/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;

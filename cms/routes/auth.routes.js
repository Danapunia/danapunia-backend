const router = require('express').Router();
const controller = require('../controllers/auth.controller');

router.get('/login', controller.loginIndex);

router.post('/login', controller.login);

module.exports = router;
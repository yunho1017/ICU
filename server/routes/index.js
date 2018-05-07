const router = require('express').Router();
const auth = require('./account');
const subject = require('./subject');
const assignment = require('./assignment');

router.use('/', auth);
router.use('/', subject);
router.use('/', assignment);

module.exports = router;
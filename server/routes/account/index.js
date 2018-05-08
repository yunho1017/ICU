const router = require('express').Router();
const controller = require('./auth.controller');

router.route('/auth/signup').post(controller.createUser);

router.route('/auth/signin').post(controller.signin);

router.route('/auth/admin/signup').post(controller.createAdmin);

router.route('/auth/admin/signin').post(controller.adminSignin);

// router.route('/auth/overlap').post(controller.checkId);

//router.route('/token').get(controller.refreshToken);

module.exports = router;

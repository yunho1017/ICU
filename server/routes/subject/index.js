const router = require('express').Router();
const authCheck = require('../../middleware/auth');
const controller = require('./subject.controller');

router.route('/subject').post(authCheck, controller.createSubject);

router.route('/subject').get(authCheck, controller.getSubject);

// router.route('/subject').put(authCheck, controller.deleteSubject);

// router.route('/subject/:subject_id').delete(authCheck, controller.modifySubject);

module.exports = router;
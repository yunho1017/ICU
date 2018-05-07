const router = require('express').Router();
const authCheck = require('../../middleware/auth');
const controller = require('./assignment.controller');

router.route('/assignment').post(authCheck, controller.createAssignment);

router.route('/assignment/:subject_id').get(authCheck, controller.readAssignmentByStudent);

router.route('/assignment/admin').get(authCheck, controller.readAssignmentByAdmin);

// router.route('/assignment').put(authCheck, controller.deleteAssignment);

// router.route('/assignment/:subject_id').delete(authCheck, controller.modifyAssignment);

module.exports = router;
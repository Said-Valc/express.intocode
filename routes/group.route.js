const {Router} = require('express');
const {groupsController} = require('../controllers/groups.controllers.js');
const router = Router();

router.get('/getGroups', groupsController.getGroups);
router.post('/addGroup', groupsController.addGroup);
router.get('/getAllStudentsByGroup', groupsController.getAllStudentsByGroup);
router.get('/getProcentOfferInGroup/:id', groupsController.getProcentOfferInGroup);
module.exports = router;
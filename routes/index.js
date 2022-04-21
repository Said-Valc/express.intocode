const {Router} = require('express');

const router = Router();

router.use(require('./student.route.js'));
router.use(require('./group.route.js'));
module.exports = router;
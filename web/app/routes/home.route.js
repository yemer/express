const express = require('express');
const router = express.Router();

const homeController = 
        require('../controllers/home.controller');

router.get('/', homeController.index);
router.get('/views/Vision/visionmision', homeController.index);
module.exports = router;


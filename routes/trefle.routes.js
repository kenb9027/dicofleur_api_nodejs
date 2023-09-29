const express = require('express');
const router = express.Router();

const trefle_controller = require('../controllers/trefle.controllers');

router.get('/all', trefle_controller.get_all_plants);
router.get('/search/:searchText', trefle_controller.search_for_a_plant);


module.exports = router;
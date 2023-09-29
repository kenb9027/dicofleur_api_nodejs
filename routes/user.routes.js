const express = require("express");
require('dotenv').config();

const router = express.Router();

const userController = require("../controllers/user.controllers.js");

router.get("/all", (req, res) => {
    userController.findAllUser(req, res)
});
router.get("/:id", userController.findOneUser);


module.exports = router;
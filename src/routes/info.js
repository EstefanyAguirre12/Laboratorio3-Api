const express = require("express");
const infoSchema = require("../models/info");

const router = express.Router();


// create user
router.post("/infos", (req, res) => {
    res.send("Create");
});

module.exports = router;

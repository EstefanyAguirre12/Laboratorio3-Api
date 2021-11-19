const express = require("express");
const infoSchema = require("../models/info");

const router = express.Router();


// create info
router.post("/infos", (req, res) => {
    const info = infoSchema(req.body);
    info
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/infos", (req, res) => {
  infoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

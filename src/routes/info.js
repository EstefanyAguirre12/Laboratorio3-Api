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
  try {
    const info = await infoSchema.find({}, {}, { sort: '-createdAt' });
    res.json({
      status: 'success',
      data: info,
      message: 'Activity fetched successfully',
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 'error',
      data: null,
      message: error,
    });
  }
});

module.exports = router;

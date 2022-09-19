const express = require("express");
const router = express.Router();
const fs = require("fs")

const classes = JSON.parse(fs.readFileSync(`assets/data/classes.json`));

router.get("/", (req, res) => {
    res.json(classes)
})

module.exports = router;
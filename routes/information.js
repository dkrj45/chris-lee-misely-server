const express = require("express");
const router = express.Router();
const fs = require("fs")

const information = JSON.parse(fs.readFileSync(`assets/data/information.json`));

router.get("/", (req, res) => {
    res.json(information)
})

module.exports = router;
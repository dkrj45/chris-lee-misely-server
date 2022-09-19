const express = require("express");
const router = express.Router();
const fs = require("fs")

const providers = JSON.parse(fs.readFileSync(`assets/data/providers.json`));
const providersDetails = JSON.parse(fs.readFileSync('assets/data/providers-details.json'));

router.get("/", (req, res) => {
    res.json(providers)
})

router.get("/:id", (req, res) => {
    provider = providersDetails.filter((e)=>{
        return e.id === `${req.params.id}`
    })
    res.json(provider[0]);
})

module.exports = router;
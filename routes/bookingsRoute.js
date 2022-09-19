const express = require("express");
const router = express.Router();
const fs = require("fs")

const bookings = JSON.parse(fs.readFileSync(`assets/data/bookings.json`));
const detailedBooking = JSON.parse(fs.readFileSync('assets/data/booking-details.json'));

router.get("/", (req, res) => {
    res.json(bookings)
})

router.get("/:id", (req, res) => {
    res.json(detailedBooking[0]);
})

module.exports = router;
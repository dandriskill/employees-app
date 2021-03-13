const express = require("express");
const router = new express.Router();
const axios = require("axios");

// Get employees
// TODO: Allow query params to filter/paginate
router.get("/employees", async (req, res) => {
    const results = req.query.results || "20";
    try {
        // Grabbing users from randomuser.me
        const { data } = await axios.get(`https://randomuser.me/api/?results=${results}`);
        res.send(data);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = router;

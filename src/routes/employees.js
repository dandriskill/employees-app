const express = require("express");
const router = new express.Router();
const axios = require("axios");

// Get employees
router.get("/employees", async (req, res) => {
    let results = req.query.results || "20";
    const page = req.query.page || "1";
    try {
        // Grabbing users from randomuser.me with needed data properties
        const { data } = await axios.get(
            `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc&inc=picture,name,email,location,phone,dob`
        );
        res.send(data);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = router;

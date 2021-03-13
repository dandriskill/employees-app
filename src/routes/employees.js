const express = require("express");
const router = new express.Router();
const axios = require("axios");
const { reduceResultsToEmployeeMax } = require("../helpers/employees");

// Get employees
router.get("/employees", async (req, res) => {
    const results = req.query.results || "20";
    const page = req.query.page || "1";
    try {
        // Grabbing users from randomuser.me with needed data properties
        const { data } = await axios.get(
            `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc&inc=picture,name,email,location,phone,dob`
        );
        reduceResultsToEmployeeMax(page, results, data);
        res.send(data);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = router;

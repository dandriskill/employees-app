/*
 * If tests were first written for reduceResultsToEmployeeMax(), there would be three cases to test:
 * 1) page * results not exceeding limit and no change to the data
 * 2) page * results exceeding limit, but not more than the results per page, which splices the data
 * 3) page * results exceeding limit more than the number of results per page, throwing an error
 */

const reduceResultsToEmployeeMax = (page, results, data) => {
    // Only 7,000 employees, but randomuser API doesn't stop there, so we'll just mimic that
    const numEmployees = page * results;
    if (numEmployees > 7000) {
        const amount = (numEmployees) - 7000;
        // If page would be made empty because we went higher over 7,000 than the number on each page, throw an error
        if (amount > results) throw new Error("Requesting too many employees.");
        else return data.results.splice((amount - 1), amount);
    }
};

module.exports = {
    reduceResultsToEmployeeMax,
};
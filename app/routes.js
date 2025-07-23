// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.get("/%E2%80%8B", (req, res) => {
    res.redirect("/")
})

module.exports = router;

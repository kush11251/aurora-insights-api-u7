const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics.js');
router.get('/', (req, res) => {
    metricsService.getMetrics().then((metrics) => {
        res.json(metrics);
    });
});
module.exports = router;
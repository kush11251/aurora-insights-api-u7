const express = require('express');
const app = express();
const port = 3000;
const metricsController = require('./controllers/metrics.js');
app.use('/metrics', metricsController);
app.get('/', (req, res) => {
    res.send('Aurora Insights API');
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
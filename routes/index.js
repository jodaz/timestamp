const router = require('express').Router();
const timestamp = require('../service/timestamp.js');

// Handle routes
router.route('/api/timestamp/').get(timestamp.parser);
router.route('/api/timestamp/:query').get(timestamp.parser);

// Main page
router.get('/', (request, response) => {
    response.sendFile('index.html', { root: './views/' });
});

module.exports = router;
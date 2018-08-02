const router = require('express').Router();
const timestamp = require('../api/timestamp.js');

// Handle routes
router.route('/timestamp/api/:query').get(timestamp.parser);

// Main page
router.get('/', (request, response) => {
    response.sendFile('index.html', { root: './views/' });
});

// router.get('*', (request, response) => {
//     response.send('404 - not found');
// });

// Error!

module.exports = router;
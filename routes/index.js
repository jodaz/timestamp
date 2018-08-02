const router = require('express').Router();
const path = require('path');

// Handle routes
router.get('/', (request, response) => {
    response.sendFile('index.html', { root: './views/' });
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Get the list of available routes
router.get('/', (req, res) => {
    const routes = req.app._router.stack
        .filter(layer => layer.route)
        .map(layer => ({
            path: layer.route.path,
            methods: Object.keys(layer.route.methods)
        }));

    res.json(routes);
});

module.exports = router;

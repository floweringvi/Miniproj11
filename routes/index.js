const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route
const diagnosticsRouter = require('./diagnostics')

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('/diagnostics', diagnosticsRouter);
// TODO: Initialize diagnostics route

module.exports = router;

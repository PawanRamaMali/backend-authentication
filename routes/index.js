const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/cdashboard', ensureAuthenticated, (req, res) =>
  res.render('cdashboard', {
    user: req.user
  })
);

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('cdashboard', {
    user: req.user
  })
);
module.exports = router;

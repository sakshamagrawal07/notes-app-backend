const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/authValidators');
const { validationResult } = require('express-validator');

// Middleware to handle validation result
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post('/register', validateRegister, handleValidation, authController.register);
router.post('/login', validateLogin, handleValidation, authController.login);

module.exports = router;

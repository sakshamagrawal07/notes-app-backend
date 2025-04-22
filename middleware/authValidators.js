const { body } = require('express-validator');

exports.validateRegister = [
  body('name')
    .optional()
    .isString().withMessage('Name must be a string')
    .isLength({ max: 50 }).withMessage('Name must be at most 50 characters'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email'),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

exports.validateLogin = [
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email'),

  body('password')
    .notEmpty().withMessage('Password is required'),
];

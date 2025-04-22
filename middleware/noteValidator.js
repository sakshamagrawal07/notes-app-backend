const { body } = require('express-validator');

exports.validateNote = [
  body('title')
    .optional()
    .isString().withMessage('Title must be a string')
    .isLength({ max: 100 }).withMessage('Title can be at most 100 characters'),

  body('textData')
    .optional()
    .isString().withMessage('Text data must be a string'),

  body('checkboxes')
    .optional()
    .isArray().withMessage('Checkboxes must be an array'),
  
  body('checkboxes.*.data')
    .optional()
    .isString().withMessage('Each checkbox must have a data field'),

  body('checkboxes.*.checked')
    .optional()
    .isBoolean().withMessage('Each checkbox must have a checked boolean'),

  body('images')
    .optional()
    .isArray().withMessage('Images must be an array of base64 strings'),

  body('images.*')
    .optional()
    .matches(/^data:image\/(png|jpeg|jpg);base64,/)
    .withMessage('Each image must be a valid base64 image string'),

  body('color')
    .optional()
    .matches(/^#[0-9A-Fa-f]{6}$/).withMessage('Color must be a valid hex code'),

  body('label')
    .optional()
    .isString().withMessage('Label must be a string'),

  body('userId')
    .notEmpty().withMessage('User ID is required')
    .isMongoId().withMessage('User ID must be a valid Mongo ID'),
];

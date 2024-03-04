const { check } = require('express-validator');
const handler = require('./Handler');

const required = (field) => {
	return check(
		field,
		`${field[0].toUpperCase() + field.substr(1)} field is required`
	).notEmpty();
};

const authValidator = {};

authValidator.register = [
	required('username')
		.isLength({
			min: 4,
			max: 36,
		})
		.withMessage('username must be between 4 to 36 characters'),
	required('name')
		.isLength({
			min: 4,
			max: 36,
		})
		.withMessage('name must be between 4 to 36 characters'),
	required('email').isEmail().withMessage('Must be a valid email address'),
	required('password')
		.isLength({ min: 8 })
		.withMessage('Password must contain at least 8 characters'),
	required('confirmPassword').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('password and confirmPassword does not match');
		}
		return true;
	}),
	handler,
];

authValidator.login = [required('identity'), required('password'), handler];

authValidator.resetPassword = [
	required('password')
		.isLength({ min: 8 })
		.withMessage('Password must contain at least 8 characters'),
	required('confirmPassword').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('password and confirmPassword does not match');
		}
		return true;
	}),
	handler,
];

authValidator.updatePassword = [
	required('currentPassword'),
	required('password')
		.isLength({ min: 8 })
		.withMessage('Password must contain at least 8 characters'),
	required('confirmPassword').custom((value, { req }) => {
		if (value !== req.body.newPassword) {
			throw new Error('password and confirmPassword does not match');
		}
		return true;
	}),
	handler,
];

module.exports = authValidator;

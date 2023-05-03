import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Name must consist of letters only',
        'string.required': 'Required field'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'min value 0',
        'number.max': 'max value 1000000',
        'number.required': 'Required field'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {
    carValidator
};
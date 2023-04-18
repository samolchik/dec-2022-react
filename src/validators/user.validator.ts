import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Name must consist of letters only',
        'string.required': 'Required field'
    }),
    username: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Name must consist of letters only',
        'string.required': 'Required field'
    }),
    email: Joi.string().required().messages({
        'string.required': 'Required field'
    }),
    phone: Joi.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/).required().messages({
        'string.pattern.base': 'Incorrect number',
        'string.required': 'Required field'
    }),
    city: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/).required().messages({
        'string.pattern.base': 'Incorrect number',
        'string.required': 'Required field'
    })
});

export {
    userValidator
};
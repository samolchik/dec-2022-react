import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Name must consist of letters only'
    }),
    body: Joi.string().min(20). max(300).required(),
    email: Joi.string().regex(/^\S+@\S+\.\S+$/).required().messages({
        'string.pattern.base': 'Incorrect email address'
    })
});

export {
    commentValidator
};
import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().min(1). max(300).required().messages({
    }),
    body: Joi.string().min(20). max(3000).required()
});

export {
    commentValidator
};
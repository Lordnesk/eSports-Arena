import * as Joi from "joi";

export const envValidationSchema = Joi.object({
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    SALT_ROUNDS: Joi.number().default(10),
})
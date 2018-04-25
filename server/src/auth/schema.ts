const { validate } = require("express-jsonschema");

const loginSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'email',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    }
};

const registerSchema = {
    type: 'object',
    properties: {
        fullname: {
            type: 'string',
            required: true
        },
        role: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    }
};

export const login = validate({ body: loginSchema });

export const register = validate({ body: registerSchema });

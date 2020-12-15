import {ServerError} from "../utils/errors";
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants/constants');

module.exports = async (req, res, next) => {
    try {
        req.hashPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        delete req.body.password;
        next();
    } catch (err) {
        next(new ServerError(err));
    }
};

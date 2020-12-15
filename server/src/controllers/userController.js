const db = require('../models');
const jwt = require('jsonwebtoken');
const { ServerError, NotUniqueEmail } = require ('../utils/errors');
const { passwordCompare } = require('../utils/comparePassword');
const { JWT_SECRET, ACCESS_TOKEN_TIME } = require('../constants/constants');

module.exports.registration = (req, res, next) => {
    const userData = req.body;
    userData.password = req.hashPassword;
    db.Users.create(userData).then(savedUser => {
            if (savedUser) {
                req.newUser = savedUser.dataValues;
                next();
            }
        }).catch(err => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                next(new NotUniqueEmail(err));
            } else {
                next(new ServerError(err));
            }
        })
};

module.exports.createAccessToken = (req, res, next) => {
    const user = req.newUser || req.foundUser;
    const accessToken = jwt.sign({
        userId: user.id,
        email: user.email
    }, JWT_SECRET, {expiresIn: ACCESS_TOKEN_TIME});

    db.Users.update( {accessToken}, { where: { id: user.id } })
        .then(updatedUser => {
            if (updatedUser) {
                res.send( {token: accessToken} )
            }
        }).catch(err => {
            next(new ServerError(err));
        });
};

module.exports.authorization = async (req, res, next) => {
    try {
        const foundUser = await db.Users.findOne( {
            where: { email: req.body.email }
        } );
        await passwordCompare(req.body.password, foundUser.password);
        req.foundUser = foundUser;
        next();
    } catch (err) {
        next(new ServerError(err));
    }
};

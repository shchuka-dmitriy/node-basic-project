const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants/constants');
const { TokenError } = require('../utils/errors');

module.exports.checkToken = async (req, res, next) => {
  const accessToken = req.headers.authorization || req.body.token;
  if ( !accessToken) {
    return next(new TokenError('Need token'));
  }
  try {
    const tokenData = jwt.verify(accessToken, JWT_SECRET);
    if (tokenData) {
      req.tokenData = tokenData;
      return next()
    }
    return next(new TokenError('Token is invalid'));
  } catch (e) {
    next(e);
  }
};
// backend/middleware/authorize.js
const User = require('../models/User');

const authorize = (role) => {
  return async (req, res, next) => {
    const user = await User.findByPk(req.user.id);
    if (user && user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Доступ запрещен' });
    }
  };
};

module.exports = authorize;
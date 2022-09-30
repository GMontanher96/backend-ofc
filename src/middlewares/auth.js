const jwt = require('jsonwebtoken');
const User  = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        var data = jwt.verify(token, "q1w2e3r4t5y6");

        const user = await User.findByPk(data.id);
        if (!user) throw new Error("Usuário inválido!")

        req.id = data.id;
        req.user = user;

        next();
    }
    catch (error) {
        next(error);
    }
}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');


const me = async (req, res, next) => { 
    try {
        const user = await User.findOne({
            where: {
                id: req.id
            }
        });

        if (!user)
            res.status(401).send();
        else
            res.send(user);
    }
    catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => { 
    try {
        const { email, password } = req.body;

        if (!email)
            throw new Error("Usuário ou senha inválidos!");

        const user = await User.findOne({ where: { email } });

        if (!user)
            throw new Error("Usuário ou senha inválidos!");

        if (!await bcrypt.compare(password, user.password)) 
            throw new Error("Usuário ou senha inválidos!");


        const token = jwt.sign({
            id: user.id
        }, "q1w2e3r4t5y6", {
            expiresIn: "10s"
        });

        res.send({ user, token });
    } catch (error) {
        next(error);
    }

}

const dashboard = async (req, res, next) => {
res.send("oi")

}

const register = async (req, res, next) => { 
    try {
        const data = req.body;
       
        if (data.password)
            data.password = await bcrypt.hash(data.password, 10);

  
        const user = await User.create(data);
        console.log(req.body);

        res.send(user);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
 }

 module.exports = { me, login, register, dashboard }
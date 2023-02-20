require('dotenv').config();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt} = require('express-jwt');

const signin = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                error: 'User not found',
            });
        }
        if (!user.authenticate(req.body.password)) {
            return res.status(401).json({
                error: 'Email and password don\'t match',
            });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        
        return res.json({ 
            token, 
            user: { 
                _id: user._id, 
                name: user.name, 
                email: user.email 
            } 
        });
    } catch (err) {
        return res.status(401).json({
            error: 'Could not sign in',
        });
    }
};

const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth',
});

const isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: 'Access denied',
        });
    }
    next();
};

module.exports = {
    signin,
    requireSignin,
    isAuth,
};
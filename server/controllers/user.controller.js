// implement a user controller
// this controller will be used to handle all user related requests
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const getErrorMessage = require('../helpers/dbErrorHandler');

const create = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: 'Successfully signed up!',
        });
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err),
        });
    }
};

const userById = async (req, res, next, id) => {
    try {
        let user = await User.findById(id);
        if (!user) {
            return res.status(400).json({
                error: 'User not found',
            });
        }
        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({
            error: 'Could not retrieve user',
        });
    }
};

const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

const update = async (req, res) => {
    try {
        let user = req.profile;
        user = _.extend(user, req.body);
        user.updated = Date.now();
        await user.save();
        user.hashed_password = undefined;
        user.salt = undefined;
        return res.json(user);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err),
        });
    }
};

const remove = async (req, res) => {
    try {
        let user = req.profile;
        let deletedUser = await user.remove();
        deletedUser.hashed_password = undefined;
        deletedUser.salt = undefined;
        return res.json(deletedUser);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err),
        });
    }
};

const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created');
        return res.json(users);
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err),
        });
    }
};

module.exports = {
    userById,
    create,
    read,
    update,
    remove,
    list,
};
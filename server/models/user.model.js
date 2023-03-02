const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now,
    },
    updated: Date,
});

// virtual field
userSchema.virtual('password')
    .set(function (password) {
        // create a temporary variable called _password
        this._password = password;
        // generate a timestamp
        this.salt = this.makeSalt();
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

// methods
userSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    encryptPassword: function (password) {
        if(!password) return '';
        try {
            return crypto
                .createHash('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    },
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },
};

// validate password string
userSchema.path('hashed_password').validate(function (v) {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.');
    }
    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required');
    }
}, null);

module.exports = mongoose.model('User', userSchema);
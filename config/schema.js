'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    sports: {
        type: Array,
        required: true,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        trim: true
    },
    association: {
        type: String,
        trim: true
    },
    team: {
        type: String,
        trim: true
    },
    about: {
        type: String,
        trim: true
    },
    interest: {
        type: String,
        trim: true
    },
    charities: {
        type: String,
        trim: true
    },
    pets: {
        type: String,
        trim: true
    },
    drinks: {
        type: String,
        trim: true
    },
    married: {
        type: String,
        trim: true
    },
    facebook: {
        type: String,
        trim: true
    },
    twitter: {
        type: String,
        trim: true,
        required: true
    },
    instagram: {
        type: String,
        trim: true
    },
    snapchat: {
        type: String,
        trim: true
    },
    linkedin: {
        type: String,
        trim: true
    },
    twitch: {
        type: String,
        trim: true
    }

});

schema.statics.check_username = (username, callback) => {
    Player.findOne({
        username: username
    }, (err, User) => {
        if (err) {
            console.log(err);
        }
        return callback(User);
    })
}

const Player = mongoose.model('Player', schema);
module.exports = Player;

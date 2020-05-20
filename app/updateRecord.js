'use strict';
const Player = require('../config/schema.js');


module.exports = (req, res, username) => {
    console.log(req.body);
    let object = req.body;
    let query = {
        'username': username
    };

    Player.findOneAndUpdate(query, object, {
        upsert: true
    }, (err, doc) => {
        if (err) return res.send(500, {
            error: err
        });
        let obj = {
            username: username,
            value: false
        };
        res.send(obj);
    });
}

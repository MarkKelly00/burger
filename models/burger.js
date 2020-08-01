const orm = require("../config/orm.js");

const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res) {
            callback(res);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;
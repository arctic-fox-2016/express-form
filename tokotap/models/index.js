"use strict"

const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database("models/db/tokotap.db")
let models = {}

models.findAll = (callback) => {
  db.all("SELECT * FROM items", function (err, data) {
    callback(data)
  })
}

module.exports = models;

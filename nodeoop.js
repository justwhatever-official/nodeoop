// Made by Gavin Abu-Zahra
const fs = require("fs")
const path = require("path")
const os = require("os")

let options = JSON.parse(fs.readFileSync(path.join(__dirname, "nodeoop.json"),{encoding:"utf8"}))
const {Main} = require("./" + options.mainclass)
new Main(__dirname)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
const add = (a, b) => a + b;
app.get("/", (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    console.log(add(4, 3));
});
app.get("/yeshtml5", (req, res) => {
    res.send("yeshtml5");
});
app.listen(4000, () => console.log("start1"));

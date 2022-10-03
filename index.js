"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
// This is async and you will get a promise in return - it will be called once we get a response from that API
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});

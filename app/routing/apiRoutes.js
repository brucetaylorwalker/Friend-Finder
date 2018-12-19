// var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //survey input

        friends.push(req.body);
        return res.json(friends);

        //make match

        // var userInput = req.body;
        // var userResponses = userInput.scores;
        // var matchName = "";
        // var matchImage = "";
        // var totalDiff = 50;
        // var diff = 0;
        // for (var i = 0; i < friends.length; i++) {



        //} 
        //     if (diff < totalDiff) {
        //         totalDiff = diff;
        //         matchName = friends[i].name;
        //         matchImage = friends[i].photo;
        //     }


    });
};


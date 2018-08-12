// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================

var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // A GET route with the url `/api/friends`. 
  // This will be used to display a JSON of all possible friends.
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
    console.log("New Friend Data is: "+ friendData);
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function(req, res) {
    //compare the values as well
    var difference = 0;
    var totalDifference = 0;

    console.log("Best Friend: ");
    for(var i=0; i<9; i++){
      difference =Math.abs(parseInt(friendData[0].scores[i]) - parseInt(req.body.scores[i]));
      totalDifference = difference + totalDifference;
      console.log("Difference: "+ difference);
      console.log("Total Difference: "+ totalDifference);

    }
  });
};

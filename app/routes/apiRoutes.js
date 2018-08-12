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
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friends)

  // A GET route with the url `/api/friends`. 
  // This will be used to display a JSON of all possible friends.
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
    console.log("New Friend Data is: "+ friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // A POST routes `/api/friends`. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function(req, res) {
    
    //compare the values as well
    console.log("Data to compare with: ");
    console.log(friendData);

    console.log("New Friend Data: ");
    console.log(req.body);

    var friendData1 = friendData;
    var friendData2 = req.body;

    // for (var i = 0; i<9; i++){
    //   console.log(friendData1.scores[i]);
    //   console.log(friendData2.scores[i]);
    // }

  });
};

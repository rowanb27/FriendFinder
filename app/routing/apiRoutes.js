console.log('API Route Connected Successfully');

// Links Friends data
var friendsData = require('../data/friends.js');

   //Function includes a Get and Post route
   function apiRoutes(app) {

   // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
   app.get("/api/friends", function(req, res) {
       res.json(friendsData);
   });
   // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
   app.post("api/friends", function(req, res) {

       // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: [],
        quote: req.body.quote
   })
   }
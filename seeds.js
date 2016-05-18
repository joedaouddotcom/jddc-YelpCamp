var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
      {
            name: "Cloud's Rest", 
            image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      },
      {
            name: "Desert Mesa", 
            image: "https://farm8.staticflickr.com/7677/17482091193_e0c121a102.jpg",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      },
      {
            name: "Canyon Floor", 
            image: "https://farm8.staticflickr.com/7512/15558076393_8c1d4b9cf8.jpg",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      }
      ]

function seedDB(){
      //Remove all campgrounds
      Campground.remove({}, function(err){
            if(err){
                  console.log(err);
      } 
            console.log("removed campgrounds!");
      });
      // Add a few campgrounds
      data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                  if(err){
                        console.log(err);
                  } else {
                        console.log("Added a campground!");
                        //create a comment
                        Comment.create(
                              {
                                    text: "This place is great, but I wish there was Internet.",
                                    author: "Homer"
                              }, function(err, comment){
                                    if(err){
                                          console.log(err);
                                    } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment!");
                                    }
                              });
                  }
            });
      });
      
      
      // Add a few comments
      
}

module.exports = seedDB;
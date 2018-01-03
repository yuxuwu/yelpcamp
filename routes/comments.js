var router = require("express").Router({mergeParams: true});
var middleware = require("../middleware");

var Campground = require("../models/campground");
var Comment = require("../models/comment");

//NEW Comments -- creation form for comments
router.get("/new", middleware.isLoggedIn, function(req, res){
    var id = req.params.id;
    Campground.findById(id, function(err, foundCampground){
        if(err){
           console.log(err);
        } else {
        res.render("comments/new", {campground: foundCampground, currentUser: req.user});
       }
    });
});

//POST Comments -- creation of comments
router.post("/", function(req, res){
    //Lookup campground using id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();

                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    res.redirect("/campgrounds/" + foundCampground._id);
                }
            });
        }
    });
});

// EDIT
router.get("/:commentid/edit", middleware.checkCommentOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
            res.redirect("back");
        } else {
            Comment.findById(req.params.commentid, function(err, foundComment){
                if(err){
                    console.log(err);
                    res.redirect("back");
                } else {
                    res.render("comments/edit", {
                        campground: foundCampground,
                        comment: foundComment
                    });
                }
            });
        }
    });

});

// UPDATE
router.put("/:commentid", middleware.checkCommentOwnership, function(req, res){
    // find and update the correct campground
    Comment.findByIdAndUpdate(req.params.commentid, req.body.comment, function(err, updatedComment){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY
router.delete("/:commentid", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.commentid, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;
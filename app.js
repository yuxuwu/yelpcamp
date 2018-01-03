var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    flash       = require("connect-flash");

//Requiring DB models
var Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", {useMongoClient: true});
var seedDB = require("./seeds");

//Requiring routes
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes = require("./routes/comments"),
    indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");
//seedDB(); //resetting and seeding database

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "something",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Middleware
app.use(function(req, res, next){
    res.locals.currentUser = req.user; //set currentUser in every template.ejs as req.user
    res.locals.error = req.flash("error"); //set message in every template to retrieve the "error" flash
    res.locals.success = req.flash("success"); //set message in every template to retrieve the "success" flash
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, function(){
    console.log("YelpCamp started on PORT 3000!")
});
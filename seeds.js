var mongoose = require("mongoose");

var Campground = require("./models/campground"),
    Comment = require("./models/comment")

var data = [
    {name: "Cloud's Rest 1", image: "https://farm4.staticflickr.com/3805/9667057875_90f0a0d00a.jpg", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae aliquam elit, vel tristique nisl. Cras vel bibendum justo. Nunc ut quam dui. Fusce eget tincidunt purus. Donec laoreet risus non placerat sollicitudin. Fusce libero risus, finibus vitae ullamcorper vel, posuere quis nibh. Fusce quis tortor et magna vulputate consectetur. Aenean vitae lorem ex. Aliquam id est sit amet sapien rutrum fermentum. Nunc suscipit ex ornare auctor porta. In nec interdum sapien, id porttitor magna. Curabitur lacinia egestas sodales. Etiam sit amet aliquam ex. Praesent et risus nec diam aliquet sodales. Integer ac justo blandit, finibus purus eu, consectetur ipsum. Curabitur non nisl sit amet metus dignissim aliquam. Ut interdum lacus quis eros congue scelerisque. Etiam pharetra arcu ligula, quis vulputate lectus condimentum ac. Nam consequat massa ut nulla placerat pretium. Etiam rutrum enim at accumsan aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo dolor, cursus sit amet ante consequat, cursus faucibus sapien. Ut ligula risus, mattis non est vel, aliquet consectetur lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in ex quis ligula molestie ullamcorper vel quis quam. Sed varius sem at ligula elementum blandit. Mauris lacus odio, sodales in pulvinar id, lacinia ac ex. Duis lectus purus, sollicitudin vel dolor eu, bibendum porttitor orci. Aenean vestibulum, elit eget auctor convallis, lectus risus congue sapien, in convallis quam felis at urna. Praesent eu tortor faucibus, pulvinar metus ut, eleifend metus. Ut ultricies placerat arcu sit amet blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet tellus ultrices, fringilla nulla et, iaculis risus. Cras efficitur porttitor orci nec venenatis. In cursus viverra mauris. Proin tempus mattis augue, non rutrum ex suscipit eget. Phasellus sit amet justo tortor. Donec vestibulum blandit volutpat. Integer porttitor sem nec augue eleifend tincidunt. "},
    {name: "Cloud's Rest 2", image: "https://farm1.staticflickr.com/454/19246699713_77cf826d62.jpg", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae aliquam elit, vel tristique nisl. Cras vel bibendum justo. Nunc ut quam dui. Fusce eget tincidunt purus. Donec laoreet risus non placerat sollicitudin. Fusce libero risus, finibus vitae ullamcorper vel, posuere quis nibh. Fusce quis tortor et magna vulputate consectetur. Aenean vitae lorem ex. Aliquam id est sit amet sapien rutrum fermentum. Nunc suscipit ex ornare auctor porta. In nec interdum sapien, id porttitor magna. Curabitur lacinia egestas sodales. Etiam sit amet aliquam ex. Praesent et risus nec diam aliquet sodales. Integer ac justo blandit, finibus purus eu, consectetur ipsum. Curabitur non nisl sit amet metus dignissim aliquam. Ut interdum lacus quis eros congue scelerisque. Etiam pharetra arcu ligula, quis vulputate lectus condimentum ac. Nam consequat massa ut nulla placerat pretium. Etiam rutrum enim at accumsan aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo dolor, cursus sit amet ante consequat, cursus faucibus sapien. Ut ligula risus, mattis non est vel, aliquet consectetur lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in ex quis ligula molestie ullamcorper vel quis quam. Sed varius sem at ligula elementum blandit. Mauris lacus odio, sodales in pulvinar id, lacinia ac ex. Duis lectus purus, sollicitudin vel dolor eu, bibendum porttitor orci. Aenean vestibulum, elit eget auctor convallis, lectus risus congue sapien, in convallis quam felis at urna. Praesent eu tortor faucibus, pulvinar metus ut, eleifend metus. Ut ultricies placerat arcu sit amet blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet tellus ultrices, fringilla nulla et, iaculis risus. Cras efficitur porttitor orci nec venenatis. In cursus viverra mauris. Proin tempus mattis augue, non rutrum ex suscipit eget. Phasellus sit amet justo tortor. Donec vestibulum blandit volutpat. Integer porttitor sem nec augue eleifend tincidunt. "},
    {name: "Cloud's Rest 3", image: "https://farm4.staticflickr.com/3002/2386125285_2c05889d2a.jpg", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae aliquam elit, vel tristique nisl. Cras vel bibendum justo. Nunc ut quam dui. Fusce eget tincidunt purus. Donec laoreet risus non placerat sollicitudin. Fusce libero risus, finibus vitae ullamcorper vel, posuere quis nibh. Fusce quis tortor et magna vulputate consectetur. Aenean vitae lorem ex. Aliquam id est sit amet sapien rutrum fermentum. Nunc suscipit ex ornare auctor porta. In nec interdum sapien, id porttitor magna. Curabitur lacinia egestas sodales. Etiam sit amet aliquam ex. Praesent et risus nec diam aliquet sodales. Integer ac justo blandit, finibus purus eu, consectetur ipsum. Curabitur non nisl sit amet metus dignissim aliquam. Ut interdum lacus quis eros congue scelerisque. Etiam pharetra arcu ligula, quis vulputate lectus condimentum ac. Nam consequat massa ut nulla placerat pretium. Etiam rutrum enim at accumsan aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo dolor, cursus sit amet ante consequat, cursus faucibus sapien. Ut ligula risus, mattis non est vel, aliquet consectetur lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in ex quis ligula molestie ullamcorper vel quis quam. Sed varius sem at ligula elementum blandit. Mauris lacus odio, sodales in pulvinar id, lacinia ac ex. Duis lectus purus, sollicitudin vel dolor eu, bibendum porttitor orci. Aenean vestibulum, elit eget auctor convallis, lectus risus congue sapien, in convallis quam felis at urna. Praesent eu tortor faucibus, pulvinar metus ut, eleifend metus. Ut ultricies placerat arcu sit amet blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet tellus ultrices, fringilla nulla et, iaculis risus. Cras efficitur porttitor orci nec venenatis. In cursus viverra mauris. Proin tempus mattis augue, non rutrum ex suscipit eget. Phasellus sit amet justo tortor. Donec vestibulum blandit volutpat. Integer porttitor sem nec augue eleifend tincidunt. "}
]

function seedDB(){
    //Remove all campgrounds

    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // } else {
        //     console.log("removed campground");
        //     //Add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err);
        //             } else {
        //                 console.log("Created a campground")
        //                 Comment.remove({},function(err){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         console.log("removed comments");
        //                         //Add a few comments
        //                         Comment.create({
        //                             text: "This place is great, but there is no internet.",
        //                             author: "Homer Simpson"
        //                         }, function(err, comment){
        //                             if(err){
        //                                 console.log(err)
        //                             } else {
        //                                 console.log(">Created a comment")
        //                                 campground.comments.push(comment);
        //                                 campground.save();
        //                             } 
        //                         });
        //                     }
        //                 });

        //             }
        //         });
        //     });
        // }
    });

    
}

module.exports = seedDB;

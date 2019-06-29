var express 			= require("express");
var path 				= require("path");
var bodyParser 			= require("body-parser");
var methodOverride 		= require("method-override");
var exphbs 				= require("express-handlebars");
var session 			= require("express-session");
// var passport 			= require("./config/passport");
var PORT 				= process.env.PORT || 8080;
var db 					= require("./models");
var app 				= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

require("./routes.js")(app);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;
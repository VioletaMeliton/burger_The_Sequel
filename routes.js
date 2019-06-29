var path = require("path");

module.exports = function(app) {
   var burgers_controller = require("./controllers/burgers_controller");


    app.use("/", burgers_controller);

};

const {connect} = require("./client");
const { setupInput } = require("./input")

console.log("Connecting ...");


// \u0003 = unicode character of END OF TEXT -- CTRL + C

connect();
setupInput();
handleUserInput();

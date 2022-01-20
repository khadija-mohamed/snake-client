const net = require("net");
const {IP, PORT} = require("./constants")

// establishes a connection with the game server
const connect = function () {
  let up = "Move: UP";
  let down = 'Move: DOWN'; 
  let left = "Move: LEFT";
  let right = "Move: RIGHT"; 

  setInterval(() => { conn.write(`${up}`)})
  setInterval(() => { conn.write(`${down}`)})
  setInterval(() => { conn.write(`${left}`)})
  setInterval(() => { conn.write(`${right}`)})

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write(`Say: ${'hello friends!'}`)
  conn.write(`Name: ${'KM'}`)
  conn.on("connect", () => {
    console.log("Sucessfully connected to game server!");
  })

  return conn;
};

console.log("Connecting ...");
module.exports = connect;

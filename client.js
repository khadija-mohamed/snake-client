const net = require("net");

const name = 'Name: KM'
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
    host: '165.227.47.243',
    port: 50541 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Sucessfully connected to game server!");
  })

  return conn;
};

console.log("Connecting ...");
connect();
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function () {
    if (key === '\u0003') {
      process.exit();
  }
}

return stdin;
}; 



// \u0003 = unicode character of END OF TEXT -- CTRL + C

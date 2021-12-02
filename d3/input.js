// Stores the active TCP connection object.
let connection;
const {move, say1, say2, say3} = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};
// setup interface to handle user input from stdin
const handleUserInput = function (input) {
  if (input === '\u0003') process.exit(); //handle control c
  if (input === 'w') connection.write(move.up);
  if (input === 'a') connection.write(move.left);
  if (input === 's') connection.write(move.down);
  if (input === 'd') connection.write(move.right);
  if (input === 'x') connection.write(say1);
  if (input === 'z') connection.write(say2);
  if (input === 'm') connection.write(say3);

// process.stdin.on('data', (key) => {

//   switch (key) {

//   case 'w':
//   case '\u001b[A':
//     connection.write('Move: up');
//     break;
  
//   case 'a':
//   case '\u001b[C':
//     connection.write('Move: right');
//     break;

//   case 's':
//   case '\u001b[B':
//     connection.write('Move: down');
//     break;

//   case 'd':
//   case '\u001b[D':
//     connection.write('Move: left');
//     break;
  
//   case 'x':
//     connection.write('Say: I did it!');
//     break;
      
//   case 'z':
//     connection.write('Say: How Are you?');
//     break;
          
//   case '\u0003':
//     console.log("Thanks for using me, ciao!");
//     process.exit();
//   }
// });
};
//stdin.on("data", handleUserInput);

module.exports = setupInput;
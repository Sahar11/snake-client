const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP ,
    port: PORT
  });
 
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    //console.log('Hey');
    conn.write('Name: SAH');
  }); 
  // conn.on('connect', () => {
  //   setInterval(() => { conn.write('Move: down'),
  //   conn.write('Move: right')
  // }
  //   , 500 )
   
  // }); 
  // conn.on('connect', () => {
  //   setTimeout(() =>  conn.write('Move: up'), 2500 )
   
  // }); 
  // conn.on('connect', () => {
  //   setTimeout(() =>  conn.write('Move: up'), 3000 )
   
  // }); 
 

  conn.on('data', data => {
    console.log('Server says:', data);
  });
  return conn;
};
// console.log("Connecting ...");

// connect();

module.exports = connect;

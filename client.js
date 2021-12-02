const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' ,
    port: 50541
  });
 
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    //console.log('Hey');
    conn.write('Name: SAHAR');
  }); 
  conn.on('connect', () => {
    setInterval(() => { conn.write('Move: up'),
    conn.write('Move: right')
  }
    , 1000 )
   
  }); 
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

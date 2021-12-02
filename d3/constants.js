const IP = '165.227.47.243';
const PORT = 50541 ;
const move = {
  up: "Move: up",
  left: "Move: left",
  down: "Move: down",
  right: "Move: right",
  '\u001b[A': "Move: up", 
  '\u001b[C': "Move: left",
  '\u001b[B': "Move: down",
  '\u001b[D': "Move: right",
}
const say1 ="Say: How are you?";
const say2 ="Say: Have a nice day";
const say3 ="Say: You look cool";
module.exports = {
  IP,
  PORT,
  move,
  say1,
  say2,
  say3
};
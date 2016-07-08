// Commands:
//  hi - Hubot responds with "hello ffrom hubot!"
//  hubot bye - Hubot responds with "goodbye from hubot!"



module.exports = function(robot) {
  robot.hear(/hi/i, function(msg) {
    msg.send('hello from hubot!');
  });

  robot.respond(/bye/i, function(msg){
    msg.send('goodbye from hubot!');
  })
}

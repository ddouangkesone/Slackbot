module.exports = function(robot){

  robot.hear(/kitten/i, meow);

  function meow(msg){
    robot.http("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitten").get(function(err, res, body){
      console.log(body);
    });

    msg.send(catImage);

  }
}

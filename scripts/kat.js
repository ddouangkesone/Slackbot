module.exports = function(robot){

  robot.hear(/kitten/i, meow);

  function meow(msg){
    var catImage = 'https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg';

    msg.send(catImage);

  }
}

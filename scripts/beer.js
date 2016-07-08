module.export = function(robot) {
  var beers = 0;

  robot.respond(/take down (\d+)/i, takeDownBeers);

  function takeDownBeers(msg) {
  console.log('hit');
  }
   
}

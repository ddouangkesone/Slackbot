// module.exports = function(robot) {
//   robot.respond(/take down (\d+)/i, function(msg) {
//     msg.send('WEEEE!');
//   })
// };




module.exports = function(robot) {


  robot.hear(/wee/i, takeDownBeers);
  robot.hear(/check/i, checkBeers);
  var beers = 99;

  function takeDownBeers(msg){
    var takeDownCount = beers - 1;
    var message;

if(beers <= 0){
  message = "No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.";
}
else if(beers >= 1){
  message = beers + " bottles of beer on the wall! " + beers + " Bottles of beer! Take one down and pass it around " + takeDownCount + ' bottles of beer on the wall!';
  var beer = beer - 1;

}
else{
  message = "hit! else";
}
msg.send(message);

  }

};

function checkBeers(msg){
  msg.send('You have ' + beers + 'left!');
}

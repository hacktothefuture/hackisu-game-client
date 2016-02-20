var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var players = []
var clientPlayer = new Player("default", 0, 0);
var context;
var canvas;
var canvasWidth;
var canvasHeight;

function Player(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.speed = 3;
}



//context.fillStyle = "rgb(255, 0, 0)";
//context.fillText("They played us like a JSFiddle", 50, 50);
//console.log("ayy lmao");

var main = function() {
  render();
}

var render = function() {
    context.clearRect(0,0, canvasWidth, canvasHeight);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.strokeStyle = "green";
    context.strokeRect(0, 0, canvasWidth, canvasHeight);
    drawPlayer(clientPlayer);
    requestAnimationFrame(main);
}

var drawPlayer = function(player) {
    context.fillStyle = "rgb(0, 255, 0)";
    context.fillRect(player.x, player.y, player.width, player.height);
}

var checkPlayerBoundaries = function(player) {
    var canvasRight = canvasWidth - 1 - player.width;
    var canvasBottum = canvasHeight - 1 - player.height;
    if(player.x < 0){
        player.x = 0
    } else if (player.x > canvasRight) {
        player.x = canvasRight;
    }
    if(player.y < 0) {
        player.y = 0
    } else if (player.y > canvasBottum) {
        player.y = canvasBottum;
    }
}

document.addEventListener('keydown', function(evt) {
  switch (evt.keyCode) {
      case UP_ARROW:
        clientPlayer.y -= clientPlayer.speed;
        break;
      case DOWN_ARROW:
        clientPlayer.y += clientPlayer.speed;
        break;
      case RIGHT_ARROW:
        clientPlayer.x += clientPlayer.speed;
        break;
      case LEFT_ARROW:
        clientPlayer.x -= clientPlayer.speed;
        break;
  }
  checkPlayerBoundaries(clientPlayer);
}, false);

$(document).ready(function() {
    //grab canvas from DOM
    canvas = $("#hackisu")[0];
    context = canvas.getContext("2d");
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    //run main code 
    main();
})

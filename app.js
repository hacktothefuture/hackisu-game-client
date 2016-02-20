var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 300;
var w = canvas.width;
var h = canvas.height;
var playerWidth = 10;
var playerHeight = 10;
var playerSpeed = 3;
document.body.appendChild(canvas);

var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

//context.fillStyle = "rgb(255, 0, 0)";
//context.fillText("They played us like a JSFiddle", 50, 50);
//console.log("ayy lmao");

var main = function() {
	render();
}

var render = function() {
	context.clearRect(0,0,canvas.width, canvas.height);
  context.fillStyle = "white";
	context.fillRect(0,0,w,h);
	context.strokeStyle = "green";
	context.strokeRect(0, 0, w, h);
	drawPlayer();
  requestAnimationFrame(main);
}

var drawPlayer = function() {
	context.fillStyle = "rgb(0, 255, 0)";
  context.fillRect(playerX, playerY, playerWidth, playerHeight);
}

var playerX = 0;
var playerY = 0;

var checkPlayerBoundaries = function(x, y, width, height) {
	if(x < 0){
  	playerX = 0
  } else if (x > (width - 1 - playerWidth)) {
  	playerX = width - 1 - playerWidth;
  }
  if(y < 0) {
  	playerY = 0
  } else if (y > (height - 1 - playerHeight)) {
		playerY = height - 1 - playerHeight;
  }
}

document.addEventListener('keydown', function(evt) {
	switch (evt.keyCode) {
  case UP_ARROW:
  	playerY -= playerSpeed;
    break;
  case DOWN_ARROW:
  	playerY += playerSpeed;
    break;
  case RIGHT_ARROW:
  	playerX += playerSpeed;
    break;
  case LEFT_ARROW:
  	playerX -= playerSpeed;
    break;
  }
  checkPlayerBoundaries(playerX, playerY, w, h);
}, false);

main();
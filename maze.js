var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");
var currRectX = 200; // current PosX for blue triangle
var currRectY = 20; // current PosY for blue triangle
var mazeWidth = 556;
var mazeHeight = 556;
var direction = 180;
var difficulty = 'easy'; // easy, med, hard
var level = 1; // 1, 2
// different levels of mazes
var mazes = {
  'easy': {
    '1': {
      'img': 'maze-easy-1.gif',
      'blue': [20, 20],
      'lime': [280, 280]
    },
    '2': {
      'img': 'maze-easy-2.gif',
      'blue': [80, 20],
      'lime': [40, 40]
    }
  },
  'med': {
    '1': {
      'img': 'maze-med-1.gif',
      'blue': [200, 140],
      'lime': [220, 280]
    },
    '2': {
      'img': 'maze-med-2.gif',
      'blue': [20, 140],
      'lime': [160, 160]
    }
  },
  'hard': {
    '1': {
      'img': 'maze-hard-1.gif',
      'blue': [80, 20],
      'lime': [160, 40]
    },
    '2': {
      'img': 'maze-hard-2.gif',
      'blue': [20, 20],
      'lime': [280, 40]
    }
  }
};

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
        return setTimeout(callback, 16);
    };

function resetMaze(){
  drawTriangle(mazes[difficulty][level].blue[0], mazes[difficulty][level].blue[1], "#0000FF");
  direction = 180;
}

function turnRight(){
  direction = (direction + 90) % 360;
  drawTriangle(currRectX, currRectY, "#0000FF");
}

function turnLeft(){
  direction = (direction - 90) % 360;
  drawTriangle(currRectX, currRectY, "#0000FF");
}

function makeWhite(x, y, w, h) {
  context.beginPath();
  context.rect(x, y, w, h);
  context.closePath();
  context.fillStyle = "white";
  context.fill();
}
function drawMazeAndRectangle(rectX, rectY) {
  makeWhite(0, 0, canvas.width, canvas.height);
  var mazeImg = new Image();
  mazeImg.onload = function () { // when the image is loaded, draw the image, the rectangle and the circle
    context.drawImage(mazeImg, 0, 0);
    drawTriangle(rectX, rectY, "#0000FF", false, true);
    context.beginPath();
    context.arc(mazes[difficulty][level].lime[0], mazes[difficulty][level].lime[1], 9, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = '#00FF00';
    context.fill();
  };
  mazeImg.src = mazes[difficulty][level].img;
}
function drawTriangle(x, y, style) {
  makeWhite(currRectX, currRectY, 40, 40);
  currRectX = x;
  currRectY = y;
  context.beginPath();
  switch (direction) {
    case 0:
      // arrow up key
      context.moveTo(x+20, y);
      context.lineTo(x, y+40);
      context.lineTo(x+40, y+40);
      break;
    case -270:
    case 90:
      // arrow right key
      context.moveTo(x, y);
      context.lineTo(x+40, y+20);
      context.lineTo(x, y+40);
      break;
    case -180:
    case 180:
      // arrow down key
      context.moveTo(x+20, y+40);
      context.lineTo(x, y);
      context.lineTo(x+40, y);
      break;
    case -90:
    case 270:
      // arrow left key
      context.moveTo(x+40, y);
      context.lineTo(x, y+20);
      context.lineTo(x+40, y+40);
      break;
  }
  context.closePath();
  context.fillStyle = style;
  context.fill();
}
function moveRect() {
  var newX;
  var newY;
  var canMove;
  switch (direction) {
    case 0:
      // arrow up key
      newX = currRectX;
      newY = currRectY - 20;
      break;
    case -270:
    case 90:
      // arrow right key
      newX = currRectX + 20;
      newY = currRectY;
      break;
    case -180:
    case 180:
      // arrow down key
      newX = currRectX;
      newY = currRectY + 20;
      break;
    case -90:
    case 270:
      // arrow left key
      newX = currRectX - 20;
      newY = currRectY;
      break;
  }
  movingAllowed = canMoveTo(newX, newY);
  if (movingAllowed === 1) {      // 1 means 'the rectangle can move'
    drawTriangle(newX, newY, "#0000FF");
    currRectX = newX;
    currRectY = newY;
  }else if (movingAllowed === 2) { // 2 means 'the rectangle reached the end point'
    // makeWhite(0, 0, canvas.width, canvas.height);
    drawTriangle(newX, newY, "#0000FF");
    currRectX = newX;
    currRectY = newY;
  }
}

function wallInFront() {
  var newX;
  var newY;
  var canMove;
  switch (direction) {
    case 0:
      // arrow up key
      newX = currRectX;
      newY = currRectY - 1;
      break;
    case -270:
    case 90:
      // arrow right key
      newX = currRectX + 1;
      newY = currRectY;
      break;
    case -180:
    case 180:
      // arrow down key
      newX = currRectX;
      newY = currRectY + 1;
      break;
    case -90:
    case 270:
      // arrow left key
      newX = currRectX - 1;
      newY = currRectY;
      break;
  }

  canMove = canMoveTo(newX, newY);
  switch (canMove) {
    case 0:
      return true;
    case 1:
      return false;
    case 2:
      return false;
  }
}

function onGoal() {
  var limeX = mazes[difficulty][level].lime[0];
  var limeY = mazes[difficulty][level].lime[1];
  if ((limeX >= currRectX &&  limeX <= currRectX + 40) && (limeY >= currRectY &&  limeY <= currRectY + 40)) {
    alert('Congratulations!');
    return true;
  }
  return false;
}

function canMoveTo(destX, destY) {
  var imgData = context.getImageData(destX, destY, 40, 40);
  var data = imgData.data;
  var canMove = 1; // 1 means: the rectangle can move
  if (destX >= 0 && destX <= mazeWidth - 40 && destY >= 0 && destY <= mazeHeight - 40) { // check whether the rectangle would move inside the bounds of the canvas
    for (var i = 0; i < 4 * 40 * 40; i += 4) { // look at all pixels
      if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
        canMove = 0; // 0 means: the rectangle can't move
        break;
      }
      else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // lime: #00FF00
        canMove = 2; // 2 means: the end point is reached
        break;
      }
    }
  }
  else {
    canMove = 0;
  }
  return canMove;
}

// event listiners for changing difficulty and level
document.getElementById('difficulty').addEventListener("change", function() {
  resetMaze();
  difficulty = this.value;
  drawMazeAndRectangle(mazes[difficulty][level].blue[0], mazes[difficulty][level].blue[1]);
});
document.getElementById('level').addEventListener("change", function() {
  resetMaze();
  level = this.value;
  drawMazeAndRectangle(mazes[difficulty][level].blue[0], mazes[difficulty][level].blue[1]);
});
drawMazeAndRectangle(mazes[difficulty][level].blue[0], mazes[difficulty][level].blue[1]);

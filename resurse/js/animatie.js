function MoveInfractor() {
  var elem = document.getElementById("infractor");   
  var posx = 150;
  var posy = 150;
  var angle = 0;
  var radius = 150;
  var x, y;
  var id = setInterval(frame, 5);
  function frame() {
      angle += 0.005;
      x = radius * Math.cos(angle);
      y = radius * Math.sin(angle);
      elem.style.top = posx + x + "px"; 
      elem.style.left = posy + y + "px"; 
  }
}

function MovePolitist() {
  var elem = document.getElementById("politist");   
  var posx = 150;
  var posy = 150;
  var angle = 0;
  var radius = 150;
  var x, y;
  var id = setInterval(frame, 5);
  function frame() {
      angle += 0.004;
      x = radius * Math.cos(angle);
      y = radius * Math.sin(angle);
      elem.style.top = posx + x + "px"; 
      elem.style.left = posy + y + "px"; 
  }
}
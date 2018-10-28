/* Cambios:
		-aumentado el rango de lugar de aparición en el eje x ya que lo vamos a usar de cabecera y x (width) va a ser más ancho (randomRange(-55,55)) y reducimos el del eje y (de 25 a 20)
		-si se genera una estrella en el 0,0 se vuelve a generar el rango en el eje x
		-las estrellas eran rectangulares, se han cambiado por círculos y se le ha dado opacidad
		-se ha quitado el shade a los colores (ahorramos al menos 3-4% de cpu y el efecto no es esencial)
*/
MAX_DEPTH = 32;

var canvas, ctx;
var stars = new Array(128);

window.onload = function() {
  canvas = document.getElementById("canvas");
  if( canvas && canvas.getContext ) {
	ctx = canvas.getContext("2d");
	initStars();
	setInterval(loop,50);
   }
}

/* Returns a random number in the range [minVal,maxVal] */
function randomRange(minVal,maxVal) {
  return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
}

function initStars() {
  for( var i = 0; i < stars.length; i++ ) {
	stars[i] = {
	  x: randomRange(-55,55),
	  y: randomRange(-20,20),
	  z: randomRange(1,MAX_DEPTH)
	 }
  }
}

function loop() {
  var halfWidth  = canvas.width / 2;
  var halfHeight = canvas.height / 2;

  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for( var i = 0; i < stars.length; i++ ) {
	stars[i].z -= 0.2;

	if( stars[i].z <= 0 ) {
	  stars[i].x = randomRange(-55,55);
	  stars[i].y = randomRange(-20,20);
	  stars[i].z = MAX_DEPTH;
	  if(stars[i].x==0 && stars[i].y==0) stars[i].x=randomRange(-20,20); //la regeneramos en otro punto para que no parta de 0,0
	}

	var k  = 128.0 / stars[i].z;
	var px = stars[i].x * k + halfWidth;
	var py = stars[i].y * k + halfHeight;

	//cambiado por círculos y quitado el shade para menos consumo de cpu

	if( px >= 0 && px <= 1500 && py >= 0 && py <= 300 ) {
	  var size = (1 - stars[i].z / 32.0) * 5;
	  //var shade = parseInt((1 - stars[i].z / 32.0) * 255);
	  //ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
	  ctx.fillStyle = "rgba(255,255,255,0.5)";//+x
	ctx.beginPath();//+x
		ctx.arc(px, py, size/2, 0, Math.PI * 2, false);//+x
	ctx.closePath();//+x
	
	  //ctx.fillRect(px,py,size,size);
	}
	ctx.fill();//+x
  }
}
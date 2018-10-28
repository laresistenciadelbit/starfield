function mysf(sky_style='rb')	//rb (right-bottom) , b (bottom) , t (top) , rt (right-top)
{
	var zr=0;zb=0;
	
	switch(sky_style)
	{
		case 'rb':
			zr=1;zb=1;
		break;
		case 'b':
			zb=1;
		break;
		case 't':
			zb=-1;
		break;
		case 'rt':
			zr=1;zb=-1;
		break;
	}

	var canvas = document.getElementById("canvas");
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	var ctx = canvas.getContext("2d");
	var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

	var framesPerSecond=18;
	var points=37;
	var px=[];var py=[];var rad=[];var popacidad=[];var speed=[];

	var requestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame;
		
	fillpoints(px,py,popacidad,points,30,75,rad,0.4,2.5,speed);

	pintaCirculos(px,py,popacidad,points,rad,speed);

	//load image: (dibujar imágenes consume mucho en este caso, asi que las superpondremos después)
	/*base_image = new Image();
	base_image.src = '1.png';
	var img_x=100;
	var img_y=50;
	base_image.onload = function(){ ctx.drawImage(base_image, img_x, img_y); }
	*/



	//fillpoints(vectores x,y,opacidad , num.puntos, vector radios, minimo opacidad, máximo opacidad, función rellenar radios, radio mínimo, radio máximo,velocidad)
	function fillpoints(x,y,o,p,minO,maxO,r,minR,maxR,s){
	 for (i = 0; i < p; i++) {
	  x[i]=Math.floor((Math.random() * canvasWidth-1) + 0);
	  y[i]=Math.floor((Math.random() * canvasHeight-1) + 0);
	  o[i]=Math.floor((Math.random() * maxO) + minO); //opacidad mínima y máxima 

	  //r[i]=(Math.random() * maxR) + minR; vamos a hacer que sea más dificil que aparezcan estrellas grandes:
	  r[i]=Math.min( (Math.random() * maxR) + minR , (Math.random() * maxR-minR) + minR );
	  o[i]=o[i]/100;
	  s[i]=Math.floor((Math.random() * 3) + 0);//del 0 al 2 y convertimos 0 en 0.75 y 2 en 0.5
	  if(s[i]==0) s[i]=0.75;
	  if(s[i]==2) s[i]=0.5;
	 }
	}

	function pintaCirculos(x,y,o,p,r,s) {


	setTimeout(function() {	
		//ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		//ctx.fillStyle = "#000000";
		//ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		canvas.width = canvas.width; // <- en vez de las 3 líneas de arriba (brujería!)
		
	 for (i = 0; i < p; i++) {
			ctx.beginPath();
			ctx.arc(x[i], y[i], r[i], 0, Math.PI * 2, false);
			ctx.closePath();
			ctx.fillStyle = "rgba(226, 233, 252, "+o[i]+")";//"#446699";
			ctx.fill();

	  if(x[i]+1>canvasWidth || y[i]+1>canvasHeight || x[i]<0 || y[i]<0)
	  {
		if( Math.floor((Math.random() * 2) + 1) >1 || sky_style=='b') //para coger entre la posición aleatoria lateral de y o de x. 
		{
			x[i]=Math.floor((Math.random() * canvasWidth-1) + 0);
			if(sky_style=='rt' || sky_style=='t' )
				y[i]=canvasHeight-1;
			else
				y[i]=0;
		}
		else
		{
			x[i]=0;
			y[i]=Math.floor((Math.random() * canvasHeight-1) + 0);
		}
	  }
	  else
	  {
		x[i]+=zr*s[i];//0.5;
		y[i]+=zb*s[i];
	  }
	 }
	 
		//paint image:
	 //ctx.drawImage(base_image, 100, 50);
		//image en movimiento:
	 //ctx.drawImage(base_image, Math.min( (Math.random() * ((img_x+1)-img_x)+ img_x),(Math.random() * ((img_x+1)-img_x)  + img_x ) ) , Math.min( (Math.random() * ((img_y+1)-img_y)+ img_y),(Math.random() * ((img_y+1)-img_y)  + img_y ) ) );

		requestAnimationFrame( function() {pintaCirculos(x,y,o,p,r,s);} ); 
	}, 1000 / framesPerSecond); //<-- works

		
	}

}
# starfield
Draw a star field in js moving in the desired direction.

![alt starfield](https://raw.githubusercontent.com/laresistenciadelbit/starfield/branch/screenshots/stars.gif)

[ENGLISH]

It's based in two scripts:

-mysf.js : move stars to right-bottom or bottom or top or right-top.

-sf.js   : move stars from center to borders

sf.js is a modified version from lefam's (http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/)
with this changes:

	-raised x range for new stars because we are going to use a more wide field for a web header "randomRange(-55,55)" and reduced y axis new stars field (from 25 to 20)
	-disabled the born of new stars in range 0,0
	-stars were sqare, now they're circles with some opacity
	-shade removed from colors (it wasn't an important effect and it took 4% more of cpu)


We can see the example in index.php for calling both scripts giving the type of star field or we can see the scripts separately in mysf.html and sf.html

For index.php and mysf.html posible values of mysf("") or $sky_style are (stars movement):
rb (right-bottom)
b (bottom)
t (top)
rt (right-top)
c (center)


--------------------------------------------

[ESPAÑOL]

Está basado en 2 scripts

-mysf.js : mueve estrellas de derecha-abajo o abajo o arriba o arriba-derecha

-sf.js   : mueve estrellas desde el centro a los bordes

sf.js es una versión modificada del script de lefam (http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/)
Tiene estos cambios con respecto al original:

	-aumentado el rango de lugar de aparición en el eje x ya que lo vamos a usar de cabecera y x (width) va a ser más ancho (randomRange(-55,55)) y reducimos el del eje y (de 25 a 20)
	-si se genera una estrella en el 0,0 se vuelve a generar el rango en el eje x
	-las estrellas eran rectangulares, se han cambiado por círculos y se le ha dado opacidad
	-se ha quitado el shade a los colores (ahorramos al menos 3-4% de cpu y el efecto no es esencial)

Podemos ver el ejemplo en index.php para llamar a ambos scripts dándole el tipo de campo de estrellas que queremos, o podemos ver los scripts por separado con mysf.html y sf.html

Para index.php y mysf.html los valores posibles en mysf("") o $sky_style son (movimiento de estrellas):
rb (right-bottom)
b (bottom)
t (top)
rt (right-top)
c (center)

<canvas id="canvas" width="1200" height="300" style="width: 100%;height:auto; background-color:#000;">
		<!--Your browser does not support HTML5 canvas-->
</canvas>

<?php
	$sky_style='rb';

	if($sky_style=='c')
		echo '<script src="sf.js"></script>';
	else
		echo '<script src="mysf.js"></script>	<script>mysf("'.$sky_style.'");</script>';
?>


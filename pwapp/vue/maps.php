<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Geo-Quizz</title>
  <link rel="stylesheet" href="../css/maps.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script  language="JavaScript" type="text/javascript" src="../js/main.js"></script>  
 <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 90%;
		  margin-top: 0 0 0 10%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
      margin:0;
        padding: 0;
      }
 </style>
</head>

<body>		
<form   action="test.php" method="post">
<?php $idtheme =$_GET['idTheme']; ?>
	<input type="hidden" name="lat" id="lat" /> 
	<input type="hidden" name="lng" id="lng" />
		<input type="hidden" name="idTheme"  id="idTheme" value="<?php echo $idtheme?>"/>
	
</form>
	<nav><p> <?php echo $idtheme; ?><!--  </p><div id="infoposition"></div>--></nav>
	<div id="map"></div> 
	
	<script async defer
     <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADdO8XEcU-w7ZAndH4IwTUMYp5tUZz0gs&callback=initMapGame">
    </script>	
	<script>
function maPosition(position) {
  var infopos = "Position déterminée :\n";
  infopos += "Latitude : "+position.coords.latitude +"\n";
  infopos += "Longitude: "+position.coords.longitude+"\n";
  infopos += "Altitude : "+position.coords.altitude +"\n";
  document.getElementById("infoposition").innerHTML = infopos;
	  
	 
	$.post("pins.php",{lat:position.coords.latitude,lng:position.coords.longitude});  $("#lat").val(position.coords.latitude); 
	$("#lat").val(position.coords.latitude); 
	$("#lng").val(position.coords.longitude);
}

if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(maPosition);
</script>
	  </script>	
</body>

</html>


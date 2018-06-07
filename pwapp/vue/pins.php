<?php

$username="root";
$password="root";
$database="geo_quizz_bd";
	
// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

// Opens a connection to a MySQL server

$connection=mysql_connect ('localhost', $username, $password);
if (!$connection) {  die('Not connected : ' . mysql_error());}

// Set the active MySQL database

$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the markers table
if( isset($_POST['lat']) && isset($_POST['lng']) ){
echo $_REQUEST['lat'];
echo $_REQUEST['lng'];
    }
	if( isset($_POST['idTheme'])  ){

    }else{
		
 ///var_dump($_POST['idTheme']);
 //$query = "SELECT * FROM pins,theme,video,video_has_theme WHERE video.idPins = pins.idPins 
		//												  AND video_has_theme.Video_idVideo=video.idVideo 
					//									  AND video_has_theme.Theme_idTheme=theme.idTheme 
				//										  AND theme.idTheme=1";
				//										  
														  $query = "SELECT * FROM pins";

	}													  
								$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each

while ($row = @mysql_fetch_assoc($result)){
  // Add to XML document node
  $node = $dom->createElement("marker");
  $newnode = $parnode->appendChild($node);
  $newnode->setAttribute("name",$row['nom']);
  $newnode->setAttribute("address", $row['adresse']);
  $newnode->setAttribute("lat", $row['lat']);
  $newnode->setAttribute("lng", $row['lng']);
  $newnode->setAttribute("type", $row['type']);
}

echo $dom->saveXML();

?>

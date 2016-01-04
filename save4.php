<?php
include ("connessione.php");
include("LoScoprimondo.php");




$query="INSERT INTO madrePatria (immagine,email) VALUES ('$_POST[immagine]','$cod')";

$result = mysql_query($query);

echo "#".$cod ;

?>

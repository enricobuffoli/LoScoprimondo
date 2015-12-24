<?php
include ("connessione.php");
include("LoScoprimondo.php");




$query="INSERT INTO madreNatura (immagine,email) VALUES ('$_POST[name]','$_POST[utente]')";

$result = mysql_query($query);

echo "#".$cod ;


?>
<?php
include ("connessione.php");
include("LoScoprimondo.php");




$query="INSERT INTO terraFrontiera (immagine,email) VALUES ('$_POST[immagine]','$cod')";

$result = mysql_query($query);

$query2="DELETE FROM `madreNatura` WHERE `email` = '".$cod."' AND `immagine` NOT LIKE '{%' ";

$result2= mysql_query($query2);
echo "#".$cod ;

?>

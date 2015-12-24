<?php
include ("connessione.php");
include("LoScoprimondo_psicologo.php");
include("sezione_P.php");
$query="INSERT INTO terraFrontiera (immagine,email,P) VALUES ('$_POST[immagine]','$_POST[utente]',1)";

$result = mysql_query($query);

$query2="DELETE FROM `madreNatura` WHERE `email` = '$_POST[utente]' AND `immagine` NOT LIKE '{%' ";

$result2= mysql_query($query2);
?>
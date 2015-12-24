<?php
include ("connessione.php");
include("LoScoprimondo.php");

$query="SELECT immagine FROM `madreNatura` WHERE `email` = '$_POST[utente]' AND `immagine` NOT LIKE '{%' ORDER BY data DESC LIMIT 1";


$result = mysql_query($query);
$riga = mysql_fetch_assoc($result);
$io=$riga['immagine'];
	echo "#".$io;


?>

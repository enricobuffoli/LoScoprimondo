<?php

include ("connessione.php");
include("superUser.php");

$elimina=mysql_real_escape_string($_POST['elimina']);
$query="DELETE FROM utenti WHERE email = '$elimina'";
$result = mysql_query($query);

?>


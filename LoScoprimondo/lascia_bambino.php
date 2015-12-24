<?php

include ('connessione.php');
include("sezione_P.php");

$abbandona=mysql_real_escape_string($_POST['abbandona']);
$query3 = "UPDATE utenti SET Tutore = 0 WHERE  email = '$abbandona'  ";
$result3 = mysql_query($query3);






?>
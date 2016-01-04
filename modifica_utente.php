<?php

include ('connessione.php');
include("superUser.php");


$privilegi=$_POST['privilegi'];

$query = "UPDATE utenti SET Privilegi = '$privilegi' WHERE  email = '$_POST[cambia]'  ";
$result = mysql_query($query);

echo '<script language=javascript>alert("Utente modificato con successo!!");</script> '; 

echo '<script language="javascript">document.location.href="superUser.php";</script>';



?>
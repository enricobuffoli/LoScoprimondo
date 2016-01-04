<?php

include ('connessione.php');
include("sezione_P.php");

$query3 = "UPDATE utenti SET Tutore = '$cod' WHERE  email = '$_POST[assegna]'  ";
$result3 = mysql_query($query3);


echo '<script language=javascript>alert("Cambiamento effettuato  con successo!!");</script> '; 
echo '<script language="javascript">document.location.href="sezione_P.php"</script>';





?>
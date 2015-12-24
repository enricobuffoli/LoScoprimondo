<?php

include ('connessione.php');
include("superUser.php");


$query = "SELECT * FROM utenti WHERE  Privilegi = 1  ";
$result = mysql_query($query);

while ($riga = mysql_fetch_assoc($result)){

echo '///*'.$riga['Nome'].'///*'.$riga['Cognome'].'///*'.$riga['email'];

}

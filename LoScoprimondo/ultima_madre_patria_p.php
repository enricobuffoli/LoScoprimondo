<?php

include ('connessione.php');
include('LoScoprimondo_psicologo_G.php');

$utente=$_POST['email'];
$query="SELECT * FROM `madrePatria` WHERE `email` = '".$utente." '  ORDER BY data DESC LIMIT 1 ";
$result = mysql_query($query);

while ($riga = mysql_fetch_assoc($result)){

echo '///'.$riga['id'];

}



<?php

include ('connessione.php');
include('LoScoprimondo_grafico.php');

$query="SELECT * FROM `madrePatria` WHERE `email` = '".$cod." '  ORDER BY data DESC LIMIT 1 ";
$result = mysql_query($query);

while ($riga = mysql_fetch_assoc($result)){

echo '///'.$riga['id'];

}



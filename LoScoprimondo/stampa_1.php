<?php

include ('connessione.php');


$query = "SELECT * FROM madreNatura WHERE  email = '$_POST[email]' ";




$result = mysql_query($query);

while ($riga = mysql_fetch_assoc($result)){

echo '#'.$riga['id'];

}



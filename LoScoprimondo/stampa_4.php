<?php

include ('connessione.php');


$query = "SELECT * FROM madrePatria WHERE  email = '$_POST[email]' ";




$result = mysql_query($query);

while ($riga = mysql_fetch_assoc($result)){

echo '#'.$riga['id'];

}



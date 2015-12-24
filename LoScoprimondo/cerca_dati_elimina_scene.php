<?php

include ('connessione.php');
include("superUser.php");


$query = "SELECT * FROM madreNatura WHERE  email = '$_POST[email]' ";
$query2 = "SELECT * FROM madreTerra WHERE  email = '$_POST[email]'  ";
$query3 = "SELECT * FROM terraPadri WHERE  email = '$_POST[email]'  ";
$query4 = "SELECT * FROM madrePatria WHERE  email = '$_POST[email]' ";
$query5 = "SELECT * FROM terraFrontiera WHERE  email = '$_POST[email]'  ";




$result = mysql_query($query);
$result2 = mysql_query($query2);
$result3 = mysql_query($query3);
$result4 = mysql_query($query4);
$result5 = mysql_query($query5);

while ($riga = mysql_fetch_assoc($result)){

echo '///'.'Madre Natura'.'///'.$riga['data'].'///'.$riga['id'];

}


while ($riga2 = mysql_fetch_assoc($result2)){

echo '///'.'Madre Terra'.'///'.$riga2['data'].'///'.$riga2['id'];

}


while ($riga3 = mysql_fetch_assoc($result3)){

echo '///'.'Terra Padri'.'///'.$riga3['data'].'///'.$riga3['id'];

}


while ($riga4 = mysql_fetch_assoc($result4)){

echo '///'.'Madre Patria'.'///'.$riga4['data'].'///'.$riga4['id'];

}


while ($riga5 = mysql_fetch_assoc($result5)){

echo '///'.'Terra Frontiera'.'///'.$riga5['data'].'///'.$riga5['id'];

}
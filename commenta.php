<?php
include ("connessione.php");
include("commenta_scene.php");

$id_scena = $_POST["id_scena"];
$utente=$_POST["utente"];
$scena = $_POST["scena"];


if ($scena == '1')
{
$query = "SELECT * FROM madreNatura WHERE `email` = '$utente' AND `id` = '$id_scena' ORDER BY data DESC LIMIT 1 ";
$result = mysql_query($query);
while($riga = mysql_fetch_array($result))

{
echo "@".$riga['immagine']."@".$riga['commento'] ;
}

}
if ($scena == '2')
{
$query2 = "SELECT * FROM madreTerra WHERE `email` =  '$utente' AND `id` = '$id_scena' ";
$result2 = mysql_query($query2);
while($riga2 = mysql_fetch_array($result2))

{
echo "@".$riga2['immagine']."@".$riga2['commento']  ;
}

}
if ($scena == '3')
{
$query3 = "SELECT * FROM terraPadri WHERE `email` =  '$utente' AND `id` = '$id_scena' ";
$result3 = mysql_query($query3);
while($riga3 = mysql_fetch_array($result3))

{
echo "@".$riga3['immagine']."@".$riga3['commento']  ;
}

}
if ($scena == '4')
{
$query4 = "SELECT * FROM madrePatria WHERE `email` =  '$utente' AND `id` = '$id_scena' ";
$result4 = mysql_query($query4);
while($riga4 = mysql_fetch_array($result4))

{
echo "@".$riga4['immagine']."@".$riga4['commento']  ;
}

}
if ($scena == '5')
{
$query5 = "SELECT * FROM terraFrontiera WHERE `email` =  '$utente' AND `id` = '$id_scena' ";
$result5 = mysql_query($query5);
while($riga5 = mysql_fetch_array($result5))

{
echo "@".$riga5['immagine']."@".$riga5['commento']  ;
}

}


//$query="SELECT MAX(data),immagine FROM `madreNatura` WHERE `username` = '$cod ' AND P = 0 ";




?>

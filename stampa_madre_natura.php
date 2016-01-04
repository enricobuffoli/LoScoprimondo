<?php
include ("connessione.php");
include("LoScoprimondo.php");

$id_scena = $_POST["scena"];

if ($id_scena == '1')
{
$query = "SELECT immagine,data FROM madreNatura WHERE `id` = '$_POST[id]'";
$result = mysql_query($query);
while($riga = mysql_fetch_array($result))

{
echo "@".$riga['immagine']."@".$riga['data'] ;
}

}
if ($id_scena == '2')
{
$query2 = "SELECT immagine,data FROM madreTerra WHERE `id` = '$_POST[id]' ";
$result2 = mysql_query($query2);
while($riga2 = mysql_fetch_array($result2))

{
echo "@".$riga2['immagine']."@".$riga2['data'] ;
}

}
if ($id_scena == '3')
{
$query3 = "SELECT immagine,data FROM terraPadri WHERE `id` = '$_POST[id]' ";
$result3 = mysql_query($query3);
while($riga3 = mysql_fetch_array($result3))

{
echo "@".$riga3['immagine']."@".$riga3['data'] ;
}

}
if ($id_scena == '4')
{
$query4 = "SELECT immagine,data FROM madrePatria WHERE `id` = '$_POST[id]' ";
$result4 = mysql_query($query4);
while($riga4 = mysql_fetch_array($result4))

{
echo "@".$riga4['immagine']."@".$riga4['data'] ;
}

}
if ($id_scena == '5')
{
$query5 = "SELECT immagine,data FROM terraFrontiera WHERE `id` = '$_POST[id]' ";
$result5 = mysql_query($query5);
while($riga5 = mysql_fetch_array($result5))

{
echo "@".$riga5['immagine']."@".$riga5['data'] ;
}

}


//$query="SELECT MAX(data),immagine FROM `madreNatura` WHERE `username` = '$cod ' AND P = 0 ";




?>

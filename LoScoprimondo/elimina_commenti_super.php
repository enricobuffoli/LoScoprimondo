<?php
include ("connessione.php");
include("superUser.php");

$myCheck = $_POST['name']; 

foreach ($myCheck as $key => $value) { 
		$nome_sing = explode("///", $value);

$id_scena = $nome_sing[0];
$scena = $nome_sing[1];
 

if ($scena == 'Madre Natura')
{
$query = "UPDATE madreNatura SET commento = '' WHERE `id` = '$id_scena' ";
$result = mysql_query($query);

}
if ($scena == 'Madre Terra')
{
$query2 = "UPDATE madreTerra SET commento = '' WHERE `id` = '$id_scena' ";
$result2 = mysql_query($query2);

}
if ($scena == 'Terra Padri')
{
$query3 = "UPDATE terraPadri SET commento = '' WHERE `id` = '$id_scena'  ";
$result3 = mysql_query($query3);

}
if ($scena == 'Madre Patria')
{
$query4 = "UPDATE madrePatria SET commento = '' WHERE `id` = '$id_scena'  ";
$result4 = mysql_query($query4);

}
if ($scena == 'Terra Frontiera')
{
$query5 = "UPDATE terraFrontiera SET commento = '' WHERE `id` = '$id_scena'   ";
$result5 = mysql_query($query5);


}
} 

echo '<script language="javascript">alert("Commenti eliminati con successo!!");</script>';

echo '<script language="javascript">document.location.href="superUser.php"</script>';




?>

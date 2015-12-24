<?php

include ("connessione.php");
include("psicologo.php");
$lingua=$_POST['lingua_usata'];
$scena_commentata= $_POST['scena_scelta'];
$utente_commentato = $_POST["utente"];
$id_scena = $_POST["id"];
$commento=mysql_real_escape_string($_POST['commento']);
if ($scena_commentata == '1')
{
$query = "UPDATE madreNatura SET commento = '$commento'  WHERE  (email = '$utente_commentato' AND id = '$id_scena' )";
$result = mysql_query($query);

}
if ($scena_commentata == '2')
{
$query2 = "UPDATE madreTerra SET commento = '$commento'  WHERE  email = '$utente_commentato' AND id = '$id_scena'";
$result2 = mysql_query($query2);
}
if ($scena_commentata == '3')
{
$query3 = "UPDATE terraPadri SET commento = '$commento'  WHERE  email = '$utente_commentato' AND id = '$id_scena'";
$result3 = mysql_query($query3);

}
if ($scena_commentata == '4')
{
$query4 = "UPDATE madrePatria SET commento = '$commento'  WHERE  email = '$utente_commentato' AND id = '$id_scena'";
$result4 = mysql_query($query4);

}
if ($scena_commentata == '5')
{
$query5 = "UPDATE terraFrontiera SET commento = '$commento'  WHERE  email = '$utente_commentato' AND id = '$id_scena'";
$result5 = mysql_query($query5);
}
echo '<script language=javascript>alert("'.$COMMENTO_INSERITO.'");</script> '; 
echo '<script language=javascript>document.location.href="psicologo.php?&menu=commenta_scene&scena=0&id_scena=0&lingua='.$lingua.'&utente='.$utente_commentato.'";</script> '; 

?>


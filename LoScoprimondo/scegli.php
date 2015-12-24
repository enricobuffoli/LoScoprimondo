<?php

include ("connessione.php");
include("sezione_P.php");
include("gestore.php");

$utente= $_POST['scegli'] ;
$lingua= $_GET['lingua'];


echo '<script language="javascript">document.location.href="psicologo.php?utente='.$utente.'&scena=0&id_scena=0&lingua='.$lingua.'&menu=commenta_scene"</script>';

?>


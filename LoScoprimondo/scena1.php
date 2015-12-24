<?php

include ("connessione.php");
include("sezione_P.php");


$scena= $_POST['scena_scelta'] ;
$utente =  $_POST['utente'] ;
$id_scena = $_POST['id'] ;
$lingua= $_POST['lingua_usata'];

echo '<script language="javascript">document.location.href="psicologo.php?utente='.$utente.'&scena='.$scena.'&id_scena='.$id_scena.'&lingua='.$lingua.'&menu=commenta_scene"</script>';



	

?>


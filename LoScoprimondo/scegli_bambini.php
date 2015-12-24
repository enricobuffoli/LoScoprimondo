<?php

include ("connessione.php");
include("sezione_P.php");


$utente= $_POST['scegli'] ;


echo '<script language="javascript">document.location.href="LoScoprimondo_psicologo_G.php?utente='.$utente.'&lingua='.$lingua.'"</script>';

?>


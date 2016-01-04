<?php

include ("connessione.php");
include("sezione_P.php");

$data_nascita = $_POST['anno'] ."/". $_POST['mese'] ."/". $_POST['giorno'];
$ruolo = $_POST['ruolo'] ;

$query="INSERT INTO utenti (Nome,Cognome,email,Password,Tutore,Data_Nascita,Ruolo) VALUES ('$_POST[nome]','$_POST[cognome]','$_POST[email]',MD5('$_POST[pass1]'),'$cod','$data_nascita','$ruolo')";


$result = mysql_query($query);

echo '<script language=javascript>alert("'.$BAMBINO_INSERITO.'");</script> '; 
echo '<script language="javascript">document.location.href="psicologo.php?&menu=gestione"</script>';
?>



<?php

include ("connessione.php");
include("superUser.php");

$data_nascita = $_POST['anno'] ."/". $_POST['mese'] ."/". $_POST['giorno'];
$ruolo = $_POST['ruolo'] ;

$query="INSERT INTO utenti (Nome,Cognome,email,Password,Data_Nascita,Ruolo,Privilegi) VALUES ('$_POST[nome]','$_POST[cognome]','$_POST[email]',MD5('$_POST[pass1]'),'$data_nascita','$ruolo',0)";


$result = mysql_query($query);

echo '<script language=javascript>alert("'.$BAMBINO_INSERITO.'");</script> '; 
echo '<script language="javascript">document.location.href="super_pagina.php?menu=inserisci"</script>';
?>


<?php

include ("connessione.php");
include("superUser.php");

$data_nascita = $_POST['anno'] ."/". $_POST['mese'] ."/". $_POST['giorno'];

$query="INSERT INTO utenti (Nome,Cognome,email,Password,Data_Nascita,Privilegi) VALUES ('$_POST[nome]','$_POST[cognome]','$_POST[email]',MD5('$_POST[password1]'),'$data_nascita',1)";


$result = mysql_query($query);

echo '<script language=javascript>alert("'.$PSICOLOGO_INSERITO.'");</script> '; 
echo '<script language="javascript">document.location.href="super_pagina.php?menu=inserisci"</script>';


?>

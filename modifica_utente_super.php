<?php

include ('connessione.php');
include("superUser.php");

$ruolo = $_POST['ruolo'] ;
$tutore= $_POST['new_psicologo'] ;
if ($tutore == NULL || $ruolo > 0 )
{
$tutore= 0;
}

/*$query = "UPDATE utenti SET Nome = '$_POST[nome]', Cognome = '$_POST[cognome]' , Password = '$_POST[password]' , email = '$_POST[mail]', Privilegi = '$ruolo', Tutore = '$tutore' WHERE  email = '$_POST[email]'  ";
*/

$query = "UPDATE utenti SET Nome = '$_POST[nome]', Cognome = '$_POST[cognome]' , Password = MD5('$_POST[pass1]') , email = '$_POST[mail]', Privilegi = '$ruolo', Tutore = '$tutore' WHERE  email = '$_POST[email]'  ";

$result = mysql_query($query);



echo '<script language=javascript>alert("'.$UTENTE_MODIFICATO.'");</script> '; 

echo '<script language="javascript">document.location.href="super_pagina.php?menu=modifica";</script>';



?>
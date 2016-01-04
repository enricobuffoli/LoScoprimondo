
<?php

include ("connessione.php");

$data_nascita = $_POST['anno'] ."/". $_POST['mese'] ."/". $_POST['giorno'];
$ruolo = $_POST['ruolo'] ;
$email=mysql_real_escape_string($_POST['email']);

$query="INSERT INTO utenti (Nome,Cognome,email,Password,Data_Nascita,Ruolo) VALUES ('$_POST[nome]','$_POST[cognome]','$email',MD5('$_POST[pass1]'),'$data_nascita','$ruolo')";


$result = mysql_query($query);


echo '<script language=javascript>document.location.href="index.php"</script> '; 

?>


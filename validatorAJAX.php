<?php
include ('connessione.php');


// funzione per verificare l'esistenza dell'username
/*function isset_username($username){
	$username = trim($username);
	$query = "SELECT COUNT(*) AS num FROM utenti WHERE Username='" .mysql_real_escape_string($username). "'";
	$result = mysql_query($query) or die(mysql_error());
	$row = mysql_fetch_array($result);
	if($row['num']>=1){
		return TRUE; // true se utente esiste
		}
	else{
		return FALSE;
		}
	}

*/// funzione per verificare l'esistenza dell'email
function isset_email($email){
	$email = trim($email);
	$query = "SELECT COUNT(*) AS num FROM utenti WHERE email='" .mysql_real_escape_string($email). "'";
	$result = mysql_query($query) or die(mysql_error());
	$row = mysql_fetch_array($result);
	if($row['num']>=1){
		return TRUE; // true se utente esiste
		}
	else{
		return FALSE;
		}
	}

/*
PROCESSIAMO LA RICHIESTA AJAX
*/
if(isset($_POST['username'])){
	if(!isset_username($_POST['username'])){
		echo 'true';
		}
	else{
		echo 'false';
		}
	}
else if(isset($_POST['email'])){
	if(!isset_email($_POST['email'])){
		echo 'true';
		}
	else{
		echo 'false';
		}
	}

?>
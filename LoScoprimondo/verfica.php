<?php
session_start(); 
include("connessione.php");
include("gestore.php");

//variabili POST con anti sql Injection
//$username=mysql_real_escape_string($_POST['username']); 

ini_set('error_reporting', E_ALL|E_STRICT);
ini_set('display_errors', 1);
$email=mysql_real_escape_string($_POST['email']); 

//faccio l'escape dei caratteri 
$password=mysql_real_escape_string($_POST['password']);   
$query = "SELECT * FROM utenti WHERE  email = '$email' AND BINARY Password = MD5('$password') ";

 // $query = "SELECT * FROM utenti WHERE  email = '$email' AND BINARY Password = '$password' ";

//  $query = "SELECT * FROM utenti WHERE BINARY email = '$email' AND BINARY Password = '$password' ";

 $ris = mysql_query($query);
 $riga=mysql_fetch_array($ris);  
 
/*Prelevo l'identificativo dell'utente */
$cod=$riga['email'];
$priv=$riga['Privilegi'];

//$_SESSION['Username'] = $row[Username];


 
/* Effettuo il controllo */
if ($cod == NULL) $trovato = 0 ;
else $trovato = 1;  
 
/* Username e password corrette */
if($trovato === 1) {
 
 /*Registro la sessione*/
 // session_register('autorizzato');
 
  $_SESSION["autorizzato"] = 1;
 
  /*Registro il codice dell'utente*/
  $_SESSION['cod'] = $cod;
  $_SESSION['priv'] = $priv;


 /*Redirect alle pagine riservate*/

 if($_SESSION['priv'] == 0 )
{
   echo '<script language=javascript>document.location.href="home_bambino.php?lingua='.$lingua.'"</script>'; 
}

 if($_SESSION['priv'] == 1 )
{
   echo '<script language=javascript>document.location.href="sezione_P.php?lingua='.$lingua.'"</script>'; 
}

 if($_SESSION['priv'] == 2 )
{
   echo '<script language=javascript>document.location.href="superUser.php?lingua='.$lingua.'"</script>'; 
}


 
} else {
 
echo '<script type="text/javascript">alert("'.$NO_LOGIN.'");</script>';

/*Username e password errati, redirect alla pagina di login*/
echo '<script language=javascript>document.location.href="index.php"</script>'; 
}
?>

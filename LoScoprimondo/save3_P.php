<?php
include ("connessione.php");
include("LoScoprimondo_psicologo.php");
include("sezione_P.php");
$query="INSERT INTO terraPadri (immagine,email,P) VALUES ('$_POST[immagine]','$_POST[utente]',1)";

$result = mysql_query($query);


?>
<?

$db_host = "localhost";
$db_user = "scoprimondo";
$db_name = "scoprimondo";
$db_password = "far.scop.14";

//connetto il database
$db = mysqli_connect($db_host, $db_user, $db_password) or die ('Errore durante la connessione');
mysqli_select_db($db_name, $db) or die ('Errore durante la selezione del db');


?>

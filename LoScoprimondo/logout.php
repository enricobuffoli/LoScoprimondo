
<?php

include("gestore.php");

session_start();
$_SESSION = array();
session_destroy(); //distruggo tutte le sessioni
 


echo '<script type="text/javascript">location.href="index.php"</script>';

exit();
?>


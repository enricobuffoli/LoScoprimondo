<?php
	include("gestore.php");
	include("connessione.php");

session_start();
//se non c'è la sessione registrata

if(  $_SESSION["autorizzato"] != 1)
 {
  echo "<h1>Area riservata, accesso negato.</h1>";
  echo '<center><img src="images/vietatoAccesso.gif" border="0" width="400" height="300" ></center>'; 

  echo "Per effettuare il login clicca <a href='index.php'><font color='blue'>qui</font></a>";
  die;

}
 
//Altrimenti Prelevo il codice identificatico dell'utente session_start();
$cod = $_SESSION['cod']; //id cod recuperato nel file di 




	foreach ($_GET as $k=>$v) if ($k != 'lingua') $gets[] = $k.'='.$v;

?>
<!DOCTYPE html >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $TITOLO; ?></title>

<link rel="stylesheet" href="css/loginStyle.css" type="text/css" /> 
<link href="css/style_tablet.css" rel="stylesheet" type="text/css" media="only screen and (min-width: 321px) and (max-width: 768px)" >
<link href="css/style_desktop.css" rel="stylesheet" type="text/css" media="only screen and (min-width: 769px)" >


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script  src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script  src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>

<?php /*?>
 <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
 
 
        <!-- Modernizr -->
        
         
  

<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>  
<?php */?>


<script src="kinetic-v5.1.0.min.js"></script>
<script src="js/modernizr.custom.71422.js"></script>


<script src="js/psicologo/sezione_psicologo.js"></script>                
<script src="js/psicologo/drag_and_drop_P.js"></script>
<script src="js/psicologo/crea_categorie_P.js"></script>


<div id='logout'>
<a href="logout.php">Logout</a>

	</div>

<div id='indietro'>
<a href="sezione_P.php?lingua=<?php echo $lingua; ?>"><?php echo $SEZIONE; ?></a>

	</div>

</head>

<body>





<table id='commenta_scene_P' border='1' >

<?php
include ('connessione.php');

$query = "SELECT * FROM `madreNatura` WHERE email = '$_GET[utente]'  ORDER BY data ";
$result = mysql_query($query);
$query2 = "SELECT * FROM `madreTerra` WHERE email = '$_GET[utente]'  ORDER BY data ";
$result2 = mysql_query($query2);
$query3 = "SELECT * FROM `terraPadri` WHERE email = '$_GET[utente]'  ORDER BY data ";
$result3 = mysql_query($query3);
$query4 = "SELECT * FROM `madrePatria` WHERE email = '$_GET[utente]'  ORDER BY data ";
$result4 = mysql_query($query4);
$query5 = "SELECT * FROM `terraFrontiera` WHERE email = '$_GET[utente]'  ORDER BY data ";
$result5 = mysql_query($query5);
if (mysql_num_rows($result) == 0 && mysql_num_rows($result2) == 0 && mysql_num_rows($result3) == 0 && mysql_num_rows($result4) == 0 && mysql_num_rows($result5) == 0)
{
	echo '<script language="javascript">alert("'.$NO_SCENE.'"); document.location.href="sezione_P.php";</script>';
}
else

echo "
<tr>
<th>$SCENA </th><th>$DATA_ESECUZIONE </th><th>$CON_PSICOLOGO </th>

</tr>";

while($riga = mysql_fetch_array($result))
{
echo "<tr>";
echo '<td>'.$LINK01.'</td><td>'.$riga['data'].'</td>';


if (($riga['P']) == '0')
 {
      echo '<td>NO</td>' ;
 }
 else
{
	echo '<td>SI</td>';
	
	}

echo '<td><form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=1 ><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit class=bottoni id="scegli" value='.$SCEGLI.'></form></td>';


echo "</tr>";

}

while($riga2 = mysql_fetch_array($result2))
{
echo "<tr>";
echo '<td>'.$LINK02.'</td><td>'.$riga2['data'].'</td>';


if (($riga2['P']) == '0')
 {
      echo '<td>NO</td>' ;
 }
 else
{
	echo '<td>SI</td>';
	
	}
echo '<td><form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=2><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga2['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit class=bottoni id="scegli" value='.$SCEGLI.'></form></td>';


echo "</tr>";

}

while($riga3 = mysql_fetch_array($result3))
{
echo "<tr>";
echo '<td>'.$LINK03.'</td><td>'.$riga3['data'].'</td>';


if (($riga3['P']) == '0')
 {
      echo '<td>NO</td>' ;
 }
 else
{
	echo '<td>SI</td>';
	
	}

echo '<td><form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=3><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga3['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit class=bottoni id="scegli" value='.$SCEGLI.'></form></td>';

echo "</tr>";

}

while($riga4 = mysql_fetch_array($result4))
{
echo "<tr>";
echo '<td>'.$LINK04.'</td><td>'.$riga4['data'].'</td>';


if (($riga4['P']) == '0')
 {
      echo '<td>NO</td>' ;
 }
 else
{
	echo '<td>SI</td>';
	
	}

echo '<td><form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=4><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga4['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit class=bottoni id="scegli" value='.$SCEGLI.'></form></td>';

echo "</tr>";

}

while($riga5 = mysql_fetch_array($result5))
{
echo "<tr>";
echo '<td>'.$LINK05.'</td><td>'.$riga5['data'].'</td>';


if (($riga5['P']) == '0')
 {
      echo '<td>NO</td>' ;
 }
 else
{
	echo '<td>SI</td>';
	
	}

echo '<td><form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=5><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga5['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit class=bottoni  id="scegli" value='.$SCEGLI.'></form></td>';
echo "</tr>";
}

echo "";


?>
<br />



 </table> 
<div id="containerBIG_commenta">
</div>

<form action="inserisci_commento.php" method="post">
  
<label for="commento" style="position:absolute; top:10px; left:1160px;"><?php echo $COMMENTO; ?></label>
<textarea id="commento" name="commento" ></textarea>
<input type=hidden name="scena_scelta"  value=<?php echo $_GET['scena']; ?> ><input type=hidden name="id"  value=<?php echo $_GET['id_scena']; ?> ><input type=hidden name="utente"  value=<?php echo $_GET['utente']; ?>  >

<input type="submit" name="register" class="bottoni" style="position:absolute; top:560px; left:1250px;" value=<?php echo $SALVA; ?> id="reg_submit_commento" />
</form>

<button class="bottoni" id="fine_im" style="position:absolute; top:560px; left:650px;"><?php echo $BOTTONE13; ?></button>
<button class="bottoni" id="indietro_im" style="position:absolute; top:560px; left:750px;"><?php echo $BOTTONE11; ?></button>
<button class="bottoni" id="avanti_im" style="position:absolute; top:560px; left:980px;"><?php echo $BOTTONE12; ?></button>
<button class="bottoni" id="inizio_im" style="position:absolute; top:560px; left:1080px;"><?php echo $BOTTONE14; ?></button>
<button class="bottoni" id="pausa_im" style="position:absolute; top:560px; left:820px;"><?php echo $BOTTONE16; ?></button>
<button class="bottoni" id="play_im" style="position:absolute; top:560px; left:900px;">PLAY</button>
</body>
</html>

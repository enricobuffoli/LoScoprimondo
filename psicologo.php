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


<!DOCTYPE html>

<html  lang="it" >
    <head>
 <meta name="author" content="Christian Deldossi Paolo Zoli Alessandra Farneti">
<meta name="description" content="sussidio psicopedagogico ad uso di specialisti in psicologia, insegnanti, e operatori sociali: è utilizzabile con le medesime caratteristiche anche da bambini, e utenti di ogni età, come strumento ludico ">
<meta name="keywords" content="Scoprimondo Gioco strumento ludico bambini adulti sussidio psicopedagogico Madre Terra Patria Frontiera Padri Natura">
<meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0;" /> 


<meta charset="utf-8" />
<link href="css/style_desktop_G.css" rel="stylesheet" type="text/css"  >
<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> 
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/jquery-ui.min.js"></script> 
	<!-- jquery validazioni //--> 
<script  src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.js"></script> 


<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>


<script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.0.0/bootbox.min.js"></script>

 --><script src="kinetic-v5.1.0.min.js"></script>
<script src="js/modernizr.custom.71422.js"></script>

<script src="js/psicologo/mobile_P.js"></script>                
<script src="js/psicologo/drag_and_drop_P.js"></script>
<script src="js/bambino/crea_categorie.js"></script>
<script src="js/psicologo/sezione_psicologo.js"></script>

<!--<script type="text/javascript" src="validation_reg.js"></script>                
--><script type="text/javascript" src="validation_reg_psicologo.js"></script>                

        <title><?php echo $TITOLO; ?></title>

    </head>

 
 <body>
 <div id="stampa_user" style="display:none; text-transform:uppercase; height:20px;"><?php echo $cod; ?></div>
 <div id="frasi_alert" style="display:none">
 <div id="ARRIVEDERCI"><?php echo $ARRIVEDERCI; ?></div>
 <div id="sure"  ><?php echo $SICURO_ABB; ?></div>
  <div id="COMPLIMENTI" ><?php echo $COMPLIMENTI_ABB; ?></div>

 </div>
 <div id="vuoi_lasciare" style="display:none;" ><?php echo $VUOI_LASCIARE; ?></div>
 <div id="stile" style="display:none;" ></div>
                
        <!-- Your Content -->
        <div id="container">
            
<div id="container_top" >

<div id="scene" >

<div class="button-home" ><a href=sezione_P.php?lingua=<?php echo $lingua; ?> style="color:#1b455a;"> HOME</a>
</div>
<div id="gestione_utenti" ><a href="javascript:cambia('menu_utenti','menu_scene bambino'); aggiorna_stile('gestione');" style="color:#1b455a;"><?php echo $UTENTI; ?></a>
</div>

<div id="commenta_scene"><a href="javascript:cambia('menu_scene','menu_utenti bambino form_register_psicologo cambia_psicologo'); aggiorna_stile('commenta');" style="color:#1b455a;"><?php echo $COMMENTA; ?></a>
</div>

<div id="scegli_bambino"  ><a href="javascript:cambia('bambino','menu_scene menu_utenti form_register_psicologo cambia_psicologo'); aggiorna_stile('scegli_utente');" style="color:#1b455a;">
<?php echo $SCEGLI_UTENTE; ?></a>
</div>

</div>
</div>


<DIV ID="main_container">



<div id="elementi" style="top:0px;">

<div id='menu_utenti' style="display:none">

<div class="listbutton" style="font-size:12px;"><a href="javascript:cambia('form_register_psicologo','cambia_psicologo');" style="color:#1b455a;"><?php echo $INSERISCI_UTENTI; ?></a></div>
<div class="listbutton"><a href="javascript:cambia('cambia_psicologo','form_register_psicologo');" style="color:#1b455a;"><?php echo $ABBANDONA_UTENTE; ?></a></div>


</div>



</div>
                                               
                                                    
                        </DIV>
<div id="pulsanti" style="display:none;">
<div class="button" id="fine_im" style="position:relative; top:-560px; left:270px; z-index:5;"><i class="fa fa-play fa-rotate-180"></i></div>
<div class="button" id="indietro_im" style="position:relative; top:-560px; left:270px; z-index:5;"><i class="fa fa-fast-backward"></i></div>
<div class="button" id="avanti_im" style="position:relative; top:-560px; left:270px; z-index:5;"><i class="fa fa-fast-forward"></i></div>
<div class="button" id="inizio_im" style="position:relative; top:-560px; left:270px; z-index:5;"><?php echo $BOTTONE14; ?></div>
<div class="button" id="pausa_im" style="position:relative; top:-560px; left:270px; z-index:5;"><i class="fa fa-pause"></i></div>
<div class="button" id="play_im" style="position:relative; top:-560px; left:270px; z-index:5;"><i class="fa fa-youtube-play"></i></div>
</div>

<div style="width:400px; position:relative; left:280px;">

<form action="inserisci_bambini.php" method="post" id="form_register_psicologo" style="display:none; position: relative; ">

<div style="position:relative; top:-500px; height:200px; width:200px;">
		<p><?php echo $NOME; ?>*</p>
		<input type="text" name="nome" id="reg_name" class="input" />
		
		<p><?php echo $COGNOME; ?>*</p>
		<input type="text" name="cognome" id="reg_surname" class="input" />
		

		<p>EMAIL*</p>
		<input type="text" name="email" id="reg_email" class="input" />
		
		<p>Password*</p>
		<input type="password" name="pass1" id="reg_pass1" class="input" />

		<p>Conferma Password*</p>
		<input type="password" name="pass2" id="reg_pass1" class="input"/>
        
        </div>
        <div style="position:relative; top:-700px; left:300px; height:200px; width:200px;">
                <p><?php echo $PRIVACY; ?>*</p>
<textarea id="reg_privacy" readonly style="height:120px;"><?php echo $PRIVACY_TEXT; ?></textarea>
<p><?php echo $ACCETTO; ?></p>
<input type="checkbox" name="privacy" id="privacy"/>

                <p><?php echo $DATA_NASCITA; ?>*</p>

                        <select name="giorno">
                        <?php
                        for($i=1;$i<32;$i++){
                        echo "<option value=\"" . $i . "\">" . $i . "</option>\n";
                        }
                        ?>
                        </select> 
                        <select name="mese">
                        <?php
                        for($i=1;$i<13;$i++){
                        echo "<option value=\"" . $i . "\">" . $i . "</option>\n";
                        }
                        ?>
                        </select> 
                        <select name="anno">
                        <?php
                        for($i=2012;$i>1920;$i--){
                        echo "<option value=\"" . $i . "\">" . $i . "</option>\n";
                        }
                        ?>
                        </select>

                <p><?php echo $RUOLO; ?></p>

                        <select name="ruolo">
                        <option value="bambino"><?php echo $BAMBINO; ?></option>
                        <option value="insegnante"><?php echo $INSEGNANTE; ?></option>
                        <option value="genitore"><?php echo $GENITORE; ?></option>

                        </select> 
</div>

		<input type="submit" name="register" value="<?php echo $COMPLETA_REG; ?>" id="reg_submit" style="position:absolute; top:-80px; width:220px;"/>

</form>
<div class="tabella" style="position:relative; top:-550px; ">
 <table id='cambia_psicologo' border='1' style="display:none">

<?php
include ('connessione.php');

$query2 = "SELECT * FROM `utenti` WHERE Tutore = '".$cod." '  AND Privilegi = 0  ORDER BY Nome ";
$result2 = mysql_query($query2);
if (mysql_num_rows($result2) == 0)
{
echo "<div>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th>

</tr>";


while($riga2 = mysql_fetch_array($result2))
{
echo "<tr>";
echo '<td>'.$riga2['Nome'].'</td><td>'.$riga2['Cognome'].'</td><td>'.$riga2['email'].'</td>';

echo "<td><div onclick=conferma_abbandona_utente('".$riga2['email']."'); class=button >$LASCIA</div></td>";
echo "</tr>";
	
}
echo "";
?>
<br />


 </table> 
</div>






</div>



<div style=" position:relative; left: 100px; top: -590px; ">
<table id='bambino' class='tabella' style="display:none; padding:0px;">

<?php
include ('connessione.php');

$query = "SELECT * FROM `utenti` WHERE Tutore = '".$cod." ' AND  Privilegi = 0  ORDER BY Nome ";
$result = mysql_query($query);
if (mysql_num_rows($result) == 0)
{
echo "<div id='noBoy'>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th><th>$DATA_NASCITA</th>

</tr>";


while($riga = mysql_fetch_array($result))
{
echo "<tr>";
echo '<td>'.$riga['Nome'].'</td><td>'.$riga['Cognome'].'</td><td>'.$riga['email'].'</td><td>'.$riga['Data_nascita'].'</td>';


echo '<td><form method="post" action="scegli_bambini.php?lingua='.$lingua.'"><input type=hidden name="scegli" id="scegli" value='.$riga['email'].'><input type=submit  value='.$SCEGLI.'></form></td>';

echo "</tr>";

}
echo "";
?>
<br />


 </table> 
</div>


<div id='menu_scene' style="display:none">
<table id='commenta_scene' class="tabella">

<?php
include ('connessione.php');

$query = "SELECT * FROM `utenti` WHERE Tutore = '".$cod." ' AND  Privilegi = 0  ORDER BY Nome ";
$result = mysql_query($query);
if (mysql_num_rows($result) == 0)
{
echo "<div id='noBoy'>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th><th>$DATA_NASCITA</th>

</tr>";


while($riga = mysql_fetch_array($result))
{
echo "<tr>";
echo '<td>'.$riga['Nome'].'</td><td>'.$riga['Cognome'].'</td><td>'.$riga['email'].'</td><td>'.$riga['Data_nascita'].'</td>';

echo '<td><form method="post" action="scegli.php?lingua='.$lingua.'"><input type=hidden name="scegli" value='.$riga['email'].'><input type=submit  value='.$BOTTONE10.'></form></td>';

echo "</tr>";

}
echo "";
?>
<br />


 </table> 


</div>
                                
 <div id="nome_bimbo" style="display:none; position:relative; top:-660px; left:-350px;">
<h3><?php echo $COMMENTA; ?></h3>
<p><strong><?php echo $BAMBINO; ?>:</strong><?php echo $_GET['utente']; ?></p>
</div>    

 <div id="noScene" style="display:none; position: absolute; top: 200px; width: 200px; z-index: 5; margin-left: 20px;" ><?php echo $NO_SCENE; ?></div>
                            
<div id='commenta_scene_P' style="display:none;" >

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
		echo $NO_SCENE;
}
else


while($riga = mysql_fetch_array($result))
{
echo '<div class="entry-commento">';
echo $LINK01.'<br /><span class="data">'.$riga['data'].'             </span>';
if (($riga['P']) == '1')
 {
      echo '<i class="fa fa-user-md " fa-2x></i>' ;
 }
echo '<form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=1 ><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit style="width:100px;" id="scegli" value='.$SCEGLI.'></form>';
echo "</div>";
}

while($riga2 = mysql_fetch_array($result2))
{
echo '<div class="entry-commento">';
echo $LINK02.'<br /><span class="data">'.$riga2['data'].'              </span>';
if (($riga2['P']) == '1')
 {
      echo '<i class="fa fa-user-md " fa-2x></i>' ;
 }
echo '<form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=2><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga2['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit style="width:100px;" class=bottoni id="scegli" value='.$SCEGLI.'></form>';
echo "</div>";
}

while($riga3 = mysql_fetch_array($result3))
{
echo '<div class="entry-commento">';
echo $LINK03.'<br /><span class="data">'.$riga3['data'].'               </span>';
if (($riga3['P']) == '1')
 {
      echo '<i class="fa fa-user-md " fa-2x></i>' ;
 }

echo '<form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=3><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga3['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit style="width:100px;" class=bottoni id="scegli" value='.$SCEGLI.'></form>';
echo "</div>";
}

while($riga4 = mysql_fetch_array($result4))
{
echo '<div class="entry-commento">';
echo $LINK04.'<br /><span class="data">'.$riga4['data'].'               </span>';
if (($riga4['P']) == '1')
 {
      echo '<i class="fa fa-user-md " fa-2x></i>' ;
 }
echo '<form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=4><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga4['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit style="width:100px;" class=bottoni id="scegli" value='.$SCEGLI.'></form>';
echo "</div>";
}

while($riga5 = mysql_fetch_array($result5))
{
echo '<div class="entry-commento">';
echo $LINK05.'<br /><span class="data">'.$riga5['data'].'               </span>';
if (($riga5['P']) == '1')
 {
      echo '<i class="fa fa-user-md " fa-2x></i>' ;
 }
echo '<form method="post" action="scena1.php"><input type=hidden name="scena_scelta"  value=5><input type=hidden name="utente"  value='.$_GET['utente'].'><input type=hidden name="id"  value='.$riga5['id'].'><input type=hidden name="lingua_usata"  value='.$_GET['lingua'].' ><input type=submit style="width:100px;" class=bottoni  id="scegli" value='.$SCEGLI.'></form>';
echo "</div>";
}
?>
 </div> 
 
<div id="containerBIG_commenta" style="display:none; position:relative; top:-835px; left:250px;">
</div>



<form action="inserisci_commento.php" method="post" style="display:none;" id="commento_form">
  
<label for="commento" style="position:relative; top:-650px; left:-700px;"><?php echo $COMMENTO; ?></label>
<textarea id="commento" name="commento" class="input2" style="position:relative; top: -650px; left:-700px; color:#1b455a;"></textarea>
<input type=hidden name="scena_scelta"  value=<?php echo $_GET['scena']; ?> ><input type=hidden name="id"  value=<?php echo $_GET['id_scena']; ?> ><input type=hidden name="utente"  value=<?php echo $_GET['utente']; ?>  >

<input type="submit" name="register"  style="position:relative; top:-660px; left:-700px;" value=<?php echo $SALVA; ?> id="reg_submit_commento" />
</form>


    </div>
    
</DIV>

</div>


 
 
 

<div id="footer" >

<div id='benvenuto' ><?php echo $cod; ?></div>

	<?php
		foreach ($lingue as $k=>$v)
			{
				if ($k != $lingua)
					{
						?>
						<div class="lang-button"><a href="?lingua=<?php echo $k; ?>&menu=<?php echo $_GET['menu']; ?>" style="color:#1b455a;"><?php echo $flags[$k]; ?></a></div>
						<?php
					}
			}
    ?>
<div id='logout' class="button" style="float:right;">
<a href="logout.php" style="color:#1b455a;"><img src="icons/exit.png" class="buttonimg"> LOGOUT</a>
	</div>
    
    </div>




    </body>
</html>


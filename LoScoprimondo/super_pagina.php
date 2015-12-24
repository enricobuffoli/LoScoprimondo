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



<script src="js/modernizr.custom.71422.js"></script>

<script src="js/psicologo/mobile_P.js"></script>                
<script src="js/psicologo/drag_and_drop_P.js"></script>
<script src="js/bambino/crea_categorie.js"></script>
<script src="js/super.js"></script>

<script type="text/javascript" src="validation_reg_super.js"></script>                

        <title><?php echo $TITOLO; ?></title>

    </head>

 
 <body>
        <div id="container">
            
<div id="container_top" >

<div id="scene" >

<div class="button-home" ><a href=superUser.php?lingua=<?php echo $lingua; ?> style="color:#1b455a;"> HOME</a>
</div>

<div id="inserisci_ut" ><a href="javascript:cambia('menu_inserisci_utenti','nome_utente sel_utente_scene sel_utente_commenti elenco_elimina menu_elimina_utenti elenco_modifica form_modifica_div form_elimina_commenti form_elimina_scene'); aggiorna_stile('inserisci');" style="color:#1b455a;"><?php echo $INSERISCI_UTENTI; ?></a>
</div>

<div id="modifica_ut"><a href="javascript:cambia('elenco_modifica','nome_utente sel_utente_scene sel_utente_commenti elenco_elimina menu_inserisci_utenti menu_elimina_utenti form_register_B form_register_S form_register_P form_elimina_commenti form_elimina_scene'); aggiorna_stile('modifica');" style="color:#1b455a;"><?php echo $MODIFICA_UTENTE; ?></a>
</div>

<div id="elimina_ut"  ><a href="javascript:cambia('menu_elimina_utenti','elenco_elimina menu_inserisci_utenti elenco_modifica form_register_B form_register_S form_register_P form_modifica_div form_elimina_commenti form_elimina_scene'); aggiorna_stile('elimina');" style="color:#1b455a;">
<?php echo $ELIMINA; ?></a>
</div>

</div>
</div>

<DIV ID="main_container">



<div id="elementi" style="top:0px;">


<div id='menu_inserisci_utenti' style="display:none">


<a href="javascript:cambia('form_register_B','form_register_S form_register_P');" style="color:#1b455a;"><div class="listbutton"><?php echo $INSERISCI_BAMBINO; ?></div></a>
<a href="javascript:cambia('form_register_P','form_register_B form_register_S');" style="color:#1b455a;">
<div class="listbutton"><?php echo $INSERISCI_PSICOLOGO; ?></div></a>
<a href="javascript:cambia('form_register_S','form_register_B form_register_P');" style="color:#1b455a;">
<div class="listbutton" style="font-size:12px;"><?php echo $INSERISCI_AMMINISTRATORE; ?></div></a>

</div>

<div id='menu_elimina_utenti' style="display:none">


<a href="javascript:cambia('elenco_elimina','sel_utente_commenti sel_utente_scene nome_utente form_elimina_scene');" style="color:#1b455a;">
<div class="listbutton" ><?php echo $ELIMINA_UTENTI; ?></div></a>

<a href="javascript:cambia('sel_utente_scene','form_elimina_scene elenco_elimina sel_utente_commenti nome_utente'); javascript:elimina_tabelle();" style="color:#1b455a;">
<div class="listbutton"><?php echo $ELIMINA_SCENE; ?></div></a>

<a href="javascript:cambia('sel_utente_commenti','form_elimina_scene elenco_elimina sel_utente_scene nome_utente'); javascript:elimina_tabelle();" style="color:#1b455a;">
<div class="listbutton"><?php echo $ELIMINA_COMMENTI; ?></div></a>

</div>

</div>
 </div>

<div id="elenco_modifica" class='tabella' style="display:none; position:relative; top:-550px; left:100px;
height:450px; overflow-y:scroll;">

 <table id='elenco_modifica_T'  >

<?php
include ('connessione.php');

$query2 = "SELECT * FROM `utenti`  ORDER BY Privilegi ";
$result2 = mysql_query($query2);
if (mysql_num_rows($result2) == 0)
{
echo "<div>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th><th>$RUOLO</th>

</tr>";


while($riga2 = mysql_fetch_array($result2))
{
echo "<tr>";
echo '<td>'.$riga2['Nome'].'</td><td>'.$riga2['Cognome'].'</td><td>'.$riga2['email'].'</td>';

switch ($riga2['Privilegi'])
 {
        case 0:   echo '<td>'.$BAMBINO.'</td>' ;
        break; 
        case 1:   echo '<td>'.$PSICOLOGO.'</td>';
        break; 
        case 2:   echo '<td>'.$AMMINISTRATORE.'</td>';
        break; 
}



echo"
<td><div onclick=mostra_form('".$riga2['email']."'); class=listbutton >$MODIFICA_UTENTE</div></td>";
echo "</tr>";

}
echo "";
?>
<br />
 </table> 
</div>

<div id="form_modifica_div" style="display:none">
 <form action="modifica_utente_super.php" method="post" id="form_modifica" >

<div style="position:relative;  height:200px; width:200px;">
		<p><?php echo $NOME; ?>*</p>
		<input type="text" name="nome" id="reg_name" class="input" />
		
		<p><?php echo $COGNOME; ?>*</p>
		<input type="text" name="cognome" id="reg_surname" class="input" />
		

		<p>EMAIL*</p>
		<input type="text" name="mail" id="reg_email" class="input" />
		
		<p>Password*</p>
		<input type="password" name="pass1" id="reg_pass1" class="input" />

		<p>Conferma Password*</p>
		<input type="password" name="pass2" id="reg_pass1" class="input"/>
        
        </div>

		<input type=hidden type="text" name="email" id="reg_email" />
		
        <div style="position:relative; top:-200px; left:300px; height:200px; width:200px;">

                <p><?php echo $RUOLO; ?></p>

                        <select name="ruolo">
                        <option value="0"><?php echo $BAMBINO; ?></option>
                        <option value="1"><?php echo $PSICOLOGO; ?></option>
                        <option value="2"><?php echo $AMMINISTRATORE; ?></option>

                        </select> 

<label id="p_psicologo" for="reg_psicologo" style="display:none;"><?php echo $PSICOLOGO; ?></label>

                   <select name="new_psicologo" style="display:none;" id="reg_psicologo">
                   <option value="0"><?php echo $NESSUNO.'  '.$PSICOLOGO; ?></option>
                        </select> 
		
</div>
		<input type="submit" name="register" value="<?php echo $MODIFICA_UTENTE; ?>" id="reg_submit" style="position:absolute; left:150px; top:350px; width:220px;"/>

</form>

</div>


<div id="elenco_elimina" style="display:none;  position:relative; top:-550px; left:100px;
height:450px; overflow-y:scroll;" class="tabella">

<table id='elenco_elimina_T' class='tabella' >

<?php
include ('connessione.php');

$query = "SELECT * FROM `utenti` WHERE `email` <> '".$cod." ' ORDER BY Privilegi ";
$result = mysql_query($query);
if (mysql_num_rows($result) == 0)
{
echo "<div id='noBoy'>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th><th>$RUOLO</th>

</tr>";


while($riga = mysql_fetch_array($result))
{
echo "<tr>";
echo '<td>'.$riga['Nome'].'</td><td>'.$riga['Cognome'].'</td><td>'.$riga['email'].'</td>';

switch ($riga['Privilegi'])
 {
        case 0:   echo '<td>'.$BAMBINO.'</td>' ;
        break; 
        case 1:   echo '<td>'.$PSICOLOGO.'</td>';
        break; 
        case 2:   echo '<td>'.$AMMINISTRATORE.'</td>';
        break; 
}



echo "<td><div onclick=conferma_elimina_utenti('".$riga['email']."'); class=listbutton >$ELIMINA_U</div></td>";
echo "</tr>";

}
echo "";
?>

 </table> 
 </div>
 
  <div id="sel_utente_commenti" style="display:none; position:relative; top:-550px; left:300px;">
<p style="position:relative; text-transform:uppercase; width:600px; text-align:left; font-weight:bold;"><?php echo $SELEZIONA_UTENTE_ELIMINA_COMMENTI; ?></p> 

 <table id='elenco_elimina_commenti' class='tabella' style="display:block; height:400px; position:relative; left:-200px; overflow-y:scroll;" >

<?php
include ('connessione.php');

$query = "SELECT * FROM `utenti` WHERE  Privilegi = 0 ORDER BY Nome ";
$result = mysql_query($query);
if (mysql_num_rows($result) == 0)
{
echo "<div id='noBoy'>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th>

</tr>";


while($riga = mysql_fetch_array($result))
{
echo "<tr>";
echo '<td>'.$riga['Nome'].'</td><td>'.$riga['Cognome'].'</td><td>'.$riga['email'].'</td>';


echo "<td><div onclick=mostra_form_elimina_commenti('".$riga['email']."'); class=listbutton >$MODIFICA_UTENTE</div></td>";

echo "</tr>";

}
echo "";
?>
<br />


 </table> 
 </div>
 
  <div id="sel_utente_scene" style="display:none; position:relative; top:-550px; left:300px;">
<p style="position:relative; text-transform:uppercase; width:600px; text-align:left; font-weight:bold;"><?php echo $SELEZIONA_UTENTE_ELIMINA_SCENE; ?></p> 
<table id='elenco_elimina_scene' class='tabella' style="display:block; height:400px; overflow-y:scroll; position:relative; left:-200px;" >

<?php
include ('connessione.php');

$query = "SELECT * FROM `utenti` WHERE  Privilegi = 0 ORDER BY Nome ";
$result = mysql_query($query);
if (mysql_num_rows($result) == 0)
{
echo "<div id='noBoy'>$NOUTENTI</div> ";
  die;
}

echo "
<tr>
<th>$NOME </th><th>$COGNOME </th><th>email </th>

</tr>";


while($riga = mysql_fetch_array($result))
{
echo "<tr>";
echo '<td>'.$riga['Nome'].'</td><td>'.$riga['Cognome'].'</td><td>'.$riga['email'].'</td>';


echo "<td><div onclick=mostra_form_elimina_scene('".$riga['email']."'); class=listbutton >$MODIFICA_UTENTE</div></td>";

echo "</tr>";

}
echo "";
?>
<br />


 </table> 

</div>

</div>





<div id="form_register_B" style="display:none; position:relative; top:-100px; left:500px;">
<form action="inserisci_bambini_S.php" method="post" id="form_register_bs" >

<div style="position:relative; top:-450px; height:200px; width:200px;">
		<p><?php echo $NOME; ?>*</p>
		<input type="text" name="nome" id="reg_name" class="input" />
		
		<p><?php echo $COGNOME; ?>*</p>
		<input type="text" name="cognome" id="reg_surname" class="input" />
		

		<p>EMAIL*</p>
		<input type="text" name="email" id="reg_email" class="input" />
		
		<p>Password*</p>
		<input type="password" name="pass1" id="reg_pass1b" class="input" />

		<p>Conferma Password*</p>
		<input type="password" name="pass2" id="reg_pass1b" class="input"/>
        
        </div>
        <div style="position:relative; top:-660px; left:300px; height:200px; width:200px;">
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

		<input type="submit" name="register" value="<?php echo $COMPLETA_REG; ?>" id="reg_submit" style="position:absolute; left:150px; top:-50px; width:220px;"/>

</form>

</div>
<div id="form_register_P" style="display:none; position:relative; top:-100px; left:500px;">
<form action="inserisci_psicologo.php" method="post" id="form_register_PS" >


<div style="position:relative; top:-400px; height:200px; width:200px;">
		<p><?php echo $NOME; ?>*</p>
		<input type="text" name="nome" id="reg_name" class="input" />
		
		<p><?php echo $COGNOME; ?>*</p>
		<input type="text" name="cognome" id="reg_surname" class="input" />
		

		<p>EMAIL*</p>
		<input type="text" name="email" id="reg_email" class="input" />
		
		
        </div>
        <div style="position:relative; top:-610px; left:300px; height:200px; width:200px;">
        
        
        <p>Password*</p>
		<input type="password" name="password1" id="reg_password1" class="input" />

		<p>Conferma Password*</p>
		<input type="password" name="password2" id="reg_password1" class="input"/>
        
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
                        for($i=1920;$i<2012;$i++){
                        echo "<option value=\"" . $i . "\">" . $i . "</option>\n";
                        }
                        ?>
                        </select>

</div>

		<input type="submit" name="register" value="<?php echo $COMPLETA_REG; ?>" id="reg_submit" style="position:absolute; left:150px; width:220px; top:-100px;"/>

</form>
</div>

<div id="form_register_S" style="display:none; position:relative; top:-100px; left:500px;">
<form action="inserisci_super.php" method="post" id="form_register_SU" >
<div style="position:relative; top:-400px; height:200px; width:200px;">
		<p><?php echo $NOME; ?>*</p>
		<input type="text" name="nome" id="reg_name" class="input" />
		
		<p><?php echo $COGNOME; ?>*</p>
		<input type="text" name="cognome" id="reg_surname" class="input" />
		

		<p>EMAIL*</p>
		<input type="text" name="email" id="reg_email" class="input" />
		
		
        </div>
        <div style="position:relative; top:-610px; left:300px; height:200px; width:200px;">
        
        
        <p>Password*</p>
		<input type="password" name="password3" id="reg_password3" class="input" />

		<p>Conferma Password*</p>
		<input type="password" name="password4" id="reg_password4" class="input"/>
        
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
                        for($i=1920;$i<2012;$i++){
                        echo "<option value=\"" . $i . "\">" . $i . "</option>\n";
                        }
                        ?>
                        </select>

</div>

		<input type="submit" name="register" value="<?php echo $COMPLETA_REG; ?>" id="reg_submit" style="position:absolute; left:150px; width:220px; top:-100px;"/>

</form>
</div>


 <div id="sure" style="display:none;" ><?php echo $SICURO; ?></div>
  <div id="COMPLIMENTI" style="display:none;" ><?php echo $COMPLIMENTI; ?></div>


<div id="form_elimina_scene" style="display:none">
 <form action="elimina_scene_super.php" method="post" id="form_elimina_scene" style="position:absolute; top:250px; left:700px;">
	<fieldset>

<table id="elimina_scene_S">

<th><?php echo $SCENA; ?></th><th><?php echo $DATA; ?></th>
	<input type=hidden type="text" name="email" id="reg_email" />
		
        
		

</table>
<input type="submit" name="register" value=<?php echo $ELIMINA; ?> id="reg_submit" />
	</fieldset>
</form>

</div>
</div>

<div id="nome_utente" style="position:absolute; top:220px; left:750px; text-transform:uppercase; text-align:left; font-weight:bold;"></div>




<div id="form_elimina_commenti" style="display:none">
 <form action="elimina_commenti_super.php" method="post" id="form_elimina_commenti" style="position:absolute; top:250px; left:600px;">
	<fieldset>

<table id="elimina_commenti_S">

<th><?php echo $SCENA; ?></th><th><?php echo $DATA; ?></th><th><?php echo $COMMENTO_S; ?></th>
	<input type=hidden type="text" name="email" id="reg_email" />
		
        
		

</table>
<input type="submit" name="register" value=<?php echo $ELIMINA; ?> id="reg_submit" />
	</fieldset>
</form>

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


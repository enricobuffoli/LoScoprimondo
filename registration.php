<?php
	include("gestore.php");
?>



<!DOCTYPE html>

<html  lang="it" >


<head>
 <meta name="author" content="Christian Deldossi Paolo Zoli Alessandra Farneti">
<meta name="description" content="sussidio psicopedagogico ad uso di specialisti in psicologia, insegnanti, e operatori sociali: è utilizzabile con le medesime caratteristiche anche da bambini, e utenti di ogni età, come strumento ludico ">
<meta name="keywords" content="Scoprimondo Gioco strumento ludico bambini adulti sussidio psicopedagogico Madre Terra Patria Frontiera Padri Natura">
<meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0;" /> 

        <title><?php echo $REGISTRAZIONE; ?></title>
        
        
        
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/jquery-ui.min.js"></script> 
	<!-- jquery validazioni //--> 
<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.js"></script> 
<script type="text/javascript" src="validation_reg.js"></script>

<link rel="stylesheet" href="css/style_desktop_G.css" type="text/css" /> 
<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>


</head>
<body>

<div >

<form action="pagina_di_registrazione.php" method="post" id="form_register" >

<div style="position:absolute; top:50px; left:400px; width:150px; border-top:0px;" class="login">
		<p><?php echo $NOME; ?>* </p><p style="font-size:9px;">   <?php echo $CAMPO_OBBLIGATORIO; ?></p>
		<input type="text" name="nome" id="reg_name" class="input" />
		
		<p><?php echo $COGNOME; ?>*  </p><p style="font-size:9px;">   <?php echo $CAMPO_OBBLIGATORIO; ?></p>
		<input type="text" name="cognome" id="reg_surname" class="input" />
		

		<p>EMAIL*  </p><p style="font-size:9px;">  <?php echo $CAMPO_OBBLIGATORIO; ?></p>
		<input type="text" name="email" id="reg_email" class="input" />
		
		<p>Password*   </p><p style="font-size:9px;">  <?php echo $CAMPO_OBBLIGATORIO; ?></p>
		<input type="password" name="pass1" id="reg_pass1" class="input" />

		<p>Conferma Password*  </p><p style="font-size:9px;">  <?php echo $CAMPO_OBBLIGATORIO; ?></p>
		<input type="password" name="pass2" id="reg_pass1" class="input"/>
        
        </div>
        <div style="position:absolute; top:50px; left:750px; width:200px; border-top:0px; " class="login">
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

		<input type="submit" name="register" value=<?php echo $REGISTRATI; ?> id="reg_submit" style="position:absolute; top:500px; left:600px; " />

</form>


    <div id="footer">

	<?php
		foreach ($lingue as $k=>$v)
			{
				if ($k != $lingua)
					{
						?>
						<div class="lang-button" style="left:100px;"><a href="?lingua=<?php echo $k; ?>" style="color:#1b455a;"><?php echo $flags[$k]; ?></a></div>
						<?php
					}
			}
    ?>
    
    </div>

</body>
</html>
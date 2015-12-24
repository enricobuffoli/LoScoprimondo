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

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script  src="http://code.jquery.com/jquery-1.11.1.js"></script>
<script  src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.0.0/bootbox.min.js"></script>

<?php /*?>
 <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
 
 
        <!-- Modernizr -->
        
         
  

<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>  
<?php */?>


<script src="kinetic-v5.1.0.min.js"></script>
<script src="js/modernizr.custom.71422.js"></script>

<script  src="js/hammer.js"></script>
<script src="js/bambino/visualizza.js"></script>    
<script src="js/bambino/mobile.js"></script>                
<script src="js/bambino/drag_and_drop_G.js"></script>
<script src="js/bambino/crea_categorie.js"></script>
<script src="js/bambino/cronometro.js"></script>



<link href="css/style_desktop_G.css" rel="stylesheet" type="text/css"  >
<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link href="css/bootstrapp.css" rel="stylesheet" type="text/css" />
        <title><?php echo $TITOLO; ?></title>
    </head>

 
 <body>
 
 <div id="stampa_user" style="display:none; text-transform:uppercase; height:20px;"><?php echo $cod; ?>
 </div>
 <div id="vuoi_lasciare" style="display:none;" ><?php echo $VUOI_LASCIARE; ?></div>

        <!-- Your Content -->
        <div id="container">
            
<div id="container_top" >

<div id="scene" >

<div class="button-home"><a href=home_bambino.php?lingua=<?php echo $lingua; ?> style="color:#1b455a;"> HOME</a>
</div>

<a href="javascript:stampa_madre_natura();">
<div id="madre_natura" ><?php echo $LINK01; ?>
</a>
</div>


<a href="javascript:stampa_madre_terra();">
<div id="madre_terra"  ><?php echo $LINK02; ?>
</a>
</div>

<a href="javascript:stampa_terra_padri();">
<div id="terra_padri"  >
<?php echo $LINK03; ?></a>
</div>
<a href="javascript:stampa_madre_patria();">
<div id="madre_patria"  >
<?php echo $LINK04; ?>
</a>
</div>


<a href="javascript:stampa_terra_frontiera();">
<div id="terra_frontiera_scena"  ><?php echo $LINK05; ?>
</a>
</div>

</div>

</div>

<DIV ID="main_container">

<!--<div class="button-func-dis" id="stampa" style="display:none; position:absolute; top:90px;; left:410px; z-index:5;"><img src="icons/function_icons/function-icons_print.png" class="buttonimg"></div>
-->
<div id="elementi" style="top:0px;">


 <div class="button-func" id="stampa" style="display:none; position:relative; top:30px;; left:20px; z-index:4;"><img src="icons/function_icons/function-icons_print.png" class="buttonimg"></div>
<!--
<button class="bottoni" id="torna_gioco" style="display:none; position:relative; top:-20px;">torna al gioco</button>

<table id='commenta_madre_natura' border='1' width="180px" style="display:none; position:relative; top:15px;">

<p id="testo_1" style=" display:none; text-align:left; text-transform:uppercase; font-weight:bold;">madre natura da cambiare </p>

</table>-->
<div id='commenta_madre_natura'  style="display:none; position:relative; top:15px; margin-top:20px;">

<div id="testo_1" style=" display:none; position:relative; left:-25px; "><?php echo $LINK01; ?></div>

</div>


<div id='commenta_madre_terra'  style="display:none; position:relative; top:15px; margin-top:20px;">

<div id="testo_2" style=" display:none; position:relative; left:-25px;"><?php echo $LINK02; ?></div>

</div>

<div id='commenta_terra_padri'  style="display:none; position:relative; top:15px; margin-top:20px;">

<div id="testo_3" style=" display:none; position:relative; left:-25px;"><?php echo $LINK03; ?></div>

</div>

<div id='commenta_madre_patria'  style="display:none; position:relative; top:15px; margin-top:20px;">

<div id="testo_4" style=" display:none; position:relative; left:-25px;"><?php echo $LINK04; ?></div>

</div>

<div id='commenta_terra_frontiera' style="display:none; position:relative; top:15px; margin-top:20px;">

<div id="testo_5" style=" display:none; position:relative; left:-10px;"><?php echo $LINK05; ?></div>
</div>

 <div id="no_scena" style=" display:none; position:absolute; top:100px; ">
<?php echo $NO_SCENA; ?>
</div>

</DIV>

  <div id="containerOLD" ></div>

</div>

</div>

    <div id="footer">

<div id='benvenuto'><?php echo $cod; ?></div>


	<?php
		foreach ($lingue as $k=>$v)
			{
				if ($k != $lingua)
					{
						?>
						<div class="lang-button"><a href="?lingua=<?php echo $k; ?>" style="color:#1b455a;"><?php echo $flags[$k]; ?></a></div>
						<?php
					}
			}
    ?>
<div id='logout' class="button" style=" float:right;">
<a href="logout.php" style="color:#1b455a;"><img src="icons/exit.png" class="buttonimg"> LOGOUT</a>
	</div>
    
    </div>

    </body>
    
    


</html>
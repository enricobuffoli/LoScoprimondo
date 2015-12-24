<?php
	include("gestore.php");
	include("connessione.php");


session_start();
//se non c'è la sessione registrata

if(  $_SESSION["autorizzato"] != 1)
 {
  echo "<h1>Area riservata, accesso negato.</h1>";
  echo '<center><img src="images/vietatoAccesso.gif" border="0" width="400" height="300" ></center>'; 

  echo "Per effettuare il login clicca <a href='login.html'><font color='blue'>qui</font></a>";
  die;

}
 
//Altrimenti Prelevo il codice identificatico dell'utente session_start();
$cod = $_SESSION['cod']; //id cod recuperato nel file di 



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
<script src="js/bambino/resize.js"></script>    
<script src="js/bambino/mobile.js"></script>                
<script src="js/bambino/drag_and_drop.js"></script>
<script src="js/bambino/crea_categorie.js"></script>
<script src="js/bambino/cronometro.js"></script>

<link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />

<link href="css/style_tablet.css" rel="stylesheet" type="text/css" media="only screen and (max-width: 768px)" >

<?php /*?><link href="css/style_tablet.css" rel="stylesheet" type="text/css" media="only screen and (min-width: 321px) and (max-width: 768px)" >
<?php */?><link href="css/style_desktop.css" rel="stylesheet" type="text/css" media="only screen and (min-width: 769px)" >

<!-- Pushy CSS -->
        <link rel="stylesheet" href="css/pushy.css">
		<link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/demo.css">

        <title><?php echo $TITOLO; ?></title>
<div id="bandiere" >

	<?php
		foreach ($lingue as $k=>$v)
			{
				if ($k != $lingua)
					{
						?>
							<a href="?lingua=<?php echo $k; ?>"><img src="bandiere/<?php echo $flags[$k]; ?>.gif" alt="<?php echo $v; ?>" title="<?php echo $v; ?>" border="0" /></a>
						<?php
					}
			}
    ?>

</div>

<div id='logout'>
<a href="logout.php">Logout</a>

	</div>
<div id='benvenuto'> Welcome <?php echo $cod; ?></div>

    </head>

 
 <body>
 
 
 <div id="stampa_user" style="display:none; text-transform:uppercase; height:20px;"><?php echo $cod; ?></div>
 <div id="frasi_alert" style="display:none">
 <div id="FINITO_MADRE_NATURA"><?php echo $FINITO_MADRE_NATURA; ?></div>
 <div id="FINITO_MADRE_TERRA"><?php echo $FINITO_MADRE_TERRA; ?></div>
 <div id="FINITO_TERRA_PADRI"><?php echo $FINITO_TERRA_PADRI; ?></div>
 <div id="FINITO_MADRE_PATRIA"><?php echo $FINITO_MADRE_PATRIA; ?></div>
 <div id="FINITO_TERRA_FRONTIERA"><?php echo $FINITO_TERRA_FRONTIERA; ?></div>
 <div id="COMPLIMENTIIII"><?php echo $COMPLIMENTIIII; ?></div>
 <div id="PROSEGUI"><?php echo $PROSEGUI; ?></div>
 <div id="RIPETI"><?php echo $RIPETI; ?></div>
 <div id="ANNULLA"><?php echo $ANNULLA; ?></div>
 <div id="ATTENZIONE"><?php echo $ATTENZIONE; ?></div>
 <div id="PER_PASSARE"><?php echo $PER_PASSARE; ?></div>
 <div id="TORNA_GIOCO"><?php echo $TORNA_GIOCO; ?></div>
 <div id="ARRIVEDERCI"><?php echo $ARRIVEDERCI; ?></div>
 </div>
 <div id="vuoi_lasciare" style="display:none;" ><?php echo $VUOI_LASCIARE; ?></div>
 <!-- Pushy Menu -->
        <nav class="pushy pushy-left" style="display:none" id="scena1">
            <ul id="container_canvas">
           
            
            
                <a><li id='<?php echo $CATEGORIA01; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA02; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA03; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA04; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA05; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA06; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA09; ?>'></li></a>
                <a><li id='<?php echo $CATEGORIA10; ?>'></li></a>
				
            </ul>
        </nav>

         <!-- Site Overlay -->
        <div class="site-overlay"></div>

        <!-- Your Content -->
        <div id="container">
            
<div id="container_top" >

<div id="scene" >
<div id="madre_natura" >
<a href="javascript:stampa_madre_natura();">
<p id="visualizza_madre_natura" style="display:none" ><?php echo $BOTTONE10.'  '.$LINK01; ?></p></a>
<p id="madre_natura_p"><?php echo $LINK01; ?></p>

</div>



<div id="madre_terra"  >
<a href="javascript:stampa_madre_terra();">
<p id="visualizza_madre_terra" style="display:none" ><?php echo $BOTTONE10.'  '.$LINK02; ?></p></a>
<a id="madre_terra_a" >
<p id="madre_terra_p"><?php echo $LINK02; ?></p>
</a>

</div>




<div id="terra_padri"  >
<a href="javascript:stampa_terra_padri();">
<p id="visualizza_terra_padri" style="display:none" ><?php echo $BOTTONE10.'  '.$LINK03; ?></p></a>
<a id="terra_padri_a"  >
<p id="terra_padri_p"><?php echo $LINK03; ?></p>
</a>

</div>





<div id="madre_patria"  >
<a href="javascript:stampa_madre_patria();">
<p id="visualizza_madre_patria" style="display:none" ><?php echo $BOTTONE10 .'  '.$LINK04; ?></p></a>
<a  id="madre_patria_a"  >
<p id="madre_patria_p"><?php echo $LINK04; ?></p>
</a>

</div>



<div id="terra_frontiera_scena"  >
<a>
<p><?php echo $LINK05; ?></p>
</a>
</div>


<div id='index' style="position:relative; left:550px;">
<a href=home_bambino.php>SCOPRIMONDO CON GRAFICA </a>
</div>

</div>






<div id="in_bottoni">         
<button class="bottoni" id="primo_piano" ><?php echo $BOTTONE03; ?></button>
<button class="bottoni" id="avanti"><?php echo $BOTTONE04; ?></button>
<button class="bottoni" id="indietro" ><?php echo $BOTTONE05; ?></button>
<button class="bottoni" id="fondo" ><?php echo $BOTTONE06; ?></button>
<button class="bottoni" id="elimina_elemento"><?php echo $BOTTONE07; ?></button>
<button class="bottoni"id="salva" ><?php echo $BOTTONE08; ?></button>
<button class="bottoni" id="fine" ><?php echo $BOTTONE09; ?></button>

</div>

<!-- Menu Button -->
            <div id="menu" style="display:none;" >
            <div  class="menu-btn bottoni" onClick="launchFullScreen(document.documentElement);" >&#9776; <?php echo $SELCAT; ?></div>
				</div>

</div>
<div id="per_stampa">
<button class="bottoni" id="torna_gioco" style="display:none; position:relative; top:-20px;"><?php echo $TORNA; ?></button>
<button class="bottoni" id="stampa" style="display:none; position:relative; top:0px;"><?php echo $BOTTONE08; ?></button>

<table id='commenta_madre_natura' border='1' width="180px" style="display:none; position:relative; top:15px;">

<p id="testo_1" style=" display:none; text-align:left; text-transform:uppercase; font-weight:bold;"><?php echo $LINK01; ?></p>

</table>

<table id='commenta_madre_terra' border='1' width="180px" style="display:none; position:relative; top:15px;">

<p id="testo_2" style=" display:none; text-align:left; text-transform:uppercase; font-weight:bold;"><?php echo $LINK02; ?></p>

</table>

<table id='commenta_terra_padri' border='1' width="180px" style="display:none; position:relative; top:15px;">

<p id="testo_3" style=" display:none; text-align:left; text-transform:uppercase; font-weight:bold;"><?php echo $LINK03; ?></p>

</table>

<table id='commenta_madre_patria' border='1' width="180px" style="display:none; position:relative; top:15px;">

<p id="testo_4" style=" display:none; text-align:left; text-transform:uppercase; font-weight:bold;"><?php echo $LINK04; ?></p>

</table>



</div>

<div id="elementi" >

<div id="condizione_necessaria" style="display:none" >
<p><?php echo $CONDIZIONE_NECESSARIA; ?></p>
<img border="0" class="condizione"  src="images/elementi_sfondo/cieloazzurro.png"  >
<p id="cieloazzurro_p"><?php echo $ELEMENTO01_CAT01; ?></p>
<img border="0" class="condizione"  src="images/elementi_sfondo/cielonotturno.png" >
<p id="cielonotturno_p"><?php echo $ELEMENTO02_CAT01; ?></p>
<img border="0" class="condizione" 
src="images/elementi_sfondo/fiume.png" >
<p id="fiume_p"><?php echo $ELEMENTO03_CAT01; ?></p>
<img border="0" class="condizione" src="images/elementi_sfondo/laghetto.png" >
<p id="laghetto_p"><?php echo $ELEMENTO04_CAT01; ?></p>
<img border="0" class="condizione" 
src="images/elementi_sfondo/luna.png" >
<p id="luna_p"><?php echo $ELEMENTO05_CAT01; ?></p>
<img border="0" class="condizione"  
src="images/elementi_sfondo/mare.png" >
<p id="mare_p"><?php echo $ELEMENTO06_CAT01; ?></p>
<img border="0" class="condizione" 
src="images/elementi_sfondo/montagne.png" >
<p id="montagne_p"><?php echo $ELEMENTO07_CAT01; ?></p>
<img border="0" class="condizione" 
 src="../LoScoprimondo/images/elementi_sfondo/sole.png" >
<p id='sole_p'><?php echo $ELEMENTO08_CAT01; ?></p>
<img border="0" class="condizione" 
src="images/elementi_sfondo/terreno.png">
<p id="terreno_p"><?php echo $ELEMENTO09_CAT01; ?></p>
</div>
<button class="bottoni" id="COMINCIA" ><?php echo $BOTTONE15; ?></button>




<div id="sfondi" style="display:none" >
<table id="sfondi1" class="sfondi_comodo">
<caption><?php echo $CATEGORIA01; ?></caption>

<tr>
<td>
<img border="0" class="draggable"  id="cieloazzurro" src="images/elementi_sfondo/cieloazzurro.png"  >
<p id="cieloazzurro_p"><?php echo $ELEMENTO01_CAT01; ?></p>
</td>
<td>
<img border="0" class="draggable" id="cielonotturno" src="images/elementi_sfondo/cielonotturno.png" >
<p id="cielonotturno_p"><?php echo $ELEMENTO02_CAT01; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="fiume" 
src="images/elementi_sfondo/fiume.png" >
<p id="fiume_p"><?php echo $ELEMENTO03_CAT01; ?></p>
</td>
<td>
<img border="0" class="draggable" id="laghetto" src="images/elementi_sfondo/laghetto.png" >
<p id="laghetto_p"><?php echo $ELEMENTO04_CAT01; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="luna"
src="images/elementi_sfondo/luna.png" >
<p id="luna_p"><?php echo $ELEMENTO05_CAT01; ?></p>
</td>
<td>
<img border="0" class="draggable" id="mare" 
src="images/elementi_sfondo/mare.png" >
<p id="mare_p"><?php echo $ELEMENTO06_CAT01; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="montagne"
src="images/elementi_sfondo/montagne.png" >
<p id="montagne_p"><?php echo $ELEMENTO07_CAT01; ?></p>
</td>
<td>
<img border="0" class="draggable" id="sole" 
 src="../LoScoprimondo/images/elementi_sfondo/sole.png" >
<p id='sole_p'><?php echo $ELEMENTO08_CAT01; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="terreno" 
src="images/elementi_sfondo/terreno.png">
<p id="terreno_p"><?php echo $ELEMENTO09_CAT01; ?></p>
</td>
</tr>
</table>

</div>


<div id="alberi" style="display:none">
<table id="alberi1">
<caption><?php echo $CATEGORIA02; ?></caption>

<tr>
<td>
<img border="0" class="draggable" id="albero" src="images/alberi/albero.png">
<p><?php echo $ELEMENTO01_CAT02; ?></p>
</td>
<td>
<img border="0" class="draggable" id="conifere1" src="images/alberi/conifere1.png">
<p><?php echo $ELEMENTO02_CAT02; ?></p>

</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="conifere2" src="images/alberi/conifere2.png">
<p><?php echo $ELEMENTO02_CAT02; ?></p>
</td>
<td>
<img border="0" class="draggable" id="conifere3" src="images/alberi/conifere3.png">
<p><?php echo $ELEMENTO02_CAT02; ?></p>
</td>
</tr>
</table>
</div>

<div id="animale_preistorico" style="display:none">
<table id="animale_preistorico1">
<caption>
<div id="trex_nome"><?php echo $CATEGORIA06; ?></div></caption>
<tr>
<td>
<img border="0" class="draggable" id="trex" src="images/animale_preistorico/trex.png">
<p><?php echo $ELEMENTO01_CAT06; ?></p>
</td>
</tr>
</table>
</div>

<div id="animale_domestico" style="display:none" >
<table id="animale_domestico1">
<caption><?php echo $CATEGORIA03; ?></caption>

<tr>
<td>
<img border="0" class="draggable" id="agnello" src="images/animali_domestici/agnello.png">
<p><?php echo $ELEMENTO01_CAT03; ?></p>
</td>
<td>
<img border="0" class="draggable" id="agnello_pezzato" src="images/animali_domestici/agnello_pezzato.png">
<p><?php echo $ELEMENTO02_CAT03; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="asino" src="images/animali_domestici/asino.png">
<p><?php echo $ELEMENTO03_CAT03; ?></p>
</td>
<td>
<img border="0" class="draggable" id="cavallo" src="images/animali_domestici/cavallo.png">
<p><?php echo $ELEMENTO04_CAT03; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable"  id="coniglio" src="images/animali_domestici/coniglio.png">
<p><?php echo $ELEMENTO05_CAT03; ?></p>
</td>
<td>
<img border="0" class="draggable " id="gallina" src="images/animali_domestici/gallina.png">
<p><?php echo $ELEMENTO06_CAT03; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable"id="maiale" src="images/animali_domestici/maiale.png">
<p><?php echo $ELEMENTO07_CAT03; ?></p>
</td>
<td>
<img border="0" class="draggable" id="pecora" src="images/animali_domestici/pecora.png">
<p><?php echo $ELEMENTO08_CAT03; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="tacchino" src="images/animali_domestici/tacchino.png">
<p><?php echo $ELEMENTO09_CAT03; ?></p>
</td>
<td>
<img border="0" class="draggable" id="vacca" src="images/animali_domestici/vacca.png">
<p><?php echo $ELEMENTO10_CAT03; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="vitello"
src="images/animali_domestici/vitello.png">
<p><?php echo $ELEMENTO11_CAT03; ?></p>
</td>
</tr>
</table>

</div>



<div id="animale_esotico" style="display:none" >
<table id="animale_esotico1">
<caption><?php echo $CATEGORIA05; ?></caption>

<tr>
<td>
<img border="0"  class="draggable" id="cammello" src="images/animali_esotici/cammello.png">
<p><?php echo $ELEMENTO01_CAT05; ?></p>
</td>
<td>
<img border="0" class="draggable" id="scimmia" src="images/animali_esotici/scimmia.png">
<p><?php echo $ELEMENTO02_CAT05; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable" id="struzzo" src="images/animali_esotici/struzzo.png">
<p><?php echo $ELEMENTO03_CAT05; ?></p>
</td>
</tr>
</table>
</div>

<div id="clown" style="display:none" >
<table id="clown1">
<caption><?php echo $CATEGORIA16; ?></caption>

<tr>
<td>
<img border="0"  class="draggable" id="clown_augusto" src="images/clown/clown_augusto.png">
<p><?php echo $ELEMENTO01_CAT16; ?></p>
</td>
<td>
<img border="0" class="draggable" id="clown_bianco" src="images/clown/clown_bianco.png">
<p><?php echo $ELEMENTO02_CAT16; ?></p>
</td>
</tr>
</table>
</div>


<div id="animale_selvaggio" style="display:none" >
<table id="animale_selvaggio1">
<caption><?php echo $CATEGORIA04; ?></caption>

<tr>
<td>
<img border="0"  class="draggable" id="cinghiale" src="images/animali_selvaggi/cinghiale.png">
<p><?php echo $ELEMENTO01_CAT04; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="coccodrillo" src="images/animali_selvaggi/coccodrillo.png">
<p><?php echo $ELEMENTO02_CAT04; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="elefante" src="images/animali_selvaggi/elefante.png">
<p><?php echo $ELEMENTO03_CAT04; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="orsobianco" src="images/animali_selvaggi/orsobianco.png">
<p><?php echo $ELEMENTO04_CAT04; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="orsobruno" src="images/animali_selvaggi/orsobruno.png">
<p><?php echo $ELEMENTO05_CAT04; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="pantera" src="images/animali_selvaggi/pantera.png">
<p><?php echo $ELEMENTO06_CAT04; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="rinoceronte" src="images/animali_selvaggi/rinoceronte.png">
<p><?php echo $ELEMENTO07_CAT04; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="tigre" src="images/animali_selvaggi/tigre.png">
<p><?php echo $ELEMENTO08_CAT04; ?></p>
</td>
</tr>
</table>
</div>

<div id="edilizia" style="display:none" >

<table id="edilizia1">
<caption><?php echo $CATEGORIA07; ?></caption>
<tr>
<td>
<img border="0"  class="draggable" id="carcere" src="images/edilizia/carcere.png">
<p><?php echo $ELEMENTO01_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="monofamiliare" src="images/edilizia/casa_monofamiliare.png">
<p><?php echo $ELEMENTO02_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="chiesa" src="images/edilizia/chiesa.png">
<p><?php echo $ELEMENTO03_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="teatro" src="images/edilizia/cinema_teatro.png">
<p><?php echo $ELEMENTO04_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="comune" src="images/edilizia/comune.png">
<p><?php echo $ELEMENTO05_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="condominio" src="images/edilizia/condominio.png">
<p><?php echo $ELEMENTO06_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="giocattoli" src="images/edilizia/giocattoli.png">
<p><?php echo $ELEMENTO07_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="grattacielo" src="images/edilizia/grattacielo.png">
<p><?php echo $ELEMENTO08_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="lampione" src="images/edilizia/lampione.png">
<p><?php echo $ELEMENTO09_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  "  id="elettrica" src="images/edilizia/linea_elettrica.png">
<p><?php echo $ELEMENTO10_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="moschea" src="images/edilizia/moschea.png">
<p><?php echo $ELEMENTO11_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="vestiti" src="images/edilizia/negozio_vestiti.png">
<p><?php echo $ELEMENTO12_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="ospedale" src="images/edilizia/ospedale.png">
<p><?php echo $ELEMENTO13_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  "  id="panettiere" src="images/edilizia/panettiere.png">
<p><?php echo $ELEMENTO14_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  "  id="phonecenter" src="images/edilizia/phonecenter.png">
<p><?php echo $ELEMENTO15_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="pilastrino" src="images/edilizia/pilastrino.png">
<p><?php echo $ELEMENTO16_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="pubblicita" src="images/edilizia/pubblicita.png">
<p><?php echo $ELEMENTO17_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="salagiochi" src="images/edilizia/sala_giochi.png">
<p><?php echo $ELEMENTO18_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="scuola" src="images/edilizia/scuola.png">
<p><?php echo $ELEMENTO19_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="semaforo" src="images/edilizia/semaforo.png">
<p><?php echo $ELEMENTO20_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="sinagoga" src="images/edilizia/sinagoga.png">
<p><?php echo $ELEMENTO21_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="steccato1" src="images/edilizia/steccato1.png">
<p><?php echo $ELEMENTO22_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="steccato2" src="images/edilizia/steccato2.png">
<p><?php echo $ELEMENTO23_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="strisce_pedonali" src="images/edilizia/strisce_pedonali.png">
<p><?php echo $ELEMENTO24_CAT07; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="tempio_indu" src="images/edilizia/tempio_indu.png">
<p><?php echo $ELEMENTO25_CAT07; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="tunnel" src="images/edilizia/tunnel.png">
<p><?php echo $ELEMENTO26_CAT07; ?></p>
</td>
</tr>
</table>

</div>



<div id="mezzi_trasporto" style="display:none" >
<table id="mezzi_trasporto1">
<caption><?php echo $CATEGORIA08; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  " id="aereocivile1" src="images/mezzi_trasporto/aereocivile1.png">
<p><?php echo $ELEMENTO01_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="aereocivile2" src="images/mezzi_trasporto/aereocivile2.png">
<p><?php echo $ELEMENTO02_CAT08; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="moto" src="images/mezzi_trasporto/moto.png">
<p><?php echo $ELEMENTO12_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="bus" src="images/mezzi_trasporto/bus.png">
<p><?php echo $ELEMENTO06_CAT08; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="bicicletta" src="images/mezzi_trasporto/bicicletta.png">
<p><?php echo $ELEMENTO05_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="mercantile2" src="images/mezzi_trasporto/mercantile2.png">
<p><?php echo $ELEMENTO11_CAT08; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="nave_guerra1" src="images/mezzi_trasporto/nave_guerra1.png">
<p><?php echo $ELEMENTO13_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="carrarmato" src="images/mezzi_trasporto/carrarmato.png">
<p><?php echo $ELEMENTO08_CAT08; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="polizia" src="images/mezzi_trasporto/macchina_polizia.png">
<p><?php echo $ELEMENTO09_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="mercantile1" src="images/mezzi_trasporto/mercantile1.png">
<p><?php echo $ELEMENTO10_CAT08; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="aereomilitare2" src="images/mezzi_trasporto/aereomilitare2.png">
<p><?php echo $ELEMENTO04_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="aereomilitare1"
src="images/mezzi_trasporto/aereomilitare1.png">
<p><?php echo $ELEMENTO03_CAT08; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="camion" src="images/mezzi_trasporto/camion.png">
<p><?php echo $ELEMENTO07_CAT08; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="nave_guerra2" src="images/mezzi_trasporto/nave_guerra2.png">
<p><?php echo $ELEMENTO14_CAT08; ?></p>
</td>
</tr>
</table>


</div>

<div id="personaggi_oggi" style="display:none" >
<table id="personaggi_oggi1">
<caption><?php echo $CATEGORIA11; ?></caption>

<tr>
<td>

<img border="0"  class="draggable" id="bimbaasiatica" src="images/personaggi_oggi/bimbaasiatica.png">
<p><?php echo $ELEMENTO01_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="bimbacaucasica" src="images/personaggi_oggi/bimbacaucasica.png">
<p><?php echo $ELEMENTO02_CAT11; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="bimbaindiana" src="images/personaggi_oggi/bimbaindiana.png">
<p><?php echo $ELEMENTO03_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="bimbanera" src="images/personaggi_oggi/bimbanera.png">
<p><?php echo $ELEMENTO04_CAT11; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="bimboasiatico" src="images/personaggi_oggi/bimboasiatico.png">
<p><?php echo $ELEMENTO05_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="bimboindiano" src="images/personaggi_oggi/bimboindiano.png">
<p><?php echo $ELEMENTO06_CAT11; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="bimbocaucasico" src="images/personaggi_oggi/bimbocaucasico.png">
<p><?php echo $ELEMENTO07_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="bimbonero" src="images/personaggi_oggi/bimbonero.png">
<p><?php echo $ELEMENTO08_CAT11; ?></p>
</td>
</tr>

<tr>
<td>

<img border="0"  class="draggable" id="donnaasiatica" src="images/personaggi_oggi/donnaasiatica.png">
<p><?php echo $ELEMENTO09_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="donnacaucasica" src="images/personaggi_oggi/donnacaucasica.png">
<p><?php echo $ELEMENTO10_CAT11; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="donnaindiana" src="images/personaggi_oggi/donnaindiana.png">
<p><?php echo $ELEMENTO11_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="donnanera" src="images/personaggi_oggi/donnanera.png">
<p><?php echo $ELEMENTO12_CAT11; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="uomoasiatico" src="images/personaggi_oggi/uomoasiatico.png">
<p><?php echo $ELEMENTO13_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="uomocaucasico" src="images/personaggi_oggi/uomocaucasico.png">
<p><?php echo $ELEMENTO14_CAT11; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable" id="uomoindiano" src="images/personaggi_oggi/uomoindiano.png">
<p><?php echo $ELEMENTO15_CAT11; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="uomoneroo" src="images/personaggi_oggi/uomonero.png">
<p><?php echo $ELEMENTO16_CAT11; ?></p>
</td>
</tr>
</table>
</div>

<div id="personaggi_storici" style="display:none" >
<table id="personaggi_storici1">
<caption><?php echo $CATEGORIA12; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  " id="africano" src="images/personaggi_storici/africano.png">
<p><?php echo $ELEMENTO01_CAT12; ?></p>
</td>
<td>
<img border="0"  class="draggable" id="guerrieroturco" src="images/personaggi_storici/guerrieroturco.png">
<p><?php echo $ELEMENTO02_CAT12; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="guerrierovichingo" src="images/personaggi_storici/guerrierovichingo.png">
<p><?php echo $ELEMENTO03_CAT12; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="pellerossa" src="images/personaggi_storici/pellerossa.png">
<p><?php echo $ELEMENTO04_CAT12; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="samurai" src="images/personaggi_storici/samurai.png">
<p><?php echo $ELEMENTO05_CAT12; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="soldatoromano" src="images/personaggi_storici/soldatoromano.png">
<p><?php echo $ELEMENTO06_CAT12; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="uomoprimitivo" src="images/personaggi_storici/uomoprimitivo.png">
<p><?php echo $ELEMENTO07_CAT12; ?></p>
</td>
</tr>
</table>

</div>


<div id="personaggi_uniforme" style="display:none" >
<table id="personaggi_uniforme1">
<caption><?php echo $CATEGORIA14; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  " id="ferroviere" src="images/personaggi_uniforme/ferroviere.png">
<p><?php echo $ELEMENTO01_CAT14; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="infermiera" src="images/personaggi_uniforme/infermiera.png">
<p><?php echo $ELEMENTO02_CAT14; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="poliziotto" src="images/personaggi_uniforme/poliziotto.png">
<p><?php echo $ELEMENTO03_CAT14; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="pompiere" src="images/personaggi_uniforme/pompiere.png">
<p><?php echo $ELEMENTO04_CAT14; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="prete" src="images/personaggi_uniforme/prete.png">
<p><?php echo $ELEMENTO05_CAT14; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="soldato_aviazione" src="images/personaggi_uniforme/soldato_aviazione.png">
<p><?php echo $ELEMENTO06_CAT14; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="soldato_fanteria" src="images/personaggi_uniforme/soldato_fanteria.png">
<p><?php echo $ELEMENTO07_CAT14; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="soldato_marina" src="images/personaggi_uniforme/soldato_marina.png">
<p><?php echo $ELEMENTO08_CAT14; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0" class="draggable  " id="suora" src="images/personaggi_uniforme/suora.png">
<p><?php echo $ELEMENTO09_CAT14; ?></p>
</td>
<td>
<img border="0" class="draggable  " id="vigile_urbano" src="images/personaggi_uniforme/vigile_urbano.png">
<p><?php echo $ELEMENTO10_CAT14; ?></p>
</td>
</tr>
</table>
</div>

<div id="rambo" style="display:none" >
<table id="rambo1">
<caption><?php echo $CATEGORIA13; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  " id="bracciodestropiegato" src="images/personaggio_rambo/bracciodestropiegato.png">
<p><?php echo $ELEMENTO01_CAT13; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="bracciodestroteso" src="images/personaggio_rambo/bracciodestroteso.png">
<p><?php echo $ELEMENTO02_CAT13; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="bracciosinistropiegato" src="images/personaggio_rambo/bracciosinistropiegato.png">
<p><?php echo $ELEMENTO03_CAT13; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="bracciosinistroteso" src="images/personaggio_rambo/bracciosinistroteso.png">
<p><?php echo $ELEMENTO04_CAT13; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="busto" src="images/personaggio_rambo/busto.png">
<p><?php echo $ELEMENTO05_CAT13; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="cartucciera" src="images/personaggio_rambo/cartucciera.png">
<p><?php echo $ELEMENTO06_CAT13; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="mitra" src="images/personaggio_rambo/mitra.png">
<p><?php echo $ELEMENTO14_CAT13; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="fasciasudore" src="images/personaggio_rambo/fasciasudore.png">
<p><?php echo $ELEMENTO08_CAT13; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="fucilemitragliatore" src="images/personaggio_rambo/fucilemitragliatore.png">
<p><?php echo $ELEMENTO09_CAT13; ?></p>
</td>

<td>
<img border="0"  class="draggable  " id="gambadestrapiegata" src="images/personaggio_rambo/gambadestrapiegata.png">
<p><?php echo $ELEMENTO10_CAT13; ?></p>
</td>
</tr>

<tr><td>
<img border="0"  class="draggable  " id="gambadestratesa" src="images/personaggio_rambo/gambadestratesa.png">
<p><?php echo $ELEMENTO11_CAT13; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="gambasinistrapiegata" src="images/personaggio_rambo/gambasinistrapiegata.png">
<p><?php echo $ELEMENTO12_CAT13; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="gambasinistratesa" src="images/personaggio_rambo/gambasinistratesa.png">
<p><?php echo $ELEMENTO13_CAT13; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="elmetto" src="images/personaggio_rambo/elmetto.png">
<p><?php echo $ELEMENTO07_CAT13; ?></p>
</td>
</tr>
<tr>
<td>
<img border="0"  class="draggable  " id="pugnale" src="images/personaggio_rambo/pugnale.png">
<p><?php echo $ELEMENTO15_CAT13; ?></p>
</td>
</tr>
</table>
</div>



<div id="pesce" style="display:none" >
<table id="pesce1">
<caption><?php echo $CATEGORIA10; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  " id="squalo" src="images/pesce/squalo.png">
<p><?php echo $ELEMENTO01_CAT10; ?></p>
</td>
</tr>
</table>

</div>

<div id="terra_frontiera" style="display:none" >
<table id="terra_frontiera1">
<caption><?php echo $CATEGORIA15; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  "  id="bimbapellerossa" src="images/terra_frontiera/bimbapellerossa.png">
<p><?php echo $ELEMENTO01_CAT15; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="bimbopellerossa" src="images/terra_frontiera/bimbopellerossa.png">
<p><?php echo $ELEMENTO02_CAT15; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="cowboy" src="images/terra_frontiera/cowboy.png">
<p><?php echo $ELEMENTO03_CAT15; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="coyote" src="images/terra_frontiera/coyote.png">
<p><?php echo $ELEMENTO04_CAT15; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="fuococampo" src="images/terra_frontiera/fuococampo.png">
<p><?php echo $ELEMENTO05_CAT15; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="giubbablu" src="images/terra_frontiera/giubbablu.png">
<p><?php echo $ELEMENTO06_CAT15; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="indianoarco" src="images/terra_frontiera/indianoarco.png">
<p><?php echo $ELEMENTO07_CAT15; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="indianoascia" src="images/terra_frontiera/indianoascia.png">
<p><?php echo $ELEMENTO08_CAT15; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="squaw" src="images/terra_frontiera/squaw.png">
<p><?php echo $ELEMENTO09_CAT15; ?></p>
</td>
<td>
<img border="0"  class="draggable  " id="tendaindiana" src="images/terra_frontiera/tendaindiana.png">
<p><?php echo $ELEMENTO10_CAT15; ?></p>
</td>
</tr>

<tr>
<td>
<img border="0"  class="draggable  " id="totem" src="images/terra_frontiera/totem.png">
<p><?php echo $ELEMENTO11_CAT15; ?></p>
</td>
</tr>
</table>

</div>



<div id="volatile" style="display:none" >
<table id="volatile1">
<caption><?php echo $CATEGORIA09; ?></caption>

<tr>
<td>
<img border="0"  class="draggable  " id="aquila" src="images/volatile/aquila.png">
<p><?php echo $ELEMENTO01_CAT09; ?></p>
</td>
</tr>
</table>
</div>


</div>


<div id="containerBIG" >

   

    </div>
    
    <div id="containerOLD" >

   

    </div>


<div id="cronometro" style="display:none" >
<div id="vis">00:00:00</div>
</div>

</div>

 <!-- Pushy JS -->
        <script src="js/pushy.min.js"></script>
    </body>
</html>
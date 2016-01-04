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



<script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.0.0/bootbox.min.js"></script>

<?php /*?>
 <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
 
        <!-- Modernizr -->
        
         
  

<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>  
<?php */?>


<script src="kinetic-v5.1.0.min.js"></script>
<script src="js/modernizr.custom.71422.js"></script>

<script  src="js/hammer.js"></script>
<script src="js/psicologo/resize_PG.js"></script>    
<script src="js/psicologo/mobile_P.js"></script>                
<script src="js/psicologo/drag_and_drop_P.js"></script>
<script src="js/bambino/crea_categorie.js"></script>
<script src="js/psicologo/cronometro_P.js"></script>
<link href="css/bootstrapp.css" rel="stylesheet" type="text/css" />


<link href="css/style_desktop_G.css" rel="stylesheet" type="text/css"  >
<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="css/demo_G.css" rel="stylesheet">

        <title><?php echo $TITOLO; ?></title>

    </head>

 
 <body>
 <div id="stampa_user" style="display:none; text-transform:uppercase; height:20px;"><?php echo $_GET['utente']; ?></div>

 <div id="frasi_alert" style="display:none">
  <div id="PRIMA_DI_MADRE_NATURA"><?php echo $PRIMA_DI_MADRE_NATURA; ?></div>
 <div id="PRIMA_DI_MADRE_TERRA"><?php echo $PRIMA_DI_MADRE_TERRA; ?></div>
 <div id="PRIMA_DI_TERRA_PADRI"><?php echo $PRIMA_DI_TERRA_PADRI; ?></div>
 <div id="PRIMA_DI_MADRE_PATRIA"><?php echo $PRIMA_DI_MADRE_PATRIA; ?></div>
 <div id="PRIMA_DI_TERRA_FRONTIERA"><?php echo $PRIMA_DI_TERRA_FRONTIERA; ?></div>
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
 <div id="TORNA_GIOCO"><?php echo $TORNA_GIOCO; ?></div>
 <div id="ARRIVEDERCI"><?php echo $ARRIVEDERCI; ?></div>
<div class="button" id="COMINCIA" ><?php echo $BOTTONE15; ?></div>
 </div>
 <div id="vuoi_lasciare" style="display:none;" ><?php echo $VUOI_LASCIARE; ?></div>
        		
                
        <!-- Your Content -->
        <div id="container">
            
<div id="container_top" >

<div id="scene" >

<div class="button-home" ><a href=sezione_P.php?lingua=<?php echo $lingua; ?> style="color:#1b455a;"> HOME</a>
</div>

<div id="madre_natura" ><?php echo $LINK01; ?>
</div>

<div id="madre_terra"><?php echo $LINK02; ?>
</div>

<div id="terra_padri"  >
<?php echo $LINK03; ?>
</div>

<div id="madre_patria" >
<?php echo $LINK04; ?>
</div>



<div id="terra_frontiera_scena"  >
<?php echo $LINK05; ?>
</div>

 <div class="button-menu" id="fine" style="display:none;"><?php echo $BOTTONE09; ?></div>


</div>

</div>


<DIV ID="main_container">



<div id="in_bottoni">         
<div class="button-func-dis" id="primo_piano" ><img src="icons/function_icons/function-icons_top.png"  class="buttonimg"></div>
<div class="button-func-dis" id="avanti"><img src="icons/function_icons/function-icons_up.png" 
class="buttonimg"></div>
<div class="button-func-dis" id="indietro" ><img src="icons/function_icons/function-icons_down.png"  class="buttonimg"></div>
<div class="button-func-dis" id="fondo" ><img src="icons/function_icons/function-icons_bottom.png" 
class="buttonimg"></div>

<div class="button-func-dis" id="elimina_elemento">
<img src="icons/function_icons/function-icons_delete.png" class="buttonimg"></div>

<div class="button-func-dis" id="specchia_elemento">
<img src="icons/function_icons/specchia.png" class="buttonimg"></div>

<div class="button-func-dis" id="salva" style="left:190px;" ><img src="icons/function_icons/function-icons_print.png" class="buttonimg"></div>


</div>




<div id="elementi" >


 <div class="click-nav" id="scena1" style="display:none;">
			<ul class="no-js" >
				<li>
<a ><DIV class="button" id="menu" style="display:none;" ><?php echo $SELCAT; ?>
                                    </DIV></a>
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
				</li>
			</ul>
		</div>
		<script>
		$(function() {
			// Clickable Dropdown class="clicker"
			$('.click-nav > ul').toggleClass('no-js js');
			$('.click-nav .js ul').hide();
			$('.click-nav .js').click(function(e) {
				$('.click-nav .js ul').slideToggle(200);
				$('.clicker').toggleClass('active');
				e.stopPropagation();
			});
			$(document).click(function() {
				if ($('.click-nav .js ul').is(':visible')) {
					$('.click-nav .js ul', this).slideUp();
					$('.clicker').removeClass('active');
				}
			});
		});
		</script>
	


<div id="condizione_necessaria"  style="display:none" >
<p><?php echo $CONDIZIONE_NECESSARIA; ?></p>
<div class="sfondi">
<img border="0" class="draggable"  id="cieloazzurro_c" src="images/elementi_sfondo/cieloazzurro.png"  >
<p id="cieloazzurro_p" class="sfondi1"><?php echo $ELEMENTO01_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="cielonotturno_c" src="images/elementi_sfondo/cielonotturno2.png" >
<p id="cielonotturno_p" class="sfondi1"><?php echo $ELEMENTO02_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="fiume_c" 
src="images/elementi_sfondo/fiume.png" >
<p id="fiume_p" class="sfondi1"><?php echo $ELEMENTO03_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="laghetto_c" src="images/elementi_sfondo/laghetto.png" >
<p id="laghetto_p" class="sfondi1"><?php echo $ELEMENTO04_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="luna_c"
src="images/elementi_sfondo/luna.png" >
<p id="luna_p" class="sfondi1"><?php echo $ELEMENTO05_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="mare_c" 
src="images/elementi_sfondo/mare.png" >
<p id="mare_p" class="sfondi1"><?php echo $ELEMENTO06_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="montagne_c"
src="images/elementi_sfondo/montagne.png" >
<p id="montagne_p" class="sfondi1"><?php echo $ELEMENTO07_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="sole_c" 
 src="../LoScoprimondo/images/elementi_sfondo/sole.png" >
<p id='sole_p' class="sfondi1"><?php echo $ELEMENTO08_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="terreno_c" 
src="images/elementi_sfondo/terreno2.png">
<p id="terreno_p" class="sfondi1"><?php echo $ELEMENTO09_CAT01; ?></p>
</div>
</div>




<div id="sfondi" style="display:none" >
<div id="sfondi_nome"><?php echo $CATEGORIA01; ?></div>
<div class="sfondi">
<img border="0" class="draggable"  id="cieloazzurro" src="images/elementi_sfondo/cieloazzurro.png"  >
<p id="cieloazzurro_p" class="sfondi1"><?php echo $ELEMENTO01_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="cielonotturno" src="images/elementi_sfondo/cielonotturno2.png" >
<p id="cielonotturno_p" class="sfondi1"><?php echo $ELEMENTO02_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="fiume" 
src="images/elementi_sfondo/fiume.png" >
<p id="fiume_p" class="sfondi1"><?php echo $ELEMENTO03_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="laghetto" src="images/elementi_sfondo/laghetto.png" >
<p id="laghetto_p" class="sfondi1"><?php echo $ELEMENTO04_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="luna"
src="images/elementi_sfondo/luna.png" >
<p id="luna_p" class="sfondi1"><?php echo $ELEMENTO05_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="mare" 
src="images/elementi_sfondo/mare.png" >
<p id="mare_p" class="sfondi1"><?php echo $ELEMENTO06_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="montagne"
src="images/elementi_sfondo/montagne.png" >
<p id="montagne_p" class="sfondi1"><?php echo $ELEMENTO07_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="sole" 
 src="../LoScoprimondo/images/elementi_sfondo/sole.png" >
<p id='sole_p' class="sfondi1"><?php echo $ELEMENTO08_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="terreno" 
src="images/elementi_sfondo/terreno2.png">
<p id="terreno_p" class="sfondi1"><?php echo $ELEMENTO09_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="fulmini" 
src="images/elementi_sfondo/fulmini.png">
<p id="fulmini_p" class="sfondi1"><?php echo $ELEMENTO10_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="stella" 
src="images/elementi_sfondo/stella.png">
<p id="stella_p" class="sfondi1"><?php echo $ELEMENTO11_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="stellacometa" 
src="images/elementi_sfondo/stellacometa.png">
<p id="stellacometa_p" class="sfondi1"><?php echo $ELEMENTO12_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="lunapiena" 
src="images/elementi_sfondo/lunapiena.png">
<p id="lunapiena_p" class="sfondi1"><?php echo $ELEMENTO13_CAT01; ?></p>
</div>
<div class="sfondi">
<img border="0" class="draggable" id="tunnel" 
src="images/elementi_sfondo/galleria.png">
<p id="tunnel_p" class="sfondi1"><?php echo $ELEMENTO14_CAT01; ?></p>
</div>

</div>



<div id="alberi" style="display:none">
<div id="alberi_nome"><?php echo $CATEGORIA02; ?></div>
<div class="alberi">
<img border="0" class="draggable" id="albero" src="images/alberi/albero.png">
<p class="alberi1"><?php echo $ELEMENTO01_CAT02; ?></p>
</div>
<div class="alberi">
<img border="0" class="draggable" id="conifere1" src="images/alberi/conifere1.png">
<p class="alberi1"><?php echo $ELEMENTO02_CAT02; ?></p>
</div>
<div class="alberi">
<img border="0" class="draggable" id="conifere2" src="images/alberi/conifere2.png">
<p class="alberi1"><?php echo $ELEMENTO02_CAT02; ?></p>
</div>
<div class="alberi">
<img border="0" class="draggable" id="conifere3" src="images/alberi/conifere3.png">
<p class="alberi1"><?php echo $ELEMENTO02_CAT02; ?></p>
</div>
</div>

<div id="animale_preistorico" style="display:none">
<div id="trex_nome"><?php echo $CATEGORIA06; ?></div>
<div class="trex">
<img border="0" class="draggable" id="trex" src="images/animale_preistorico/trex.png">
<p class="trex1"><?php echo $ELEMENTO01_CAT06; ?></p>
</div>

</div>

<div id="animale_domestico" style="display:none" >
<div id="animale_domestico_nome"><?php echo $CATEGORIA03; ?></div>
<div class="animale_domestico">
<img border="0" class="draggable" id="agnello" src="images/animali_domestici/agnello.png">
<p class="animale_domestico1"><?php echo $ELEMENTO01_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="agnello_pezzato" src="images/animali_domestici/agnello_pezzato.png">
<p class="animale_domestico1"><?php echo $ELEMENTO02_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="asino" src="images/animali_domestici/asino.png">
<p class="animale_domestico1"><?php echo $ELEMENTO03_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="cavallo" src="images/animali_domestici/cavallo.png">
<p class="animale_domestico1"><?php echo $ELEMENTO04_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable"  id="coniglio" src="images/animali_domestici/coniglio.png">
<p class="animale_domestico1"><?php echo $ELEMENTO05_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable " id="gallina" src="images/animali_domestici/gallina.png">
<p class="animale_domestico1"><?php echo $ELEMENTO06_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable"id="maiale" src="images/animali_domestici/maiale.png">
<p class="animale_domestico1"><?php echo $ELEMENTO07_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="pecora" src="images/animali_domestici/pecora.png">
<p class="animale_domestico1"><?php echo $ELEMENTO08_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="tacchino" src="images/animali_domestici/tacchino.png">
<p class="animale_domestico1"><?php echo $ELEMENTO09_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="vacca" src="images/animali_domestici/vacca.png">
<p class="animale_domestico1"><?php echo $ELEMENTO10_CAT03; ?></p>
</div>
<div class="animale_domestico">
<img border="0" class="draggable" id="vitello"
src="images/animali_domestici/vitello.png">
<p class="animale_domestico1"><?php echo $ELEMENTO11_CAT03; ?></p>
</div>

</div>



<div id="animale_esotico" style="display:none" >
<div id="animale_esotico_nome"><?php echo $CATEGORIA05; ?></div>
<div class="animale_esotico">
<img border="0"  class="draggable" id="cammello" src="images/animali_esotici/cammello.png">
<p class="animale_esotico1"><?php echo $ELEMENTO01_CAT05; ?></p>
</div>
<div class="animale_esotico">
<img border="0" class="draggable" id="scimmia" src="images/animali_esotici/scimmia.png">
<p class="animale_esotico1"><?php echo $ELEMENTO02_CAT05; ?></p>
</div>
<div class="animale_esotico">
<img border="0" class="draggable" id="struzzo" src="images/animali_esotici/struzzo.png">
<p class="animale_esotico1"><?php echo $ELEMENTO03_CAT05; ?></p>
</div>
</div>

<div id="clown" style="display:none" >
<div id="clown_nome"><?php echo $CATEGORIA16; ?></div>
<div class="clown">
<img border="0"  class="draggable" id="clown_augusto" src="images/clown/clown_augusto.png">
<p class="clown1"><?php echo $ELEMENTO01_CAT16; ?></p>
</div>
<div class="clown">
<img border="0" class="draggable" id="clown_bianco" src="images/clown/clown_bianco.png">
<p class="clown1"><?php echo $ELEMENTO02_CAT16; ?></p>
</div>

</div>

<div id="questo_io" style="display:none" >
<div id="questo_io_nome"><?php echo $CATEGORIA17; ?></div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbaasiatica" src="images/personaggi_oggi/bimbaasiatica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO01_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbacaucasica" src="images/personaggi_oggi/bimbacaucasica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO02_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbaindiana" src="images/personaggi_oggi/bimbaindiana.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO03_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbanera" src="images/personaggi_oggi/bimbanera.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO04_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimboasiatico" src="images/personaggi_oggi/bimboasiatico.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO05_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimboindiano" src="images/personaggi_oggi/bimboindiano.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO07_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbocaucasico" src="images/personaggi_oggi/bimbocaucasico2.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO06_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbonero" src="images/personaggi_oggi/bimbonero.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO08_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnaasiatica" src="images/personaggi_oggi/donnaasiatica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO09_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnacaucasica" src="images/personaggi_oggi/donnacaucasica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO10_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnaindiana" src="images/personaggi_oggi/donnaindiana.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO11_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnanera" src="images/personaggi_oggi/donnanera.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO12_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomoasiatico" src="images/personaggi_oggi/uomoasiatico.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO13_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomocaucasico" src="images/personaggi_oggi/uomocaucasico.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO14_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomoindiano" src="images/personaggi_oggi/uomoindiano.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO15_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomoneroo" src="images/personaggi_oggi/uomonero.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO16_CAT11; ?></p>
</div>
</div>

<div id="animale_selvaggio" style="display:none" >
<div id="animale_selvaggio_nome"><?php echo $CATEGORIA04; ?></div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="cinghiale" src="images/animali_selvaggi/cinghiale.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO01_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="coccodrillo" src="images/animali_selvaggi/coccodrillo.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO02_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="elefante" src="images/animali_selvaggi/elefante.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO03_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="orsobianco" src="images/animali_selvaggi/orsobianco.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO04_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="orsobruno" src="images/animali_selvaggi/orsobruno.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO05_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="pantera" src="images/animali_selvaggi/pantera.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO06_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="rinoceronte" src="images/animali_selvaggi/rinoceronte.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO07_CAT04; ?></p>
</div>
<div class="animale_selvaggio">
<img border="0"  class="draggable" id="tigre" src="images/animali_selvaggi/tigre.png">
<p class="animale_selvaggio1"><?php echo $ELEMENTO08_CAT04; ?></p>
</div>
</div>

<div id="edilizia" style="display:none" >
<div id="edilizia_nome"><?php echo $CATEGORIA07; ?></div>
<div class="edilizia">
<img border="0"  class="draggable" id="carcere" src="images/edilizia/carcere.png">
<p class="edilizia1"><?php echo $ELEMENTO01_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="monofamiliare" src="images/edilizia/casa_monofamiliare.png">
<p class="edilizia1"><?php echo $ELEMENTO02_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="chiesa" src="images/edilizia/chiesa.png">
<p class="edilizia1"><?php echo $ELEMENTO03_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="teatro" src="images/edilizia/cinema_teatro.png">
<p class="edilizia1"><?php echo $ELEMENTO04_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="comune" src="images/edilizia/comune.png">
<p class="edilizia1"><?php echo $ELEMENTO05_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="condominio" src="images/edilizia/condominio.png">
<p class="edilizia1"><?php echo $ELEMENTO06_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="giocattoli" src="images/edilizia/giocattoli.png">
<p class="edilizia1"><?php echo $ELEMENTO07_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="grattacielo" src="images/edilizia/grattacielo.png">
<p class="edilizia1"><?php echo $ELEMENTO08_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="lampione" src="images/edilizia/lampione.png">
<p class="edilizia1"><?php echo $ELEMENTO09_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  "  id="elettrica" src="images/edilizia/linea_elettrica.png">
<p class="edilizia1"><?php echo $ELEMENTO10_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="moschea" src="images/edilizia/moschea.png">
<p class="edilizia1"><?php echo $ELEMENTO11_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="vestiti" src="images/edilizia/negozio_vestiti.png">
<p class="edilizia1"><?php echo $ELEMENTO12_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="ospedale" src="images/edilizia/ospedale.png">
<p class="edilizia1"><?php echo $ELEMENTO13_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  "  id="panettiere" src="images/edilizia/panettiere.png">
<p class="edilizia1"><?php echo $ELEMENTO14_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  "  id="phonecenter" src="images/edilizia/phonecenter.png">
<p class="edilizia1"><?php echo $ELEMENTO15_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="pilastrino" src="images/edilizia/pilastrino.png">
<p class="edilizia1"><?php echo $ELEMENTO16_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="pubblicita" src="images/edilizia/pubblicita.png">
<p class="edilizia1"><?php echo $ELEMENTO17_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="salagiochi" src="images/edilizia/sala_giochi.png">
<p class="edilizia1"><?php echo $ELEMENTO18_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="scuola" src="images/edilizia/scuola.png">
<p class="edilizia1"><?php echo $ELEMENTO19_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="semaforo" src="images/edilizia/semaforo.png">
<p class="edilizia1"><?php echo $ELEMENTO20_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="sinagoga" src="images/edilizia/sinagoga.png">
<p class="edilizia1"><?php echo $ELEMENTO21_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="steccato1" src="images/edilizia/steccato1.png">
<p class="edilizia1"><?php echo $ELEMENTO22_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="steccato2" src="images/edilizia/steccato2.png">
<p class="edilizia1"><?php echo $ELEMENTO23_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="strisce_pedonali" src="images/edilizia/strisce_pedonali.png">
<p class="edilizia1"><?php echo $ELEMENTO24_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="tempio_indu" src="images/edilizia/tempio_indu.png">
<p class="edilizia1"><?php echo $ELEMENTO25_CAT07; ?></p>
</div>
<div class="edilizia">
<img border="0"  class="draggable  " id="tunnel" src="images/edilizia/tunnel.png">
<p class="edilizia1"><?php echo $ELEMENTO26_CAT07; ?></p>
</div>

</div>



<div id="mezzi_trasporto" style="display:none" >
<div id="mezzi_trasporto_nome"><?php echo $CATEGORIA08; ?></div>
<div class="mezzi_trasporto">
<img border="0"  class="draggable  " id="aereocivile1" src="images/mezzi_trasporto/aereocivile1.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO01_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="aereocivile2" src="images/mezzi_trasporto/aereocivile2.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO02_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="moto" src="images/mezzi_trasporto/moto.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO12_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="bus" src="images/mezzi_trasporto/bus.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO06_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="bicicletta" src="images/mezzi_trasporto/bicicletta.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO05_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="mercantile2" src="images/mezzi_trasporto/mercantile2.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO11_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="nave_guerra1" src="images/mezzi_trasporto/nave_guerra1.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO13_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="carrarmato" src="images/mezzi_trasporto/carrarmato.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO08_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="polizia" src="images/mezzi_trasporto/macchina_polizia.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO09_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="mercantile1" src="images/mezzi_trasporto/mercantile1.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO10_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="aereomilitare2" src="images/mezzi_trasporto/aereomilitare2.2.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO04_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="aereomilitare1"
src="images/mezzi_trasporto/aereomilitare1.2.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO03_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="camion" src="images/mezzi_trasporto/camion.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO07_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="nave_guerra2" src="images/mezzi_trasporto/nave_guerra2.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO14_CAT08; ?></p>
</div>
<div class="mezzi_trasporto">
<img border="0" class="draggable  " id="treno" src="images/mezzi_trasporto/treno.png">
<p class="mezzi_trasporto1"><?php echo $ELEMENTO15_CAT08; ?></p>
</div>
</div>

<div id="personaggi_oggi" style="display:none" >
<div id="personaggi_oggi_nome"><?php echo $CATEGORIA11; ?></div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbaasiatica" src="images/personaggi_oggi/bimbaasiatica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO01_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbacaucasica" src="images/personaggi_oggi/bimbacaucasica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO02_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbaindiana" src="images/personaggi_oggi/bimbaindiana.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO03_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbanera" src="images/personaggi_oggi/bimbanera.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO04_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimboasiatico" src="images/personaggi_oggi/bimboasiatico.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO05_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimboindiano" src="images/personaggi_oggi/bimboindiano.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO06_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbocaucasico" src="images/personaggi_oggi/bimbocaucasico2.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO07_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="bimbonero" src="images/personaggi_oggi/bimbonero.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO08_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnaasiatica" src="images/personaggi_oggi/donnaasiatica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO09_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnacaucasica" src="images/personaggi_oggi/donnacaucasica.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO10_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnaindiana" src="images/personaggi_oggi/donnaindiana.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO11_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="donnanera" src="images/personaggi_oggi/donnanera.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO12_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomoasiatico" src="images/personaggi_oggi/uomoasiatico.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO13_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomocaucasico" src="images/personaggi_oggi/uomocaucasico.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO14_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomoindiano" src="images/personaggi_oggi/uomoindiano.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO15_CAT11; ?></p>
</div>
<div class="personaggi_oggi">
<img border="0"  class="draggable" id="uomoneroo" src="images/personaggi_oggi/uomonero.png">
<p class="personaggi_oggi1"><?php echo $ELEMENTO16_CAT11; ?></p>
</div>
</div>

<div id="personaggi_storici" style="display:none" >
<div id="personaggi_storici_nome"><?php echo $CATEGORIA12; ?></div>
<div class="personaggi_storici">
<img border="0"  class="draggable  " id="africano" src="images/personaggi_storici/africano.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO01_CAT12; ?></p>
</div>
<div class="personaggi_storici">
<img border="0"  class="draggable" id="guerrieroturco" src="images/personaggi_storici/guerrieroturco.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO02_CAT12; ?></p>
</div>
<div class="personaggi_storici">
<img border="0"  class="draggable  " id="guerrierovichingo" src="images/personaggi_storici/guerrierovichingo.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO03_CAT12; ?></p>
</div>
<div class="personaggi_storici">
<img border="0"  class="draggable  " id="pellerossa" src="images/personaggi_storici/pellerossa.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO04_CAT12; ?></p>
</div>
<div class="personaggi_storici">
<img border="0"  class="draggable  " id="samurai" src="images/personaggi_storici/samurai.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO05_CAT12; ?></p>
</div>
<div class="personaggi_storici">
<img border="0"  class="draggable  " id="soldatoromano" src="images/personaggi_storici/soldatoromano.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO06_CAT12; ?></p>
</div>
<div class="personaggi_storici">
<img border="0"  class="draggable  " id="uomoprimitivo" src="images/personaggi_storici/uomoprimitivo.png">
<p class="personaggi_storici1"><?php echo $ELEMENTO07_CAT12; ?></p>
</div>
</div>


<div id="personaggi_uniforme" style="display:none" >
<div id="personaggi_uniforme_nome"><?php echo $CATEGORIA14; ?></div>
<div class="personaggi_uniforme">
<img border="0"  class="draggable  " id="ferroviere" src="images/personaggi_uniforme/ferroviere.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO01_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="infermiera" src="images/personaggi_uniforme/infermiera.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO02_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="poliziotto" src="images/personaggi_uniforme/poliziotto.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO03_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="pompiere" src="images/personaggi_uniforme/pompiere.png">
<p><?php echo $ELEMENTO04_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="prete" src="images/personaggi_uniforme/prete.png">
<p><?php echo $ELEMENTO05_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="soldato_aviazione" src="images/personaggi_uniforme/soldato_aviazione.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO06_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="soldato_fanteria" src="images/personaggi_uniforme/soldato_fanteria.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO07_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="soldato_marina" src="images/personaggi_uniforme/soldato_marina.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO08_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="suora" src="images/personaggi_uniforme/suora.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO09_CAT14; ?></p>
</div>
<div class="personaggi_uniforme">
<img border="0" class="draggable  " id="vigile_urbano" src="images/personaggi_uniforme/vigile_urbano.png">
<p class="personaggi_uniforme1"><?php echo $ELEMENTO10_CAT14; ?></p>
</div>
</div>

<div id="rambo" style="display:none" >
<div id="rambo_nome"><?php echo $CATEGORIA13; ?></div>
<div class="rambo">
<img border="0"  class="draggable  " id="bracciodestropiegato" src="images/personaggio_rambo/bracciodestropiegato.png">
<p class="rambo1"><?php echo $ELEMENTO01_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="bracciodestroteso" src="images/personaggio_rambo/bracciodestroteso.png">
<p class="rambo1"><?php echo $ELEMENTO02_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="bracciosinistropiegato" src="images/personaggio_rambo/bracciosinistropiegato.png">
<p class="rambo1"><?php echo $ELEMENTO03_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="bracciosinistroteso" src="images/personaggio_rambo/bracciosinistroteso.png">
<p class="rambo1"><?php echo $ELEMENTO04_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="busto" src="images/personaggio_rambo/busto.png">
<p class="rambo1"><?php echo $ELEMENTO05_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="cartucciera" src="images/personaggio_rambo/cartucciera.png">
<p class="rambo1"><?php echo $ELEMENTO06_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="mitra" src="images/personaggio_rambo/mitra.png">
<p class="rambo1"><?php echo $ELEMENTO14_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="fasciasudore" src="images/personaggio_rambo/fasciasudore.png">
<p class="rambo1"><?php echo $ELEMENTO08_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="fucilemitragliatore" src="images/personaggio_rambo/fucilemitragliatore.png">
<p class="rambo1"><?php echo $ELEMENTO09_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="gambadestrapiegata" src="images/personaggio_rambo/gambadestrapiegata.png">
<p class="rambo1"><?php echo $ELEMENTO10_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="gambadestratesa" src="images/personaggio_rambo/gambadestratesa.png">
<p class="rambo1"><?php echo $ELEMENTO11_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="gambasinistrapiegata" src="images/personaggio_rambo/gambasinistrapiegata.png">
<p class="rambo1"><?php echo $ELEMENTO12_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="gambasinistratesa" src="images/personaggio_rambo/gambasinistratesa.png">
<p class="rambo1"><?php echo $ELEMENTO13_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="elmetto" src="images/personaggio_rambo/elmetto.png">
<p class="rambo1"><?php echo $ELEMENTO07_CAT13; ?></p>
</div>
<div class="rambo">
<img border="0"  class="draggable  " id="pugnale" src="images/personaggio_rambo/pugnale.png">
<p class="rambo1"><?php echo $ELEMENTO15_CAT13; ?></p>
</div>
</div>



<div id="pesce" style="display:none" >
<div id="pesce_nome"><?php echo $CATEGORIA10; ?></div>
<div class="pesce">
<img border="0"  class="draggable  " id="squalo" src="images/pesce/squalo.png">
<p class="pesce1"><?php echo $ELEMENTO01_CAT10; ?></p>
</div>
</div>

<div id="terra_frontiera" style="display:none" >
<div id="terra_frontiera_nome"><?php echo $CATEGORIA15; ?></div>
<div class="terra_frontiera">
<img border="0"  class="draggable  "  id="bimbapellerossa" src="images/terra_frontiera/bimbapellerossa.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO01_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="bimbopellerossa" src="images/terra_frontiera/bimbopellerossa.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO02_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="cowboy" src="images/terra_frontiera/cowboy.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO03_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="coyote" src="images/terra_frontiera/coyote.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO04_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="fuococampo" src="images/terra_frontiera/fuococampo.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO05_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="giubbablu" src="images/terra_frontiera/giubbablu.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO06_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="indianoarco" src="images/terra_frontiera/indianoarco2.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO07_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="indianoascia" src="images/terra_frontiera/indianoascia.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO08_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="squaw" src="images/terra_frontiera/squaw.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO09_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="tendaindiana" src="images/terra_frontiera/tendaindiana.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO10_CAT15; ?></p>
</div>
<div class="terra_frontiera">
<img border="0"  class="draggable  " id="totem" src="images/terra_frontiera/totem.png">
<p class="terra_frontiera1"><?php echo $ELEMENTO11_CAT15; ?></p>
</div>
</div>



<div id="volatile" style="display:none" >
<div id="volatile_nome"><?php echo $CATEGORIA09; ?></div>
<div class="volatile">
<img border="0"  class="draggable  " id="aquila" src="images/volatile/aquila.png">
<p class="volatile1"><?php echo $ELEMENTO01_CAT09; ?></p>
</div>
</div>


</div>


<div id="containerBIG"  >

   

    </div>
    
</DIV>

<div id="cronometro" style="display:none" >
<div id="vis">00:00:00</div>
</div>

</div>
<div id="footer" >

<div id='benvenuto' ><?php echo $cod; ?></div>

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
    

<div id='logout' class="button" style="float:right;">
<a href="logout.php" style="color:#1b455a;"><img src="icons/exit.png" class="buttonimg"> LOGOUT</a>
	</div>    
<div id='audio_on' class="button" style="float:right; " onClick="audio('off');">
<img src="icons/icona-suono-on.png" class="buttonimg" style="margin-top:-5px;">
	</div>
<div id='audio_off' class="button" style="float:right; display:none;" onClick="audio('on');">
<img src="icons/icona-suono-off.png" class="buttonimg" style="margin-top:-5px;">
	</div>
    <div id='aiuto' class="button" style="float:right; color:#1b455a; font-size:24px;" onClick="document.getElementById('suono_prova_cambio_audio').play();">
 <p style="margin:-5px;"> ? </p>
	</div>

<div id='full_screen' class="button" style="float:right; color:#1b455a;" onClick="launchFullScreen(document.documentElement); document.getElementById('exit_full_screen').style.display='block';
document.getElementById('full_screen').style.display='none';
">
<?php echo $SCHERMO_INTERO; ?>
	</div>
<div id='exit_full_screen' class="button" style="float:right; color:#1b455a; display:none" onClick="exitFullscreen();
document.getElementById('exit_full_screen').style.display='none';
document.getElementById('full_screen').style.display='block'; ">
<?php echo $NO_SCHERMO_INTERO; ?>
	</div>

  <audio id="suono_prova_cambio_audio" preload="auto">
 <source src='<?php echo $AUDIO_PROVA; ?>'  type="audio/mpeg">
  <source src='<?php echo $AUDIO_PROVA2; ?>'  type="audio/ogg">
 </audio>

 <audio id="suono_canc" preload="auto">
 <source src="delete.mp3" type="audio/mpeg">
 <source src="delete.ogg" type="audio/ogg">
 </audio>
 <audio id="suono_immagini" preload="auto">
 <source src="drop.mp3" type="audio/mpeg">
  <source src="drop.ogg" type="audio/ogg">
 </audio>
 <audio id="suono_drag"  preload="auto">
 <source src="grab.mp3"  type="audio/mpeg">
  <source src="grab.ogg"  type="audio/ogg">
 </audio>
 <audio id="suono_click" preload="auto" >
 <source src="click.mp3"  type="audio/mpeg">
 <source src="click.ogg"  type="audio/ogg">
 </audio>
 

    
    
    </div>
<div id="elementi_mancanti" style="display:none">
 <div id="PER_PASSARE" style="position:relative; float:left;"><?php echo $PER_PASSARE; ?></div>
</div>




    </body>
</html>
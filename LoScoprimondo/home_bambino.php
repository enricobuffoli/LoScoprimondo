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

<script src="js/bambino/resize_G.js"></script>

<link href="css/style_desktop_G.css" rel="stylesheet" type="text/css" >
        <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">


        <title><?php echo $TITOLO; ?></title>

    </head>

 
 <body id="iniziale">
 <audio id="suono"  preload="auto">
 <source src="click.mp3" type="audio/mpeg">
  <source src="click.ogg" type="audio/ogg">

 </audio>
    <DIV ID="container2" class="nicola">
        <DIV CLASS="home-menu">
<!--            <img src="icons/home-big.png"><br />
-->             <img src="icons/home-big2.png"><br />
            <h1><?php echo $TITOLO; ?></h1>
<!--        <DIV CLASS="listbutton"><i class="fa fa-pencil"></i> NUOVO GIOCO</DIV>
-->      <a href=LoScoprimondo_grafico.php?lingua=<?php echo $lingua; ?> style="color:#1b455a;">  <DIV CLASS="listbutton"><i class="fa fa-pencil"></i> <?php echo $TORNA; ?></DIV></a>

      <a href=visualizza_giochi.php?lingua=<?php echo $lingua; ?> style="color:#1b455a;">  <DIV CLASS="listbutton"><i class="fa fa-eye"></i><?php echo $VISUALIZZA_SCENE; ?></DIV></a>
        <DIV CLASS="listbutton" onClick="document.getElementById('suono').play();";><i class="fa fa-question-circle"></i>     <?php echo $COME_FUNZIONA; ?></DIV>
        </DIV>
        
    </DIV>


	
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
<div id='logout' class="button" style="right:0px; position:absolute;">
<a href="logout.php" style="color:#1b455a;"><img src="icons/exit.png" class="buttonimg"> LOGOUT</a>
	</div>
    
    </div>

    </body>
</html>

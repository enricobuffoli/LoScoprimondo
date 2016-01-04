<?php
	include("connessione.php");
	include("gestore.php");
	
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
 <meta name="author" content="Christian Deldossi Paolo Zoli Alessandra Farneti">
<meta name="description" content="sussidio psicopedagogico ad uso di specialisti in psicologia, insegnanti, e operatori sociali: è utilizzabile con le medesime caratteristiche anche da bambini, e utenti di ogni età, come strumento ludico ">
<meta name="keywords" content="Scoprimondo Gioco strumento ludico bambini adulti sussidio psicopedagogico Madre Terra Patria Frontiera Padri Natura">
<meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0;" /> 

<title><?php echo $TITOLO; ?></title>

<link href="css/style_desktop_G.css" rel="stylesheet" type="text/css"  >
 <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script  src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script  src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.js"></script> 

<script src="js/psicologo/mobile_P.js"></script>                
<script src="js/psicologo/drag_and_drop_P.js"></script>
<script src="js/bambino/crea_categorie.js"></script>




</head>

<body>


    <DIV ID="container2">
        <DIV CLASS="home-menu">
            <img src="icons/home-big.png"><br />
            <h1><?php echo $TITOLO; ?></h1>
        <a href=super_pagina.php?lingua=<?php echo $lingua; ?>&menu=inserisci style="color:#1b455a;"><DIV CLASS="listbutton"><i class="fa fa-pencil"></i>      <?php echo $INSERISCI_UTENTI; ?></DIV></a>
        
      <a href=super_pagina.php?lingua=<?php echo $lingua; ?>&menu=modifica style="color:#1b455a;">  <DIV CLASS="listbutton" ><i class="fa fa-user"></i>     <?php echo $MODIFICA_UTENTE; ?></DIV></a>
      <a href=super_pagina.php?lingua=<?php echo $lingua; ?>&menu=elimina style="color:#1b455a;">   <DIV CLASS="listbutton"><i class="fa fa-comment"></i>    <?php echo $ELIMINA; ?></DIV></a>
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

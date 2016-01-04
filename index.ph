<?php
	include("gestore.php");
        include("connessione.php");
?>
<!DOCTYPE html>
<html>
<head> 
 <meta name="author" content="Christian Deldossi Paolo Zoli Alessandra Farneti">
<meta name="description" content="sussidio psicopedagogico ad uso di specialisti in psicologia, insegnanti, e operatori sociali: è utilizzabile con le medesime caratteristiche anche da bambini, e utenti di ogni età, come strumento ludico ">
<meta name="keywords" content="Scoprimondo Gioco strumento ludico bambini adulti sussidio psicopedagogico Madre Terra Patria Frontiera Padri Natura">
<meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0;" /> 
<meta charset="utf-8" />


<link href="css/style_desktop_G.css" rel="stylesheet" type="text/css"  >
 <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
 <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/jquery-ui.min.js"></script> 
<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.js"></script> 
<script type="text/javascript" src="validation_login.js"></script>
        <title><?php echo $TITOLO; ?></title>


</head>


<body>
 <audio id="suono">
 <source src="Queen.mp3" type="audio/mpeg">
 </audio>


<div id="container2">
 <DIV class="home-menu">
            <!--<img src="icons/home-big.png"><br />-->
            <img src="icons/home-big2.png"><br />
            <h1><?php echo $TITOLO; ?></h1>
            
        
        <DIV CLASS="listbutton" onClick="document.getElementById('suono').play()";><i class="fa fa-question-circle"></i>           <?php echo $COME_FUNZIONA; ?>
            </DIV>            
        </DIV>


 <DIV CLASS="login" id="login">
 <form action="verifica.php?lingua=<?php echo $lingua; ?>" method="post" id="form_login">

                <p>EMAIL*</p>
                <input type="text" name="email" id="reg_user" class="input" />
                <p style="float:left;">PASSWORD*</p>
		<input type="password" name="password" id="reg_pass" class="input"/>
      
             <input type="submit" name="login" value="login" id="reg_submit" />
           
</form>
            </DIV>
            
            <DIV CLASS="login">
                <p><?php echo $NON_ISCRITTO; ?></p>
             <a href="registration.php?lingua=<?php echo $lingua; ?>" style="color:#1b455a;">   <DIV class="listbutton"><i class="fa fa-star"></i> <?php echo $REGISTRATI; ?>
</DIV></a>
                </DIV>
                
</div>

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


<?php
	/******************************************************************/
	/***				GESTIONE DELLE LUNGUE						***/
	/***				REALIZZATO DA GINO GIORGETTI				***/
	/***				PER http://php.HTML.it						***/
	/***				DATA:	2009-01-25							***/
	/***				VERSIONE:	1.0								***/
	/***				URL:	http://www.ginogiorgetti.com		***/
	/***				E-MAIL:	info@ginogiorgetti.com				***/
	/******************************************************************/
	
	include("gestore.php");
	
	foreach ($_GET as $k=>$v) if ($k != 'lingua') $gets[] = $k.'='.$v;
	//$urlsenzalingua = $_SERVER['SERVER_NAME'];

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="<?php echo $PAROLECHIAVE; ?>" />
<meta name="description" content="<?php echo $DESCRIZIONE; ?>" />
<title><?php echo $TITOLO; ?></title>
<link href="stile.css" rel="stylesheet" type="text/css" />
</head>

<body>
<table width="100%">
  <tr>
    <td colspan="2" align="left" valign="top" class="titolo"><h1><?php echo $TITOLO; ?></h1></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top" class="menu-lingue">
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

    
    </td>
  </tr>
  <tr>
    <td width="200" align="left" valign="top"><ul>
      <li><a href="index.php?lingua=<?php echo $lingua; ?>"><?php echo $HOMEPAGE; ?></a></li>
      <li><a href="pag01.php?lingua=<?php echo $lingua; ?>"><?php echo $LINK01; ?></a></li>
      <li><a href="pag02.php?lingua=<?php echo $lingua; ?>"><?php echo $LINK02; ?></a></li>
      <li><a href="pag03.php?lingua=<?php echo $lingua; ?>"><?php echo $LINK03; ?></a></li>
      <li><a href="pag04.php?lingua=<?php echo $lingua; ?>"><?php echo $LINK04; ?></a></li>
    </ul></td>
    <td width="*" align="left" valign="top"><h2><?php echo $P04_titolo; ?></h2>
    <p><?php echo $P04_testo; ?></p>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" valign="top"><?php echo $COPYRIGHT; ?></td>
  </tr>
</table>
</body>
</html>

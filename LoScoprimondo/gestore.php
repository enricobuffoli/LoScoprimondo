<?php
$lingue	= array(1=>'Italiano', 'Tedesco', 'Inglese');
//$lingue	= array(1=>'Italiano', 'Tedesco');
$choose	= array(1=>'Scegli la lingua', 'Choose language', 'Choose language');

$flags	= array(1=>'ITALIANO', 'TEDESCO', 'INGLESE');
//$flags	= array(1=>'ITALIANO', 'TEDESCO');


	$lingua = @$_GET['lingua'];
	if (!$lingua) $lingua = 1; // default italiano
 
 	switch ($lingua)
		{
			case 1:
				include "lingue/it.php";
				break;
			case 2:
				include "lingue/de.php";
				break;
			
			case 3:
				include "lingue/us.php";
				break;
			
		}
?>

<?php
include ("connessione.php");
include("LoScoprimondo.php");


//$queryData="SELECT MAX(data) FROM `madreNatura` WHERE `username` = '".$cod." ' ";

//$resultData= mysql_query($queryData);

//echo mysql_result($resultData,0);
$query="SELECT data FROM `madreNatura` WHERE `email` = '".$cod." '  ORDER BY data DESC LIMIT 1 ";
$query1="SELECT data FROM `madreTerra` WHERE  `email` = '".$cod." ' ORDER BY data DESC LIMIT 1 ";
$query2="SELECT data FROM `terraPadri` WHERE `email` = '".$cod." ' ORDER BY data DESC LIMIT 1 ";
$query3="SELECT data FROM `madrePatria` WHERE `email` = '".$cod." ' ORDER BY data DESC LIMIT 1 ";
$query4="SELECT data FROM `terraFrontiera` WHERE `email` = '".$cod." '  ORDER BY data DESC LIMIT 1 ";

$result = mysql_query($query);



if(mysql_num_rows($result) == 0)

{
	$scena=0;
	echo "#".$scena;

}

else
{
$result1 = mysql_query($query1);

if(mysql_num_rows($result1) == 0)

{
	$scena=1;
	echo "#".$scena;

}

else
{

$result2 = mysql_query($query2);
if(mysql_num_rows($result2) == 0)
{
	$scena=2;
	echo "#".$scena;

}

else
{

$result3 = mysql_query($query3);
if(mysql_num_rows($result3) == 0)
{
	$scena=3;
	echo "#".$scena;

}

else
{

$result4 = mysql_query($query4);
if(mysql_num_rows($result4) == 0)
{
	$scena=4;
	echo "#".$scena;

}
else
{
$result1 = mysql_query($query1);
$riga = mysql_fetch_assoc($result);
$riga1 = mysql_fetch_assoc($result1);
if($riga['data'] > $riga1['data'] )
{
	$scena=1;
	echo "#".$scena;
}
else
{
$result1 = mysql_query($query1);
$result2 = mysql_query($query2);
$riga1 = mysql_fetch_assoc($result1);
$riga2 = mysql_fetch_assoc($result2);

	if($riga1['data'] > $riga2['data'])
	{
		$scena=2;
	echo "#".$scena;
	}

else
{
$result2 = mysql_query($query2);
$result3 = mysql_query($query3);
$riga2 = mysql_fetch_assoc($result2);
$riga3 = mysql_fetch_assoc($result3);

	if($riga2['data'] > $riga3['data'])
	{
		$scena=3;
	echo "#".$scena;
	}


else
{
$result3 = mysql_query($query3);
$result4 = mysql_query($query4);
$riga3 = mysql_fetch_assoc($result3);
$riga4 = mysql_fetch_assoc($result4);
	if($riga3['data'] > $riga4['data'])
	{
		$scena=4;
	echo "#".$scena;
	}

else
{
	$scena=0;
	echo "#".$scena;
}
}
}
}
}
}
}
}
}


?>

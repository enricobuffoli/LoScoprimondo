creato_sfondi=false;
creato_alberi=false;
creato_anim_domestici=false;
creato_anim_selvaggi=false;
creato_anim_esotici=false;
creato_volatile=false;
creato_pesce=false;
creato_anim_preistorico=false;



function crea_categoria_sfondi (crea)  {

	if(document.getElementById(crea) != null &&  creato_sfondi == false)
	{
	//nuovo_elemento=document.getElementById(crea);
	//nuovo_elemento=document.createElement("div");
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");		
	
	document.getElementById("scena1").style.display='block';
	
	immagine.src="images/elementi_sfondo/sole.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-20px";


	immagine2.src="images/elementi_sfondo/cielonotturno.png";
	immagine2.setAttribute("width","30px" );
	immagine2.setAttribute("height","30px" );
	immagine2.style.position="relative";
	immagine2.style.top="5px";
	immagine2.style.left="-90px";
	
	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-20px";
		
	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});


	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(immagine2);
	document.getElementById(crea).appendChild(nuovo_elemento2);


creato_sfondi=true;
	}
	
}

function crea_categoria_alberi (crea)  {

	if(document.getElementById(crea) != null &&  creato_alberi == false)
	{
//	nuovo_elemento=document.getElementById(crea);
	//nuovo_elemento=document.createElement("div");
	nuovo_elemento=document.createElement("li");
	
	nuovo_elemento.setAttribute('id',crea);
	//nuovo_elemento=document.createElement(crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/alberi/albero.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-20px";
	//immagine.style.float="left";
	
	immagine2.src="images/alberi/conifere1.png";
	immagine2.setAttribute("width","30px" );
	immagine2.setAttribute("height","30px" );
	immagine2.style.position="relative";
	immagine2.style.top="5px";
	immagine2.style.left="-90px";
	//immagine2.style.float="left";

	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-20px";


	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('alberi', 'mezzi_trasporto sfondi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	
	
	
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(immagine2);
	document.getElementById(crea).appendChild(nuovo_elemento2);
	creato_alberi=true;
	}

}

function crea_categoria_anim_domestici (crea)  {

	if(document.getElementById(crea) != null &&  creato_anim_domestici == false)
	{

	//nuovo_elemento=document.getElementById(crea);
//	nuovo_elemento=document.createElement(crea);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/animali_domestici/agnello.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-20px";
	//immagine.style.float="left";
	
	immagine2.src="images/animali_domestici/cavallo.png";
	immagine2.setAttribute("width","30px" );
	immagine2.setAttribute("height","30px" );
	immagine2.style.position="relative";
	immagine2.style.top="5px";
	immagine2.style.left="-90px";
	//immagine2.style.float="left";


	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-50px";


	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('animale_domestico', 'mezzi_trasporto alberi animale_preistorico sfondi animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	
	
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(immagine2);
	document.getElementById(crea).appendChild(nuovo_elemento2);

creato_anim_domestici=true;
	}
	
}

function crea_categoria_anim_selvaggi (crea)  {

	if(document.getElementById(crea) != null &&  creato_anim_selvaggi == false)
	{
	//nuovo_elemento=document.getElementById(crea);
//	nuovo_elemento=document.createElement(crea);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/animali_selvaggi/tigre.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-20px";
	
	
	immagine2.src="images/animali_selvaggi/cinghiale.png";
	immagine2.setAttribute("width","30px" );
	immagine2.setAttribute("height","30px" );
	immagine2.style.position="relative";
	immagine2.style.top="5px";
	immagine2.style.left="-90px";
	
	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-45px";

	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('animale_selvaggio', 'mezzi_trasporto alberi animale_preistorico sfondi animale_esotico animale_domestico clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});

	
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(immagine2);
	document.getElementById(crea).appendChild(nuovo_elemento2);

creato_anim_selvaggi=true;
	}

}


function crea_categoria_anim_esotici (crea)  {

	if(document.getElementById(crea) != null &&  creato_anim_esotici == false)
	{
	//nuovo_elemento=document.getElementById(crea);
//	nuovo_elemento=document.createElement(crea);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/animali_esotici/cammello.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-20px";
	
	
	immagine2.src="images/animali_esotici/scimmia.png";
	immagine2.setAttribute("width","30px" );
	immagine2.setAttribute("height","30px" );
	immagine2.style.position="relative";
	immagine2.style.top="5px";
	immagine2.style.left="-90px";
	
	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-40px";


	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('animale_esotico', 'mezzi_trasporto alberi animale_preistorico sfondi animale_selvaggio animale_domestico clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	
	
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(immagine2);
	document.getElementById(crea).appendChild(nuovo_elemento2);


creato_anim_esotici=true;
	}
}


function crea_categoria_volatile (crea)  {

	if(document.getElementById(crea) != null &&  creato_volatile == false)
	{
	//nuovo_elemento=document.getElementById(crea);
//	nuovo_elemento=document.createElement(crea);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/volatile/aquila.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-80px";
	
	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-20px";


	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('volatile', 'mezzi_trasporto alberi animale_preistorico sfondi animale_selvaggio animale_domestico clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera animale_esotico questo_io');
	});
	
		
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(nuovo_elemento2);


creato_volatile=true;
}
}


function crea_categoria_pesce (crea)  {

	if(document.getElementById(crea) != null &&  creato_pesce == false)
	{

	//nuovo_elemento=document.getElementById(crea);
//	nuovo_elemento=document.createElement(crea);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/pesce/squalo.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-80px";
	
	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-10px";


	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('pesce', 'mezzi_trasporto alberi animale_preistorico sfondi animale_selvaggio animale_domestico clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo volatile terra_frontiera animale_esotico questo_io');
	});
	
		

	
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(nuovo_elemento2);


creato_pesce=true;
	}
}


function crea_categoria_anim_preistorico (crea)  {

	if(document.getElementById(crea) != null &&  creato_anim_preistorico == false)
	{

	//nuovo_elemento=document.getElementById(crea);
//	nuovo_elemento=document.createElement(crea);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento2=document.createElement("p");
	immagine=document.createElement("img");
	immagine2=document.createElement("img");
	


	immagine.src="images/animale_preistorico/trex.png";
	immagine.setAttribute("width","30px" );
	immagine.setAttribute("height","30px" );
	immagine.style.position="relative";
	immagine.style.top="5px";
	immagine.style.left="-80px";
	
	var testo = crea;
	nuovo_elemento2.innerHTML=testo.toString();
	nuovo_elemento2.style.position="relative";
	nuovo_elemento2.style.top="-25px";
	nuovo_elemento2.style.right="-50px";


	document.getElementById(crea).style.cursor='pointer';
	document.getElementById(crea).addEventListener('click',function() { 
	cambia('animale_preistorico', 'mezzi_trasporto alberi pesce sfondi animale_selvaggio animale_domestico clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo volatile terra_frontiera animale_esotico questo_io');
	});
	
	
	//document.getElementById("container_canvas").appendChild(nuovo_elemento);
	document.getElementById(crea).appendChild(immagine);
	document.getElementById(crea).appendChild(nuovo_elemento2);

creato_anim_preistorico=true;
	}
}

function crea_categoria_mezzi (crea)  {

if( conta_scene == 3)
	{
		
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	
	nuovo_elemento.innerHTML="<a><img src='images/mezzi_trasporto/bus.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/mezzi_trasporto/camion.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-40px;'>"+crea.toString()+"</p></a>";

	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('mezzi_trasporto', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	
	document.getElementById("container_canvas").appendChild(nuovo_elemento);
var disabilita= document.getElementById("madre_patria");
	clickAndDisable(disabilita);
	avvia();
	}
}


function crea_categoria_pers_oggi (crea)  {
	if( (conta_scene == 1 || conta_scene == 2) && document.getElementById(crea) == null)
	{

	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento.innerHTML="<a><img src='images/personaggi_oggi/uomonero.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/personaggi_oggi/donnanera.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-40px;'>"+crea.toString()+"</p></a>";
	
			document.getElementById("scena1").style.display='block';


	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('personaggi_oggi', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia mezzi_trasporto personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	document.getElementById("container_canvas").appendChild(nuovo_elemento);

	var disabilita= document.getElementById("madre_terra");
	clickAndDisable(disabilita);
	avvia();
	}
}

function crea_categoria_questo_io (crea)  {
	if( document.getElementById(crea) == null)
	{

	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento.innerHTML="<a><img src='images/personaggi_oggi/uomonero.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/personaggi_oggi/donnanera.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-40px;'>"+crea.toString()+"</p></a>";
	
			document.getElementById("scena1").style.display='block';


	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('questo_io', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia mezzi_trasporto personaggi_storici personaggi_oggi personaggi_uniforme rambo pesce terra_frontiera volatile');
	});
	document.getElementById("container_canvas").appendChild(nuovo_elemento);

	var disabilita= document.getElementById("madre_terra");
	clickAndDisable(disabilita);
	avvia();
	}
}


//onclick="clickAndDisable(this); avvia();" 

function crea_categoria_pers_storici (crea)  {

if( conta_scene == 2)
	{
		
			nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	
	nuovo_elemento.innerHTML="<a><img src='images/personaggi_storici/samurai.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/personaggi_storici/uomoprimitivo.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-40px;'>"+crea.toString()+"</p></a>";

	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('personaggi_storici', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi mezzi_trasporto personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	document.getElementById("container_canvas").appendChild(nuovo_elemento);


	var disabilita= document.getElementById("terra_padri");
	clickAndDisable(disabilita);
	avvia();
	}
}


function crea_categoria_edilizia (crea)  {

if( (conta_scene == 2 || conta_scene == 3) && document.getElementById(crea) == null)
	{
		
			nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	
	nuovo_elemento.innerHTML="<a><img src='images/edilizia/comune.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/edilizia/chiesa.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-10px;'>"+crea.toString()+"</p></a>";

	document.getElementById("scena1").style.display='block';

	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('edilizia', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown personaggi_storici personaggi_oggi mezzi_trasporto personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
	});
	
	document.getElementById("container_canvas").appendChild(nuovo_elemento);
	
	}
	
}

function crea_categoria_rambo (crea)  {

if( conta_scene == 3)
	{
		
			nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	
	nuovo_elemento.innerHTML="<a><img src='images/personaggio_rambo/mitra.png' width='30px' height='30px'style='position:relative; top:5px; left:-20px;' ></img><img src='images/personaggio_rambo/pugnale.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-10px;'>"+crea.toString()+"</p></a>";

	document.getElementById("scena1").style.display='block';


	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('rambo', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown personaggi_storici personaggi_oggi mezzi_trasporto personaggi_uniforme edilizia pesce terra_frontiera volatile questo_io');
	});
	
	document.getElementById("container_canvas").appendChild(nuovo_elemento);
	}
}

function crea_categoria_clown (crea)  {

if( conta_scene == 3)
	{
		
			nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	
	nuovo_elemento.innerHTML="<a><img src='images/clown/clown_augusto.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/clown/clown_bianco.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-10px;'>"+crea.toString()+"</p></a>";

	document.getElementById("scena1").style.display='block';


	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('clown', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio personaggi_storici personaggi_oggi mezzi_trasporto personaggi_uniforme edilizia pesce terra_frontiera volatile rambo questo_io');
	});
	
	document.getElementById("container_canvas").appendChild(nuovo_elemento);
	}
}

function crea_categoria_pers_unif (crea)  {

if( conta_scene == 3)
	{
		
			nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);
	nuovo_elemento.innerHTML="<a><img src='images/personaggi_uniforme/poliziotto.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/personaggi_uniforme/pompiere.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-40px;'>"+crea.toString()+"</p></a>";

	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('personaggi_uniforme', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown personaggi_storici personaggi_oggi mezzi_trasporto rambo edilizia pesce terra_frontiera volatile questo_io');
	});
	document.getElementById("container_canvas").appendChild(nuovo_elemento);


	}
}


function crea_categoria_terra (crea)  {
		console.log("crea categoria terra prima dell'if " + conta_scene);

if( conta_scene == 4)

	{
		
		console.log("crea categoria terra " + conta_scene);
	nuovo_elemento=document.createElement("li");
	nuovo_elemento.setAttribute('id',crea);

		document.getElementById("scena1").style.display='block';

	nuovo_elemento.innerHTML="<a><img src='images/terra_frontiera/totem.png' width='30px' height='30px' style='position:relative; top:5px; left:-20px;' ></img><img src='images/terra_frontiera/coyote.png' width='30px' height='30px' style='position:relative; top:5px; left:-90px;'></img><p style='position:relative; top:-20px; right:-40px;'>"+crea.toString()+"</p></a>";
	nuovo_elemento.style.cursor='pointer';
	nuovo_elemento.addEventListener('click',function() { 
	cambia('terra_frontiera', 'sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown personaggi_storici personaggi_oggi mezzi_trasporto rambo edilizia pesce personaggi_uniforme volatile questo_io');
	});
	document.getElementById("container_canvas").appendChild(nuovo_elemento);

	
	var disabilita= document.getElementById("terra_frontiera_scena");
	clickAndDisable(disabilita);
	avvia();
	}

}



function elimina_categorie2(elimina) 
{	
	if( conta_scene > 2 && document.getElementById(elimina ) !=  null)
	{
	var child = document.getElementById(elimina);
	child.parentNode.removeChild(child);
	}
}


function elimina_categorie1(elimina) 
{

	if( conta_scene > 3 && document.getElementById(elimina ) !=  null)
	{
		console.log("elimina " + elimina);
	var child = document.getElementById(elimina);
	child.parentNode.removeChild(child);
	}

	               
}

function elimina_categorie(elimina) 
{

	if(document.getElementById(elimina ) !=  null)
	{
		console.log("elimina " + elimina);
	var child = document.getElementById(elimina);
	child.parentNode.removeChild(child);
	}

	               
}
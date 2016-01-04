window.onload = function () {
// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var get = parseGetVars();
var stile = get['menu'];
console.log(stile);
aggiorna_stile(stile);

document.getElementById("scegli").addEventListener('click',function(){
	riproduci_scena();

});
var ultimo;
document.getElementById("avanti_im").addEventListener('click',function(){scorri('+')});
document.getElementById("indietro_im").addEventListener('click',function(){scorri('-')});

riproduci_scena();
}

var avanti_P;
var indietro_P;
function visualizza_scene_utente(user){
document.getElementById('commenta_scene_P').style.display='block';	
document.getElementById('containerBIG_commenta').style.display='block';	
document.getElementById('commento_form').style.display='block';	
document.getElementById('pulsanti').style.display='block';	
document.getElementById('menu_scene').style.display='none';

$.ajax({
                 url: 'lascia_bambino.php',
                type: 'POST',
                data: {
               	 'abbandona': abbandona,
                },  
				success: function(data)
				{
					alert(complimenti);
					//aggiorna_stile('gestione');
					document.location.href='psicologo.php?&menu=gestione';
				}

            });   
	
	
	
}
function parseGetVars()
{
  // creo una array
  var args = new Array();
  // individuo la query (cioè tutto quello che sta a destra del ?)
  // per farlo uso il metodo substring della proprietà search
  // dell'oggetto location
  var query = window.location.search.substring(1);
  // se c'è una querystring procedo alla sua analisi
  if (query)
  {
    // divido la querystring in blocchi sulla base del carattere &
    // (il carattere & è usato per concatenare i diversi parametri della URL)
    var strList = query.split('&');
    // faccio un ciclo per leggere i blocchi individuati nella querystring
    for(str in strList)
    {
      // divido ogni blocco mediante il simbolo uguale
      // (uguale è usato per l'assegnazione del valore)
      var parts = strList[str].split('=');
      // inserisco nella array args l'accoppiata nome = valore di ciascun
      // parametro presente nella querystring
      args[unescape(parts[0])] = unescape(parts[1]);
    }
  }
  return args;
}
// JavaScript Document
function riproduci_scena (){

var date = new Date();
var get = parseGetVars();
var utente = get['utente'];
var scena = get ['scena'];
var id_scena= get['id_scena'];
var json;


	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);

var posX=0;

stageOLD = new Kinetic.Stage({
					container : "containerBIG_commenta",
					x: posX,
					y: posY,
					width : 650,
				   height : 500,
				});
				
$.ajax({
                 url: 'commenta.php',
                type: 'POST',
				data:
				{
					'utente': utente,
					'scena' : scena,
					'id_scena' : id_scena
					
				},
				success: function(data)
				{
					
				 ultimo=data.split('@');
				console.log(ultimo );
								 //json = ultimo[1];
					if(ultimo[(ultimo.length)-1] != null && scena != 0){
		$('textarea[name="commento"]').val(ultimo[(ultimo.length)-1]);
					}

if(ultimo.length == 3)
{
	crea(ultimo[1]);
	document.getElementById("avanti_im").style.display='none';
	document.getElementById("indietro_im").style.display='none';
	document.getElementById("inizio_im").style.display='none';
	document.getElementById("fine_im").style.display='none';

}
else 
{
 n=(ultimo.length)-3;
 indice=1;
 myBool = false;
var t;
//crea(ultimo[indice]);
crea(ultimo[1]);

document.getElementById("inizio_im").addEventListener('click',function(){
	stageOLD.getChildren().remove();
	crea(ultimo[2]);
	indice=2;
	});
document.getElementById("fine_im").addEventListener('click',function(){
		stageOLD.getChildren().remove();
	crea(ultimo[1]);
	indice=1;
	});
document.getElementById("pausa_im").addEventListener('click',function(){
	console.log(" pausa ");
	myBool = true;
 clearTimeout(t);
 	document.getElementById("play_im").style.backgroundColor='#f38630';
 	document.getElementById("pausa_im").style.backgroundColor='#efe76a';
},false);
document.getElementById("play_im").addEventListener('click',function(){
	console.log(" play ");
	myBool = false;
	//crea(ultimo[indice]);
	 //indice++;
	t= setTimeout(nextFrame,3000);
	 	document.getElementById("pausa_im").style.backgroundColor='#f38630';
	document.getElementById("play_im").style.backgroundColor='#efe76a';
},false);
//var i = 2;
//var n=(ultimo.length)-2;

function nextFrame() {
	if(stageOLD.getChildren() != null ){stageOLD.getChildren().remove();}
	
    if(indice < n) {
		if (myBool == false) {
        crea(ultimo[indice]);
        indice++;
		document.getElementById("play_im").style.backgroundColor='#efe76a'; 

        // Continue the loop in 5s
		
		 t = setTimeout(nextFrame,3000);
		}

        //setTimeout(nextFrame, 5000);
    }
			console.log("\n fuori if i " + i + "\n n " + n);

	if(indice >= n)
	{
		console.log("ultima scena \n");
		stageOLD.getChildren().remove();
		crea(ultimo[1]);
		 clearTimeout(t);

	}
}
// Start the loop
if (myBool == false) {
t = setTimeout(nextFrame,0);
}
//setTimeout(nextFrame, 0);


}

					/*for(var z=1;z < (ultimo.length) - 2;z++)
					{
					setTimeout(crea,5000,ultimo[z]);
	//setTimeout(function(){if(stageOLD.getChildren() != null){stageOLD.getChildren().remove();}},5000);

					}*/
					
						},
						error: "errore"

});



}

function scorri(verso) {
if (verso=="+" && indice == n) {
	console.log("\n ultima immagine indice  " + indice + " n " + n);
stageOLD.getChildren().remove();
crea(ultimo[1]);
indice++;
	
}

if (verso=="+" && indice<n) {
indice++;
console.log(" indice " + indice + " n " + n);
stageOLD.getChildren().remove();
crea(ultimo[indice]);
}
if (verso=="-" && indice>2) {
indice--;
console.log(" indice " + indice + " n " + n);
stageOLD.getChildren().remove();
crea(ultimo[indice]);
}
}

function crea(json)
{
	 var giustoO=json.replace(/Kinetic.Group/g,"Group");
 	 var giusto=giustoO.replace(/,@/g,"@");	
	
	 console.log("giusto " + giusto);			
				 var carica= Kinetic.Node.create(giusto, 'containerBIG_commenta');
					stageOLD.add(carica);
					var prova = carica.getChildren().find('.Image');
	 var bgxy = stageOLD.getAbsolutePosition();

				for(i=0;i<prova.length;i++)
					{  
					  //function to induce scope
					  (function() {
						  //var image = prova[i].getChildren().find('.Image');
						  console.log(prova[i].getChildren()[0].name());
						   if(prova[i].getChildren()[1] != null )
						 {
						  prova[i].getChildren()[1].hide();
						prova[i].getChildren()[2].hide();
						prova[i].getChildren()[3].hide();
						prova[i].getChildren()[4].hide();
						prova[i].getChildren()[5].hide();
						 }
						   var image = prova[i].getChildren()[0];
							var XX=prova[i].getAbsolutePosition().x;
							var YY=prova[i].getAbsolutePosition().y
							var rot=prova[i].getChildren()[0].rotation();
							var z= prova[i].getAbsoluteZIndex();
							
if(prova[i].getChildren()[0].getPosition().x == 0 && prova[i].getChildren()[0].getPosition().y == 0)
{
			  console.log("uguale a zero " + prova[i].getChildren()[0].name() + " rotation " + rot );

			var myX = XX ;
			var myY = YY ;
			
			  var imageObj = new Image();
						  imageObj.onload = function() {
							  image.setImage(imageObj);
							  image.strokeEnabled(false);
							 	image.getAbsolutePosition(myX,myY);
							  image.rotation(rot);
							  image.getLayer().draw();
							  image.setZIndex(z);
						  };
						  imageObj.src = image.attrs.src;
										prova[i].draggable(false);

}
else {
		console.log("diverso da zero " + prova[i].getChildren()[0].name());
		var rotation=prova[i].rotation();
			var myX =  XX ;
			var myY =  YY ;
						  var imageObj = new Image();
						  imageObj.onload = function() {
							  image.setImage(imageObj);
							  image.getLayer().draw();
						  };
						  imageObj.src = image.attrs.src;
					  
						prova[i].getChildren()[0].getAbsolutePosition().x ;	
						prova[i].getChildren()[0].getAbsolutePosition().y ;
						prova[i].getAbsolutePosition().x ;	
						prova[i].getAbsolutePosition().y ;
						prova[i].draggable(false);
						prova[i].getChildren()[0].strokeEnabled(false);
						prova[i].getChildren()[0].getLayer().draw();
}

					  })();
					}
					


};

function conferma_abbandona_utente(valore)
{	
var sicuro=document.getElementById("sure").innerHTML;
var complimenti=document.getElementById("COMPLIMENTI").innerHTML;
var r=confirm(sicuro);
if (r==true)
{
	var abbandona= valore;
			$.ajax({
                 url: 'lascia_bambino.php',
                type: 'POST',
                data: {
               	 'abbandona': abbandona,
                },  
				success: function(data)
				{
					alert(complimenti);
					//aggiorna_stile('gestione');
					document.location.href='psicologo.php?&menu=gestione';
				}

            });   
}
else return;
}


function aggiorna_stile(menu) {
	console.log(menu);
	
	if(menu == 'scegli_utente')
	{

console.log("menu");

		$('#scegli_bambino').removeClass("button-menu");
		$('#commenta_scene').removeClass("button-active");
		$('#gestione_utenti').removeClass("button-active");

		$('#scegli_bambino').addClass("button-active");
		$('#commenta_scene').addClass("button-menu");
		$('#gestione_utenti').addClass("button-menu");
		document.getElementById('bambino').style.display='block';
document.getElementById('commenta_scene_P').style.display='none';	
document.getElementById('containerBIG_commenta').style.display='none';	
document.getElementById('commento_form').style.display='none';	
document.getElementById('pulsanti').style.display='none';
document.getElementById('nome_bimbo').style.display='none';	
document.getElementById("noScene").style.display="none";
document.getElementById('elementi').style.display='none';	

	}
	if(menu == 'commenta')
	{
		$('#scegli_bambino').removeClass("button-active");
		$('#commenta_scene').removeClass("button-menu");
		$('#gestione_utenti').removeClass("button-active");
		
		$('#scegli_bambino').addClass("button-menu");
		$('#commenta_scene').addClass("button-active");
		$('#gestione_utenti').addClass("button-menu");
		document.getElementById('menu_scene').style.display='block';
		document.getElementById('commenta_scene_P').style.display='none';	
document.getElementById('containerBIG_commenta').style.display='none';	
document.getElementById('commento_form').style.display='none';	
document.getElementById('pulsanti').style.display='none';
document.getElementById('nome_bimbo').style.display='none';
document.getElementById("noScene").style.display="none";
document.getElementById('elementi').style.display='none';	
	

	}
	if(menu == 'gestione')
	
	{
		
		$('#scegli_bambino').removeClass("button-active");
		$('#commenta_scene').removeClass("button-active");
		$('#gestione_utenti').removeClass("button-menu");
		
		
		$('#scegli_bambino').addClass("button-menu");
		$('#commenta_scene').addClass("button-menu");
		$('#gestione_utenti').addClass("button-active");
		document.getElementById('menu_utenti').style.display='block';
document.getElementById('commenta_scene_P').style.display='none';	
document.getElementById('containerBIG_commenta').style.display='none';	
document.getElementById('commento_form').style.display='none';	
document.getElementById('pulsanti').style.display='none';	
document.getElementById('nome_bimbo').style.display='none';	
document.getElementById("noScene").style.display="none";
document.getElementById('elementi').style.display='block';	
	}
	
		if(menu == 'commenta_scene')
	{
		$('#scegli_bambino').removeClass("button-active");
		$('#commenta_scene').removeClass("button-menu");
		$('#gestione_utenti').removeClass("button-active");
		
		$('#scegli_bambino').addClass("button-menu");
		$('#commenta_scene').addClass("button-active");
		$('#gestione_utenti').addClass("button-menu");
		document.getElementById('menu_scene').style.display='none';
		document.getElementById('commenta_scene_P').style.display='block';
		document.getElementById('nome_bimbo').style.display='block';	
document.getElementById('containerBIG_commenta').style.display='block';	
document.getElementById('commento_form').style.display='block';	
document.getElementById('pulsanti').style.display='block';	
document.getElementById("noScene").style.display="none";
document.getElementById('elementi').style.display='block';	

	}

	
}// JavaScript Document
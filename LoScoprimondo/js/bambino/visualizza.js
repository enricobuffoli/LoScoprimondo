  


conta_scene=0;
avanti=0;
var stage;
var layer;
var stageOLD;
var data_immagine;
var n=0;
var xPos;
var yPos;

$.fn.extend({
    disableSelection: function() {
        this.each(function() {
            this.onselectstart = function() {
                return false;
            };
            this.unselectable = "on";
            $(this).css('-moz-user-select', 'none');
            $(this).css('-webkit-user-select', 'none');
        });
    }
});
// Cerca il metodo corretto in base al tipo di browser in uso
function launchFullScreen(element) {
console.log("schermo intero ");
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}


window.onload = function () {
	

	//document.getElementById("presentazione").play();
	$.ajax({
                 url: 'controlla.php',
                type: 'POST',
                
				success: function(data)
				{
					var ultimo=data.split('#');
					if(ultimo[2] == 0)
					{
						console.log(ultimo[2] + "scena 0");
			
			stampa_madre_natura();
			/*
			$("#madre_natura").addClass("button-active");
			$("#madre_terra").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-menu");
document.getElementById('commenta_madre_natura').style.display='block';*/
						}
					if(ultimo[2] == 1)
					{	
			/*$("#madre_terra").addClass("button-active");
			$("#madre_natura").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-menu");
document.getElementById('commenta_madre_terra').style.display='block';*/
stampa_madre_terra();
						console.log(ultimo[2] + "scena 1");}
					if(ultimo[2] == 2)
					{
			/*$("#madre_terra").addClass("button-active");
			$("#madre_natura").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-menu");
			document.getElementById('commenta_terra_padri').style.display='block';*/
stampa_terra_padri();
						console.log(ultimo[2] + "scena 2");}
					if(ultimo[2] == 3)
					{
						stampa_madre_patria();
			/*$("#madre_terra").addClass("button-menu");
			$("#madre_natura").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-active");
			$("#terra_frontiera_scena").addClass("button-menu");
			document.getElementById('commenta_madre_patria').style.display='block';*/

						console.log(ultimo[2] + "scena 3");}
					if(ultimo[2] == 4)
					{
						stampa_terra_frontiera();
			/*$("#madre_terra").addClass("button-menu");
			$("#madre_natura").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-active");
			document.getElementById('commenta_terra_frontiera').style.display='block';*/

						console.log(ultimo[2] + "scena 4");}
				}
				
				
            });   

	
  
       
//document.documentElement.requestFullscreen();
	
	

		 
	/*	 document.getElementById("torna_gioco").addEventListener('click', function() {

document.getElementById("elementi").style.display="block";
document.getElementById("containerOLD").style.display="none";
document.getElementById("stampa").style.display="none";
document.getElementById("torna_gioco").style.display="none";
document.getElementById("no_scena").style.display='none';
//		 launchFullScreen(document.documentElement);

	document.getElementById("testo_1").style.display='none';
	document.getElementById("testo_2").style.display='none';
	document.getElementById("testo_3").style.display='none';
	document.getElementById("testo_4").style.display='none';
	document.getElementById("testo_5").style.display='none';
	document.getElementById("commenta_madre_natura").style.display='none';
	document.getElementById("commenta_madre_patria").style.display='none';
	document.getElementById("commenta_madre_terra").style.display='none';
	document.getElementById("commenta_terra_padri").style.display='none';
	document.getElementById("commenta_terra_frontiera").style.display='none';
	
			$("#madre_natura").removeClass("button-active");
			$("#madre_terra").removeClass("button-active");
			$("#terra_padri").removeClass("button-active");
			$("#madre_patria").removeClass("button-active");
			$("#terra_frontiera_scena").removeClass("button-active");
	
			$("#madre_natura").addClass("button-fatto");
			$("#madre_terra").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-fatto");
			$("#terra_frontiera_scena").addClass("button-fatto");
var da_eliminare1=document.getElementById("madre_s");
				if (da_eliminare1 != null )
				{
		$("#commenta_madre_natura p").remove();
		$("#commenta_madre_natura button").remove();
				}
var da_eliminare2=document.getElementById("madre_terra_s");
				if (da_eliminare2 != null )
				{
		$("#commenta_madre_terra p").remove();
		$("#commenta_madre_terra button").remove();
				}
var da_eliminare3=document.getElementById("terra_s");
				if (da_eliminare3 != null )
				{
		$("#commenta_terra_padri p").remove();
		$("#commenta_terra_padri button").remove();
				}
var da_eliminare4=document.getElementById("madre_patria_s");
				if (da_eliminare4 != null )
				{
		$("#commenta_madre_patria p").remove();
		$("#commenta_madre_patria button").remove();
		
			}
var da_eliminare5=document.getElementById("terra_front_s");
				if (da_eliminare5 != null )
				{
		$("#commenta_terra_frontiera p").remove();
		$("#commenta_terra_frontiera button").remove();
				}
if(stageOLD.getChildren() != null){
stageOLD.getChildren().remove();
}

});

*/	
	document.getElementById("stampa").addEventListener('click', function() {
		
		var myStage;
/*stageOLD.toImage({
    callback: imageDone
});


function imageDone(stageImage){
      myStage= new Image(); 
myStage.onload=function(){
  }
      myStage.src= stageImage; 
	  myStage.setAttribute('crossOrigin','anonymous');
 	  myStage.setAttribute("id","stampa");
 	  myStage.setAttribute("width","500px");
      myStage.setAttribute("height","650px");

}

*/



stageOLD.toDataURL({ 
  callback:imageDone
});


function imageDone(stageDataURL){
  myStage=new Image();
  myStage.onload=function(){
  }
  myStage.setAttribute('crossOrigin','anonymous');
  myStage.src=stageDataURL;
  myStage.setAttribute("id","stampa");
  myStage.setAttribute("width","500px");
    myStage.setAttribute("height","650px");
}


 nome=document.getElementById("data_im").innerHTML.split("@");
		 var a = window.open('','','width=650,height=500');
		 a.document.open("text/html");
		 a.document.write(document.getElementById('stampa_user').innerHTML);
		 a.document.write('<div height="20px">'+nome[1]+'</div>');
		 a.document.write('<img src="'+myStage.src+'"/>');
		 a.document.write('<div height="20px">'+nome[0]+'</div>');
	 a.document.close();
		 a.print();

	           });
 

}

var SmartphoneDetector = {
	
	deviceAndroid : "android",
	uagent : navigator.userAgent.toLowerCase(),
	detectAndroid : function(){
		if (this.uagent.search(this.deviceAndroid) > -1)
			return true;
		else
			return false;
	},
	detectAndroidWebKit : function(){
		if (this.detectAndroid())
		{
			if (this.detectWebkit())
				return true;
			else
				return false;
		}
		else
			return false;
	},
	
} 
		//////////// prova con tablet android 

if(SmartphoneDetector.detectAndroid()){
window.onbeforeunload = function (e) {
            var e = e || window.event;
           // var msg = "Do you really want to leave this page?"
var msg= document.getElementById("vuoi_lasciare").innerHTML;
            // For IE and Firefox
            if (e) {
                e.returnValue = msg;
            }

            // For Safari / chrome
            return msg;
         };
		 
}

	 
	 
 


function stampa_madre_natura(){
	
document.getElementById("elementi").style.display="block";
document.getElementById("no_scena").style.display='none';
document.getElementById("containerOLD").style.display="block";
//document.getElementById("torna_gioco").style.display="block";
document.getElementById("stampa").style.display="none";

var da_eliminare1=document.getElementById("madre_s");
				if (da_eliminare1 != null )
				{
		$("#commenta_madre_natura p").remove();
				}

var da_eliminare2=document.getElementById("madre_terra_s");
				if (da_eliminare2 != null )
				{
		$("#commenta_madre_terra p").remove();
				}
var da_eliminare3=document.getElementById("terra_s");
				if (da_eliminare3 != null )
				{
		$("#commenta_terra_padri p").remove();
				}
var da_eliminare4=document.getElementById("madre_patria_s");
				if (da_eliminare4 != null )
				{
		$("#commenta_madre_patria p").remove();
			}
var da_eliminare5=document.getElementById("terra_front_s");
				if (da_eliminare5 != null )
				{
		$("#commenta_terra_frontiera p").remove();
				}

			$("#madre_terra").removeClass("button-active");
			$("#terra_padri").removeClass("button-active");
			$("#madre_patria").removeClass("button-active");
			$("#madre_natura").removeClass("button-menu");
			$("#terra_frontiera_scena").removeClass("button-active");
	
			$("#madre_natura").addClass("button-active");
			$("#madre_terra").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-menu");
	
	document.getElementById("testo_2").style.display='none';
	document.getElementById("testo_3").style.display='none';
	document.getElementById("testo_4").style.display='none';
	document.getElementById("testo_5").style.display='none';

document.getElementById("commenta_terra_frontiera").style.display='none';
	document.getElementById("commenta_madre_patria").style.display='none';
	document.getElementById("commenta_madre_terra").style.display='none';
	document.getElementById("commenta_terra_padri").style.display='none';


	var mail = document.getElementById("stampa_user").innerHTML;
	$.ajax({
                 url: 'stampa_1.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
				if(ultimo.length == 1)
				{
					document.getElementById("no_scena").style.display='block';
				}
				else
				for(var i=1;i< ultimo.length;i++)
					{
					var id_scena = ultimo[i];
			 var nuovo_elemento1 = document.createElement('p');
		var bottone = document.createElement('div');
		nuovo_elemento1.setAttribute('id','madre_s');
		bottone.innerHTML="VERSIONE "  + i + "  ";
		bottone.className="listbutton";
		bottone.value=id_scena;
		bottone.setAttribute('id',id_scena);
		bottone.addEventListener('click',function() { 
	//stampa_madre( event,this.value);
	stampa_madre( this.value);
	document.getElementById("stampa").style.display="block";
	});
			 document.getElementById('commenta_madre_natura').appendChild(nuovo_elemento1);
			 nuovo_elemento1.appendChild(bottone);

					}


	document.getElementById("commenta_madre_natura").style.display='block';
	document.getElementById("testo_1").style.display='block';

	
				}
				

            });   

}


function 	stampa_madre( id_scena){
	console.log(id_scena);
	
	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
	
	var posX=0;

	var child = document.getElementById("commenta_madre_natura").children;
	for(var i = 0; i < (child.length) ;i++)
	{
		if(child[i].getAttribute('id') == 'madre_s')
		{
			$(child[i].children).css('background-color','#f38630')
		}
	
	}
	document.getElementById(id_scena).style.backgroundColor="#efe76a";
	 stageOLD = new Kinetic.Stage({
					container : "containerOLD",
					x: posX,
					y: posY,
					
					
					width : 650,
				   height : 500,
				});
	

$.ajax({
                 url: 'stampa_madre_natura.php',
                type: 'POST',
				data: {
               	 'scena': 1,
				 'id': id_scena
                },  
                
				success: function(data)
				{
				var ultimo=data.split('@');
//console.log(ultimo);
			if(data_immagine != null )
			{
$("#data_im").remove();
			}
			data_immagine=document.createElement('p');
			data_immagine.setAttribute('id','data_im');
			data_immagine.innerHTML=ultimo[(ultimo.length - 1)] + "@" + document.getElementById("testo_1").innerHTML;
			data_immagine.style.display='none';
			
			document.getElementById("elementi").appendChild(data_immagine);
				 //json = ultimo[1];
				  json = ultimo[3];
			
				 var giusto=json.replace(/Kinetic.Group/g,"Group");				
				 var carica= Kinetic.Node.create(giusto, 'containerOLD');
					stageOLD.add(carica);
				var prova = carica.getChildren().find('.Image');
				var bgxy = stageOLD.getAbsolutePosition();

				for(i=0;i<prova.length;i++)
					{  
					  //function to induce scope
					  (function() {
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
							// image.draggable(false);
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
					

						},
						error: "errore"

});

					
	
};

function stampa_madre_patria(){

document.getElementById("elementi").style.display="block";
document.getElementById("containerOLD").style.display="block";
document.getElementById("stampa").style.display="none";
//document.getElementById("torna_gioco").style.display="block";
document.getElementById("no_scena").style.display='none';

	document.getElementById("testo_1").style.display='none';
	document.getElementById("testo_2").style.display='none';
	document.getElementById("testo_3").style.display='none';
	document.getElementById("testo_5").style.display='none';

document.getElementById("commenta_terra_frontiera").style.display='none';
	document.getElementById("commenta_madre_natura").style.display='none';
	document.getElementById("commenta_madre_terra").style.display='none';
	document.getElementById("commenta_terra_padri").style.display='none';


	$("#madre_natura").removeClass("button-active");
			$("#madre_terra").removeClass("button-active");
			$("#terra_padri").removeClass("button-active");
			$("#madre_patria").removeClass("button-menu");
			$("#terra_frontiera_scena").removeClass("button-active");
	
			$("#madre_natura").addClass("button-menu");
			$("#madre_terra").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-active");
			$("#terra_frontiera_scena").addClass("button-menu");

var da_eliminare1=document.getElementById("madre_s");
				if (da_eliminare1 != null )
				{
		$("#commenta_madre_natura p").remove();
				}

var da_eliminare2=document.getElementById("madre_terra_s");
				if (da_eliminare2 != null )
				{
		$("#commenta_madre_terra p").remove();
				}
var da_eliminare3=document.getElementById("terra_s");
				if (da_eliminare3 != null )
				{
		$("#commenta_terra_padri p").remove();
				}
var da_eliminare4=document.getElementById("madre_patria_s");
				if (da_eliminare4 != null )
				{
		$("#commenta_madre_patria p").remove();
			}
var da_eliminare5=document.getElementById("terra_front_s");
				if (da_eliminare5 != null )
				{
		$("#commenta_terra_frontiera p").remove();
				}

	var mail = document.getElementById("stampa_user").innerHTML;
	$.ajax({
                 url: 'stampa_4.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					
					var ultimo=data.split('#');
					if(ultimo.length == 1)
				{
					document.getElementById("no_scena").style.display='block';
				}
				else
				
				for(var i=1;i< ultimo.length;i++)
					{
						
					 var id_scena= ultimo[i];
			 var nuovo_elemento1 = document.createElement('p');
		var bottone = document.createElement('div');
		nuovo_elemento1.setAttribute('id','madre_patria_s');
		bottone.innerHTML="VERSIONE  "  + i + "  ";
		bottone.className="listbutton";
		bottone.setAttribute('id',id_scena);
		bottone.value=id_scena;
		bottone.addEventListener('click',function() { 
	stampa_madre_p( this.value);
	document.getElementById("stampa").style.display="block";

	});
		
			 document.getElementById('commenta_madre_patria').appendChild(nuovo_elemento1);
			 nuovo_elemento1.appendChild(bottone);
				}

	document.getElementById("commenta_madre_patria").style.display='block';
	document.getElementById("testo_4").style.display='block';

	
				}
				

            });   

}


function 	stampa_madre_p(id_scena){

	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
	
	
var posX=0;
var child = document.getElementById("commenta_madre_patria").children;
	for(var i = 0; i < (child.length) ;i++)
	{
		if(child[i].getAttribute('id') == 'madre_patria_s')
		{
			$(child[i].children).css('background-color','#f38630')
		}
	
	}
	document.getElementById(id_scena).style.backgroundColor="#efe76a";

$.ajax({
                 url: 'stampa_madre_natura.php',
                type: 'POST',
				data: {
               	 'scena': 4,
				 	'id': id_scena

                },  
                
				success: function(data)
				{
				var ultimo=data.split('@');
						
				 stageOLD = new Kinetic.Stage({
					container : "containerOLD",
					x: posX,
					y: posY,
					width : 650,
				   height : 500,
				});
	if(data_immagine != null )
			{
$("#data_im").remove();
			}
			data_immagine=document.createElement('p');
			data_immagine.setAttribute('id','data_im');
			data_immagine.innerHTML=ultimo[(ultimo.length - 1)] + "@" + document.getElementById("testo_4").innerHTML;
			data_immagine.style.display='none';
			document.getElementById("elementi").appendChild(data_immagine);
			
							 //json = ultimo[1];
							 json = ultimo[3];

				 var giusto=json.replace(/Kinetic.Group/g,"Group");				
				 var carica= Kinetic.Node.create(giusto, 'containerOLD');
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
							 // carica.add(image);
							  image.setZIndex(z);
						  };
						  imageObj.src = image.attrs.src;
										prova[i].draggable(false);

}
else {
		console.log("diverso da zero " + prova[i].getChildren()[0].name() );
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
					
					//carica.draw();

						},
						error: "errore"
});


};

function stampa_madre_terra(){

document.getElementById("elementi").style.display="block";
document.getElementById("containerOLD").style.display="block";
document.getElementById("stampa").style.display="none";
//document.getElementById("torna_gioco").style.display="block";
document.getElementById("no_scena").style.display='none';
	document.getElementById("testo_1").style.display='none';
	document.getElementById("testo_3").style.display='none';
	document.getElementById("testo_4").style.display='none';
	document.getElementById("testo_5").style.display='none';

document.getElementById("commenta_terra_frontiera").style.display='none';
	document.getElementById("commenta_madre_natura").style.display='none';
	document.getElementById("commenta_madre_patria").style.display='none';
	document.getElementById("commenta_terra_padri").style.display='none';
	
			$("#madre_terra").removeClass("button-menu");
			$("#terra_padri").removeClass("button-active");
			$("#madre_patria").removeClass("button-active");
			$("#madre_natura").removeClass("button-active");
			$("#terra_frontiera_scena").removeClass("button-active");
	
			$("#madre_natura").addClass("button-menu");
			$("#madre_terra").addClass("button-active");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-menu");
	
	

var da_eliminare1=document.getElementById("madre_s");
				if (da_eliminare1 != null )
				{
		$("#commenta_madre_natura p").remove();
				}

var da_eliminare2=document.getElementById("madre_terra_s");
				if (da_eliminare2 != null )
				{
		$("#commenta_madre_terra p").remove();
				}
var da_eliminare3=document.getElementById("terra_s");
				if (da_eliminare3 != null )
				{
		$("#commenta_terra_padri p").remove();
				}
var da_eliminare4=document.getElementById("madre_patria_s");
				if (da_eliminare4 != null )
				{
		$("#commenta_madre_patria p").remove();
			}
var da_eliminare5=document.getElementById("terra_front_s");
				if (da_eliminare5 != null )
				{
		$("#commenta_terra_frontiera p").remove();
				}


	var mail = document.getElementById("stampa_user").innerHTML;

	$.ajax({
                 url: 'stampa_2.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
						if(ultimo.length == 1)
				{
					document.getElementById("no_scena").style.display='block';
				}
				else
				
				for(var i=1;i< ultimo.length;i++)
					{
					var id_scena = ultimo[i];
			 var nuovo_elemento1 = document.createElement('p');
		var bottone = document.createElement('div');
		nuovo_elemento1.setAttribute('id','madre_terra_s');
		bottone.innerHTML="VERSIONE " + i + "  ";
		bottone.className="listbutton";
		bottone.setAttribute('id',id_scena);
		bottone.value=id_scena;
		bottone.addEventListener('click',function() { 
	stampa_madre_t(  this.value);
	document.getElementById("stampa").style.display="block";

	});
			 document.getElementById('commenta_madre_terra').appendChild(nuovo_elemento1);
			 nuovo_elemento1.appendChild(bottone);

					}


	document.getElementById("commenta_madre_terra").style.display='block';
	document.getElementById("testo_2").style.display='block';

	
				}
				

            });   

}


function 	stampa_madre_t(  id_scena){

//var posX= (document.getElementById('elementi').offsetWidth);
//var posY= (document.getElementById('elementi').offsetTop + document.getElementById('container_top').offsetTop);
	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
	
var posX = 0;
	
	var child = document.getElementById("commenta_madre_terra").children;
	for(var i = 0; i < (child.length) ;i++)
	{
		if(child[i].getAttribute('id') == 'madre_terra_s')
		{
			$(child[i].children).css('background-color','#f38630')
		}
	
	}
	document.getElementById(id_scena).style.backgroundColor="#efe76a";

	
	
$.ajax({
                 url: 'stampa_madre_natura.php',
                type: 'POST',
				data: {
               	 'scena': 2,
				 'id': id_scena

                },  
                
				success: function(data)
				{
				var ultimo=data.split('@');
				if(data_immagine != null )
			{
$("#data_im").remove();
			}
			data_immagine=document.createElement('p');
			data_immagine.setAttribute('id','data_im');
data_immagine.innerHTML=ultimo[(ultimo.length - 1)] + "@" + document.getElementById("testo_2").innerHTML;
			data_immagine.style.display='none';
			document.getElementById("elementi").appendChild(data_immagine);
			
				 stageOLD = new Kinetic.Stage({
					container : "containerOLD",
					x: posX,
					y: posY,
					width : 650,
				   height : 500,
				});
console.log(ultimo[1] );

				 //json = ultimo[1];
				 json = ultimo[3];

				 var giusto=json.replace(/Kinetic.Group/g,"Group");				
				 var carica= Kinetic.Node.create(giusto, 'containerOLD');
					stageOLD.add(carica);
					//carica.draw();
						//var images = new Array();
						 //images = carica.get('#imagess');
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
					

						},
						error: "errore"

});




};

function stampa_terra_padri(){

document.getElementById("elementi").style.display="block";
document.getElementById("containerOLD").style.display="block";
document.getElementById("stampa").style.display="none";
//document.getElementById("torna_gioco").style.display="block";
document.getElementById("no_scena").style.display='none';

	document.getElementById("testo_1").style.display='none';
	document.getElementById("testo_2").style.display='none';
	document.getElementById("testo_4").style.display='none';
	document.getElementById("testo_5").style.display='none';

document.getElementById("commenta_terra_frontiera").style.display='none';
	document.getElementById("commenta_madre_natura").style.display='none';
	document.getElementById("commenta_madre_patria").style.display='none';
	document.getElementById("commenta_madre_terra").style.display='none';
	
	
		$("#madre_terra").removeClass("button-active");
			$("#terra_padri").removeClass("button-menu");
			$("#madre_patria").removeClass("button-active");
			$("#madre_natura").removeClass("button-active");
			$("#terra_frontiera_scena").removeClass("button-active");
	
			$("#madre_natura").addClass("button-menu");
			$("#madre_terra").addClass("button-menu");
			$("#terra_padri").addClass("button-active");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-menu");
			
			

var da_eliminare1=document.getElementById("madre_s");
				if (da_eliminare1 != null )
				{
		$("#commenta_madre_natura p").remove();
				}

var da_eliminare2=document.getElementById("madre_terra_s");
				if (da_eliminare2 != null )
				{
		$("#commenta_madre_terra p").remove();
				}
var da_eliminare3=document.getElementById("terra_s");
				if (da_eliminare3 != null )
				{
		$("#commenta_terra_padri p").remove();
				}
var da_eliminare4=document.getElementById("madre_patria_s");
				if (da_eliminare4 != null )
				{
		$("#commenta_madre_patria p").remove();
			}
var da_eliminare5=document.getElementById("terra_front_s");
				if (da_eliminare5 != null )
				{
		$("#commenta_terra_frontiera p").remove();
				}


	var mail = document.getElementById("stampa_user").innerHTML;
	$.ajax({
                 url: 'stampa_3.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
						if(ultimo.length == 1)
				{
					document.getElementById("no_scena").style.display='block';
				}
				else
				
				for(var i=1;i< ultimo.length;i++)
					{
					var id_scena = ultimo[i];
			 var nuovo_elemento1 = document.createElement('p');
		var bottone = document.createElement('div');
		nuovo_elemento1.setAttribute('id','terra_s');
		bottone.innerHTML="VERSIONE  "  + i + "  ";
		bottone.className="listbutton";
		bottone.setAttribute('id',id_scena);
		bottone.value=id_scena;
		bottone.addEventListener('click',function() { 
	stampa_padri(  this.value);
	document.getElementById("stampa").style.display="block";

	});
			 document.getElementById('commenta_terra_padri').appendChild(nuovo_elemento1);
			 nuovo_elemento1.appendChild(bottone);

					}


	document.getElementById("commenta_terra_padri").style.display='block';
	document.getElementById("testo_3").style.display='block';

	
				}
				

            });   

}


function 	stampa_padri( id_scena){

//var posX= (document.getElementById('elementi').offsetWidth);
//var posY= (document.getElementById('elementi').offsetTop + document.getElementById('container_top').offsetTop);
	
	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);

var posX=0;

var child = document.getElementById("commenta_terra_padri").children;
	for(var i = 0; i < (child.length) ;i++)
	{
		if(child[i].getAttribute('id') == 'terra_s')
		{
			$(child[i].children).css('background-color','#f38630')
		}
	
	}
	document.getElementById(id_scena).style.backgroundColor="#efe76a";

$.ajax({
                 url: 'stampa_madre_natura.php',
                type: 'POST',
				data: {
               	 'scena': 3,
				 'id': id_scena

                },  
                
				success: function(data)
				{
				var ultimo=data.split('@');
				if(data_immagine != null )
			{
$("#data_im").remove();
			}
			data_immagine=document.createElement('p');
			data_immagine.setAttribute('id','data_im');
			data_immagine.innerHTML=ultimo[(ultimo.length - 1)] + "@" + document.getElementById("testo_3").innerHTML;
			data_immagine.style.display='none';
			document.getElementById("elementi").appendChild(data_immagine);
			
				 stageOLD = new Kinetic.Stage({
					container : "containerOLD",
					x: posX,
					y: posY,
					width : 650,
				   height : 500,
				});
				console.log(ultimo[1] );
								 //json = ultimo[1];
json = ultimo[3];
				 var giusto=json.replace(/Kinetic.Group/g,"Group");				
				 var carica= Kinetic.Node.create(giusto, 'containerOLD');
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
					

						},
						error: "errore"
});




};

function stampa_terra_frontiera(){
	
document.getElementById("elementi").style.display="block";

document.getElementById("containerOLD").style.display="block";
//document.getElementById("torna_gioco").style.display="block";
document.getElementById("stampa").style.display="none";
document.getElementById("no_scena").style.display='none';
$("#madre_terra").removeClass("button-active");
			$("#terra_padri").removeClass("button-active");
			$("#madre_patria").removeClass("button-active");
			$("#madre_natura").removeClass("button-active");
			$("#terra_frontiera_scena").removeClass("button-menu");
	
			$("#madre_natura").addClass("button-menu");
			$("#madre_terra").addClass("button-menu");
			$("#terra_padri").addClass("button-menu");
			$("#madre_patria").addClass("button-menu");
			$("#terra_frontiera_scena").addClass("button-active");
			
			

var da_eliminare1=document.getElementById("madre_s");
				if (da_eliminare1 != null )
				{
		$("#commenta_madre_natura p").remove();
				}

var da_eliminare2=document.getElementById("madre_terra_s");
				if (da_eliminare2 != null )
				{
		$("#commenta_madre_terra p").remove();
				}
var da_eliminare3=document.getElementById("terra_s");
				if (da_eliminare3 != null )
				{
		$("#commenta_terra_padri p").remove();
				}
var da_eliminare4=document.getElementById("madre_patria_s");
				if (da_eliminare4 != null )
				{
		$("#commenta_madre_patria p").remove();
			}
var da_eliminare5=document.getElementById("terra_front_s");
				if (da_eliminare5 != null )
				{
		$("#commenta_terra_frontiera p").remove();
				}

	document.getElementById("testo_1").style.display='none';
	document.getElementById("testo_2").style.display='none';
	document.getElementById("testo_3").style.display='none';
	document.getElementById("testo_4").style.display='none';

	document.getElementById("commenta_madre_patria").style.display='none';
	document.getElementById("commenta_madre_terra").style.display='none';
	document.getElementById("commenta_terra_padri").style.display='none';
	document.getElementById("commenta_madre_natura").style.display='none';

	var mail = document.getElementById("stampa_user").innerHTML;
	$.ajax({
                 url: 'stampa_5.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
						if(ultimo.length == 1)
				{
					document.getElementById("no_scena").style.display='block';
				}
				else
				
				for(var i=1;i< ultimo.length;i++)
					{
					var id_scena = ultimo[i];
			 var nuovo_elemento1 = document.createElement('p');
		var bottone = document.createElement('div');
		nuovo_elemento1.setAttribute('id','terra_front_s');
		bottone.innerHTML="VERSIONE  " + i + "  ";
		bottone.className="listbutton";
		bottone.setAttribute('id',id_scena);
		bottone.value=id_scena;
		bottone.addEventListener('click',function() { 
	//stampa_madre( event,this.value);
	stampa_terra_f( this.value);
	document.getElementById("stampa").style.display="block";

	});
			 document.getElementById('commenta_terra_frontiera').appendChild(nuovo_elemento1);
			 nuovo_elemento1.appendChild(bottone);

					}


	document.getElementById("commenta_terra_frontiera").style.display='block';
	document.getElementById("testo_5").style.display='block';

	
				}
				

            });   

}


function 	stampa_terra_f( id_scena){

	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
 
 
 var posX=0;
 var child = document.getElementById("commenta_terra_frontiera").children;
	for(var i = 0; i < (child.length) ;i++)
	{
		if(child[i].getAttribute('id') == 'terra_front_s')
		{
			$(child[i].children).css('background-color','#f38630')
		}
	
	}
	document.getElementById(id_scena).style.backgroundColor="#efe76a";

 
	 stageOLD = new Kinetic.Stage({
					container : "containerOLD",
					x: posX,
					y: posY,
					width : 650,
				   height : 500,
				});
	

$.ajax({
                 url: 'stampa_madre_natura.php',
                type: 'POST',
				data: {
               	 'scena': 5,
				 'id': id_scena
                },  
                
				success: function(data)
				{
				var ultimo=data.split('@');
//console.log(ultimo);
			if(data_immagine != null )
			{
$("#data_im").remove();
			}
			data_immagine=document.createElement('p');
			data_immagine.setAttribute('id','data_im');
			data_immagine.innerHTML=ultimo[(ultimo.length - 1)] + "@" + document.getElementById("testo_5").innerHTML;
			data_immagine.style.display='none';
			
			document.getElementById("elementi").appendChild(data_immagine);

				 //json = ultimo[1];
				  json = ultimo[3];
			
				 var giusto=json.replace(/Kinetic.Group/g,"Group");				
				 var carica= Kinetic.Node.create(giusto, 'containerOLD');
					stageOLD.add(carica);
				var prova = carica.getChildren().find('.Image');
				var bgxy = stageOLD.getAbsolutePosition();

				for(i=0;i<prova.length;i++)
					{  
					  //function to induce scope
					  (function() {
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
					

						},
						error: "errore"
});

					
	
};



 function update(activeAnchor, element) {

        var group = activeAnchor.getParent();

        var topLeft = group.find('.topLeft')[0];
        var topRight = group.find('.topRight')[0];
        var bottomRight = group.find('.bottomRight')[0];
        var bottomLeft = group.find('.bottomLeft')[0];
        var image = element;
         //  var image = group.find('Image')[0];
		var rotateAnchor = group.find('.rotateAnchor')[0];
		
		var anchorX = activeAnchor.x();
        var anchorY = activeAnchor.y();


	var offsetX = Math.abs((topLeft.getX() + bottomRight.getX() + 10) / 2);
    var offsetY = Math.abs((topLeft.getY() + bottomRight.getY() + 10) / 2);

        // update anchor positions
       switch (activeAnchor.name()) {
  			case 'rotateAnchor':
            //group.setOffset(offsetX, offsetY);
            break;
		  case 'topLeft':
            topRight.y(anchorY);
            bottomLeft.x(anchorX);
            break;
          case 'topRight':
            topLeft.y(anchorY);
            bottomRight.x(anchorX);
            break;
          case 'bottomRight':
            bottomLeft.y(anchorY);
            topRight.x(anchorX); 
            break;
          case 'bottomLeft':
            bottomRight.y(anchorY);
            topLeft.x(anchorX); 
            break;
        }
	rotateAnchor.setX(topRight.getX() + 5);
    rotateAnchor.setY(topRight.getY() + 20);		
//image.setPosition(topLeft.getPosition());
image.x(topLeft.getPosition().x);
image.y(topLeft.getPosition().y);



        var width = topRight.x() - topLeft.x();
        var height = bottomLeft.y() - topLeft.y();
		
		if (width < 0 )
		{
			width=Math.abs(width);
			image.x(topRight.getPosition().x);
			image.y(topRight.getPosition().y);

		}
		if(height < 0 )
		{
			height=Math.abs(height);
			image.x(bottomLeft.getPosition().x);
			image.y(bottomLeft.getPosition().y);			
		}
		
        if(width && height) {
        image.setSize({
				width: width, 
				height: height
					});
				        }
		
	

      }
	  
	  
      function addAnchor(image,group, x, y, name,dragBound) {
        var stage = group.getStage();
        var layer = group.getLayer();
		
        var anchor = new Kinetic.Circle({
          x: x,
          y: y,
          stroke: '#666',
          fill: '#ddd',
          strokeWidth: 2,
          radius: 8,
          name: name,
          draggable: true,
          dragOnTop: false,
        });

		if (dragBound == 'rotate') {
          anchor.setAttrs({
			 fill: '#0033FF',
            dragBoundFunc: function (pos) {
                return getRotatingAnchorBounds(pos, group);
            }
        	});
   		}
	    
		anchor.on('dragmove', function() {
         update(this,image);
		
		image.cache();
		image.drawHitFromCache();
		layer.drawHit();
        layer.draw();
        });
        anchor.on('mousedown touchstart', function() {
          group.setDraggable(false);
          this.moveToTop();
        });
        anchor.on('dragend', function() {
          group.setDraggable(true);
          layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'pointer';
          this.setStrokeWidth(4);
          layer.draw();
        });
        anchor.on('mouseout', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'default';
          this.strokeWidth(2);
          layer.draw();
        });
		group.add(anchor);
	    anchor.hide();
      }

 function getRotatingAnchorBounds(pos, group) {
    var topLeft = group.get('.topLeft')[0];
    var bottomRight = group.get('.bottomRight')[0];
    var topRight = group.get('.topRight')[0];

    var absCenterX = Math.abs((topLeft.getAbsolutePosition().x + 5 + bottomRight.getAbsolutePosition().x + 5) / 2);
    var absCenterY = Math.abs((topLeft.getAbsolutePosition().y + 5 + bottomRight.getAbsolutePosition().y + 5) / 2);

    var relCenterX = Math.abs((topLeft.getX() + bottomRight.getX()) / 2);
    var relCenterY = Math.abs((topLeft.getY() + bottomRight.getY()) / 2);

    var radius = distance(relCenterX, relCenterY, topRight.getX() + 5, topRight.getY() + 20);

    var scale = radius / distance(pos.x, pos.y, absCenterX, absCenterY);

    var realRotation = Math.round(degrees(angle(relCenterX, relCenterY, topRight.getX() + 5, topRight.getY() + 20)));
    var rotation = Math.round(degrees(angle(absCenterX, absCenterY, pos.x, pos.y)));
    rotation -= realRotation;

    group.setRotationDeg(rotation);

    return {
        y: Math.round((pos.y - absCenterY) * scale + absCenterY),
        x: Math.round((pos.x - absCenterX) * scale + absCenterX)
    };
}
      function radians(degrees) { return degrees * (Math.PI / 180); }
function degrees(radians) { return radians * (180 / Math.PI); }

// Calculate the angle between two points.
function angle(cx, cy, px, py) {
    var x = cx - px;
    var y = cy - py;
    return Math.atan2(-y, -x);
}

// Calculate the distance between two points.
function distance(p1x, p1y, p2x, p2y) {
    return Math.sqrt(Math.pow((p2x - p1x), 2) + Math.pow((p2y - p1y), 2));
}	  
	  

	
		  function select(node) {
        //deselect();
		deselect(node);
		node.on("dragend touchend", function () {

console.log(" dragend " + node.parent.x() + " y " + node.parent.y() );

				if((node.parent.x() < -250 ) || (node.parent.x() > 400) || (node.parent.y() < -250) || (node.parent.y() > 400))
				{
				this.parent.remove();
				layer.draw();
				abilita_bottoni()
				if ((node.name()) == 'fiume')
		{
			in_fiume=false;
		document.getElementById('fiume').style.display='block';
	
		}
		
		if ((node.name()) == 'laghetto')
		{
			in_laghetto=false;	
			document.getElementById('laghetto').style.display='block';
		}
		
		if ((node.name()) == 'mare')
		{
			 in_mare=false;
			 document.getElementById('mare').style.display='block';
		}
		
		
		if ((node.name()) == 'montagne')
		{
			in_montagne=false;
			document.getElementById('montagne').style.display='block';
		}
		
		
		if ((node.name()) == 'terreno')
		{
			 in_terreno=false;
			 document.getElementById('terreno').style.display='block';
		}
		if ((node.name()) == 'luna')
		{
			in_luna=false;	
			document.getElementById('luna').style.display='block';
		}
		if ((node.name()) == 'cieloazzurro')
		{
			in_cieloazzurro=false;	
			document.getElementById('cieloazzurro').style.display='block';
		}	
		if ((node.name()) == 'cielonotturno')
		{
			in_cielonotturno=false;	
			document.getElementById('cielonotturno').style.display='block';
		}		 
		
		if ((node.name()) == 'sole')
		{
			in_sole=false;	
			document.getElementById('sole').style.display='block';
		}
				}
				
            },false);
			
		
        if (node.parent.nodeType = 'Kinetic.Group') {
			 var children = node.parent.children;
            for (i = 1; i < children.length; i++) {
                if (children[i].getName() == 'topLeft' ||
                    children[i].getName() == 'topRight' ||
                    children[i].getName() == 'bottomRight' ||
                    children[i].getName() == 'bottomLeft' ||
					children[i].getName() == 'rotateAnchor') {
                    children[i].show();
                    
                }
            }
        }
    }


 
function deselect(node) {
        var children = layer.children;

        for (i = 0; i < children.length; i++) {
			if (children[i].getName() != node.getName())
			{
            var grandChildren = children[i].children;
            if (grandChildren) {
                for (j = 1; j < grandChildren.length; j++) {
                    if (grandChildren[j].getName() == 'topLeft' ||
                        grandChildren[j].getName() == 'topRight' ||
                        grandChildren[j].getName() == 'bottomRight' ||
                        grandChildren[j].getName() == 'bottomLeft'|| 
						grandChildren[j].getName() == 'rotateAnchor') {
                        grandChildren[j].hide();
                        layer.draw();
                    }
                }
            }
        }
		}
    }
    

var in_fiume= false;
var in_laghetto= false;
var in_mare= false;
var in_montagne= false;
var in_terreno= false;
var in_sole =false;
var in_luna =false;
var in_cieloazzurro =false;
var in_cielonotturno =false;


var selezionato= new Array();
selezionato.length=1;
conta_scene=0;
avanti=0;
history = new Array();
historyStep = -1;
var stage;
var layer;
var stageOLD;
var data_immagine;
var n=0;
var xPos;
var yPos;

function crea_stage(){
	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
 
		 
		 $("#elimina_elemento").css("opacity","0.5");
		$("#elimina_elemento").prop("disabled",true);
		 
		$("#salva").css("opacity","0.5");
		$("#salva").prop("disabled",true);
		
		 $("#fine").css("opacity","0.5");
		$("#fine").prop("disabled",true);

		 $("#primo_piano").css("opacity","0.5");
		$("#primo_piano").prop("disabled",true);

		 $("#indietro").css("opacity","0.5");
		$("#indietro").prop("disabled",true);

		 $("#avanti").css("opacity","0.5");
		$("#avanti").prop("disabled",true);
	
		 $("#fondo").css("opacity","0.5");
		$("#fondo").prop("disabled",true);


	$("#containerBIG").disableSelection();

	stage = new Kinetic.Stage({
        container : "containerBIG",
		x: posX,
		y: posY,
		width : 650,
        height : 500
    });
	



	
		
     layer = new Kinetic.Layer()
	 	 {
		 /////////////////aggiunto dopo../////////
		 clearBeforeDraw : false;
	 };

    stage.add(layer);

	//document.getElementById('containerBIG').style.background = '#FFFFFF';
	//document.getElementById('containerBIG').style.background = '#FFF2A7';
	document.getElementById('containerBIG').style.backgroundImage='url(quadretti.png)' 
	
	stage.clearCache();
	 /*layer.on('mousedown', function (e) {
        var node = e.targetNode;
		console.log("nel listener " + node.getX());
        select(node);
    });*/
	}
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

function launchFullScreen(element) {

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
	var user= document.getElementById("stampa_user").innerHTML;
	$.ajax({
                 url: 'controlla_P.php',
                type: 'POST',
				data:
				{
					'utente':user,
				},
                
				success: function(data)
				{
					var ultimo=data.split('#');
					if(ultimo[2] == 0)
					{
						console.log(ultimo[2] + "scena 0");
			$("#madre_natura").css("background-color","white");
		$("#madre_natura").css({"box-shadow": "0 0 5px 5px #33FF33"});

crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
$('#COMINCIA').css('display','block');
$('#condizione_necessaria').css('display','block');		
/*-moz-box-shadow: 0 0 5px 5px #e7db75;
-webkit-box-shadow: 0 0 5px 5px #e7db75;*/

						}
					if(ultimo[2] == 1)
					{	
		$("#madre_terra").css({"box-shadow": "0 0 5px 5px #33FF33"});
		$("#madre_terra").css("opacity","1");
						avanti=0;
						conta_scene=0;
						gestisci_scene();
		scena1_inizio();
crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_pers_oggi(document.getElementById("personaggi_oggi1").caption.innerHTML);
						console.log(ultimo[2] + "scena 1");}
					if(ultimo[2] == 2)
					{
		$("#terra_padri").css({"box-shadow": "0 0 5px 5px #33FF33"});
			$("#madre_terra").css("opacity","1");
			$("#terra_padri").css("opacity","1");
$("#madre_patria").css("opacity","1");


						avanti=1;
						conta_scene=1;
						gestisci_scene();
			scena2_inizio();
 crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_pers_oggi(document.getElementById("personaggi_oggi1").caption.innerHTML);
crea_categoria_pers_storici(document.getElementById("personaggi_storici1").caption.innerHTML); 
crea_categoria_edilizia(document.getElementById("edilizia1").caption.innerHTML);
						console.log(ultimo[2] + "scena 2");}
					if(ultimo[2] == 3)
					{
		$("#madre_patria").css({"box-shadow": "0 0 5px 5px #33FF33"});
			$("#madre_terra").css("opacity","1");
			$("#terra_padri").css("opacity","1");


						avanti=2;
						conta_scene=2;
						gestisci_scene();
			scena3_inizio();
		 crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_mezzi(document.getElementById("mezzi_trasporto1").caption.innerHTML);
crea_categoria_rambo(document.getElementById("rambo1").caption.innerHTML);
crea_categoria_pers_unif(document.getElementById("personaggi_uniforme1").caption.innerHTML);
crea_categoria_edilizia(document.getElementById("edilizia1").caption.innerHTML);
crea_categoria_clown(document.getElementById("clown1").caption.innerHTML);
						console.log(ultimo[2] + "scena 3");}
					if(ultimo[2] == 4)
					{
		$("#terra_frontiera_scena").css({"box-shadow": "0 0 5px 5px #33FF33"});

			$("#madre_terra").css("opacity","1");
			$("#terra_padri").css("opacity","1");
			$("#madre_patria").css("opacity","1");
$("#terra_frontiera_scena").css("opacity","1");

						avanti=3;
						conta_scene=3;
						gestisci_scene();
				scena4_inizio();
		 crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_terra(document.getElementById("terra_frontiera1").caption.innerHTML);
						console.log(ultimo[2] + "scena 4");}
				}
            });   


	crea_stage();

	
			
    var con = stage.getContainer();    
    var dragSrcEl = null;
    //image
	var conta_immagini=document.getElementsByTagName("img");
	for (var i=0; i < conta_immagini.length; i++)
	{
		    conta_immagini[i].addEventListener('dragstart',function(e){
			name     = this.id;
           dragSrcEl = this;
    });
		//		conta_immagini[i].addEventListener('touchstart',function(e){
			// da provare tutti e due..
		conta_immagini[i].addEventListener('touchmove',function(e){
			e.preventDefault();
   			name     = this.id;
           dragSrcEl = this;
    });
	
	conta_immagini[i].addEventListener('touchend',function(evt){
								 if (document.getElementById("menu").style.display == 'block')
{

					crea_immagine(evt,dragSrcEl);	
					abilita_bottoni();
										/*	if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))*/
				{
					
gestisci_scene();
				}
}
				

	});
	
	}
    
    con.addEventListener('dragover',function(e){
        e.preventDefault(); //@important
    });
	document.getElementById("COMINCIA").addEventListener('click',function(){
				
				document.getElementById("condizione_necessaria").style.display='none';
				document.getElementById("COMINCIA").style.display='none';
								document.getElementById("menu").style.display='block';

			
			});
	
	/*


setTimeout(function(){
rettangoli.destroy();
layer.draw();
},3000);


	
	},false);*/



	document.getElementById("primo_piano").addEventListener('click', function() {
	if ( selezionato[1] != null)
		  {
        selezionato[1].parent.moveToTop();
        layer.draw();
		abilita_bottoni();
		}
      }, false);


      document.getElementById("fondo").addEventListener('click', function() {
        if ( selezionato[1] != null)
		  {
		selezionato[1].parent.moveToBottom();
        layer.draw();
		abilita_bottoni();
		}
      }, false);

      document.getElementById("avanti").addEventListener('click', function() {
          if ( selezionato[1] != null)
		  { 
		 selezionato[1].parent.moveUp();
		layer.draw();
		abilita_bottoni();
		}
      }, false);

      document.getElementById("indietro").addEventListener('click', function() {
        if ( selezionato[1] != null)
		  {
	    selezionato[1].parent.moveDown();
        layer.draw();
		abilita_bottoni();
		  }
      }, false);
	  
	     document.getElementById("elimina_elemento").addEventListener('click', function() {
        if ( selezionato[1] != null)
		  {
	    var da_eliminare=selezionato.pop();
		
				if ((da_eliminare.getName()) == 'fiume')
		{
			in_fiume=false;
		document.getElementById('fiume').style.display='block';
	
		}
		
		if ((da_eliminare.getName()) == 'laghetto')
		{
			in_laghetto=false;	
			document.getElementById('laghetto').style.display='block';
		}
		
		if ((da_eliminare.getName()) == 'mare')
		{
			 in_mare=false;
			 document.getElementById('mare').style.display='block';
		}
		
		
		if ((da_eliminare.getName()) == 'montagne')
		{
			in_montagne=false;
			document.getElementById('montagne').style.display='block';
		}
		
		
		if ((da_eliminare.getName()) == 'terreno')
		{
			 in_terreno=false;
			 document.getElementById('terreno').style.display='block';
		}
		if ((da_eliminare.getName()) == 'luna')
		{
			in_luna=false;	
			document.getElementById('luna').style.display='block';
		}
		if ((da_eliminare.getName()) == 'cieloazzurro')
		{
			in_cieloazzurro=false;	
			document.getElementById('cieloazzurro').style.display='block';
		}	
		if ((da_eliminare.getName()) == 'cielonotturno')
		{
			in_cielonotturno=false;	
			document.getElementById('cielonotturno').style.display='block';
		}		 
		
		if ((da_eliminare.getName()) == 'sole')
		{
			in_sole=false;	
			document.getElementById('sole').style.display='block';
		}	
		
		da_eliminare.parent.remove();
        layer.draw();
		abilita_bottoni();
		  }
      }, false);
	  
	/*      document.getElementById("elimina_tutto").addEventListener('click', function() {
       layer.destroyChildren();
		
		crea_stage();
	   
	      //layer.draw();

	  // layer.removeChildren();
	   
		  
      }, false);
	  */

document.getElementById("salva").addEventListener('click', function() {

		var myStage;

stage.toDataURL({ 
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
/*
var myStage;
		var myDataUrl; 
stage.toDataURL({
    callback: function(dataUrl){
      myDataUrl = dataUrl;
      myStage= new Image();
	  myStage.onload=function(){
  } 
      myStage.src= myDataUrl; 
	  myStage.setAttribute('crossOrigin','anonymous');
 	  myStage.setAttribute("id","stampa");
 	  myStage.setAttribute("width","500px");
      myStage.setAttribute("height","650px");

    },
});	*/
 
date = new Date();
		 var a = window.open('','','width=650,height=500');
		 a.document.open("text/html");
		 a.document.write(document.getElementById('stampa_user').innerHTML);
		a.document.write('<img src="'+myStage.src+'"/>');
		a.document.write('<div height="20px">'+date.toLocaleString()+'</div>');
	//	 a.document.write('<div height="20px">'+date.toUTCString()+'</div>');
		 a.document.write(document.getElementById('containerBIG').innerHTML);
		 a.document.write("<body onload='setTimeout(\"self.close()\",3000);'>");
		 a.document.close();
		 a.print();
		           });
	
	
con.addEventListener('drop',function(evt){
		 event.preventDefault();
							 if (document.getElementById("menu").style.display == 'block')
{

crea_immagine(event,dragSrcEl);		
abilita_bottoni();

/*
if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))*/
				{
	gestisci_scene();
				}
		
}
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
 
function crea_immagine(evt, dragSrcEl) {

		/*var offsetX=(document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);	
		var offsetY=(document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);*/
		
	 var bgxy = stage.getAbsolutePosition();
var myX = evt.pageX - stage.getContainer().offsetLeft - bgxy.x;
var myY = evt.pageY - stage.getContainer().offsetTop - bgxy.y;

if (evt.pageX == 0 )
{
	myX= evt.changedTouches[0].pageX - stage.getContainer().offsetLeft - bgxy.x;
	myY =evt.changedTouches[0].pageY -  stage.getContainer().offsetTop - bgxy.y;
	
	}

//		var myX=  (evt.pageX-offsetX);
	//	var myY=  (evt.pageY-offsetY);
		
		var image = new Kinetic.Image({
		  //x:myX,
		  //y:myY,
		  x:0,
		  y:0,
		  width: 50,
          height: 50,
		  image:dragSrcEl,
		 // draggable : true,
		  name : name,
		  src:dragSrcEl.src,
		  id: "imagess",
		  rotation:0
        });
		
		gruppo = new Kinetic.Group({
          draggable: true,
		  name: name,
		  x:myX,
		  y:myY,
		  
        });
		
       layer.add(gruppo); 
		//layer.add(image);
		gruppo.add(image);
		if('ongesturestart' in window == false || SmartphoneDetector.detectAndroid()){

				if (name == 'cieloazzurro' || name == 'cielonotturno' || name == 'terreno' || name == 'montagne' || name == 'mare' || name == 'laghetto' || name == 'fiume')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
		addAnchor(image,gruppo, image.x(), image.y(), 'topLeft','none');
        addAnchor(image,gruppo, image.x() + 150,image.y(), 'topRight','none');
        addAnchor(image,gruppo, image.x() + 150,image.y() + 150, 'bottomRight','none');
        addAnchor(image,gruppo, image.x() ,image.y() + 150, 'bottomLeft','none');
        addAnchor(image,gruppo, image.x() + 50 ,image.y(), 'rotateAnchor','rotate');
		
		}
		else
		{
				addAnchor(image,gruppo, image.x(), image.y(), 'topLeft');
        addAnchor(image,gruppo, image.x() + 50,image.y(), 'topRight');
        addAnchor(image,gruppo, image.x() + 50,image.y() + 50, 'bottomRight');
        addAnchor(image,gruppo, image.x() ,image.y() + 50, 'bottomLeft');
        addAnchor(image,gruppo, image.x() + 25 ,image.y(), 'rotateAnchor','rotate');
		}
		
		/*gruppo.on("dragstart", function () {
                this.moveToTop();
            });*/
		
		}
		image.on("mousedown touchstart", function(e){
          
		  if ( selezionato[1] != null)
		  {
			  selezionato.pop();
		  }
		  
		  selezionato.push(image);
		 select(selezionato[1]);

		  var oggetto= selezionato[1];
		 oggetto.on("dragend touchend", function () {
                //this.moveToTop();
console.log(" dragend " + oggetto.x() );

				if((oggetto.x() < -100 ) || (oggetto.x() > stage.width()) )
				{
				this.parent.remove();
				layer.draw();
				if (name == 'fiume' || name == 'laghetto' || name == 'mare' || name == 'montagne' || name == 'terreno' || name == 'cielonotturno' || name == 'cieloazzurro' || name == 'luna' || name == 'sole')
				{
				document.getElementById(image.name()).style.display='block';
				}
				}
				
            },false);
		});
		 
		
        imageObj = new Image();
		
        imageObj.src = dragSrcEl.src;
        imageObj.onload = function(){
            image.setImage(imageObj)
            layer.draw()
        };
		
		if (name == 'fiume')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
				        
			in_fiume=true;	
		document.getElementById('fiume').style.display='none';
		// document.getElementById('fiume_p').style.display='none';

		}
		
		if (name == 'laghetto')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			in_laghetto=true;
		 document.getElementById('laghetto').style.display='none';
		// document.getElementById('laghetto_p').style.display='none';
	
		}
		
		
		if (name == 'mare')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			 in_mare=true;
		 document.getElementById('mare').style.display='none';
		// document.getElementById('mare_p').style.display='none';

		}
		

		if (name == 'montagne')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			in_montagne=true;
		 document.getElementById('montagne').style.display='none';
		// document.getElementById('montagne_p').style.display='none';

		}
		
		if (name == 'terreno')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			 in_terreno=true;
		 document.getElementById('terreno').style.display='none';
//document.getElementById('terreno_p').style.display='none';
		}
		
		if (name == 'sole')
		{
			in_sole=true;
		 document.getElementById('sole').style.display='none';
		// document.getElementById('sole_p').style.display='none';
		}
		if (name == 'luna')
		{
			in_luna=true;
		 document.getElementById('luna').style.display='none';
		// document.getElementById('luna_p').style.display='none';
		}

				if (name == 'cieloazzurro')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
					in_cieloazzurro = true;
		 document.getElementById('cieloazzurro').style.display='none';
		// document.getElementById('cieloazzurro_p').style.display='none';

		}	
		
		if (name == 'cielonotturno')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
					in_cielonotturno = true;
			 document.getElementById('cielonotturno').style.display='none';
		// document.getElementById('cielonotturno_p').style.display='none';

		}
	 
		//alert(name + "inmare " + in_mare);
 
 		image.cache();
		image.drawHitFromCache();
		layer.drawHit();


var startScale = 1;
var startRotate = 0;

var hammertime = Hammer(image)
.on("transformstart", function(e) {
    startScale = image.scaleX();
    startRotate = image.rotation();
}).on("transform", function(e) {
    image.scale({
        x : startScale * e.gesture.scale,
        y : startScale * e.gesture.scale,
    });
    image.rotation(startRotate + e.gesture.rotation)
}).on("swipe", function(e) {
    var tweenParams = {
        node : image,
        duration: 0.3
    }
    switch (e.gesture.direction) {
        case "left" : {
            tweenParams.x = -205;
            break;
        }
        case "right" : {
            tweenParams.x = 605;
            break;
        }
        case "up" : {
            tweenParams.y = -150;
            break;
        }
        case "down" : {
            tweenParams.y = 605;
            break;
        }
    }
  /* var tween = new Kinetic.Tween(tweenParams);
    tween.play();
    setTimeout(function() {
        var tween = new Kinetic.Tween({
            x : 200,
            y : 200,
            node: rect,
            duration: 0.3
        });
        tween.play();
    }, 302);*/
});		

		
	 json =layer.toJSON();
	 username=document.getElementById("stampa_user").innerHTML;
	 var chiave=username + "n " + n ;
	localStorage.setItem(chiave,json );
	n=n+1;
	
	
	 
	 

}

 function gestisci_scene() {

	 
					if(avanti==0)
					{
							 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
							 {
						$("#madre_terra").css("opacity","1");
						$("#madre_terra").children("a").css("cursor","pointer");
							 }
							 
 document.getElementById("madre_terra_p").onclick=function () {
	 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))

	 		{	  bootbox.dialog({
  message: document.getElementById("FINITO_MADRE_NATURA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
    success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
		  scena1();
crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_pers_oggi(document.getElementById("personaggi_oggi1").caption.innerHTML);

			console.log("scena1");      }
    },
    danger: {
      label: document.getElementById("RIPETI").innerHTML,
      className: "btn-danger",
      callback: function() {
		  scena1_ripeti();
        console.log("ripeti");
      }
    },
    main: {
      label: document.getElementById("ANNULLA").innerHTML,
      className: "btn-primary",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});

console.log("dialog scena 1");
			}
			
			else
			{
				elementi_mancanti();
					 bootbox.dialog({
  message: document.getElementById("PER_PASSARE").innerHTML + document.getElementById("elementi_mancanti").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "btn-primary",
      callback: function() {
		  rimuovi_elementi_mancanti();
        console.log("annulla");
      }
    }
  }
});

			}
	// scena1()
	// });
};
					}
					
					if(avanti==1)
					{
													 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
							 {
						$("#terra_padri").css("opacity","1");
						$("#terra_padri").children("a").css("cursor","pointer");
							 }
	  document.getElementById("terra_padri_p").onclick=function () {
	 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
	 	{ 
		 bootbox.dialog({
  message: document.getElementById("FINITO_MADRE_TERRA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
    success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
		  scena2();
crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_pers_oggi(document.getElementById("personaggi_oggi1").caption.innerHTML);
crea_categoria_pers_storici(document.getElementById("personaggi_storici1").caption.innerHTML); 
crea_categoria_edilizia(document.getElementById("edilizia1").caption.innerHTML);

			console.log("scena1");      }
    },
    danger: {
      label: document.getElementById("RIPETI").innerHTML,
      className: "btn-danger",
      callback: function() {
		  scena2_ripeti();
        console.log("ripeti");
      }
    },
    main: {
      label: document.getElementById("ANNULLA").innerHTML,
      className: "btn-primary",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});

console.log("dialog scena 2");
		//scena2()
		}
		else
		{
			elementi_mancanti();
			 bootbox.dialog({
  message: document.getElementById("PER_PASSARE").innerHTML + document.getElementById("elementi_mancanti").innerHTML,
  title:  document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "btn-primary",
      callback: function() {
		  rimuovi_elementi_mancanti();
        console.log("annulla");
      }
    }
  }
});
			
		}
		//});
 };

					}
					
					if(avanti==2)
				{
 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
							 {
	
						$("#madre_patria").css("opacity","1");
						$("#madre_patria").children("a").css("cursor","pointer");
							 }
  document.getElementById("madre_patria_p").onclick=function () { 
 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))

{
		 	 	 bootbox.dialog({
  message: document.getElementById("FINITO_TERRA_PADRI").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
    success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
scena3();
crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_mezzi(document.getElementById("mezzi_trasporto1").caption.innerHTML);
crea_categoria_rambo(document.getElementById("rambo1").caption.innerHTML);
crea_categoria_pers_unif(document.getElementById("personaggi_uniforme1").caption.innerHTML);
crea_categoria_edilizia(document.getElementById("edilizia1").caption.innerHTML);
crea_categoria_clown(document.getElementById("clown1").caption.innerHTML);
elimina_categorie2(document.getElementById("personaggi_oggi1").caption.innerHTML);  
elimina_categorie2(document.getElementById("personaggi_storici1").caption.innerHTML);
			console.log("scena1");      }
    },
    danger: {
      label: document.getElementById("RIPETI").innerHTML,
      className: "btn-danger",
      callback: function() {
		  scena3_ripeti();
        console.log("ripeti");
      }
    },
    main: {
      label: document.getElementById("ANNULLA").innerHTML,
      className: "btn-primary",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});

console.log("dialog scena 3");
	 }
	 else
	 {
		 elementi_mancanti();
					 bootbox.dialog({
  message: document.getElementById("PER_PASSARE").innerHTML + document.getElementById("elementi_mancanti").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "btn-primary",
      callback: function() {
		  rimuovi_elementi_mancanti();
        console.log("annulla");
      }
    }
  }
});
			
 
	 }
  
		//scena3()
		//});
 };
				
					}
					
					if(avanti==3)
					{
						 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
{
						console.log(" avanti = 3 ");
						
						$("#terra_frontiera_scena").css("opacity","1");
						$("#terra_frontiera_scena").children("a").css("cursor","pointer");
						
}


	  document.getElementById("terra_frontiera_scena").onclick=function (){
 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
{		
		bootbox.dialog({
  message:document.getElementById("FINITO_MADRE_PATRIA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
    
   danger: {
      label: document.getElementById("RIPETI").innerHTML,
      className: "btn-danger",
      callback: function() {
		  scena4_ripeti();
        console.log("ripeti");
      }
    },
    main: {
      label: document.getElementById("ANNULLA").innerHTML,
      className: "btn-primary",
      callback: function() {
        console.log("annulla");
      }
	
    },
	success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
		scena4();
crea_categoria_sfondi(document.getElementById("sfondi1").caption.innerHTML);
crea_categoria_alberi(document.getElementById("alberi1").caption.innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico1").caption.innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio1").caption.innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico1").caption.innerHTML);
crea_categoria_volatile(document.getElementById("volatile1").caption.innerHTML);
crea_categoria_pesce(document.getElementById("pesce1").caption.innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_terra(document.getElementById("terra_frontiera1").caption.innerHTML);
elimina_categorie1(document.getElementById("edilizia1").caption.innerHTML);
elimina_categorie1(document.getElementById("mezzi_trasporto1").caption.innerHTML);
elimina_categorie1(document.getElementById("rambo1").caption.innerHTML);
elimina_categorie1(document.getElementById("personaggi_uniforme1").caption.innerHTML); 
elimina_categorie1(document.getElementById("clown1").caption.innerHTML);
			     },
				 
    },
  }
});
	  
console.log("dialog scena 4");
		}
		else
		{
			elementi_mancanti();
						 bootbox.dialog({
  message: document.getElementById("PER_PASSARE").innerHTML + document.getElementById("elementi_mancanti").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "btn-primary",
      callback: function() {
		  rimuovi_elementi_mancanti();
        console.log("annulla");
      }
    }
  }
});
			
		}
		//scena4()
		//});
};
				}
					
					if(avanti==4)
					{
						 if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))
{
					$("#fine").css("opacity","1");
					$("#fine").prop("disabled",false);	
					
}
	  document.getElementById("fine").onclick=function (){

console.log("dialog scena 5");

			{	  
			 bootbox.dialog({
  message: document.getElementById("FINITO_TERRA_FRONTIERA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
    success: {
      label: document.getElementById("ARRIVEDERCI").innerHTML,
      className: "btn-success",
      callback: function() {
			scena5();
			console.log("scena1");      }
    },
    danger: {
      label: document.getElementById("RIPETI").innerHTML,
      className: "btn-danger",
      callback: function() {
		  scena5_ripeti();
        console.log("ripeti");
      }
    },
    main: {
      label: document.getElementById("ANNULLA").innerHTML,
      className: "btn-primary",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});
			}
	// scena5()
	 //});
};
					}
				 
				
				
				
				
				};
				
				
function scena1_ripeti()  {				
			
			if (avanti == 0)
		{
		
		
		//var r=confirm("Vuoi passare alla scena successiva?");
			//	if (r==true)
				//  {
				
				  
		in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;
		
		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');

		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
		
		$("#madre_terra").css("opacity","0.5");		
	   
		chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile');
		 
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var date = JSON.stringify(todaysDate)
	//	var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");
		var username;
		
		var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{


		$.ajax({
                 url: 'save_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					 username=utente + "scena1";
			localStorage.setItem(username,json + "data" + date);
				},
				error: "errore"
		
				
            });   
            
}
    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;
				

				crea_stage();
		}	
				
				
				
}				

function scena1 () {
		if (avanti == 0)
		{
		
		//var r=confirm("Vuoi passare alla scena successiva?");
			//	if (r==true)
				//  {
				
				  
		in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;
		
				$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
		
		$("#madre_natura").css({"box-shadow": "0 0 5px 5px #FFE5B4"});		
		$("#madre_terra").css({"box-shadow": "0 0 5px 5px #33FF33"});		
	    $("#madre_terra").css("background-color","white");
		$("#madre_natura").css("background-color","silver");
		chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile');
		 
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var date = JSON.stringify(todaysDate)
	//	var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");
		var username;
		
var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
		var ultimo=data.split('#');
					 username=utente + "scena1";
			localStorage.setItem(username,json + "data" + date);				}
            });   
			
		
}

            

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(utente + "n " + t)
	}
				n=0;
				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_terra").children("a").css("cursor","default");

				crea_stage();
		}
		
		//else
		//return;
		//}

}


function scena1_inizio () {
		if (avanti == 0)
		{
				$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');
		
	    $("#madre_terra").css("background-color","white");
				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_terra").children("a").css("cursor","default");
		
		}
		

}


 function scena2_ripeti() {
	 
	 if (avanti == 1)
		{

		in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;
	   
	   		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');		

				$("#terra_padri").css("opacity", "0.5");		

		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi');
		   ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		 		var username;
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save2_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
				var ultimo=data.split('#');
					var username=utente + "scena2" ;
			localStorage.setItem(username, json + "data" + data);				}
            	});

				  
		 
}  

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(utente + "n " + t)
	}
				n=0;

			crea_stage();
		
		}
		
 }


 function scena2() {
	 
	 if (avanti == 1)
		{

		in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;
	   
	   		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');		
		
		$("#madre_terra").css({"box-shadow": "0 0 5px 5px #FFE5B4"});
		$("#terra_padri").css({"box-shadow": "0 0 5px 5px #33FF33"});		
	    $("#terra_padri").css("background-color","white");
         $("#madre_terra").css("background-color","silver");
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi');
		   ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		 		var username;
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save2_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
				var ultimo=data.split('#');
					var username=utente + "scena2" ;
			localStorage.setItem(username, json + "data" + data);				}
            	});

				  
		 
}  

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(utente + "n " + t)
	}
				n=0;

		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_padri").children("a").css("cursor","default");				
				crea_stage();
		
		}
		
 }


 function scena2_inizio() {
	 
	 if (avanti == 1)
		{

				$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');

	    $("#terra_padri").css("background-color","white");
		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_padri").children("a").css("cursor","default");				
		
		}
		
 }

  function scena3_ripeti(){
	 if (avanti == 2)
		{
			
	 
	 in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;	
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;

		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
		
		
$("#madre_patria").css("opacity","0.5");

		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi personaggi_storici edilizia');
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save3_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
var ultimo=data.split('#');
					var username=utente + "scena3";
			localStorage.setItem(username,  json + "data" + data);
				}
            });   
			
		
}

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				crea_stage();
		
		}
		
		
 }
 


 function scena3(){
	 if (avanti == 2)
		{
			
	 
	 in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;	
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;


		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
		
		
		$("#terra_padri").css({"box-shadow": "0 0 5px 5px #FFE5B4"});

		$("#madre_patria").css({"box-shadow": "0 0 5px 5px #33FF33"});		
	    $("#madre_patria").css("background-color","white");
         $("#terra_padri").css("background-color","silver");
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi personaggi_storici edilizia');
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save3_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
var ultimo=data.split('#');
					var username=utente + "scena3";
			localStorage.setItem(username,  json + "data" + data);
				}
            });   
			
		
}

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_patria").children("a").css("cursor","default");

				crea_stage();
		
		}
		
		
 }
 
  function scena3_inizio(){
	 if (avanti == 2)
		{
			
				$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');
	
	    $("#madre_patria").css("background-color","white");
		

				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_patria").children("a").css("cursor","default");

		
		}
		
		
 }

  function scena4_ripeti() {
	 
	 if (avanti == 3)
		{
	 
	 in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;	
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;

		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
		
		$("#terra_frontiera_scena").css("opacity", "0.5");

		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_uniforme rambo edilizia mezzi_trasporto');
		  ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save4_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
			var ultimo=data.split('#');
					var username=utente + "scena4";
			localStorage.setItem(username,  json + "data" + data);
				}
            });   
			
		 
}



    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				
				
				crea_stage();
		
		}
		
 }


  function scena4() {
	 
	 if (avanti == 3)
		{
	 
	 
	 in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;	
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;

		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
		
		
		$("#madre_patria").css({"box-shadow": "0 0 5px 5px #FFE5B4"});

		$("#terra_frontiera_scena").css({"box-shadow": "0 0 5px 5px #33FF33"});		
	    $("#terra_frontiera_scena").css("background-color","white");
         $("#madre_patria").css("background-color","silver");
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_uniforme rambo edilizia mezzi_trasporto');
		  ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{

		var username;

		$.ajax({
                 url: 'save4_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
			var ultimo=data.split('#');
					var username=utente + "scena4";
			localStorage.setItem(username,  json + "data" + data);
				}
            });   
			
		 
}



    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_frontiera_scena").children("a").css("cursor","default");
				
				
				crea_stage();
		
		}
 }
 
  function scena4_inizio() {
	 
	 if (avanti == 3)
		{
					$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');

	    $("#terra_frontiera_scena").css("background-color","white");

		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_frontiera_scena").children("a").css("cursor","default");

		}
		
 }

 function scena5_ripeti() {
	 
	 if (avanti == 4)
		{
	 in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;	
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;
		
		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
					
$("#terra_frontiera_scena").css({"box-shadow": "0 0 5px 5px #33FF33"});
			
			chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile terra_frontiera');
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
        date = new Date();
		var username;
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{
		var username;

		$.ajax({
                 url: 'save5_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
var ultimo=data.split('#');
					//var username=ultimo[1] + "scena5 ";
					
					localStorage.removeItem(ultimo[1] + "scena1");
					localStorage.removeItem(ultimo[1] + "scena2");
					localStorage.removeItem(ultimo[1] + "scena3");
					localStorage.removeItem(ultimo[1] + "scena4");				}
            });   
			
		
}
		

              
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				crea_stage();
		
		
		}
 }

 
 function scena5() {
	 
	 if (avanti == 4)
		{
	 in_fiume= false;
		in_laghetto= false;
		in_mare= false;
		in_montagne= false;
		in_terreno= false;	
		in_sole =false;
       in_luna =false;
       in_cieloazzurro =false;
       in_cielonotturno =false;
		
		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');


		$('#sole').css('display','block');
		$('#luna').css('display','block');
		$('#fiume').css('display','block');
		$('#laghetto').css('display','block');
		$('#mare').css('display','block');
		$('#montagne').css('display','block');
		$('#terreno').css('display','block');
		$('#cieloazzurro').css('display','block');
		$('#cielonotturno').css('display','block');
		//$('#sole_p').css('display','block');
					
		$("#terra_frontiera_scena").css({"box-shadow": "0 0 5px 5px #FFE5B4"});

			
			chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile terra_frontiera');
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
        date = new Date();
		var username;
		//todaysDate="Data:  " + date.toUTCString() + "  tempo:  " + time;
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
		//var json = stage.toJSON();
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
if (utente != null)
{
		var username;

		$.ajax({
                 url: 'save5_P.php',
                type: 'POST',
                data: {
					'utente':utente,
               	 'immagine': json,
                },  
				success: function(data)
				{
var ultimo=data.split('#');
					//var username=ultimo[1] + "scena5 ";
					
					localStorage.removeItem(ultimo[1] + "scena1");
					localStorage.removeItem(ultimo[1] + "scena2");
					localStorage.removeItem(ultimo[1] + "scena3");
					localStorage.removeItem(ultimo[1] + "scena4");				}
            });   
			
		
}
		

              
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

		document.location.href="sezione_P.php";
		
				conta_scene= 0;
				avanti=0;
				crea_stage();
		
		
		}
 }
 

 
 function abilita_bottoni(){
	 var gruppo=layer.getChildren();
	 //if( disegnatoGroup.getChildren().length == 5)
	 	 if( gruppo.length == 1)

	 {
	    $("#elimina_elemento").css("opacity","1");
		$("#elimina_elemento").prop("disabled",false);

		 $("#salva").css("opacity","1");
		$("#salva").prop("disabled",false);
		 
		 $("#primo_piano").css("opacity","0.5");
		$("#primo_piano").prop("disabled",true);

		 $("#indietro").css("opacity","0.5");
		$("#indietro").prop("disabled",true);
	
		 $("#avanti").css("opacity","0.5");
		 $("#avanti").prop("disabled",true);
		 
		 $("#fondo").css("opacity","0.5");
		$("#fondo").prop("disabled",true);
		 
	 }
	 
	 else 
	 	 	 if( gruppo.length > 1)

 //if( disegnatoGroup.getChildren().length > 5)
	 {
		$("#elimina_elemento").css("opacity","1");
		 $("#primo_piano").css("opacity","1");
		 $("#indietro").css("opacity","1");
		 $("#avanti").css("opacity","1");
		 $("#fondo").css("opacity","1");
		 $("#salva").css("opacity","1");

		$("#elimina_elemento").prop("disabled",false);
		$("#salva").prop("disabled",false);
		$("#primo_piano").prop("disabled",false);
		$("#indietro").prop("disabled",false);
		$("#avanti").prop("disabled",false);
		$("#fondo").prop("disabled",false);

	 }
	 	
			 else 
 	 	 if( gruppo.length < 1)

 
 //if( disegnatoGroup.getChildren().length < 5)
	 {
	    $("#elimina_elemento").css("opacity","0.5");
		$("#salva").css("opacity","0.5");

		 $("#primo_piano").css("opacity","0.5");
		 $("#indietro").css("opacity","0.5");
		 $("#avanti").css("opacity","0.5");
		 $("#fondo").css("opacity","0.5");

		$("#elimina_elemento").prop("disabled",true);
		$("#salva").prop("disabled",true);
		$("#primo_piano").prop("disabled",true);
		$("#indietro").prop("disabled",true);
		$("#avanti").prop("disabled",true);
		$("#fondo").prop("disabled",true);


		 
	 }
 
	 
	 
	 
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
}function elementi_mancanti(){
	if(in_mare == false)
	{
	nuovo_elemento=document.createElement("p");
	nuovo_elemento.setAttribute("id","mare_add" );
	nuovo_elemento.innerHTML=document.getElementById("mare_p").innerHTML;
	immagine=document.createElement("img");
	immagine.src="images/elementi_sfondo/mare.png";
	immagine.setAttribute("width","15px" );
	immagine.setAttribute("height","15px" );
	immagine.setAttribute("id","mare_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento);
	document.getElementById("elementi_mancanti").appendChild(immagine);
	}
	
	if(in_sole == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","sole_add" );
	nuovo_elemento2.innerHTML=document.getElementById("sole_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/sole.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","sole_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
	if(in_cieloazzurro == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","cieloazzurro_add" );
	nuovo_elemento2.innerHTML=document.getElementById("cieloazzurro_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/cieloazzurro.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","cieloazzurro_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
		if(in_cielonotturno == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","cielonotturno_add" );
	nuovo_elemento2.innerHTML=document.getElementById("cielonotturno_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/cielonotturno.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","cielonotturno_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
		if(in_fiume == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","fiume_add" );
	nuovo_elemento2.innerHTML=document.getElementById("fiume_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/fiume.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","fiume_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
		if(in_laghetto == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","laghetto_add" );
	nuovo_elemento2.innerHTML=document.getElementById("laghetto_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/laghetto.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","laghetto_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
		if(in_luna == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","luna_add" );
	nuovo_elemento2.innerHTML=document.getElementById("luna_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/luna.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","luna_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
		if(in_montagne == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","montagne_add" );
	nuovo_elemento2.innerHTML=document.getElementById("montagne_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/montagne.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","montagne_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}
		if(in_terreno == false)
	{
	nuovo_elemento2=document.createElement("p");
	nuovo_elemento2.setAttribute("id","terreno_add" );
	nuovo_elemento2.innerHTML=document.getElementById("terreno_p").innerHTML;
	immagine2=document.createElement("img");
	immagine2.src="images/elementi_sfondo/terreno.png";
	immagine2.setAttribute("width","15px" );
	immagine2.setAttribute("height","15px" );
	immagine2.setAttribute("id","terreno_add_im" );
	document.getElementById("elementi_mancanti").appendChild(nuovo_elemento2);
	document.getElementById("elementi_mancanti").appendChild(immagine2);	
	}



	

}
function rimuovi_elementi_mancanti(){
	
	if(document.getElementById("mare_add") != null)
	{	
 document.getElementById("mare_add_im").parentNode.removeChild(document.getElementById("mare_add_im"));	
document.getElementById("mare_add").parentNode.removeChild(document.getElementById("mare_add"));	
	}
	
	if(document.getElementById("sole_add") != null)
	{
 document.getElementById("sole_add_im").parentNode.removeChild(document.getElementById("sole_add_im"));	
document.getElementById("sole_add").parentNode.removeChild(document.getElementById("sole_add"));	
	}
	
		if(document.getElementById("cieloazzurro_add") != null)
	{
 document.getElementById("cieloazzurro_add_im").parentNode.removeChild(document.getElementById("cieloazzurro_add_im"));	
document.getElementById("cieloazzurro_add").parentNode.removeChild(document.getElementById("cieloazzurro_add"));	
	}

	if(document.getElementById("cielonotturno_add") != null)
	{
 document.getElementById("cielonotturno_add_im").parentNode.removeChild(document.getElementById("cielonotturno_add_im"));	
document.getElementById("cielonotturno_add").parentNode.removeChild(document.getElementById("cielonotturno_add"));	
	}

	if(document.getElementById("fiume_add") != null)
	{
 document.getElementById("fiume_add_im").parentNode.removeChild(document.getElementById("fiume_add_im"));	
document.getElementById("fiume_add").parentNode.removeChild(document.getElementById("fiume_add"));	
	}

	if(document.getElementById("laghetto_add") != null)
	{
 document.getElementById("laghetto_add_im").parentNode.removeChild(document.getElementById("laghetto_add_im"));	
document.getElementById("laghetto_add").parentNode.removeChild(document.getElementById("laghetto_add"));	
	}

	if(document.getElementById("luna_add") != null)
	{
 document.getElementById("luna_add_im").parentNode.removeChild(document.getElementById("luna_add_im"));	
document.getElementById("luna_add").parentNode.removeChild(document.getElementById("luna_add"));	
	}

	if(document.getElementById("montagne_add") != null)
	{
 document.getElementById("montagne_add_im").parentNode.removeChild(document.getElementById("montagne_add_im"));	
document.getElementById("montagne_add").parentNode.removeChild(document.getElementById("montagne_add"));	
	}

	if(document.getElementById("terreno_add") != null)
	{
document.getElementById("terreno_add_im").parentNode.removeChild(document.getElementById("terreno_add_im"));	
document.getElementById("terreno_add").parentNode.removeChild(document.getElementById("terreno_add"));	
	}

	
	
}


/* funzione che tramite chiamata AJAX carica da db il personaggio selezionato
		e aggiorna la categoria 'personaggi_oggi' rimanendo visibile solo
		l'elemento tornato dalla chiamata AJAX
	*/


	function caricaQuestoSonoIo(){
	$.ajax({
                 url: 'controlla_questo_io.php',
                type: 'POST',
    			success: function(data)
				{
					
					var io = data.split('#');
					var childPers = document.getElementsByClassName('personaggi_oggi');
	for(var i = 0; i < (childPers.length) ;i++)
	{
	if(childPers[i].children[0].getAttribute('id') != io[2] )
		{
			$(childPers[i]).empty();
		}
	}
		}
				
	}); 
}
var imgPos;
var clickPos=[];
/*
funzione per aggiungere le 'ancore' alle immagini inserite nel canvas (area centrale di disegno)
ps: le ancore sono i 4 cerchi ai lati dell'immagine selezionata, necessari per resize, rotate e specchio delle stesse
*/
	function update(activeAnchor, element) {

        var group = activeAnchor.getParent();
        var topLeft = group.find('.topLeft')[0];
        var topRight = group.find('.topRight')[0];
        var bottomRight = group.find('.bottomRight')[0];
        var bottomLeft = group.find('.bottomLeft')[0];
		var rotateAnchor = group.find('.rotateAnchor')[0];
		
        var image = element;
        var anchorX = activeAnchor.x();
        var anchorY = activeAnchor.y();
	
        // update anchor positions
       switch (activeAnchor.name()) {
			case 'rotateAnchor':
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
            bottomRight.y(anchorY );
            topLeft.x(anchorX); 
            break;
        }
rotateAnchor.setX(topRight.getX() +5 );
rotateAnchor.setY(topRight.getY()+ (image.height()/2));	
image.x(topLeft.getPosition().x);
image.y(topLeft.getPosition().y);
        var width = topRight.x() - topLeft.x();
        var height = bottomLeft.y() - topLeft.y();

		if (width < 0 )
		{
			width=Math.abs(width);
			image.x(topRight.getPosition().x);
			image.y(topRight.getPosition().y);
			topLeft=topRight;
			topRight=topLeft;
			bottomLeft=bottomRight;
			bottomRight=bottomLeft;

		}
		if(height < 0 )
		{
			height=Math.abs(height);
			image.x(bottomLeft.getPosition().x);
			image.y(bottomLeft.getPosition().y);	
			topLeft=bottomLeft;
			topRight=bottomRight;
			bottomLeft=topLeft;
			bottomRight=topRight;		
		}
		

        if(width && height) {
        image.setSize({
				width: width, 
				height: height
					});
				        }
      }
	  
/*
funzione per aggiungere le ancore alle immagini inserite nel canvas
*/
      function addAnchor(image,group, x, y, name,dragBound) {
        var stage = group.getStage();
        var layer = group.getLayer();
	var anchora = new Kinetic.Image({
          x: x,
          y: y,
          name: name,
          draggable: true,
          dragOnTop: false,
        });
		
		if (name == 'topRight') {
          anchora.setAttrs({
			 rotation: '35',
        	});
	   		}
			if (name == 'topLeft') {
          anchora.setAttrs({
			 rotation: '-35',
        	});
	   		}
			if (name == 'bottomRight') {
          anchora.setAttrs({
			 rotation: '125',
        	});
	   		}
			if (name == 'bottomLeft') {
          anchora.setAttrs({
			 rotation: '-125',
        	});
	   		}
		imageOO = new Image();
		
        imageOO.src = 'icon-resize.png';
        imageOO.onload = function(){
            anchora.setImage(imageOO)
            layer.draw()
        };
		if (dragBound == 'rotate') {
          anchora.setAttrs({
            dragBoundFunc: function (pos) {
                return getRotatingAnchorBounds(pos, group);
            }
        	});
			
			imageROT = new Image();
        imageROT.src = 'icon-rotate.png';
        imageROT.onload = function(){
            anchora.setImage(imageROT)
            layer.draw()
        };
   		}
        anchora.on('dragmove', function() {
         update(this,image);
		image.cache();
		image.drawHitFromCache();
		layer.drawHit();

        layer.draw();
        });
        anchora.on('mousedown touchstart', function() {
          group.setDraggable(false);
          this.moveToTop();
        });
        anchora.on('dragend', function() {
          group.setDraggable(true);
          layer.draw();
        });
        // add hover styling
        anchora.on('mouseover', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'pointer';
         // this.setStrokeWidth(4);
          layer.draw();
        });
        anchora.on('mouseout', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'default';
          layer.draw();
        });
		group.add(anchora);
	    anchora.hide();
      }
	
	/*
	funzione per rotate della immagini tramite mouse e ancore 
	*/  
 function getRotatingAnchorBounds(pos, group,image) {
    var topLeft = group.get('.topLeft')[0];
    var bottomRight = group.get('.bottomRight')[0];
    var topRight = group.get('.topRight')[0];
    var absCenterX = Math.abs((topLeft.getAbsolutePosition().x + 5 + bottomRight.getAbsolutePosition().x + 5) / 2);
    var absCenterY = Math.abs((topLeft.getAbsolutePosition().y + 5 + bottomRight.getAbsolutePosition().y + 5) / 2);
    

    var relCenterX = Math.abs((topLeft.getX() + bottomRight.getX()) / 2);
    var relCenterY = Math.abs((topLeft.getY() + bottomRight.getY()) / 2);
   
    var radius = distance(relCenterX, relCenterY, topRight.getX() + 5, topRight.getY() + 20);

    var scale = radius / distance(pos.x, pos.y, absCenterX, absCenterY);
    if(selezionato[1].parent.scaleX()<0)
    var realRotation = Math.round(degrees(angle(relCenterX, relCenterY, -topRight.getX() + 5, topRight.getY()+20)));
    else
    var realRotation = Math.round(degrees(angle(relCenterX, relCenterY, topRight.getX() + 5, topRight.getY()+20)));
    var rotation = Math.round(degrees(angle(absCenterX, absCenterY, pos.x, pos.y)));
   
    if(realRotation<0)
     realRotation+=360;
    if(rotation<0)
     rotation+=360;
     
 
    rotation=(rotation-realRotation+360)%360;
   
    
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
    var angle=Math.atan2(-y, -x);
    
    return Math.atan2(-y, -x);
}

// Calculate the distance between two points.
function distance(p1x, p1y, p2x, p2y) {
    return Math.sqrt(Math.pow((p2x - p1x), 2) + Math.pow((p2y - p1y), 2));
}	  
/*function getImageData( image ) {

return image.getImageData(1,1,1,1);


}

function getPixel( imagedata, x, y ) {

    var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
    return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };

}*/
/*
funzione per le selezione dell'immagini (sia con mouse che con touch)
contenente un listener per lo spostamento delle immagini e diverse considerazioni 
riguardo i pulsanti, i suoni, e quale immagini viene selezionata
PS: questa è certamente una della parti che andrebbe migliorata, sia a livello di scrittura di codice 
(troppi if annidati)che a livello di logica di esecuzione
*/

	function pixelBelongToImage(image,myX,myY){
                //myX=myX-image.getAbsolutePosition().x;
                //myY=myY-image.getAbsolutePosition().y; 
                //myX=myX+stage.getContainer().offsetLeft;
                //gruppo.add(image);
                //layer.add(gruppo);
                var temp=image.clone();
                temp.left=stage.getWidth()+image.getAbsolutePosition().x;
                //temp.setAbsolutePosition(stage.getWidth()+image.getAbsolutePosition().x,image.getAbsolutePosition().y+stage.getHeight());
                gruppo.add(temp);
                layer.add(gruppo);
                layer.draw();
                var imgCtx = image.getContext('2d');
                var imgData = imgCtx.getImageData(myX+stage.getWidth(),myY+stage.getHeight(),1,1);
                var imgPixel = imgData.data;
                console.log(imgPixel[0]+" "+imgPixel[1]+" "+imgPixel[2]+" "+imgPixel[3]);
	}
	  function select(node) {
                
               /* var bgxy = stage.getAbsolutePosition();
	        var myX = event.pageX - stage.getContainer().offsetLeft;
	        var myY = event.pageY - stage.getContainer().offsetTop;
                var ctx = layer.getContext('2d');
                var imgData = ctx.getImageData(myX,myY,1,1);
                var d = imgData.data;
                var image=[];
                console.log(d[0]+" "+d[1]+" "+d[2]+" "+d[3]);
                var group=  layer.getChildren().find('.Image');
                for(var i=0;i<group.length;i++)
                image[i]=group[i].getChildren()[0];
                pixelBelongToImage(image[1],myX,myY);*/
                
	        node.on("dragend", function (evt) {
		
var  posY= ((document.getElementById('in_bottoni').offsetTop + document.getElementById('in_bottoni').offsetHeight)*2 + document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);

	
	var posX= (document.getElementById('main_container').offsetLeft + document.getElementById('elementi').offsetWidth + document.getElementById('elementi').offsetLeft);
if((node.parent.x() < (-posX) ) || (node.parent.x() > (-posX + stage.getWidth +100)) || (node.parent.y() > (-posY + stage.getHeight )) || (node.parent.y() < (-posY)))

				{
					
			 if ( selezionato[1] != null)
		  {
	    var da_eliminare=selezionato.pop();
		  }
				this.parent.remove();
				layer.draw();
				abilita_bottoni();
										if (suona == true)
{
document.getElementById("suono_canc").play();		
}

								if ((node.name()) == 'fiume')
		{
			in_fiume= in_fiume -1;
		document.getElementById('fiume').style.display='block';
		controlla_sfondi();
	
		}
		
		if ((node.name()) == 'laghetto')
		{
			in_laghetto=false;	
			document.getElementById('laghetto').style.display='block';
			controlla_sfondi();
		}
		
		if ((node.name()) == 'mare')
		{
			 in_mare=in_mare-1;
			 controlla_sfondi();
		}
		
		
		if ((node.name()) == 'montagne')
		{
			in_montagne=false;
			controlla_sfondi();
		}
		
		
		if ((node.name()) == 'terreno')
		{
			 in_terreno=in_terreno - 1;
			 controlla_sfondi();
		}
		if ((node.name()) == 'luna')
		{
			in_luna=false;	
			document.getElementById('luna').style.display='block';
			controlla_sfondi();
		}
		if ((node.name()) == 'cieloazzurro')
		{
			in_cieloazzurro=false;	
			controlla_sfondi();
		}	
		if ((node.name()) == 'cielonotturno')
		{
			in_cielonotturno=false;	
			controlla_sfondi();
		}		 
		
		if ((node.name()) == 'sole')
		{
			in_sole=false;	
			document.getElementById('sole').style.display='block';
			controlla_sfondi();
		}
				}
			
            },false);
    }

var in_fiume=0;
var in_laghetto= false;
var in_mare= 0;
var in_montagne= 0;
var in_terreno= 0;
var in_sole =false;
var in_luna =false;
var in_cieloazzurro =0;
var in_cielonotturno =0;
var in_terra_frontiera=0;
var questo_io=false;

var suona = true;
var selezionato= new Array();
selezionato.length=1;
conta_scene=0;
avanti=0;
var stage;
var layer;
var n=0;
var xPos;
var yPos;

/*
funzione che disegna il canvas centrale e viene richiamata diverse
volte durante la composizione delle varie scene
*/
function crea_stage(){
	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	//var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
	

	var posX=0;
	
	$("#containerBIG").disableSelection();
	
	stage = new Kinetic.Stage({
        container : "containerBIG",
		x: posX,
		y: posY,
		width : 650,
        height : 500,
    });
	
     layer = new Kinetic.Layer()
	 {
		 /////////////////aggiunto dopo../////////
		 clearBeforeDraw : false;
	 };

		
    stage.add(layer);	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
	
	var posX=0;
	
	$("#containerBIG").disableSelection();
	console.log($("#html").height());
	stage = new Kinetic.Stage({
        container : "containerBIG",
		x: posX,
		y: posY,
		width : 650,
        height : 500,
    });
	
     layer = new Kinetic.Layer()
	 {
		 clearBeforeDraw : false;
	 };

		
    stage.add(layer);
	
}

/*
funzione per evitare che trascinando il mouse si selezioni l'area di lavoro
*/
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

/*
funzioni per on/off modalita tutto schermo (funziona solo in modalità browser..
da mobile se necessario vanno fatte considerazioni piu approfondite e specifiche...)
*/		
function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
  $(element).css('height',window.outerHeight);
$(element).css('background-color','#f0f2e6');

}
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
function getWindowRelativeOffset(parentWindow, elem) {
        var offset = {
            left : 0,
            top : 0
        };
        // relative to the target field's document
        offset.left = elem.getBoundingClientRect().left;
        offset.top = elem.getBoundingClientRect().top;
        // now we will calculate according to the current document, this current
        // document might be same as the document of target field or it may be
        // parent of the document of the target field
        var childWindow = elem.document.frames.window;
        while (childWindow != parentWindow) {
            offset.left = offset.left + childWindow.frameElement.getBoundingClientRect().left;
            offset.top = offset.top + childWindow.frameElement.getBoundingClientRect().top;
            childWindow = childWindow.parent;
        }

        return offset;
    };
/*
main dell'applicazione chiamata ad ogni caricamento..
contiene tutta la gestione del caricamento delle varie scene in base alle chiamate AJAX al db,
alla scena in cui si trova, seè una scena nuova o già cominciata in un'altra sessione..
contiene molti listener ai principali elementi (pulsanti per varie scene ad esempio..)
secondo me anche questa parte andrebbe rifattorizzata e organizzata meglio..
anche qua molti if e else 'pericolosi' e poco performanti..
con un po di calma si potrebbe pensare meglio..magari demandando alcune macro funzioni (ad esempio
la creazione della scena con pulsanti ecc..) ad altri js esterni..
tutte le funzioni riguardanti la creazioni delle categorie (crea_categoria_terra ad esempio...)
sono contenute in un altro js (crea_categorie.js)
*/
window.onload = function () {
$.ajax({
                 url: 'controlla.php',
                type: 'POST',
                
				success: function(data)
				{
					var ultimo=data.split('#');
					if(ultimo[2] == 0)
					{
									document.getElementById('suono_prova_cambio_audio').play();
							bootbox.dialog({
				 
  message: document.getElementById("PRIMA_DI_MADRE_NATURA").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_prova_cambio_audio').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		  			document.getElementById('suono_prova_cambio_audio').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
					document.getElementById('suono_prova_cambio_audio').play();
		return false;
      }
    }
  }
});		
			$("#madre_natura").addClass("button-active");
			$("#madre_terra").addClass("button-todo");
			$("#terra_padri").addClass("button-todo");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");
			
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
						}
					if(ultimo[2] == 1)
					{	
					bootbox.dialog({
				 
  message: document.getElementById("FINITO_MADRE_NATURA").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		 // document.getElementById('suono_drag').pause();
		  document.getElementById('suono_prova_cambio_audio').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		  			document.getElementById('suono_prova_cambio_audio').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
					document.getElementById('suono_prova_cambio_audio').play();
		return false;
      }
    }
  }
});

		$("#madre_terra").addClass("button-active");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-todo");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");
						avanti=0;
						conta_scene=0;
						gestisci_scene();
					 scena1_inizio();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
//crea_categoria_pers_oggi(document.getElementById("personaggi_oggi_nome").innerHTML);
crea_categoria_questo_io(document.getElementById("questo_io_nome").innerHTML);


						console.log(ultimo[2] + "scena 1");}
					if(ultimo[2] == 2)
					{
						bootbox.dialog({
				 
  message: document.getElementById("FINITO_MADRE_TERRA").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		 // document.getElementById('suono_drag').pause();
		  document.getElementById('suono_prova_cambio_audio').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		  			document.getElementById('suono_prova_cambio_audio').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
					document.getElementById('suono_prova_cambio_audio').play();
		return false;
      }
    }
  }
});

			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-active");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");
						avanti=1;
						conta_scene=1;
						gestisci_scene();
		scena2_inizio();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
//crea_categoria_pers_oggi(document.getElementById("personaggi_oggi_nome").innerHTML);
crea_categoria_pers_storici(document.getElementById("personaggi_storici_nome").innerHTML); 
crea_categoria_edilizia(document.getElementById("edilizia_nome").innerHTML);
crea_categoria_questo_io(document.getElementById("questo_io_nome").innerHTML);
caricaQuestoSonoIo();
						console.log(ultimo[2] + "scena 2");}
					if(ultimo[2] == 3)
					{
						bootbox.dialog({
				 
  message: document.getElementById("FINITO_TERRA_PADRI").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		 // document.getElementById('suono_drag').pause();
		  document.getElementById('suono_prova_cambio_audio').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		  			document.getElementById('suono_prova_cambio_audio').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
					document.getElementById('suono_prova_cambio_audio').play();
		return false;
      }
    }
  }
});
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-active");
			$("#terra_frontiera_scena").addClass("button-todo");
						avanti=2;
						conta_scene=2;
						gestisci_scene();
						
scena3_inizio();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_mezzi(document.getElementById("mezzi_trasporto_nome").innerHTML);
crea_categoria_rambo(document.getElementById("rambo_nome").innerHTML);
crea_categoria_pers_unif(document.getElementById("personaggi_uniforme_nome").innerHTML);
crea_categoria_edilizia(document.getElementById("edilizia_nome").innerHTML);
crea_categoria_clown(document.getElementById("clown_nome").innerHTML);
crea_categoria_questo_io(document.getElementById("questo_io_nome").innerHTML);
caricaQuestoSonoIo();
						console.log(ultimo[2] + "scena 3");
						
						}
					if(ultimo[2] == 4)
					{
						bootbox.dialog({
				 
  message: document.getElementById("FINITO_MADRE_PATRIA").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		 // document.getElementById('suono_drag').pause();
		  document.getElementById('suono_prova_cambio_audio').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		  			document.getElementById('suono_prova_cambio_audio').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
					document.getElementById('suono_prova_cambio_audio').play();
		return false;
      }
    }
  }
});

			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-fatto");
			$("#terra_frontiera_scena").addClass("button-active");

						avanti=3;
						conta_scene=3;
						gestisci_scene();
			scena4_inizio();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_terra(document.getElementById("terra_frontiera_nome").innerHTML);
elimina_categorie(document.getElementById("questo_io_nome").innerHTML);

			console.log(ultimo[2] + "scena 4");
						}
										

				}

            });   

	crea_stage();
    var con = stage.getContainer(); 
    var dragSrcEl = null;


	var conta_immagini=document.getElementsByTagName("img");
for (var i=11; i < conta_immagini.length; i++)
	{
           conta_immagini[i].addEventListener('dragstart',function(e){
           console.log("ciao");
	   name     = this.id;
           dragSrcEl = this;     
           clickPos[0]=e.pageX;
           clickPos[1]=e.pageY;
           imgPos = $(this).offset();
		   				if (suona == true)
{
document.getElementById("suono_drag").play();		
}


		   
    },false);

			conta_immagini[i].addEventListener('touchmove',function(e){
			e.preventDefault();
		   name     = this.id;
           dragSrcEl = this;
	   clickPos[0]=e.pageX;
           clickPos[1]=e.pageY;
           imgPos = $(this).offset(); 				if (suona == true)
{

document.getElementById("suono_drag").play();		
}


    });
	
				conta_immagini[i].addEventListener('touchend',function(evt){
					
					 if (document.getElementById("menu").style.display == 'block')
{

	if (evt.changedTouches[0].pageX > 260 && evt.changedTouches[0].pageX < 930 && evt.changedTouches[0].pageY > 100 && evt.changedTouches[0].pageY  < 600)
	{			         
                                        crea_immagine(evt,dragSrcEl);	
					abilita_bottoni();
					
				{
gestisci_scene();
				}
				
}

}
	},false);
	
		 
}
	
	
	
   con.addEventListener('dragover',function(e){
        e.preventDefault();
		 //@important
    },false);
	
      document.getElementById("menu").addEventListener('click', function() {
				if (suona == true)
{
document.getElementById("suono_click").play();		
}
      }, false);
 
      document.getElementById('madre_natura').addEventListener('click', function() {
				if (suona == true && (document.getElementById('madre_natura').className == 'button-todo' ||  document.getElementById('madre_natura').className == 'button-next'))
{
document.getElementById("suono_click").play();		
}
      }, false);

     document.getElementById('terra_padri').addEventListener('click', function() {
				if (suona == true &&( document.getElementById('terra_padri').className == 'button-todo' ||  document.getElementById('terra_padri').className == 'button-next'))
{
document.getElementById("suono_click").play();		
}
      }, false);

     document.getElementById('madre_terra').addEventListener('click', function() {
				if (suona == true &&( document.getElementById('madre_terra').className == 'button-todo' ||  document.getElementById('madre_terra').className == 'button-next'))
{
document.getElementById("suono_click").play();		
}
      }, false);
	  
	       document.getElementById('madre_patria').addEventListener('click', function() {
				if (suona == true &&( document.getElementById('madre_patria').className == 'button-todo' ||  document.getElementById('madre_patria').className == 'button-next'))
{
document.getElementById("suono_click").play();		
}
      }, false);

	       document.getElementById('terra_frontiera_scena').addEventListener('click', function() {
				if (suona == true &&( document.getElementById('terra_frontiera_scena').className == 'button-todo' ||  document.getElementById('terra_frontiera_scena').className == 'button-next'))
{
document.getElementById("suono_click").play();		
}
      }, false);


	document.getElementById("specchia_elemento").addEventListener('click', function() {
		if ( selezionato[1] != null)
		  {
			  abilita_bottoni();
		if (suona == true)
{
document.getElementById("suono_click").play();		
}

		if(selezionato[1].parent.scaleX() == 1 )
		{
	  selezionato[1].parent.scaleX(-1);
		layer.draw();
		return false;
		}
		if( selezionato[1].parent.scaleX() == -1)
		{
	  selezionato[1].parent.scaleX(1);
		layer.draw();
		return false;
		}
	        update(this,selezionato[1]);
		  }
	});

	document.getElementById("primo_piano").addEventListener('click', function() {
	if ( selezionato[1] != null)
		  {
			  selezionato[1].parent.moveToTop();
       // selezionato[1].moveToTop();
        layer.draw();
		abilita_bottoni();
		if (suona == true)
{
document.getElementById("suono_click").play();		
}

		}
      }, false);


      document.getElementById("fondo").addEventListener('click', function() {
        if ( selezionato[1] != null)
		  {
		selezionato[1].parent.moveToBottom();
        layer.draw();
		abilita_bottoni();
				if (suona == true)
{
document.getElementById("suono_click").play();		
}


		}
      }, false);

      document.getElementById("avanti").addEventListener('click', function() {
          if ( selezionato[1] != null)
		  { 
		 selezionato[1].parent.moveUp();
		layer.draw();
		abilita_bottoni();
				if (suona == true)
{
document.getElementById("suono_click").play();		
}


		}
      }, false);
      document.getElementById("indietro").addEventListener('click', function() {
        if ( selezionato[1] != null)
		  {
	    selezionato[1].parent.moveDown();
        layer.draw();
		abilita_bottoni();
				if (suona == true)
{
document.getElementById("suono_click").play();		
}


		  }
      }, false);
	  
	 
	     document.getElementById("elimina_elemento").addEventListener('click', function() {


        if ( selezionato[1] != null)
		  {
	    var da_eliminare=selezionato.pop();
				if ((da_eliminare.getName()) == 'fiume')
		{
			//in_fiume=false;
			in_fiume=in_fiume - 1;
		document.getElementById('fiume').style.display='block';
	controlla_sfondi();
		}
		
		if ((da_eliminare.getName()) == 'laghetto')
		{
			in_laghetto=false;	
			document.getElementById('laghetto').style.display='block';
			controlla_sfondi();
		}
		
		if ((da_eliminare.getName()) == 'mare')
		{
			 in_mare=in_mare-1;
			// document.getElementById('mare').style.display='block';
			 controlla_sfondi();
		}
		
		
		if ((da_eliminare.getName()) == 'montagne')
		{
			in_montagne=in_montagne-1;
			//document.getElementById('montagne').style.display='block';
			controlla_sfondi();
		}
		
		
		if ((da_eliminare.getName()) == 'terreno')
		{
			 in_terreno=in_terreno-1;
			// document.getElementById('terreno').style.display='block';
			 controlla_sfondi();
		}
		if ((da_eliminare.getName()) == 'luna')
		{
			in_luna=false;	
			document.getElementById('luna').style.display='block';
			controlla_sfondi();
		}
		if ((da_eliminare.getName()) == 'cieloazzurro')
		{
			in_cieloazzurro=in_cieloazzurro-1;	
			//document.getElementById('cieloazzurro').style.display='block';
			controlla_sfondi();
		}	
		if ((da_eliminare.getName()) == 'cielonotturno')
		{
			in_cielonotturno=in_cielonotturno-1;	
			//document.getElementById('cielonotturno').style.display='block';
			controlla_sfondi();
		}		 
		
		if ((da_eliminare.getName()) == 'sole')
		{
			in_sole=false;	
			document.getElementById('sole').style.display='block';
			controlla_sfondi();
		}	
		if(da_eliminare.getName() != 'bimbaasiatica' && da_eliminare.getName() != 'bimbacaucasica' && da_eliminare.getName() != 'bimbaindiana' && da_eliminare.getName() != 'bimbanera' && da_eliminare.getName() != 'bimboasiatico' && da_eliminare.getName() != 'bimboindiano' && da_eliminare.getName() != 'bimbocaucasico' && da_eliminare.getName() != 'bimbonero' && da_eliminare.getName() != 'donnaasiatica'  && da_eliminare.getName() != 'donnacaucasica' && da_eliminare.getName() != 'donnaindiana' && da_eliminare.getName() != 'donnanera' && da_eliminare.getName() != 'uomoasiatico'  && da_eliminare.getName() != 'uomocaucasico'  && da_eliminare.getName() != 'uomoindiano'   && da_eliminare.getName() != 'uomoneroo' )
		{
		da_eliminare.parent.remove();
		 layer.draw();
		abilita_bottoni();
		
				if (suona == true)
{
document.getElementById("suono_canc").play();		
}
		}

		  }
		  
		 
      }, false);

	document.getElementById("salva").addEventListener('click', function() {

				if (suona == true)
{
document.getElementById("suono_click").play();		
}


		var myStage;

stage.toDataURL({ 
  callback:imageDone
});

/*
funzione per la traduzione dello stage disegnato in un 'immagine'
(necessario per salvataggio e stampa dei disegni creati..)
*/      
function imageDone(stageDataURL){
  myStage=new Image();
  myStage.onload=function(){
  }
   
  myStage.setAttribute('crossOrigin','anonymous');
  myStage.src=stageDataURL;
  myStage.setAttribute("id","stampa");
  myStage.setAttribute("width","500px");
  myStage.setAttribute("height","650px");
	date = new Date();
		 var a = window.open('','','width=650,height=500');
		 a.document.open("text/html");
		 a.document.write(document.getElementById('stampa_user').innerHTML);
		a.document.write('<img src="'+myStage.src+'"/>');
		a.document.write('<div height="20px">'+date.toLocaleString()+'</div>');
		 a.document.close();
		 a.print();

}

		           });
	
	
con.addEventListener('drop',function (event){
	 event.preventDefault();

 if (document.getElementById("menu").style.display == 'block')
 {

 event.preventDefault();
crea_immagine(event,dragSrcEl);	
abilita_bottoni();

				{
					
	gestisci_scene();
	
				}
		
 }
     },false);
 

}

/*
variabile usata per capire su quale sistema operativo mobile si sta eseguendo l'applicazione
il listener era usato per inibire l'utilizzo del tasto back
dei tablet android..
*/
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

/*
quando trascino un immagine dalla categoria alla scena (da sinistra al canvas centrale)
viene aggiunta l'immagine tramite questa funzione
ci sono anche diversi listener importanti(per esempio per swipe img su mobile), considerazioni sulla
posizione di rilascio, aggiunta delle ancore, gestione delle img selezionate al click o al touch
(considerando che puo esserci un'unica img selezionata per volte ovviamente..)
*/
function crea_immagine(evt, dragSrcEl) {
    
 var bgxy = stage.getAbsolutePosition();
	var myX = evt.pageX - stage.getContainer().offsetLeft - bgxy.x;
	var myY = evt.pageY - stage.getContainer().offsetTop - bgxy.y;
        

if (evt.pageX == 0 )
{

	myX= evt.changedTouches[0].pageX - stage.getContainer().offsetLeft - bgxy.x ;
	myY =evt.changedTouches[0].pageY -  stage.getContainer().offsetTop - bgxy.y ;	
                
   
		}


		var image = new Kinetic.Image({
		  x:0,
		  y:0,
		  width: 50,
                  height: 50,
		  image:dragSrcEl,
		  name : name,
		  src:dragSrcEl.src,
		  id: "imagess",
		  rotation:0,
		 
        });
		
           if(name == 'fiume' || name == 'laghetto' || name == 'mare' || name == 'montagne' || name == 'terreno' || name == 'cielonotturno' || name =='cieloazzurro')
           {
           console.log(myX+" "+myY);
           myX-=(clickPos[0]-imgPos.left)*3;
           myY-=(clickPos[1]-imgPos.top)*3;
           }
          else 
          {
           myX-=(clickPos[0]-imgPos.left);
           myY-=(clickPos[1]-imgPos.top);
          }
         image.dash([10,20]);
	 gruppo = new Kinetic.Group({
          draggable: true,
		  name: name,
		  x:myX,
		  y:myY,

        });
		layer.add(gruppo);
			gruppo.add(image);
	
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())); 
      
     if (mobile) {  
    
/*Se il dispositivo è mobile...*/
     
   }  else {
       if (name == 'fiume')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
		in_fiume= in_fiume +1;
		document.getElementById('fiume').style.display='none';

		}
		
		if (name == 'laghetto')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			in_laghetto=true;
		 document.getElementById('laghetto').style.display='none';
		}
		
		
		if (name == 'mare')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			 in_mare=in_mare+1;

		}
		

		if (name == 'montagne')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			in_montagne=in_montagne+1;
		}
		
		if (name == 'terreno')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			 in_terreno=in_terreno+1;
		}
		
		if (name == 'sole')
		{
			in_sole=true;
		 document.getElementById('sole').style.display='none';
		}
		if (name == 'luna')
		{
			in_luna=true;
		 document.getElementById('luna').style.display='none';
		 			
		}

				if (name == 'cieloazzurro')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
					in_cieloazzurro = in_cieloazzurro+1;
		}	
		
		if (name == 'cielonotturno')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
					in_cielonotturno = in_cielonotturno+1;

		}
                console.log(Math.cos(45));

		addAnchor(image,gruppo, image.x() , image.y() , 'topLeft','none');
       		addAnchor(image,gruppo, image.x() + image.getWidth(),image.y() - 10, 'topRight','none');
       		addAnchor(image,gruppo, image.x() + 165,image.y() + 150, 'bottomRight','none');
       	        addAnchor(image,gruppo, image.x() ,image.y() + 170, 'bottomLeft','none');
		addAnchor(image,gruppo, image.x() + 155 ,image.y() + 75, 'rotateAnchor','rotate');

		

   }
	

		image.on("mousedown touchstart", function(e){
          
		  if ( selezionato[1] != null)
		  {
					var children = selezionato[1].parent.children;
            for (i = 1; i < children.length; i++) {
                if (children[i].getName() == 'topLeft' ||
                    children[i].getName() == 'topRight' ||
                    children[i].getName() == 'bottomRight' ||
                    children[i].getName() == 'bottomLeft' || 
					children[i].getName() == 'rotateAnchor') {
                    children[i].hide();
                }
            }
			selezionato[1].setStroke(0);
			selezionato[1].cache();
			selezionato[1].drawHitFromCache();
			layer.draw();
			selezionato[1].clearCache();
			 selezionato.pop();
		  }
		  
		  selezionato.push(image);
		var children = selezionato[1].parent.children;
            for (i = 1; i < children.length; i++) {
                if (children[i].getName() == 'topLeft' ||
                    children[i].getName() == 'topRight' ||
                    children[i].getName() == 'bottomRight' ||
                    children[i].getName() == 'bottomLeft' || 
					children[i].getName() == 'rotateAnchor') {
                    children[i].show();
                }
            }
			
			
		 selezionato[1].setStrokeWidth(2);
		 selezionato[1].setStroke('black');

		selezionato[1].cache();
		selezionato[1].drawHitFromCache();
       layer.draw();
	   selezionato[1].clearCache();
	   select(selezionato[1]);
	   		});
		   
				
        imageObj = new Image();
		
        imageObj.src = dragSrcEl.src;
        imageObj.onload = function(){
            image.setImage(imageObj)
            layer.draw()
        };



		
		
		if((name == 'bimbaasiatica' || name == 'bimbacaucasica' || name == 'bimbaindiana' || name == 'bimbanera' || name == 'bimboasiatico' || name == 'bimboindiano' || name == 'bimbocaucasico' || name == 'bimbonero'|| name == 'donnaasiatica'  || name == 'donnacaucasica' || name == 'donnaindiana' || name == 'donnanera' || name == 'uomoasiatico'  || name == 'uomocaucasico'  || name == 'uomoindiano'   || name == 'uomoneroo' ) && questo_io == false)
		{
			questo_io=true;
			document.getElementById('questo_io').style.display='none';
			elimina_categorie(document.getElementById("questo_io_nome").innerHTML);
			
		if(conta_scene == 1)
		{	
$.ajax({
                 url: 'save_questo_io.php',
                type: 'POST',
                data: {
               	 'name': name,
                },
				success: function(data)
				{
 						
				}
            });
		}
		}
		
		
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
	

	image.cache();
    image.rotation(startRotate + e.gesture.rotation);
	image.drawHitFromCache();
	image.clearCache();

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
	
	
});		

if (suona == true)
{
document.getElementById("suono_immagini").play();		
}

in_terra_frontiera=in_terra_frontiera+1;
	 json =layer.toJSON();
	 username=document.getElementById("stampa_user").innerHTML;
	 var chiave=username + "n " + n ;
	localStorage.setItem(chiave,json );
	n=n+1;
};

/*
funzione che crea i dialoghi (tramite la libreria css bootstrap) alla fine di ogni scena e in base alla scelta dell'utente e alla scena in cui ci si trova viene richiamata una funzione diversa..
ognuna di queste funzioni effettua il salvataggio della scena, il clean del canvas centrale
ed adatta il layout generale per il proseguo del gioco..
Queste funzioni contengono la logica di tutto il flusso di esecuzione del gioco
e sono molto importanti..
anche qua secondo me (al di la della libreria usata e degli aspetti estetici e grafici...)
si puo fare un sostanzioso refactoring e miglioramento generale...

*/        
 function gestisci_scene() {
					if(avanti==0)
					{
							 if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0))
							 {
			 $("#madre_terra").removeClass("button-todo");
			$("#madre_terra").addClass("button-next");
			$("#madre_terra").css("cursor","pointer");
							 }
							 
document.getElementById("madre_terra").onclick=function () {
	

							 if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0) )

	 		{	  bootbox.dialog({
  message: document.getElementById("FINITO_MADRE_NATURA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
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
    //  className: "btn-primary",
	className: "bottone-prova",
      callback: function() {
        console.log("annulla");
      }
    },
	  success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
		  scena1();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
//crea_categoria_pers_oggi(document.getElementById("personaggi_oggi_nome").innerHTML);
crea_categoria_questo_io(document.getElementById("questo_io_nome").innerHTML);

			console.log("scena1");      }
    },
  
  }
});

console.log("dialog scena 1");
			}
			
			else
			{
				bootbox.dialog({
  message: document.getElementById("elementi_mancanti").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "bottone_condizione",
      callback: function() {
		  rimuovi_elementi_mancanti();
        console.log("annulla");
      }
    }
  }
});

			}

};
					}
					
					if(avanti==1)
					{
							 if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0) && questo_io == true)
							 {
						$("#terra_padri").removeClass("button-todo");
						$("#terra_padri").addClass("button-next");
						$("#terra_padri").css("cursor","pointer");
							 }
	  document.getElementById("terra_padri").onclick=function () {
							 if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0) && questo_io == true)
	 	{ 
		 bootbox.dialog({
  message: document.getElementById("FINITO_MADRE_TERRA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
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
		className: "bottone-prova",
      callback: function() {
        console.log("annulla");
      }
    },
	 success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
		  scena2();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
//crea_categoria_pers_oggi(document.getElementById("personaggi_oggi_nome").innerHTML);
crea_categoria_pers_storici(document.getElementById("personaggi_storici_nome").innerHTML); 
crea_categoria_edilizia(document.getElementById("edilizia_nome").innerHTML);
crea_categoria_questo_io(document.getElementById("questo_io_nome").innerHTML);
caricaQuestoSonoIo();
			console.log("scena1");      }
    },
  }
});

console.log("dialog scena 2");
		//scena2()
		}
		else
		{
			 bootbox.dialog({
  message:  document.getElementById("elementi_mancanti").innerHTML,
  title:  document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
className: "bottone_condizione",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});
			
		}
 };

					}
					
					if(avanti==2)
				{
							 if (( in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0) && questo_io == true)
							 {
						$("#madre_patria").removeClass("button-todo");
						$("#madre_patria").addClass("button-next");
						$("#madre_patria").css("cursor","pointer");
							 }
  document.getElementById("madre_patria").onclick=function () { 
							 if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)&& questo_io == true)

{
		 	 	 bootbox.dialog({
  message: document.getElementById("FINITO_TERRA_PADRI").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
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
   className: "bottone-prova",
      callback: function() {
        console.log("annulla");
      }
    },
	success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
scena3();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_mezzi(document.getElementById("mezzi_trasporto_nome").innerHTML);
crea_categoria_rambo(document.getElementById("rambo_nome").innerHTML);
crea_categoria_pers_unif(document.getElementById("personaggi_uniforme_nome").innerHTML);
crea_categoria_edilizia(document.getElementById("edilizia_nome").innerHTML);
crea_categoria_clown(document.getElementById("clown_nome").innerHTML);
elimina_categorie2(document.getElementById("personaggi_oggi_nome").innerHTML);  
elimina_categorie2(document.getElementById("personaggi_storici_nome").innerHTML);
crea_categoria_questo_io(document.getElementById("questo_io_nome").innerHTML);
caricaQuestoSonoIo();
			console.log("scena1");      }
    },
  }
});

console.log("dialog scena 3");
	 }
	 else
	 {
					 bootbox.dialog({
  message: document.getElementById("elementi_mancanti").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "bottone_condizione",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});
			
 
	 }

 };
				
					}
					
					if(avanti==3)
					{
							 if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)&& questo_io == true)
{
						console.log(" avanti = 3 ");
						$("#terra_frontiera_scena").removeClass("button-todo");
						$("#terra_frontiera_scena").addClass("button-next");
						$("#terra_frontiera_scena").css("cursor","pointer");
						
}


	  document.getElementById("terra_frontiera_scena").onclick=function (){
							 if (( in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)&& questo_io == true)
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
   className: "bottone-prova",
      callback: function() {
        console.log("annulla");
      }
	
    },
	success: {
      label: document.getElementById("PROSEGUI").innerHTML,
      className: "btn-success",
      callback: function() {
		scena4();
crea_categoria_sfondi(document.getElementById("sfondi_nome").innerHTML);
crea_categoria_alberi(document.getElementById("alberi_nome").innerHTML);
crea_categoria_anim_domestici(document.getElementById("animale_domestico_nome").innerHTML);
crea_categoria_anim_selvaggi(document.getElementById("animale_selvaggio_nome").innerHTML);
crea_categoria_anim_esotici(document.getElementById("animale_esotico_nome").innerHTML);
crea_categoria_volatile(document.getElementById("volatile_nome").innerHTML);
crea_categoria_pesce(document.getElementById("pesce_nome").innerHTML);
crea_categoria_anim_preistorico(document.getElementById("trex_nome").innerHTML);
crea_categoria_terra(document.getElementById("terra_frontiera_nome").innerHTML);
elimina_categorie1(document.getElementById("questo_io_nome").innerHTML);
elimina_categorie1(document.getElementById("edilizia_nome").innerHTML);
elimina_categorie1(document.getElementById("mezzi_trasporto_nome").innerHTML);
elimina_categorie1(document.getElementById("rambo_nome").innerHTML);
elimina_categorie1(document.getElementById("personaggi_uniforme_nome").innerHTML); 
elimina_categorie1(document.getElementById("clown_nome").innerHTML);
			     },
				 
    },
  }
});
	  
console.log("dialog scena 4");
		}
		else
		{
						 bootbox.dialog({
  message: document.getElementById("elementi_mancanti").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("TORNA_GIOCO").innerHTML,
      className: "bottone_condizione",
      callback: function() {
        console.log("annulla");
      }
    }
  }
});
			
		}

};
				}
					
					if(avanti==4)
					{
							if(in_terra_frontiera > 0 )
{
					$("#fine").css("display","block");
					
					
}
	  document.getElementById("fine").onclick=function (){

console.log("dialog scena 5");

			{	  
			 bootbox.dialog({
  message: document.getElementById("FINITO_TERRA_FRONTIERA").innerHTML,
  title: document.getElementById("COMPLIMENTIIII").innerHTML,
  buttons: {
   
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
      className: "bottone-prova",
      callback: function() {
        console.log("annulla");
      }
    },
	 success: {
      label: document.getElementById("ARRIVEDERCI").innerHTML,
      className: "btn-success",
      callback: function() {
		  scena5();
		  setTimeout(function(){

			document.location.href="home_bambino.php";
			},1500);
			
		
			console.log("scena1");      }
    },
  }
});
			}

};
					}
				
				};
				

/*
tutte le funzioni che si chiamano scena_ ecc si occupano (come spiegato prima..)
di fare il'necessario' per la scena della quale si occupa...
esempio: scena_1_ripeti  --> l'utente ha completato la prima scena, ha scelto di ripeterla;
questa funzione fa il necessario..salva il disegno, pulisce il canvas, adatta il layout dei pulsanti delle scene ecc ecc..
*/				
function scena1_ripeti()  {				
			
			if (avanti == 0)
		{

				
		in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
	   questo_io= false;
		
		$('#menu').css('display','none');

		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');
		
		
		$("#madre_terra").removeClass("button-next");
			$("#madre_terra").addClass("button-todo");
			$("#madre_natura").addClass("button-active");
			$("#terra_padri").addClass("button-todo");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");	 
			  
		chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile questo_io');
		 
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
        date = new Date();
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
		$.ajax({
                 url: 'save.php',
                type: 'POST',
                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					 username=document.getElementById("stampa_user").innerHTML + "scena1";
				},
				error: "errore"
					
				
            });   
            

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;
				

				crea_stage();
				
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});



		}	
				
				
				
}
function scena1 () {
		if (avanti == 0)
		{
		

		in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
	   questo_io= false;
		
		$('#menu').css('display','none');

		
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');
		
		
		$("#madre_terra").removeClass("button-next");
		$("#madre_natura").removeClass("button-active");
			$("#madre_terra").addClass("button-active");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-todo");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");
		
		chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile questo_io');
		 
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
		$.ajax({
                 url: 'save.php',
                type: 'POST',
                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					 username=document.getElementById("stampa_user").innerHTML + "scena1";
			//localStorage.setItem(username,json + "data" + date);
				},
				error: "errore"
					
				
            });   
            

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;
				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_terra").css("cursor","default");

				crea_stage();
				
/////////////cambia testo in base alla scena 
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});

				
		
		  
		
		//else
		//return;
		}

}

function scena1_inizio () {
		if (avanti == 0)
		{
		$('#menu').css('display','none');

		
				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_terra").css("cursor","default");
		
		}
		

}


 function scena2_ripeti() {
	 
	 if (avanti == 1)
		{
	
	in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
	   questo_io= false;
	   
		$('#menu').css('display','none');

		
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');
		
		$("#terra_padri").removeClass("button-next");
			$("#madre_terra").addClass("button-active");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-todo");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");	
		
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi questo_io');
		   ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		 		var username;
        date = new Date();
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

				$.ajax({
                 url: 'save2.php',
                type: 'POST',
                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					var username=document.getElementById("stampa_user").innerHTML + "scena2" ;
			//localStorage.setItem(username, json + "data" + data);
				},
			error: "errore"

            });   

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				crea_stage();
				
				/////cambia testo in base alla scena
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});



		
		}
		}


 function scena2() {
	 
	 if (avanti == 1)
		{

			in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
	     questo_io= false; 
		$('#menu').css('display','none');

		
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');
		
		
		 $("#madre_terra").removeClass("button-active");
		$("#terra_padri").removeClass("button-next");
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-active");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");
			
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi questo_io');
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

				$.ajax({
                 url: 'save2.php',
                type: 'POST',
                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					var username=document.getElementById("stampa_user").innerHTML + "scena2" ;
			//localStorage.setItem(username, json + "data" + data);
				},
			error: "errore"

            });   

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_padri").css("cursor","default");				
				crea_stage();
				
				
				/////cambia testo in base alla scena
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});




		
		}
		
		//else
		//return;
		//}
 }


 function scena2_inizio() {
	 
	 if (avanti == 1)
		{

		$('#menu').css('display','none');

		
		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_padri").css("cursor","default");				
		
		}
		
 }
 
  function scena3_ripeti(){
	 if (avanti == 2)
		{
			
	
	 in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
		questo_io= false;
		
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');


		$('#menu').css('display','none');

	   
		 $("#madre_patria").removeClass("button-next");
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-active");
			$("#madre_patria").addClass("button-todo");
			$("#terra_frontiera_scena").addClass("button-todo");
			
			
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi personaggi_storici edilizia questo_io');
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		
				$.ajax({
                 url: 'save3.php',
                type: 'POST',
                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					var username=document.getElementById("stampa_user").innerHTML + "scena3";
			//localStorage.setItem(username,  json + "data" + data);

				},
				error: "errore"

            });   

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

			

				crea_stage();
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});
		}
		
 }
 
 
 function scena3(){
	 if (avanti == 2)
		{
	in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
		
		questo_io= false;
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');

		$('#menu').css('display','none');

		
	
		 $("#madre_patria").removeClass("button-next");
		$("#terra_padri").removeClass("button-active");
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-active");
			$("#terra_frontiera_scena").addClass("button-todo");
			
			
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_oggi personaggi_storici edilizia questo_io');
		 ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		
				$.ajax({
                 url: 'save3.php',
                type: 'POST',
                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					var username=document.getElementById("stampa_user").innerHTML + "scena3";

				},
				error: "errore"

            });   

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_patria").css("cursor","default");

				crea_stage();
				
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});
		}
 }
 
  function scena3_inizio(){
	 if (avanti == 2)
		{
			
			
		$('#menu').css('display','none');


				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#madre_patria").css("cursor","default");

		
		}
		
		
 }

 function scena4_ripeti() {
	 if (avanti == 3)
		{
	 
	 in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
			questo_io= false;

		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');

		$('#menu').css('display','none');

		
			$("#terra_frontiera_scena").removeClass("button-next");
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-active");
			$("#terra_frontiera_scena").addClass("button-todo");
				
		 
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_uniforme rambo edilizia mezzi_trasporto questo_io');
		  ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		
				$.ajax({
                 url: 'save4.php',
                type: 'POST',

                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					var username=document.getElementById("stampa_user").innerHTML + "scena4";

				},
				error: "errore"

            });   


    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;
				crea_stage();
				
				/////cambia testo in base alla scena
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});
		}
	
 }

 function scena4() {
	 
	 if (avanti == 3)
		{


	 questo_io= false;
		 in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
	   in_terra_frontiera=0;
	   
	   
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');

		$('#menu').css('display','none');

		
	
		 
		  $("#madre_patria").removeClass("button-active");
		$("#terra_frontiera_scena").removeClass("button-next");
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-fatto");
			$("#terra_frontiera_scena").addClass("button-active");
			
		 chiudi_div('sfondi alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio pesce volatile personaggi_uniforme rambo edilizia mezzi_trasporto questo_io');
		  ferma();
 		 var time= document.getElementById("vis").innerHTML;
		 azzera();
		var username;
        date = new Date();
		todaysDate="Data:  " + date.toLocaleString() + "  tempo:  " + time;
		var data = JSON.stringify(todaysDate)
	var sese=new Array();
	for(var t=0;t<=n;t++)
	{
 sese[t]="@" + localStorage.getItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
	
		var jsonN =layer.toJSON() + sese;
		var json=jsonN.replace(/,@/g,"@");

		
				$.ajax({
                 url: 'save4.php',
                type: 'POST',

                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
					var username=document.getElementById("stampa_user").innerHTML + "scena4";

				},
				error: "errore"

            });   


    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

				conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_frontiera_scena").css("cursor","default");

			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile questo_io');
abilita_bottoni();

      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});
		}
 }

function 	stampa_madre_p(id_scena){

	var  posY= (document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);
var posX=0;
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
							 //json = ultimo[1];
							 console.log(ultimo[3]);
							 json = ultimo[3];
				 var giusto=json.replace(/Kinetic.Group/g,"Group");				
				   layer= Kinetic.Node.create(giusto, 'containerBIG');
					stage.add(layer);
				var prova = layer.getChildren().find('.Image');
				 var bgxy = stage.getAbsolutePosition();
				for(i=0;i<prova.length;i++)
					{  
					  //function to induce scope
					  (function() {
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
							 image.getAbsolutePosition(myX,myY);
							  image.rotation(rot);
							  image.strokeEnabled(false);
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
						prova[i].getChildren()[0].strokeEnabled(false);
						prova[i].draggable(false);
						prova[i].getChildren()[0].getLayer().draw();

}
					  })();
					}
						},
						error: "errore"
});


};

  function scena4_inizio() {
	 
	 if (avanti == 3)
		{
		$('#menu').css('display','none');

		
		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_frontiera_scena").css("cursor","default");

	$.ajax({
                 url: 'ultima_madre_patria.php',
                type: 'POST',
                 
				success: function(data)
				{
					
					var ultimo=data.split('///');
				 var id_scena= ultimo[1];
					 stampa_madre_p( id_scena);
				}
            });   

		}
		
 }

 function scena5_ripeti() {
	 
	 if (avanti == 4)
		{
		in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
		
		$('#menu').css('display','none');

		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');
					
		
			$("#madre_terra").addClass("button-fatto");
			$("#madre_natura").addClass("button-fatto");
			$("#terra_padri").addClass("button-fatto");
			$("#madre_patria").addClass("button-fatto");
			$("#terra_frontiera_scena").addClass("button-active");
			$("#fine").css("display","none");
			
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

				$.ajax({
                 url: 'save5.php',
                type: 'POST',

                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
				},
				error: "errore"

            });   

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

		
				crea_stage();
			 bootbox.dialog({
				 
  message: document.getElementById("condizione_necessaria").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
abilita_bottoni();
      }
    },
	  success: {
      label: '<div id="label_on" ><i class="fa fa-pause"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').pause();

		return false;
      }
    },
	danger: {
      label: '<div id="label_off" ><i class="fa fa-youtube-play"></i></div>',
	  className: "bottone_condizione_suono",
      callback: function() {
		document.getElementById('suono_drag').play();
		return false;
      }
    }
  }
});

		
		
		}
 }
 
 function scena5() {
	 
	 if (avanti == 4)
		{
			in_fiume=0;		  
		in_laghetto= false;
		in_mare= 0;
		in_montagne= 0;
		in_terreno= 0;
	    in_sole =false;
       in_luna =false;
       in_cieloazzurro =0;
       in_cielonotturno =0;
		
		$('#condizione_necessaria').css('display','block');
		$('#COMINCIA').css('display','block');
		$('#menu').css('display','none');

		
		$('#sole').css('display','block');
		$('#sole').css('position','relative');
		$('#sole').css('left','10px');
		$('#luna').css('display','block');
		$('#luna').css('position','relative');
		$('#luna').css('left','10px');
		$('#fiume').css('display','block');
		$('#fiume').css('position','relative');
		$('#fiume').css('left','10px');
		$('#laghetto').css('display','block');
		$('#laghetto').css('position','relative');
		$('#laghetto').css('left','10px');

			
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

				$.ajax({
                 url: 'save5.php',
                type: 'POST',

                data: {
               	 'immagine': json,
                },  
				success: function(data)
				{
					var ultimo=data.split('#');
				},
				error: "errore"

            });   

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;
			conta_scene= 0;
				avanti=0;
				crea_stage();

		
		}
 }
 

/*
funzione che si occupa della gestione per enable e disable dei pulsanti 
elimina img, specchia img, salva scena, e pulsanti per gestione asse z..
*/ 
 function abilita_bottoni(){
	 var gruppo=layer.getChildren();
	 	 if( gruppo.length == 1)

	 {
		 $("#elimina_elemento").removeClass("button-func-dis");
		 $("#elimina_elemento").addClass("button-func");
		$("#elimina_elemento").prop("disabled",false);


		$("#specchia_elemento").removeClass("button-func-dis");
		 $("#specchia_elemento").addClass("button-func");
		$("#specchia_elemento").prop("disabled",false);

		 $("#salva").removeClass("button-func-dis");
		 $("#salva").addClass("button-func");
		$("#salva").prop("disabled",false);
		 
		 $("#primo_piano").removeClass("button-func");
		 $("#primo_piano").addClass("button-func-dis");
		$("#primo_piano").prop("disabled",true);

		 $("#indietro").removeClass("button-func");
		 $("#indietro").addClass("button-func-dis");
		$("#indietro").prop("disabled",true);
	
		 $("#avanti").removeClass("button-func");
		 $("#avanti").addClass("button-func-dis");
		 $("#avanti").prop("disabled",true);
		 
		 $("#fondo").removeClass("button-func");
		 $("#fondo").addClass("button-func-dis");
		$("#fondo").prop("disabled",true);
		 
	 }
	 
	 else 
	 	 	 if( gruppo.length > 1)

	 {
		
 		$("#elimina_elemento").removeClass("button-func-dis");
		 $("#elimina_elemento").addClass("button-func");
		 
		 $("#specchia_elemento").removeClass("button-func-dis");
		 $("#specchia_elemento").addClass("button-func");
		 
		 
		 $("#salva").removeClass("button-func-dis");
		 $("#salva").addClass("button-func");
		 
		 $("#primo_piano").removeClass("button-func-dis");
		 $("#primo_piano").addClass("button-func");

		 $("#indietro").removeClass("button-func-dis");
		 $("#indietro").addClass("button-func");
	
		 $("#avanti").removeClass("button-func-dis");
		 $("#avanti").addClass("button-func");
		 
		 $("#fondo").removeClass("button-func-dis");
		 $("#fondo").addClass("button-func");
		 
		$("#elimina_elemento").prop("disabled",false);
		$("#specchia_elemento").prop("disabled",false);
		$("#salva").prop("disabled",false);
		$("#primo_piano").prop("disabled",false);
		$("#indietro").prop("disabled",false);
		$("#avanti").prop("disabled",false);
		$("#fondo").prop("disabled",false);

	 }
	 	
			 else 
 	 	 if( gruppo.length < 1)
	 {
	   

		$("#elimina_elemento").removeClass("button-func");
		 $("#elimina_elemento").addClass("button-func-dis");
		 
		$("#specchia_elemento").removeClass("button-func");
		 $("#specchia_elemento").addClass("button-func-dis");
		 
		 $("#salva").removeClass("button-func");
		 $("#salva").addClass("button-func-dis");
		 
		 $("#primo_piano").removeClass("button-func");
		 $("#primo_piano").addClass("button-func-dis");

		 $("#indietro").removeClass("button-func");
		 $("#indietro").addClass("button-func-dis");
	
		 $("#avanti").removeClass("button-func");
		 $("#avanti").addClass("button-func-dis");
		 
		 $("#fondo").removeClass("button-func");
		 $("#fondo").addClass("button-func-dis");
		 
		$("#elimina_elemento").prop("disabled",true);
		$("#specchia_elemento").prop("disabled",true);
		$("#salva").prop("disabled",true);
		$("#primo_piano").prop("disabled",true);
		$("#indietro").prop("disabled",true);
		$("#avanti").prop("disabled",true);
		$("#fondo").prop("disabled",true);


		 
	 }
 
	 
	 
	 
 }

/*
funzione per la gestione di pulsanti dell'audio..
se audio on--> icona audio on (presente nell'html principale..)
*/
function audio(valore){
	if(valore == 'on')
	{
		suona = true;
		document.getElementById("audio_on").style.display='block';
		document.getElementById("audio_off").style.display='none';

	}
	else
	{
		suona = false;
		document.getElementById("audio_on").style.display='none';
		document.getElementById("audio_off").style.display='block';
		
	}
	
	
	
	
}


function controlla_sfondi(){
							 if ( in_fiume > 0  || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)
{
	
	
}

else
{
var prossima_scena= document.getElementsByClassName('button-next');
		 $(prossima_scena).addClass("button-todo");	
		 $(prossima_scena).removeClass("button-next");
		// $(prossima_scena).addClass("button-todo");
		$('#fine').css('display','none');
}

	
}


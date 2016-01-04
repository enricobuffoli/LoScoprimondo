function caricaQuestoSonoIo(){
	var get = parseGetVars();
	var utente = get['utente'];
	
	$.ajax({
                 url: 'controlla_questo_io_P.php',
                type: 'POST',
                 data: {
					'utente':utente,
               
                }, 
				success: function(data)
				{
					
					var io = data.split('#');
					console.log(io[2]);
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
    rotateAnchor.setY(topRight.getY()+ (image.height()/2));		
	
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
		
       /* var anchor = new Kinetic.Circle({
          x: x,
          y: y,
          stroke: '#666',
          fill: '#ddd',
          strokeWidth: 2,
          radius: 8,
          name: name,
          draggable: true,
          dragOnTop: false,
        });*/

		if (dragBound == 'rotate') {
          anchora.setAttrs({
			 //fill: '#0033FF',
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
        //  this.setStrokeWidth(4);
          layer.draw();
        });
        anchora.on('mouseout', function() {
          var layer = this.getLayer();
          document.body.style.cursor = 'default';
         // this.strokeWidth(2);
          layer.draw();
        });
		group.add(anchora);
	    anchora.hide();
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
		node.on("dragend touchend", function () {
			
var  posY= ((document.getElementById('in_bottoni').offsetTop + document.getElementById('in_bottoni').offsetHeight)*2 + document.getElementById('container_top').offsetTop + document.getElementById('container_top').offsetHeight);

	
	var posX= (document.getElementById('main_container').offsetLeft + document.getElementById('elementi').offsetWidth + document.getElementById('elementi').offsetLeft);
	
	console.log(" node.parent.x() " + node.parent.x() + " node.parent.y() " + node.parent.y());	 

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
			// document.getElementById('mare').style.display='block';
			 controlla_sfondi();
		}
		
		
		if ((node.name()) == 'montagne')
		{
			in_montagne=in_montagne-1;
			//document.getElementById('montagne').style.display='block';
			controlla_sfondi();
		}
		
		
		if ((node.name()) == 'terreno')
		{
			 in_terreno=in_terreno-1;
			// document.getElementById('terreno').style.display='block';
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
			in_cieloazzurro=in_cieloazzurro-1;	
			//document.getElementById('cieloazzurro').style.display='block';
			controlla_sfondi();
		}	
		if ((node.name()) == 'cielonotturno')
		{
			in_cielonotturno=in_cielonotturno-1;	
			//document.getElementById('cielonotturno').style.display='block';
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
	
//	var posX= (document.getElementById('elementi').offsetLeft + document.getElementById('elementi').offsetWidth);
 
	var posX=0;	 


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

	
	stage.clearCache();
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


function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
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
	


window.onload = function () {

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
			document.getElementById('suono_drag').play();

			 bootbox.dialog({
				 
  message: document.getElementById("PRIMA_DI_MADRE_NATURA").innerHTML,
  title: document.getElementById("ATTENZIONE").innerHTML,
  buttons: {
    main: {
      label: document.getElementById("COMINCIA").innerHTML,
	  className: "bottone_condizione",
      callback: function() {
		  document.getElementById('suono_drag').pause();
		document.getElementById("menu").style.display='block';
cambia('sfondi', 'mezzi_trasporto alberi animale_preistorico animale_domestico animale_esotico animale_selvaggio clown edilizia personaggi_oggi personaggi_storici personaggi_uniforme rambo pesce terra_frontiera volatile');
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


					var ultimo=data.split('#');
					if(ultimo[2] == 0)
					{
						console.log(ultimo[2] + "scena 0");
		
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
/*-moz-box-shadow: 0 0 5px 5px #e7db75;
-webkit-box-shadow: 0 0 5px 5px #e7db75;*/

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
						console.log(ultimo[2] + "scena 3");}
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
		   
		   		   				if (suona == true)
{
document.getElementById("suono_drag").play();		
}

    });

		conta_immagini[i].addEventListener('touchmove',function(e){
			e.preventDefault();
   			name     = this.id;
           dragSrcEl = this;
		   
		   		   		   				if (suona == true)
{
document.getElementById("suono_drag").play();		
}

	

    });
	
	conta_immagini[i].addEventListener('touchend',function(evt){
								 if (document.getElementById("menu").style.display == 'block')
{
	if (evt.changedTouches[0].pageX > 260 && evt.changedTouches[0].pageX < 930 && evt.changedTouches[0].pageY > 100 && evt.changedTouches[0].pageY  < 600)
{					crea_immagine(evt,dragSrcEl);	
					abilita_bottoni();
										/*	if ( in_fiume == true && in_laghetto == true && in_mare == true && in_montagne == true && in_terreno == true && in_sole == true && in_luna == true  && (in_cielonotturno == true || in_cieloazzurro == true))*/
				{
					
gestisci_scene();
				}
}
				
}

	});
	
	}
    
    con.addEventListener('dragover',function(e){
        e.preventDefault(); //@important
    });
	
	
	/*


setTimeout(function(){
rettangoli.destroy();
layer.draw();
},3000);


	
	},false);*/

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
		
		  }
	});


	document.getElementById("primo_piano").addEventListener('click', function() {
	if ( selezionato[1] != null)
		  {
        selezionato[1].parent.moveToTop();
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
			in_fiume=in_fiume-1;
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
	  
	/*      document.getElementById("elimina_tutto").addEventListener('click', function() {
       layer.destroyChildren();
		
		crea_stage();
	   
	      //layer.draw();

	  // layer.removeChildren();
	   
		  
      }, false);
	  */

document.getElementById("salva").addEventListener('click', function() {

				if (suona == true)
{
document.getElementById("suono_click").play();		
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
});	*/		var myStage;

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
	
	
con.addEventListener('drop',function(event){
		 event.preventDefault();
							 if (document.getElementById("menu").style.display == 'block')
{
event.preventDefault();
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



var bgxy = stage.getAbsolutePosition();
	var myX = evt.pageX - stage.getContainer().offsetLeft - bgxy.x;
	var myY = evt.pageY - stage.getContainer().offsetTop - bgxy.y;
	
	
console.log(" x " + myX + " y " + myY + " stage.getContainer().offsetLeft " + stage.getContainer().offsetLeft + "stage.getContainer().offsetTop " + stage.getContainer().offsetTop + " bgxy.x " + bgxy.x + " bgxy.y " + bgxy.y);
if (evt.pageX == 0 )
{
	myX= evt.changedTouches[0].pageX - stage.getContainer().offsetLeft - bgxy.x ;
	myY =evt.changedTouches[0].pageY -  stage.getContainer().offsetTop - bgxy.y ;
	
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
image.dash([10,20]);

		gruppo = new Kinetic.Group({
          draggable: true,
		  name: name,
		  x:myX,
		  y:myY,
		  
        });
		
       layer.add(gruppo); 
		//layer.add(image);
		gruppo.add(image);
		

var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())); 
      
     if (mobile) {  
    
/*Se il dispositivo è mobile...*/
     
   }  else {

				if (name == 'cieloazzurro' || name == 'cielonotturno' || name == 'terreno' || name == 'montagne' || name == 'mare' || name == 'laghetto' || name == 'fiume')
		{
		addAnchor(image,gruppo, image.x() -5, image.y() , 'topLeft','none');
        addAnchor(image,gruppo, image.x() + 150,image.y() - 10, 'topRight','none');
        addAnchor(image,gruppo, image.x() + 165,image.y() + 150, 'bottomRight','none');
        addAnchor(image,gruppo, image.x() ,image.y() + 170, 'bottomLeft','none');
       // addAnchor(image,gruppo, image.x() + 50 ,image.y(), 'rotateAnchor','rotate');
		addAnchor(image,gruppo, image.x() + 155 ,image.y() + 75, 'rotateAnchor','rotate');
		}
		else
		{
		addAnchor(image,gruppo, image.x() - 5 , image.y(), 'topLeft','none');
        addAnchor(image,gruppo, image.x() + 50,image.y() - 10, 'topRight','none');
        addAnchor(image,gruppo, image.x() + 65,image.y() + 50, 'bottomRight','none');
        addAnchor(image,gruppo, image.x() ,image.y() + 70, 'bottomLeft','none');
       // addAnchor(image,gruppo, image.x() + 25 ,image.y(), 'rotateAnchor','rotate');
	 addAnchor(image,gruppo, image.x() + 55 ,image.y() + 25, 'rotateAnchor','rotate');

		}
		
		/*gruppo.on("dragstart", function () {
                this.moveToTop();
            });*/
		
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
			layer.drawHit();
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
		 
		image.cache();
		image.drawHitFromCache();
		layer.drawHit();
		selezionato[1].clearCache();
		 select(selezionato[1]);

		 
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
//		 document.getElementById('mare').style.display='none';

		}
		

		if (name == 'montagne')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			in_montagne=in_montagne+1;
//		 document.getElementById('montagne').style.display='none';

		}
		
		if (name == 'terreno')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
			 in_terreno=in_terreno+1;
	//	 document.getElementById('terreno').style.display='none';
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
//		 document.getElementById('cieloazzurro').style.display='none';

		}	
		
		if (name == 'cielonotturno')
		{
			image.setSize({
				width: 150, 
				height: 150
					});
					in_cielonotturno = in_cielonotturno+1;
	//		 document.getElementById('cielonotturno').style.display='none';

		}
	 
if((name == 'bimbaasiatica' || name == 'bimbacaucasica' || name == 'bimbaindiana' || name == 'bimbanera' || name == 'bimboasiatico' || name == 'bimboindiano' || name == 'bimbocaucasico' || name == 'bimbonero'|| name == 'donnaasiatica'  || name == 'donnacaucasica' || name == 'donnaindiana' || name == 'donnanera' || name == 'uomoasiatico'  || name == 'uomocaucasico'  || name == 'uomoindiano'   || name == 'uomoneroo' ) && questo_io == false)
		{
			questo_io=true;
			document.getElementById('questo_io').style.display='none';
			elimina_categorie(document.getElementById("questo_io_nome").innerHTML);
			var get = parseGetVars();
	var utente = get['utente'];
	
		if(conta_scene == 1)
		{	
$.ajax({
                 url: 'save_questo_io_P.php',
                type: 'POST',
                data: {
               	 'name': name,
				 'utente':utente,
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
	
	
	 
	 

}

 function gestisci_scene() {

	 
					if(avanti==0)
					{
							 if ( in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)
							 {
			 $("#madre_terra").removeClass("button-todo");
			$("#madre_terra").addClass("button-next");
						$("#madre_terra").css("cursor","pointer");
							 }
							 
 document.getElementById("madre_terra").onclick=function () {
							 if ( in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)

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
  message:  document.getElementById("elementi_mancanti").innerHTML,
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
					
					if(avanti==1)
					{
							if ( (in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0) && questo_io == true)  {
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
  message:  document.getElementById("elementi_mancanti").innerHTML,
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
elimina_categorie1(document.getElementById("edilizia_nome").innerHTML);
elimina_categorie1(document.getElementById("mezzi_trasporto_nome").innerHTML);
elimina_categorie1(document.getElementById("rambo_nome").innerHTML);
elimina_categorie1(document.getElementById("personaggi_uniforme_nome").innerHTML); 
elimina_categorie1(document.getElementById("clown_nome").innerHTML);
elimina_categorie1(document.getElementById("questo_io_nome").innerHTML);

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
							 //if ( in_fiume > 0 || in_laghetto == true || in_mare > 0 || in_montagne > 0 || in_terreno > 0 || in_sole == true || in_luna == true  || in_cielonotturno > 0 || in_cieloazzurro > 0)					
							 if(in_terra_frontiera >0)
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

document.location.href="sezione_P.php";
			},1500);
			console.log("scena1");      }
    },
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
			//localStorage.setItem(username,json + "data" + date);
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

function scena1 () {
		if (avanti == 0)
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
			//localStorage.setItem(username,json + "data" + date);	
						}
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
			//localStorage.setItem(username, json + "data" + data);			
				}
            	});

				  
		 
}  

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(utente + "n " + t)
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
			//localStorage.setItem(username, json + "data" + data);	
						}
            	});

				  
		 
}  

    
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(utente + "n " + t)
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
			//localStorage.setItem(username,  json + "data" + data);
				}
            });   
			
		
}

    
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
			//localStorage.setItem(username,  json + "data" + data);
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
$("#madre_patria").css("cursor","default");

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
			//localStorage.setItem(username,  json + "data" + data);
				}
            });   
			
		 
}



    
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
			//localStorage.setItem(username,  json + "data" + data);
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
$("#terra_frontiera_scena").css("cursor","default");
				
				
				//crea_stage();
				
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
						console.log(ultimo);
							 //json = ultimo[1];
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

  function scena4_inizio() {
	 
	 if (avanti == 3)
		{
		$('#menu').css('display','none');

		
		conta_scene=conta_scene + 1;
				avanti=avanti+1;
$("#terra_frontiera_scena").css("cursor","default");
var get = parseGetVars();

// estraggo dall'array contenente i valori della querystring
// il valore del parametro "utente"
var utente = get['utente'];
	$.ajax({
                 url: 'ultima_madre_patria_p.php',
                type: 'POST',
				data:
				{
					email: utente
				},
                 
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
					
					//localStorage.removeItem(ultimo[1] + "scena1");
					//localStorage.removeItem(ultimo[1] + "scena2");
					//localStorage.removeItem(ultimo[1] + "scena3");
					//localStorage.removeItem(ultimo[1] + "scena4");		
							}
            });   
			
		
}
		

              
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
					
					//localStorage.removeItem(ultimo[1] + "scena1");
					//localStorage.removeItem(ultimo[1] + "scena2");
					//localStorage.removeItem(ultimo[1] + "scena3");
					//localStorage.removeItem(ultimo[1] + "scena4");		
							}
            });   
			
		
}
		

              
   for(var t=0;t<=n;t++)
	{
  localStorage.removeItem(document.getElementById("stampa_user").innerHTML + "n " + t)
	}
				n=0;

		//document.location.href="sezione_P.php";
		
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

 //if( disegnatoGroup.getChildren().length > 5)
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

 
 //if( disegnatoGroup.getChildren().length < 5)
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


function is_questo_sono_io(name){
	if(name == 'bimbaasiatica' || name == 'bimbacaucasica' || name == 'bimbaindiana' || name == 'bimbanera' || name == 'bimboasiatico' || name == 'bimboindiano' || name == 'bimbocaucasico' || name == 'bimbonero'|| name == 'donnaasiatica'  || name == 'donnacaucasica' || name == 'donnaindiana' || name == 'donnanera' || name == 'uomoasiatico'  || name == 'uomocaucasico'  || name == 'uomoindiano'   || name == 'uomoneroo'     )
	{
		questo_io = true;
	}
	else
	
	questo_io = false;
}

}

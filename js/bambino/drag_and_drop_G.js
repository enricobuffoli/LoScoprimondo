$(document).ready(function(){
   	

	
   		/* $("#madre_natura").css("background-color","silver");
         $("#madre_terra").css("background-color","silver");
		  $("#madre_terra").css("opacity","0.5");
				 
         $("#terra_padri").css("background-color","silver");
		 $("#terra_padri").css("opacity","0.5");
						  
         $("#madre_patria").css("background-color","silver");
		 $("#madre_patria").css("opacity","0.5");
				  
         $("#terra_frontiera_scena").css("background-color","silver");
		 $("#terra_frontiera_scena").css("opacity","0.5");*/
				  
});

function clickAndDisable(link) {
     // disable subsequent clicks
	 	$("#madre_natura").css("cursor","default");
     link.onclick = function(event) {
        event.preventDefault();
     }
   }   


// la funzione riceve il div da mostrare e  l'array dei div da nascondere
function cambia(apri, chiudi) {
	 
// mostro il div ricevuto come apri
document.getElementById(apri).style.display='block';
console.log(" da aprire " + apri);
// imposto il separatore dei valori in array

var mySplit = chiudi.split(" ");
//document.getElementById(mySplit[i]).getElementsByTagName('img')
// ciclo di chiusura div per ogni elemento dell'array
//primo ciclo for scandisce i vari div
for(i = 0; i < mySplit.length; i++) {
	
	if (document.getElementById(mySplit[i] ) !=  null )
	{

	var div = document.getElementById(mySplit[i]);
	
		div.style.display='none';

	               }
  
                              }
							  
}




function cambiaSfondo(categoria, chiudi) {
	 
document.getElementById(categoria).style.backgroundColor='#FFFFFF';

var mySplit = chiudi.split("/");

for(i = 0; i < mySplit.length; i++) {
		
		if (document.getElementById(mySplit[i]) != null)
		{
				
document.getElementById(mySplit[i]).style.backgroundColor='#0F0';
			
		
		}

	               }
}



function chiudi_div(chiudi) {
	 
var mySplit = chiudi.split(" ");
//document.getElementById(mySplit[i]).getElementsByTagName('img')
// ciclo di chiusura div per ogni elemento dell'array
//primo ciclo for scandisce i vari div
for(i = 0; i < mySplit.length; i++) {
	
	if (document.getElementById(mySplit[i] ) !=  null )
	{

	var div = document.getElementById(mySplit[i]);
	
		div.style.display='none';

	               }
  
                              }
							  
}


function sfondo_verde_div(chiudi) {
	 
var mySplit = chiudi.split("/");

for(i = 0; i < mySplit.length; i++) {
		
		if (document.getElementById(mySplit[i]) != null )
		{
document.getElementById(mySplit[i]).style.backgroundColor='#0F0';
		}

	               }
}


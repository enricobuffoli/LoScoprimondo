window.onload = function () {
var get = parseGetVars();
var stile = get['menu'];
console.log(stile);
aggiorna_stile(stile);



			$.ajax({
                 url: 'cerca_p.php',
                type: 'POST', 
				success: function(data)
				{
					var ultimo_p=data.split('///*');
					for(var i=1;i< ultimo_p.length;i=i+3)
					{
					var nome_p= ultimo_p[i];
					var cognome_p= ultimo_p[i+1];
					var email_p= ultimo_p[i+2];
  	document.getElementById("reg_psicologo").add(new Option(nome_p + " " + cognome_p, email_p));
					}

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


function conferma_elimina_utenti(valore)
{	
var sicuro=document.getElementById("sure").innerHTML;
var complimenti=document.getElementById("COMPLIMENTI").innerHTML;
var r=confirm(sicuro);
if (r==true)
{
	var elimina= valore;
			$.ajax({
                 url: 'elimina_utente.php',
                type: 'POST',
                data: {
               	 'elimina': elimina,
                },  
				success: function(data)
				{
					alert(complimenti);
					document.location.href='super_pagina.php?menu=elimina';
				}

            });   
}
else return;
}



function mostra_form(valore)
{	
	var mail= valore;
			$.ajax({
                 url: 'cerca_dati.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('///');
					var nome= ultimo[1];
					var cognome= ultimo[2];
					var email= ultimo[3];
					var privilegi = ultimo[5];
					var password =ultimo[4];
					 tutore = ultimo[6];
	console.log("nome " + nome + "cognome " + cognome + "email " + email + "tutore " + tutore);
	

$('input[name="nome"]').val(nome);
$('input[name="cognome"]').val(cognome);
$('input[name="mail"]').val(email);
$('input[name="email"]').val(email);
$('input[name="pass1"]').val(password);
$('input[name="pass2"]').val(password);
$('select[name="ruolo"]').val(privilegi);
document.getElementById("reg_psicologo").style.display='none';
document.getElementById("p_psicologo").style.display='none';	
	
if( privilegi == 0)
{
	document.getElementById("reg_psicologo").style.display='block';
	document.getElementById("p_psicologo").style.display='block';	
	$('select[name="new_psicologo"]').val(tutore);

}
	document.getElementById("form_modifica_div").style.display='block';
	document.getElementById("elenco_modifica").style.display='none';
				}
				

            });   

	
	
	
	
	
	
}
  function mostra_form_elimina_commenti (valore)
  {
	var mail= valore;
	document.getElementById("nome_utente").style.display='block';
	document.getElementById("nome_utente").innerHTML=valore.toString();
	
/*var da_eliminare2=document.getElementById("elimina_commenti_S").getElementsByTagName("td");
				if(da_eliminare2.length > 0)
				{
		$("#elimina_commenti_S td:nth-child(n+1)").remove();
		$("#elimina_commenti_S tr:nth-child(n+2)").remove();
		$('input[name="name[]"]').remove()
				}*/
				elimina_tabelle();
				
			$.ajax({
                 url: 'cerca_dati_elimina_commenti.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('///');
				
				
				for(var i=1;i< ultimo.length;i=i+4)
					{
					var nome_scena= ultimo[i];
					var data_scena= ultimo[i+1];
					var commento= ultimo[i+2];
					var id_scena = ultimo[i+3]
			var riga = document.createElement('tr');
			 var nuovo_elemento1 = document.createElement('td');
			 var nuovo_elemento2 = document.createElement('td');
			 var nuovo_elemento3 = document.createElement('td');
			 nuovo_elemento1.innerHTML=nome_scena.toString();
			 nuovo_elemento2.innerHTML=data_scena.toString();
			 nuovo_elemento3.innerHTML=commento.toString();
			
			var check = document.createElement('input');
		var checkbox = document.createElement('input');
check.type = "checkbox";
check.name = "name[]";
check.value = id_scena + '///' + nome_scena;

			 document.getElementById('elimina_commenti_S').appendChild(riga);
			 document.getElementById('elimina_commenti_S').appendChild(nuovo_elemento1);
			 document.getElementById('elimina_commenti_S').appendChild(nuovo_elemento2);
			document.getElementById('elimina_commenti_S').appendChild(nuovo_elemento3);
			document.getElementById('elimina_commenti_S').appendChild(check);

					}
	
	document.getElementById("form_elimina_commenti").style.display='block';
	document.getElementById("sel_utente_commenti").style.display='none';
				}
				

            });   
	  
  }
  
  function elimina_tabelle()
  {  				
 var da_eliminare2=document.getElementById("elimina_scene_S").getElementsByTagName("td");
	  if(da_eliminare2.length > 0)
				{

		$("#elimina_scene_S td:nth-child(n+1)").remove();
		$("#elimina_scene_S tr:nth-child(n+2)").remove();
		$('input[name="name[]"]').remove()
				}
				
var da_eliminare1=document.getElementById("elimina_commenti_S").getElementsByTagName("td");
				if(da_eliminare1.length > 0)
				{
		$("#elimina_commenti_S td:nth-child(n+1)").remove();
		$("#elimina_commenti_S tr:nth-child(n+2)").remove();
		$('input[name="name[]"]').remove()
				}
document.getElementById('form_elimina_commenti').style.display='none';	  
document.getElementById('form_elimina_scene').style.display='none';	  
  }
    function mostra_form_elimina_scene (valore)
  {
	var mail= valore;
	document.getElementById("nome_utente").style.display='block';
	document.getElementById("nome_utente").innerHTML=valore.toString();
							

				/*var da_eliminare2=document.getElementById("elimina_scene_S").getElementsByTagName("td");
				if(da_eliminare2.length > 0)
				{

		$("#elimina_scene_S td:nth-child(n+1)").remove();
		$("#elimina_scene_S tr:nth-child(n+2)").remove();
		$('input[name="name[]"]').remove()
				}*/
				elimina_tabelle();
				
			$.ajax({
                 url: 'cerca_dati_elimina_scene.php',
                type: 'POST',
                data: {
               	 'email': mail,
                },  
				success: function(data)
				{
					var ultimo=data.split('///');
				for(var i=1;i< ultimo.length;i=i+3)
					{
					var nome_scena= ultimo[i];
					var data_scena= ultimo[i+1];
					var id_scena = ultimo[i+2]
			var riga = document.createElement('tr');
			 var nuovo_elemento1 = document.createElement('td');
			 var nuovo_elemento2 = document.createElement('td');
			 nuovo_elemento1.innerHTML=nome_scena.toString();
			 nuovo_elemento2.innerHTML=data_scena.toString();
			
			var check = document.createElement('input');
check.type = "checkbox";
check.name = "name[]";
check.value = id_scena + '///' + nome_scena;

			 document.getElementById('elimina_scene_S').appendChild(riga);
			 document.getElementById('elimina_scene_S').appendChild(nuovo_elemento1);
			 document.getElementById('elimina_scene_S').appendChild(nuovo_elemento2);
						document.getElementById('elimina_scene_S').appendChild(check);

					}
	
	document.getElementById("form_elimina_scene").style.display='block';
	document.getElementById("sel_utente_scene").style.display='none';
				}
				

            });   
	  
  }

function aggiorna_stile(menu) {
	
	if(menu == 'inserisci')
	{

console.log("menu");

		$('#inserisci_ut').removeClass("button-menu");
		$('#modifica_ut').removeClass("button-active");
		$('#elimina_ut').removeClass("button-active");

		$('#inserisci_ut').addClass("button-active");
		$('#modifica_ut').addClass("button-menu");
		$('#elimina_ut').addClass("button-menu");
		document.getElementById('menu_inserisci_utenti').style.display='block';
document.getElementById('form_elimina_commenti').style.display='none';	  
document.getElementById('form_elimina_scene').style.display='none';	  
	}
	if(menu == 'modifica')
	{
		$('#inserisci_ut').removeClass("button-active");
		$('#modifica_ut').removeClass("button-menu");
		$('#elimina_ut').removeClass("button-active");

		$('#inserisci_ut').addClass("button-menu");
		$('#modifica_ut').addClass("button-active");
		$('#elimina_ut').addClass("button-menu");
		document.getElementById('elenco_modifica').style.display='block';
document.getElementById('form_elimina_commenti').style.display='none';	  
document.getElementById('form_elimina_scene').style.display='none';	  
document.getElementById('form_modifica_div').style.display='none';	  
	}
	if(menu == 'elimina')
	
	{
		
		$('#inserisci_ut').removeClass("button-active");
		$('#modifica_ut').removeClass("button-active");
		$('#elimina_ut').removeClass("button-menu");

		$('#inserisci_ut').addClass("button-menu");
		$('#modifica_ut').addClass("button-menu");
		$('#elimina_ut').addClass("button-active");
		document.getElementById('menu_elimina_utenti').style.display='block';
		document.getElementById('form_elimina_commenti').style.display='none';	  
document.getElementById('form_elimina_scene').style.display='none';	  

}
	
}// JavaScript Document
$(document).ready(function()
{

	/*jQuery.validator.addMethod("username_regex", function(value, element) { 
		return this.optional(element) || /^[a-z0-9\.\-_]{3,30}$/i.test(value); 
		}, "Please choise an email address with only a-z 0-9.");*/
		
	$.validator.addMethod("name_regex", function(value, element) { 
		return this.optional(element) || /^[a-zA-Z]{3,30}$/i.test(value); 
		}, "Please choise a name with only a-z .");
		
		$.validator.addMethod("surname_regex", function(value, element) { 
		return this.optional(element) || /^[a-zA-Z]{2,30}$/i.test(value); 
		}, "Please choise a surname with only a-z .");
	
	$("#form_register_bs").validate(
	{
        rules:{
			'nome':{
			required: true,
			minlength: 3,
			name_regex: true,
			
			},
			'cognome':{
			required: true,
			minlength: 2,
			surname_regex: true,

			},
			'privacy':{
		 required: true
			},
		'email':{
			required: true,
			email: true,
			remote:{
				url: "validatorAJAX.php",
				type: "post"
				}
			},
		'pass1':{
			required: true,
			minlength: 8
			},
		'pass2':{
			equalTo: '#reg_pass1b'
			}
		},
        messages:{
			'nome':{
			required: "Il Tuo nome è obbligatorio!",
			minlength: "Immagino tu abbia un Nome di almeno 3 lettere!",
			name_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo nome!",
			},
			'cognome':{
			required: "Il Tuo cognome è obbligatorio!",
			minlength: "Immagino tu abbia un Cognome di almeno 2 lettere!",
			surname_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo cognome!",
			},
			'privacy':{
			required: "Devi accettare l'informativa sulla privacy!!",
			},
		'email':{
			required: "Il campo email è obbligatorio!",
			email: "Inserisci un valido indirizzo email!",
			remote: "Esiste già una registrazione per questo indirizo email!"
			},
		'pass1':{
			required: "Il campo password è obbligatorio!",
			minlength: "Inserisci una password di almeno 8 caratteri!"
			},
		'pass2':{
			equalTo: "Le due password non coincidono!"
			}
		}
	});
	
	
	$("#form_register_PS").validate(
	{
        rules:{
			'nome':{
			required: true,
			minlength: 3,
			name_regex: true,
			
			},
			'cognome':{
			required: true,
			minlength: 2,
			surname_regex: true,

			},
			'privacy':{
		 required: true
			},
		'email':{
			required: true,
			email: true,
			remote:{
				url: "validatorAJAX.php",
				type: "post"
				}
			},
		'password1':{
			required: true,
			minlength: 8
			},
		'password2':{
			equalTo: '#reg_password1'
			}
		},
        messages:{
			'nome':{
			required: "Il Tuo nome è obbligatorio!",
			minlength: "Immagino tu abbia un Nome di almeno 3 lettere!",
			name_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo nome!",
			},
			'cognome':{
			required: "Il Tuo cognome è obbligatorio!",
			minlength: "Immagino tu abbia un Cognome di almeno 2 lettere!",
			surname_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo cognome!",
			},
			'privacy':{
			required: "Devi accettare l'informativa sulla privacy!!",
			},
		'email':{
			required: "Il campo email è obbligatorio!",
			email: "Inserisci un valido indirizzo email!",
			remote: "Esiste già una registrazione per questo indirizo email!"
			},
		'password1':{
			required: "Il campo password è obbligatorio!",
			minlength: "Inserisci una password di almeno 8 caratteri!"
			},
		'password2':{
			equalTo: "Le due password non coincidono!"
			}
		}
	});
	
		$("#form_register_SU").validate(
	{
        rules:{
			'nome':{
			required: true,
			minlength: 3,
			name_regex: true,
			
			},
			'cognome':{
			required: true,
			minlength: 2,
			surname_regex: true,

			},
			'privacy':{
		 required: true
			},
		'email':{
			required: true,
			email: true,
			remote:{
				url: "validatorAJAX.php",
				type: "post"
				}
			},
		'password3':{
			required: true,
			minlength: 8
			},
		'password4':{
			equalTo: '#reg_password3'
			}
		},
        messages:{
			'nome':{
			required: "Il Tuo nome è obbligatorio!",
			minlength: "Immagino tu abbia un Nome di almeno 3 lettere!",
			name_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo nome!",
			},
			'cognome':{
			required: "Il Tuo cognome è obbligatorio!",
			minlength: "Immagino tu abbia un Cognome di almeno 2 lettere!",
			surname_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo cognome!",
			},
			'privacy':{
			required: "Devi accettare l'informativa sulla privacy!!",
			},
		'email':{
			required: "Il campo email è obbligatorio!",
			email: "Inserisci un valido indirizzo email!",
			remote: "Esiste già una registrazione per questo indirizo email!"
			},
		'password3':{
			required: "Il campo password è obbligatorio!",
			minlength: "Inserisci una password di almeno 8 caratteri!"
			},
		'password4':{
			equalTo: "Le due password non coincidono!"
			}
		}
	});// JavaScript Document// JavaScript Document	
	
	
			$("#form_modifica").validate(
	{
        rules:{
			'nome':{
			required: true,
			minlength: 3,
			name_regex: true,
			
			},
			'cognome':{
			required: true,
			minlength: 2,
			surname_regex: true,

			},
			
		'mail':{
			required: true,
			email: true,
			},
		'pass1':{
			required: true,
			minlength: 8
			},
		'pass2':{
			equalTo: '#reg_pass1'
			}
		},
        messages:{
			'nome':{
			required: "Il Tuo nome è obbligatorio!",
			minlength: "Immagino tu abbia un Nome di almeno 3 lettere!",
			name_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo nome!",
			},
			'cognome':{
			required: "Il Tuo cognome è obbligatorio!",
			minlength: "Immagino tu abbia un Cognome di almeno 2 lettere!",
			surname_regex: "Hai utilizzato caratteri non validi. Non credo che siano presenti nel tuo cognome!",
			},
			
		'mail':{
			required: "Il campo email è obbligatorio!",
			email: "Inserisci un valido indirizzo email!",
			},
		'pass1':{
			required: "Il campo password è obbligatorio!",
			minlength: "Inserisci una password di almeno 8 caratteri!"
			},
		'pass2':{
			equalTo: "Le due password non coincidono!"
			}
		}
	});// JavaScript Document// JavaScript Document	
		
	
});


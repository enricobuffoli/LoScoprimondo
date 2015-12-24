$(document).ready(function()
{		
	$("#form_login").validate(
	{
        rules:{
		'email':{
			required: true,
			},
		'password':{
			required: true
			}
		},
        messages:{
		'email':{
			required: "Il campo email è obbligatorio!",
			},
		'password':{
			required: "Il campo password è obbligatorio!"
			}
		}
	});
});
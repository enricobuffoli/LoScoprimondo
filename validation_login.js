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
			required: "Il campo email � obbligatorio!",
			},
		'password':{
			required: "Il campo password � obbligatorio!"
			}
		}
	});
});
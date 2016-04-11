$(document).foundation();

var recibirinfo;
var noCommas;
var lacedula;

function saveuser() {
		
		
		
		if ($('#checkbox1').is(":checked"))
		{
			// it is checked
			recibirinfo="Si";
		} else {
			recibirinfo="No";
		}
		noCommas = $('#cedula').val();
		lacedula = noCommas.replace(/[^\d\-]/g, '');
		  
		if ($('#nombre').val()=="") {
			alert('Ingresa tu nombre.'); 
		} else if ($('#apellido').val()=="") {
			alert('Ingresa tu apellido.'); 
		} else if (lacedula =="") {
			alert('Ingresa tu cedula.'); 
		} else if (($('#telefono1').val()=="")&&($('#telefono2').val()=="")) {
			alert('Ingresa tu telefono laboral o particular.'); 
		} else  if ($('#elemail').val()=="") {
			alert('Ingresa tu email.'); 
		} else if ($('#ciudad').val()=="") {
			alert('Ingresa tu ciudad.'); 
		} else if ($('#direccion').val()=="") {
			alert('Ingresa tu direccion.'); 
		} else {
			$('#casaricaform').hide();
			$('#guardando').show();
			
			//alert(lacedula);
			$.post('http://mister.com.py/casarica/form/check.php', {
					cedula:lacedula
			})
				.success(function(data) {
					//alert(data);
					if (data=="No"){

					// Save Data
			$.post('http://mister.com.py/casarica/form/save.php', {
					nombre:$('#nombre').val(),
					apellido:$('#apellido').val(),
					elemail:$('#elemail').val(),
					telefono1:$('#telefono1').val(),
					telefono2:$('#telefono2').val(),
					cedula:lacedula,
					direccion:$('#direccion').val(),
					ciudad:$('#ciudad').val(),
					recibir:recibirinfo
			})
				.success(function() {
					alert("Datos guardados, muchas gracias!");
					$('#casaricaform').show();
					$('#guardando').hide();
					$('#nombre').val("");
					$('#apellido').val("");
					$('#cedula').val("");
					$('#elemail').val("");
					$('#telefono1').val("");
					$('#telefono2').val("");
					$('#direccion').val("");
					$('#ciudad').val("");
					$('#checkbox1').prop('checked', true);
					$('#casaricaform').show();
					$('#guardando').hide();
				})
				.error(function(data) {
					alert(data);
					alert('Hubo un error de conexion.  Por favor intente de vuelta en unos minutos.'+data);
					$('#casaricaform').show();
					$('#guardando').hide();				
				})
				.complete(function() {
					$('#nombre').val("");
					$('#apellido').val("");
					$('#cedula').val("");
					$('#elemail').val("");
					$('#telefono1').val("");
					$('#telefono2').val("");
					$('#direccion').val("");
					$('#ciudad').val("");
					$('#checkbox1').prop('checked', true);
					$('#casaricaform').show();
					$('#guardando').hide();
				});
					// Save Data

					
					} else if (data=="Si") {
						alert('Este numero de cedula ya ha sido ingresado. Favor ingresar nuevos datos.');
						$('#casaricaform').show();
						$('#guardando').hide();
						$('#nombre').val("");
					}
				})
				.error(function(data) {
					alert('Hubo un error de conexion.  Por favor intente de vuelta en unos minutos.');
					$('#casaricaform').show();
						$('#guardando').hide();
				}); 

	}
}
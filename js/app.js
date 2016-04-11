$(document).foundation();

var recibirinfo;


function saveuser(nombre, apellido, cedula, elemail, telefono, direccion, ciudad) {
		if ($('#checkbox1').is(":checked"))
		{
			// it is checked
			recibirinfo="Si";
		} else {
			recibirinfo="No";
		}
		if ($('#nombre').val()=="") {
			alert('Ingresa tu nombre.'); 
		} else if ($('#apellido').val()=="") {
			alert('Ingresa tu apellido.'); 
		} else if ($('#cedula').val()=="") {
			alert('Ingresa tu cedula.'); 
		} else if (($('#telefono1').val()=="")||($('#telefono2').val()=="")) {
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
			$.post('http://mister.com.py/casarica/form/save.php', {
					nombre:$('#nombre').val(),
					apellido:$('#apellido').val(),
					elemail:$('#elemail').val(),
					telefono1:$('#telefono1').val(),
					telefono2:$('#telefono2').val(),
					cedula:$('#cedula').val(),
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
					$('#checkbox1').prop('checked', false);
					$('#casaricaform').show();
					$('#guardando').hide();
				})
				.error(function(data) {
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
					$('#checkbox1').prop('checked', false)
			}); 
	}
}
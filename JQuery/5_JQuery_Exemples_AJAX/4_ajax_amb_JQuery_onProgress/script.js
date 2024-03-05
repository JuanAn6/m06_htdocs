$(document).ready(function ()
{
	$('#nom').on('keyup',f_veureNoms);
});

function f_veureNoms(ev)
{
  let valor = $(ev.target).val();
	$.ajax({
		async: true, // redundant
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8', // valor x defecte sino s'indica
		data: {q:valor},
		dataType: 'text', // Intelligent Guess (xml, json, script, or html))
		processData: true, // valor x defecte, per transmetre dades String o que es poden transformar a String, false per transmetre altres formats
		success: function(dades){
			$('#sugg').html(dades);
		},
		type: 'post',
		url: './arrayNoms.php',
		xhr: function(){
			// get the native XmlHttpRequest object
			let xhr = $.ajaxSettings.xhr() ;
			// set the onprogress event handler
			xhr.upload.onprogress = function(event){ 
					console.log('progress', event.loaded/event.total*100) 
						if (event.lengthComputable) {
							let progres = 100 * event.loaded / event.total;
							console.info("Completat: " + progres + "%");
						} else {
							console.info("No es pot calcular el progrés");
						}
					} ;
			// set the onload event handler
			xhr.upload.onload = function(){ console.log('DONE!') } ;
			// return the customized object
			return xhr ;
		}
	});
}

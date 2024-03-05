$(document).ready(function ()
{
	$('#book').keyup(f_book_suggestion);
});

function f_book_suggestion()
{
  let book = $("#book").val();
  let data =  {'book_name':book};
  let arxiuDelServidor = './book-suggestion.php';
  /*
		DINS L'ARXIU .JS es fa la petició AJAX fent ús del framework JQuery, en concret el mètode POST.
		Paràmetres del mètode de JQuery post:
		1r:: ruta amb arxiu del servidor
		2n:: dades que s'envien cap al servidor
		3r:: funció que s'executarà en cas d'exit en la sol·licitud. 
			  El 1r paràmetre d'aquesta funció és la informació que retorna el servidor
			  
		Enllaç a la documentació oficial: https://api.jquery.com/jquery.post/ 
  */
	// OPCIÓ 1: ràpida i eficient, però no controla els errors
	/*
	$.post(arxiuDelServidor,data,function (dades) {
				$('#suggestion).html(dades);
	});
	*/
	// OPCIÓ 2: més elegant
	let peticio = $.post(arxiuDelServidor,data);
	
	peticio.done(exit);
	peticio.fail(fracas);
	peticio.always(function (){ console.info('l\'usuari ha deixat anar una tecla: '+$('#book').val().substr($('#book').length-1));});
	
	function exit(dades) {
		$("#suggestion").empty();		
		$("#llista").empty();		
		let array = dades.split(',');
		array.pop();
		$.each(array,function (i,ele){
			
			let item = $('<li>').text(ele);
			$("#suggestion").append(item);		
			
			let opt = $('<option>').text(ele);
			$("#llista").append(opt);		
		});
	
	}
	function fracas(error)
	{
		$("#suggestion").replaceWith($('<p>').text('S\'ha produït l\'error '+error.status+': '+error.statusText+' al fer la petició'));
	}
  
}
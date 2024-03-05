$(document).ready(function ()
{
  // quan es premi l'enllaç que hi hagi dins d'etiqueta amb id lletra-a:
  // crida AJAX amb mètode load
  // per defecte és GET a menys que es passin paràmetres amb la petició, llavors és POST
  // per passar paràmetres cal indicar-los com a 2n argument en el mètode load
  // més info sobre load a: http://api.jquery.com/load/
  $('#lletra-a a').click(function ()
  {
	$('#contingut').load('./Dades/diccionariA.html');
	$('#contingut').hide();
	// observar que no cal netejar amb el mètode empty com en els següents exemples
	// ja que es sobreescriu el contingut de l'etiqueta amb id "contingut"
	// aquesta crida es pot fer així degut a que la resposta és codi .html
	
  setTimeout(function () {
		$('dt').each (function (i,dt) {
			$(dt).text($(dt).text().capitalize());
		});
		$('#contingut').show();
	},1000);
  }); 
  // fi selecció lletra -A

  
  // quan es premi l'enllaç que hi hagi dins l'etiqueta amb id lletra-b :
  // crida AJAX amb mètode get
  $('#lletra-b a').click(function ()
  {
	  // més info sobre get a: https://api.jquery.com/jQuery.get/
		$.get('./Dades/diccionariB.xml',function (dades)
		{
			$('#contingut').empty();
			
			$('#contingut').append('<dl>');
			$(dades).find('paraula').each(function () 
			{
				let item = $(this);
				let c = '<dt>'+item.find('nom').text()+'</dt>';
				let definicio = item.find('definicio');
				definicio.find('entrada').each (function ()
				{
					c += '<dd>'+$(this).text()+'</dd>';
				}); // fi per cada entrada
				$('#contingut dl').append(c);
			}); // fi per cada element <paraula>
			
		}); // fi get
		
  }); // fi selecció lletra -B

  
  $('#lletra-c a').click(function ()
  {
		  $.getJSON('./Dades/diccionariC.json',function (dades)
		  {
			  $('#contingut').empty();
			  
			  $('#contingut').append('<dl>');
			  // ús del mètode each, passant com a primer paràmetre l'objecte sobre el qual iterar
			  $.each(dades, function (i, info) 
			  {
				  let c = '<dt>'+info['paraula'].capitalize()+'</dt>';
				  $.each ( info['definicions'], function (i, defi)
				  {
					  c += '<dd>'+defi+'</dd>';
				  }); // fi per cada definició
				  $('#contingut dl').append(c);
			  }); // fi per cada element de l'array
		  }); // fi getJson
  }); // fi selecció lletra -C

  
  $('#lletra-d a').click(function ()
  {
	let parametresEnviatsAlServidor =  {'lletra':$(this).text().trim()};
	
	let arxiuDelServidor = './Dades/diccionariD.php';
		$.get(arxiuDelServidor,parametresEnviatsAlServidor,function (dades) {
			 console.info(dades);
			  dades = JSON.parse(dades);
			  console.info(dades);
			  $('#contingut').empty();
			  
			  $('#contingut').append('<dl>');
			  $.each(dades, function (i, info) 
			  {
				  let c = '<dt>'+info.terme+'</dt>';
				  $.each ( info.definicions, function (i, defi)
				  {
					  c += '<dd>'+defi+'</dd>';
				  });
				  $('#contingut dl').append(c);
			  }); 
			
		});// fi get al servidor
  }); // fi selecció lletra -D
  
  $('#lletra-e a').click(function ()
  {
	let parametresEnviatsAlServidor =  {'lletra':$(this).text().trim()};
	let arxiuDelServidor = './Dades/diccionariE.php';
		$.post(arxiuDelServidor,parametresEnviatsAlServidor,function (dades) {
			$('#contingut').html(dades);
			$('dt').text($('dt').text().capitalize());
		});// fi post al servidor
  }); // fi selecció lletra -E
  
}); // fi document.ready

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}
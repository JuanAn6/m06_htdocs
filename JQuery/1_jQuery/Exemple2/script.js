document.addEventListener('DOMContentLoaded',f_main);
function f_main()
{
	$( "#entrada" ).keyup(function() {
		let tvalue = $( this ).val();
		console.log(tvalue);
	  })

//canviar l'aparença del botó segons si s'ha fet click sobre el checkbox
	  $('#accept').click(function() {
        // mètode is --> https://api.jquery.com/is/#is-selector
        if ($('#submitbtn').is(':disabled')) {
          $('#submitbtn').removeAttr('disabled');
          } else {
          $('#submitbtn').attr('disabled', true);
          }
	  });
                            

// selectors --> https://www.w3schools.com/jquery/jquery_ref_selectors.asp
	   let negreta = $('<b>').text('El que sigui');

	  // canviar l'aparença de cada <p>
	  $('body > p').each(function(){
			  let pdata = $(this).text();
			  let negre = $('<b>'+pdata+'</b>');
			  //$(this).html(negre); // per cada p es modifica el contingut (amb estil negreta)
			  //$(negreta).clone().appendTo(this); // copia a tots
			  //$(negreta).appendTo(this);// copia a l'últim, de fet es desplaça per cada p, fins l'últim
			  $(negre).appendTo(this); // afegir al final de cada p, el mateix contingut però en negreta
			});

	  // definició de les propietats per una etiqueta
	  let test = {
					id: "div",
					class: "divclass",
					css: {
					  "color": "Green"
					}
				 };
	  
	  // creació d'una nova etiqueta html amb algunes propietats
	  let div = $("<div>", test);
	  div.text("Etiqueta div afegida gràcies a JQuery");
	  $("body").append(div);
	  
	  // afegir dins un desplegable opcions amb valors procedents d'una variable JSON
	  colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };

	  $.each(colors, function(key, value) {
		  $('#desplegable').append(jQuery("<option>", {
			  value: key,
			  text: value
		  }));
	  });
	  setTimeout(esborrarOpcions,30000)
	  function esborrarOpcions()
		{
		$('#desplegable')
			.empty()
			.append('<option selected="selected" value="test">White</option>');
		}
	// mètodes per esborrar contingut: http://api.jquery.com/category/manipulation/dom-removal/
}
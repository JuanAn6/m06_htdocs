document.addEventListener('DOMContentLoaded',f_main);
function f_main()
{
	setTimeout(function (){
	  console.info('Passats 2 segons: canvi d\'estil del 1r item li');
	  $('li:first').css({
				  'color':'red',
				  'font-family':'Tahoma'
				  }); //per declarar més d'una propietat
	  // /* $('#hola').css('color','red'); // per declarar 1 sola propietat */
	  console.info('Passats 2 segons: canvi text dels elements amb classe .nomCssClass');
	  $('.nomCssClass').text('S\'ha canviat el text d\'aquests elements.');
	  },2000);
	  
	// setTimeout(function (){
	  // console.info('Passats 2 segons: afegir 2 items a la llista');
	  // let  nou = document.createElement("li");
	  // let  txt = document.createTextNode('Desenvolupament d\'Aplicacions Web (DAW)');
	  // nou.setAttribute('id','daw');
	  // nou.appendChild(txt);
	  // document.querySelector('ul').appendChild(nou);
	  // /*Codi anterior amb JS vanilla i Codi posterior amb JQuery */
	  // nou = $('<li>').text('Desenvolupament d\'Aplicacions Multiplataforma (DAM)');
	  // nou.prop('id','dam');
	  // $('ul').append(nou);
	  // },2000);
	  
	// setTimeout(function (){
		  // console.info('Passats 2 segons: modificar tots els h2');
		  // $('h2').html('<i><u>Inicis</u></i> d\'us de la llibreria JQuery');
	// },2000);
  
	// setTimeout( function () {
		  // console.info('Passats 3 segons: modificar tots els h2');
      // console.info($('h2 > i').length);
      // console.info($('h2 > i'));
		  // let  que = $('h2 > i').html();
      // console.info(que);
		  // /* Selector pare > fill, més info a: https://api.jquery.com/child-selector/ */
		  // $('h2').not(':eq(2)').html(que);
		  // $('h2').eq(2).html('.....'); // i a l'inrevés 
	// },3000);

	// setTimeout(function (){
		  // console.info('Passats 2 segons: el 1r item de la llista passa al final');        
		  // let  llista = $('ul');
		  // $('ul li:first').appendTo(llista);
		  // llista.append($('ul li:first'));// append d'un element que ja existeix el DOM, és un move, perquè desplaça l'element de lloc
		  // /**
		   // append()  vs.  appendTo()
			// $(afegir aquí).append(El contingut que es vol afegir);

			// $(El contingut que es vol afegir).appendTo(afegir aquí);

			// Tenen els mètodes anàlegs  .prepend() i prependTo() 
		  // **/
		  // console.info("Capturar dades de la web amb el mètode html");
		  // console.info(llista.html()); // innerHTML
		  // console.info("Capturar dades de la web amb el mètode text");
		  // console.info(llista.text()); // textContent
		  // let elem3 = $('li').eq(2);
		  // console.info(elem3.html()); //identic que .text() en aquest cas
	  // },2000);              
	  
	// setTimeout(function (){
		  // console.info('Passats 2 segons: ');
		  // let  h2s = $('h2'); 
		  // let  d = $('h2').eq(1);
		  // d.append('ACDC');
		  // let  x = $('a').next('h2'); //  selecció de tots els germans de <a> i que sigui <h2>, ja que next es pot fer servir sense paràmetre
		  // console.info(x);
		  // let  list =$('ol');
		  // $('h2').last().before(list); // en l'últim h2 , abans d'aquest, insereix list
	// },2000);
}
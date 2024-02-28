document.addEventListener('DOMContentLoaded',f_main);
function f_main()
{
  // creació d'un object HTML
	let frase = $('<p>',{
						id:'frase',
						text:'paràgraf generat amb jQuery, que estava visibility=hidden'
						});
  // fer ocult l'objecte                                
	$( frase ).css( "visibility", "hidden" );
  // afegir l'objecte a la web
	$(document.body).append(frase);

  // creació d'un object HTML
	let frase2 = $('<div>',{
							id:'frase2',
							text:'paràgraf 2 generat amb jQuery, que estava display=none',
							css: {display:"none",backgroundColor:'cyan'}
						});
  // afegir l'objecte a la web
	$(frase2).appendTo(document.body);
	
  // passats 3 segons fer-los visibles
	setTimeout(function ()
	{
		frase2.show();
		$(frase).css("visibility","visible");
		
		// afegir un botó per controlar la visibilitat de la frase 2
		let boto = $('<input>',{
						id:'canvi2',
						type:'button',
						value:'change display',
						});
		// afegir un escoltador al botó
		$(boto).on('click',function ()
		{
			if ($('#frase2').css('display') == 'none')
			{
				$('#frase2').css('display','block');
			} else
			{
				$('#frase2').css('display','none');
			}
		});
		// afegir el botó
		$(document.body).append(boto);
		
		// creació del botó per controlar la visibilitat de frase
		boto = $('<input>',{
						id:'canvi',
						type:'button',
						value:'change visibility',
						});
		$(boto).click(function ()
		{
			//console.info('has fet click',' ',$('#frase').css('display'));
      if ($('#frase').is(':visible'))
			{
				$('#frase').hide();
			} else
			{
				$('#frase').show();
			}
		});
		// afegir el botó
		$('#frase').after(boto);		
	},3000);
	
}
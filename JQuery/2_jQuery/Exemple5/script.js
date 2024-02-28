document.addEventListener('DOMContentLoaded',f_main);
function f_main()
{
  // creació d'un object HTML
	let frase = $('<p>',{
						id:'frase',
						text:'paràgraf generat amb jQuery',
						css: {'height':'300px',backgroundColor:'blue'}
						});
  // afegir l'objecte a la web
	$(document.body).append(frase);

  // creació d'un object HTML
	let frase2 = $('<div>',
	{
		id:'frase2',
		text:'div generat amb jQuery',
		css: {backgroundColor:'cyan','height':'300px'}
	});
  // afegir l'objecte a la web
	$(frase2).appendTo(document.body);

	// setTimeout(function ()
	// {
	// 	frase.hide("fast");
	// 	$(frase2).hide("slow");
	// },2000);
	
	// setTimeout(function ()
	// {
	// 	$(frase2).text('Apareixo lentament, en 5 segons');
	// 	frase2.show(5000);
	// 	$(frase).text('Apareixo "slow"');
	// 	$(frase).show("slow");
	// },5000);
	
	// setTimeout(function () {
	// 	/* Mostrar o amagar els elements seleccionats.*/
	// 	$(frase).toggle(false); // false -> per amagar ; true -> per mostrar
	// 	$(frase2).toggle(false);
	// },2000);
	
	// setInterval(function ()
	// {
	// 	frase2.toggle(1000); // duració de la transició
	// 	$(frase).toggle(1000);
	// },1000);

	
}
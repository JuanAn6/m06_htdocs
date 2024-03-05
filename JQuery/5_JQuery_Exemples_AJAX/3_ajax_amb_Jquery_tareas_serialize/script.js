$(document).ready(function ()
{
	$('body').append('<ul id="tareas">');
  f_carregarTasques();
	$('#boto').on('click',f_alta);
	 
});   
// -------------------------------------------------------------------

function f_alta(ev)
{
	ev.preventDefault();
	let nombre = $('input[name="nombre"]').val();
	if (nombre.length<5)
	{
      let p = $('<p>',{id:'avis'}).text('El nom de la tasca ha de tenir mínim 5 caràcters');
      $('body').append(p);
      setTimeout(()=> $('#avis').remove(), 2000);
	} else {
		if (nombre.indexOf("'")!=-1)
		{
			console.info("Gestió dels simbols apostrof, perquè es desin bé dins la BD!");
			console.info(nombre.replace(/'/g,"\\'"));
			 $('input[name="nombre"]').val(nombre.replace(/'/g, "\\'"));
		}
    f_desar();
    
	}
}
// -------------------------------------------------------------------
function f_desar()
{
 let url = "./tarea_nueva.php"; // L'script on es fa la petició.
 let dades = $('form').serialize();
 console.info('Com s\'envien les dades al servidor  ',dades);
 // ús del mètode ajax per fer la petició:
  $.ajax({
		 type: "POST",
		 url: url,
		 data: dades, // Adjuntar els camps del formulari enviat.
		 success: function(data)
		 {
			  if (data)
			  {
				  let p = $('<p>',{id:'avis'}).text('L\'alta s\'ha efectuat amb exit! Enhorabona!');
				  $('body').append(p);
          setTimeout(()=> 
          {
              $('#avis').remove();
              //f_netejarLlista();
              $('ul').empty();
              f_carregarTasques();
          }, 2000);
			  } else {
					let p = $('<p>').text('Error al fer l\'alta!');
					 $('body').append(p);
					setTimeout(function () {
						$('form').reset();
					},5000);
			  }
		},
		error: function(error)
		{
			$('body').append('<p>','S\'ha produït un error :'+error.responseText);
		}
	   });
}
// -------------------------------------------------------------------
function f_carregarTasques()
{
  let peticio = $.getJSON('./tasques.php');
	
	peticio.done(function(data){  
  console.info(data);
        if (data.length==0)
        {
            let avis = $('<p>',{id:'avis'}).text('Encara no hi ha cap tasca');
            $('form').append(avis);
            setTimeout(()=> $('#avis').remove(), 2000);
        } else {
          
          $.each(data, function(i, tarea){  
            // tarea.nombre és equivalent a data[i].nombre
            let element = $("<li>").text(tarea.NOMBRE + " -  a las " + tarea.HORA+" horas.").appendTo("ul#tareas");  
          });
        }
	   });
	  peticio.fail(function (error)
	  {
		  alert('S\'ha produït un error: inspeccionar la consola');
		  console.info(error);
		  $('body').append('<p>',error.responseText);
	  });
}
$(document).ready(function() {
      console.clear();
            $("p").eq(0).on("click", function(){
               $("p").next().text('Coi!');
               let nouElement = $("<div>").text("Has fet Click.");
               nouElement.appendTo($("p").eq(1));
            });
/*
EXPLICACIÓ DE LES LÍNIES DE CODI:
1. equivalent en js a document.addEventListener('DOMContentLoaded',....);    El fet de fer servir una funció anònima és totalment opcional.
2. netejar la consola quan el document web està carregat
3. afegir en el primera etiqueta 'p' un escoltador per l'esdeveniment click
4. dins de l'element que hi ha després de la primera 'p' modificar el text actual per el text "Coi!"
5. definició d'una variable textual
6. afegir dins del la segona etiqueta 'p' el 'nouElement'
*/            
            $("p").eq(0).on("dblclick", function(){
            console.info('prem2') 
            let nouElement = jQuery('<a>', {
                                    "id": 'bah',
                                    href: 'http://google.com',
                                    "title": 'Become a Googler',
                                    rel: 'external',
                                    target: '_blank',
                                    'text': 'Acabes de fer un doble click sobre la zona p'
                                    });
               jQuery("p").eq(0).next().append(nouElement);
            });
/*
EXPLICACIÓ DE LES LÍNIES DE CODI:
17. afegir en el primera etiqueta 'p' un escoltador per l'esdeveniment doble click
19. creació d'una nova variable. S'ha fet ús de la notació extensa "jQuery" per indicar instruccions d'aquest framework, enlloc del símbol abreujat "$". És equivalent posar "$" que "jQuery".
Aquesta nova variable és una etiqueta 'a'.
El primer paràmetre ha de ser l'etiqueta <a>.
El segon paràmetre l'objecte json amb els atributs que es volen indicar per l'etiqueta.
20-25. Observar que els atributs es poden indicar de manera literal, amb comentes simples o dobles. El valors no!
27. afegir en l'etiqueta després de les etiqueta 'p', el 'nouElement'

El mètode .append() afegeix el contingut com l'últim fill (Per afegir el contingut com el primer fill emprar .prepend()).

Diferència entre .append() i .appendTo()
nouElement.appendTo(desti);
desti.append(nouElement);

Observació: existeixen dues línies en les quals es crea la variable nouElement (5 i 19)
        
No existeix cap tipus de conflicte perquè són locals a les funcions anònimes per gestionar els escoltadors dels esdeveniments click i dblclick.        
*/
      modificarEnllac();
      setTimeout(modificarEnllac,15000);
});

function modificarEnllac()
{
    console.info($('#bah').length);
    console.info($('p').length);
    if ($('#bah').length) 
    {
        console.info('aquí no entra mai');
        $('#bah').attr('href','https://jquery.com/');
        // TODO: després veure que pasa amb "prop" enlloc de "attr"
        // és més recomanable usar "prop"
        // només pot passar en comptades situacions que "prop" no ens serveixi i s'hagi d'usar "attr"
        $('#bah').text('Pàgina oficial de jquery');
    }
}
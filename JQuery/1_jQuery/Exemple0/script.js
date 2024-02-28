let  tempo;
let  i=0;
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====*/

// COM TREBALLAR AMB JQUERY
// OPCIÓ 1:
$(document).ready(function() {
   //Aquí van totes les accions del document.
   console.clear();
   console.log("El document està preparat 1");  
});

// OPCIÓ 2: Es pot abreviar:  
$( function () {
  console.log("El document està preparat 2");
  } );
  
// OPCIÓ 3: També se li pot passar el nom d'una funció com a paràmetre:  
$(document).ready(f_readyFn);

function f_readyFn()
{
        // codi a executar quan el document estigui llest

        setTimeout(function (){
              console.info('Passats 5 segons: ');
              $('#hola').text('Text generat via la llibreria jQuery!');
              },5000);
        
        tempo = setInterval(agafarPAragraf,500)
        
}  


function agafarPAragraf()
{
    let  pars = $('p');  // equivalent a getElementsByTagName --> array   
    if (i == 4)
    {
        clearInterval(tempo)
    }
    console.log($(pars).eq(i).text()); // eq(i) <==> getElementsByTagName[i]
    i++;  
}
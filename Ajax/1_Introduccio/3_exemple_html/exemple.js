document.addEventListener('DOMContentLoaded',
   function (){
			document.getElementById('botó').addEventListener('click',pas1);
	});
// pas 1
function pas1()
{
// Creació de l'objecte XMLHttpRequest
    let objecteAjax = false;
    try {
        objecteAjax = new ActiveXObject("Msxml12.XMLHTTP");
        // per a navegadors diferents a Internet Explorer, ANTERIORS DINS LA FAMILIA
        } 
    catch (e)
        {
          try {
                objecteAjax = new ActiveXObject("Microsoft.XMLHTTP");
                // pel navegador Internet Explorer
              }
          catch (e)
          {
                objecteAjax = false;
                document.getElementById('avisos').innerHTML = e.message+'<br>';
          }
          document.getElementById('avisos').innerHTML += e.message+'<br>';
        }
    if (!objecteAjax && typeof XMLHttpRequest!='undefined')
    {
        objecteAjax = new XMLHttpRequest();
    }
    // Una vegada creat l'objecte XMLHttpRequest obrim la connexió i enviem la petició
    objecteAjax.open("GET","./experiment.html");
    
    objecteAjax.onreadystatechange = function () {
		if (objecteAjax.readyState == 4 && objecteAjax.status == 200) 
		{		// els valors 4 i 200 són els faborables
			// responseText és un tipus de dada String                                
			document.getElementById('afegit').innerHTML = objecteAjax.responseText;
		}
        document.getElementById('avisos').innerHTML += "Estat actual: "+objecteAjax.readyState+" "+objecteAjax.statusText+'<br>';
	 };
    objecteAjax.send();
    document.getElementById('avisos').innerHTML += "Esperant que finalitzi el procés de càrrega de la pàgina<br>";
    document.getElementById('avisos').innerHTML += "Estat actual: "+objecteAjax.readyState+" "+objecteAjax.statusText+'<br>';
}
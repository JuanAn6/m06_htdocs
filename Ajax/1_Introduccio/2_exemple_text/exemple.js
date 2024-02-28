document.addEventListener('DOMContentLoaded',descarregarArxiu);
// variable global
let xhr;
/*===================================================================*/
// s'invocarà quan estigui la finestra carregada
/*===================================================================*/
function descarregarArxiu()
{
	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
		// si és vàlid fer servir aquesta classe
		// classe moderna
		xhr = new XMLHttpRequest();
		// ja tenim l'objecte inicialitzat
	} else if (window.ActiveXObject) { // IE 8 and older
		// classe suportada per navegadors antics
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
		// hem inicialitzat l'objecte
	}
    xhr.open("GET", './arxiu.txt', true);
    /* 
	Paràmetre del mètode open:
	- quin mètode es farà servir, 
    - sobre quina pagina es farà la peticio, 
    - si la petició és asincrona; EL VALOR PER DEFECTE ÉS true en AJAX
    */
	 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
	 
	 // es pot fer la petició al servidor sense necessitat de passar cap informació, com aquest cas
	 // de fet només en les peticions POST es passen paràmetres
	 
	 xhr.onreadystatechange = actuar;
     xhr.send();
	 
}

/*===================================================================*/
//S'executarà en el servidor
/*===================================================================*/
function actuar()
{
	/* AQUESTA FUNCIÓ ES CRIDA VARIES VEGADES FINS QUE L'ESTAT ÉS EL CORRECTE
	*/
	console.info('canviant l\'estat....a....'+xhr.readyState);
	if (xhr.readyState == 4) 
	{
	// readyState és un atribut de xhr i pot pendre diversos valors
		if (xhr.status == 200) // els valors 4 i 200 són els faborables
			{
			// fer les accions que ens interessi
			// per exemple mostrar la resposta del servidor
			// ara si que ja s'actua! posant a la pàgina la resposta del servidor
			document.getElementById('resposta').innerHTML += xhr.responseText;
			}
	} else
	{
		let txt ='Estat: '+xhr.readyState;
		switch (xhr.readyState)
		{
		case 0: txt +=' No està inicialitzat l\'objecte<br>';break;
		case 1: txt +=' S\'ha instanciat l\'objecte<br>';break;
		case 2: txt +=' S\'està enviant el valor de l\'objecte al servidor<br>';break;
		case 3: txt +=' S\'estan reben les dades processades del servidor<br>';break;
		}
		document.getElementById('resposta').innerHTML += txt;
	}
}
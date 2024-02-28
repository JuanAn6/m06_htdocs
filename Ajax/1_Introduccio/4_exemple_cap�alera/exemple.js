
document.addEventListener('DOMContentLoaded',function (){
  document.getElementById('boto').addEventListener('click',function (){
			  carregar('./exemple.html');
			  });
});
function carregar(url) {
  let xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		tractamentDades(this);
	}
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function tractamentDades(peticio) {
	let sortida = document.getElementById("resultat");
	sortida.innerHTML = peticio.responseText;
	sortida.innerHTML += '<br> Capçalera del contingut de la pàgina: ';
	sortida.innerHTML += '<br><b>Tipus:</b> '+peticio.getResponseHeader("Content-Type");
	sortida.innerHTML += '<br><b>Dimensió:</b> '+peticio.getResponseHeader("Content-Length");
	sortida.innerHTML += 'bytes <br><b>Servidor:</b> '+peticio.getResponseHeader("Server");
	sortida.innerHTML += '<br><b>Última modificació:</b> '+peticio.getResponseHeader("Last-Modified");
	/*
	
	getAllResponseHeaders()	Returns header information
	getResponseHeader()	Returns specific header information
	status:	Returns the status-number of a request
		200: "OK"
		403: "Forbidden"
		404: "Not Found"
	statusText:	Returns the status-text (e.g. "OK" or "Not Found")

	*/
}
             
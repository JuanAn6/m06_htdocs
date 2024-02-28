let book; // valor indicat en la caixa de text
document.addEventListener('DOMContentLoaded',funcioPrincipal);
function funcioPrincipal()
{
  document.getElementById('book').addEventListener('keyup',book_suggestion);
  
}

function book_suggestion()
{
    book = document.getElementById("book").value;
    let data = "book_name=" + book;
    enviarPeticio(data);
}

function enviarPeticio(data) {
  if ("Promise" in window) {
	let url = './servidor.php';

	fetch(url,{
		method: 'POST',
		headers: {"Content-Type":"application/x-www-form-urlencoded"},
		mode: 'cors',
		cache: 'default',
		body: data,
	}).then( function (resposta) {
		return resposta.json();
	}).then (function (a){

		console.log(a);
		if (a.length==0){
			tElementById("suggestion").innerHTML = "No hi ha suggeriments per '<b>"+book+"</b>'";
		}else{
			if (document.getElementById('llista').children.length!=0){
				while (document.getElementById('llista').children.length>0)
				document.getElementById('llista').lastElementChild.remove();
			}
			if (document.getElementById('suggestion').children.length!=0){
				document.getElementById('suggestion').textContent = '';
			}
			
			a.forEach( function (e)
			{
				// OPCIÓ 1: col·locar la sortida en option's datalist
				let o = document.createElement('option');
				let t = document.createTextNode(e.book_name);
				o.appendChild(t);
				document.getElementById('llista').appendChild(o);
				// OPCIÓ 2: col·locar la sortida en li's d'una ol	
				let l = document.createElement('li');
				t = document.createTextNode(e.book_name);
				l.appendChild(t);
				document.getElementById("suggestion").appendChild(l);
			});
		}
      
      }).catch (function (err){
          console.error("Error: "+err);
      });
      
    } else {
      alert("Aquest navegador no soporta Promesas.");
    }    
}    
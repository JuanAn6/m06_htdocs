document.addEventListener('DOMContentLoaded',function ()
{
	console.log('Abans de la petició');
    let promesa = fetch('./cotxes.xml',{
		method:'POST',
		});
    
    promesa.then(function (info) {
            return info.text();
    }).then(function (info2) {
				console.info(info2);
				let dades = new window.DOMParser().parseFromString(info2, "text/xml");
				omplirSelect(dades);
    }).catch(function(error)
	{
		console.info("ERROR: "+error);
	});

    console.log('després de la petició');

});
    
function omplirSelect(valors)
{
	let llista = document.getElementById('llista');
	let marques = valors.getElementsByTagName('marca');
  console.info(marques);
	let m = Object.values(marques);  
  console.info(m[i]);
	m.forEach( function (e,i) { m[i] = e.firstChild.nodeValue});
	for (i in m )//let i=0;i<m.length;i++)
	{
		  let op = document.createElement('option');
		  let t = document.createTextNode(m[i]);
		  op.setAttribute('value',m[i]);
		  op.appendChild(t);
		  llista.appendChild(op);
	}

}
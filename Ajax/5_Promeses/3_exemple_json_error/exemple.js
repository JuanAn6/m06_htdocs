document.addEventListener('DOMContentLoaded', _ => {
	document.getElementById('botó').addEventListener('click',pas1);
});

// pas 1
function pas1()
{
    console.log('Abans de la petició');
    fetch('https://reqresxxx.in/api/users',{
		method: 'GET',
		mode: 'cors', 
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
          },
		redirect: 'follow',
		referrerPolicy: 'no-referrer', // no-referrer, 
		//body: JSON.stringify(data) 
		// Per enviar dades al servidor
		// el tipus ha de ser identic a l'indicat a "Content-Type" header
		})
	.catch((error_produït) => {
            console.log('dins del catch');
            console.log(error_produït);
            document.getElementById('afegit').innerHTML = error_produït;
        });
  console.log('después de la petició');
}

/**
Molta més informació a:
	https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

**/
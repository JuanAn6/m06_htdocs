document.addEventListener('DOMContentLoaded',function ()
{
    let promesa = fetch('./logo.gif',{
		method:'POST',
		});
    
    promesa.then(function (info) {
            return info.blob();
    }).then(function (infoBlob) {
				let img = URL.createObjectURL(infoBlob);
				document.getElementById('imatge').src=img;
    }).catch(function(error)
	{
		console.info("ERROR: "+error);
	});

});

/**
El contingut es pot recuperar amb:

arrayBuffer()
blob()
json()
text()
formData()

**/
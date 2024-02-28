document.addEventListener('DOMContentLoaded',descarregarArxiu);
function descarregarArxiu()
{
    if ("Promise" in window) {
        console.log('Abans de la petició');
        let url = './arxiu.txt';
                
            fetch(url,{
                    method: 'GET',
                    headers: {"Content-Type":"application/x-www-form-urlencoded"},
                    mode: 'cors',
                    cache: 'default',
                }
            ).then( function (resposta) 
            {
                 return resposta.text();
            /**
            El contingut es pot recuperar amb diferents mètodes:
            arrayBuffer()
            blob()
            json()
            text()
            formData()
            **/
            }).then (function (data)
            {
                 document.getElementById('resposta').innerHTML = data;
            }).catch (function (err)
            {
                console.info("S'ha produït un ERROR: "+err);
            });
            
            console.log('después de la petició');
          } else {
            alert("Aquest navegador no soporta Promesas.");
          }    
}

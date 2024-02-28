document.addEventListener('DOMContentLoaded',function (){
  document.getElementById('boto').addEventListener('click',function (){
			  carregar('./exemple.html');
			  });
});

function carregar(url) {
	console.log('Abans de la petició 1');
    let isLoading = true;
    fetch(url).then( function (resposta) {
          console.log('dins del then 1');
          console.log(resposta);
          return resposta.text();
        }).then( function (dades)		{
          console.log('dins del then 1, sub 1');
          //console.log(dades);
          document.getElementById('resultat').innerHTML = dades;
        }).catch( function (resposta) {
          console.log('dins del catch 1');
          console.log(resposta);
        }).finally( function () {
          console.info('dins del finally 1, sempre es passarà per aquí, una vegada s\'hagi rebut resposta, no abans');
          isLoading = false; // per aturar una animació de "rodeta...pensant"
        });
// finally() - ¡NO TÉ PARÀMETRES! - NO es soportat por alguns navegadors
		
  console.log('després de la petició 1');

	console.log('Abans de la petició 2');
    fetch('https://reqres.in/api/users',{
        method: 'GET',
		}).then( function (info) {
    if (info.ok)
    {
        console.log('dins del primer then - petició 2');
        console.log(info);
        console.log("status: ",info.status);
        console.log("url: ",info.url);
        //return into.data; // Error fet a proposit
      return info.json();
    }}).then( function (info) {
        console.log('dins del SEGON then - petició 2');
        document.getElementById('resultat2').innerHTML = JSON.stringify(info.data);
    }).catch( function (error) {
      console.info("ERROR petició 2: "+error);
    });
    
  console.log('després de la petició 2');
  
}
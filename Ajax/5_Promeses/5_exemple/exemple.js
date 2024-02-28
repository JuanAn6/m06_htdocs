document.addEventListener('DOMContentLoaded',function (){
	document.getElementById('bot1').addEventListener('click',f_p1);
	document.getElementById('bot2').addEventListener('click',f_p2);
	document.getElementById('bot3').addEventListener('click',f_p3);
});

function f_p1()
{
	// tres then() sobre la mateixa promesa, sense encadenar, doncs, són totalment independents els 3 "then"'s, a part que no retornen res
    console.log('Abans de la petició 1');
    
    let promise = fetch('https://reqres.in/api/products');
    
    promise.then( function (info) {
            console.log('dins del 1r then - petició 1');
			document.getElementById('f1').innerHTML = info+' -- '+JSON.stringify(info)+'<br>';
    });
    
    promise.then( function (info) {
            console.log('dins del 2n then - petició 1');
			document.getElementById('f1').innerHTML += info+' -- '+JSON.stringify(info)+'<br>';
    });
    
    promise.then( function (info) {
            console.log('dins del 3r then - petició 1');
            document.getElementById('f1').innerHTML += info+' -- '+JSON.stringify(info)+'<br>';
    });

    console.log('després de la petició');
    console.log('-----------------------------------------------------');
}

function f_p2()
{
	// tres then() encadenats (sense return, a les següents no arriba res)
    console.log('Abans de la petició 2');
    
    let promise = fetch('https://reqres.in/api/products')
    .then(function (info2) {
            console.log('dins del 1r then - petició 2');
            document.getElementById('f2').innerHTML = info2+' -- '+JSON.stringify(info2)+'<br>';
    })
    .then(function (info2) {
            console.log('dins del 2n then - petició 2');
            document.getElementById('f2').innerHTML += info2+' -- '+JSON.stringify(info2)+'<br>';
    })
    .then(function (info2) {
            console.log('dins del 3r then - petició 2');
            document.getElementById('f2').innerHTML += info2+' -- '+JSON.stringify(info2)+'<br>';
    });

    console.log('després de la petició 2');
    console.log('-----------------------------------------------------');
}

function f_p3()
{
// tres then() encadenats, cada un modifica el valor que envia al següent
    console.log('Abans de la petició 3');
    let promesa = fetch('https://reqres.in/api/products');
    
    promesa.then(function (info3A) {
            console.log('dins del 1r then - petició 3');
            document.getElementById('f3').innerHTML = info3A+' -- '+JSON.stringify(info3A)+'<br><br>';
            return info3A.json();
            //return new Promise.resolve(info3A.json())
    })
    
    .then(function (info3B) {
            console.log('dins del 2n then - petició 3');
            document.getElementById('f3').innerHTML += info3B+' -- '+JSON.stringify(info3B)+'<br><br>';
            return info3B.data;
    })
    
    .then(function (info3C) {
            console.log('dins del 3r then - petició 3');
            document.getElementById('f3').innerHTML+= JSON.stringify(info3C[0])+'<br>';
    });

    console.log('després de la petició 3');

// Més informació a: https://javascript.info/promise-chaining
}
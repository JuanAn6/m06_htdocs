/*
Com utilitzar Async/Await a JavaScript per gestionar  Promises.
---------------------------------------------------------------------
La sintaxi async/wait és una sintaxi especial creada per ajudar-vos a treballar amb objectes de promesa.
Fa que el vostre codi sigui més net i clar.
Quan gestioneu una Promesa, heu d'encadenar la trucada a la funció o variable que retorna una Promesa utilitzant els mètodes then/catch.

El codi d'un petició amb fetch() realment no és difícil d'entendre, però el podem fer encara més bonic eliminant les cadenes .then() i .catch(), que també elimina les funcions de "devolució de trucada".

La paraula clau Espera (The Await Keyword)
La paraula clau await bàsicament fa que JavaScript esperi fins que l'objecte Promise es resol o es rebutja.
En lloc d'haver d'utilitzar el patró de "devolució de trucada" dins del mètode then(), podeu assignar la promesa complerta a una variable com aquesta:
*/
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await response.json();
console.log(json)
/*
Utilitzeu Await en lloc de l'encadenament del mètode .then().
La paraula clau await es col·loca abans de la crida a una funció o variable que retorna una promesa.
Fa que JavaScript s'esperi fins que l'objecte de promesa es resolgui abans d'executar el codi a la línia següent.

Ara, si executeu el codi anterior, és possible que obtingueu un error com aquest:

SyntaxError: await només és vàlid en funcions asíncrones i en els cossos de nivell superior dels mòduls
Aquest error es produeix perquè la paraula clau await s'ha d'utilitzar dins d'una funció asíncrona o d'un mòdul.

La paraula clau Async
---------------------------------------------------------------------
Per crear una funció asíncrona, heu d'afegir la paraula clau async abans del nom de la funció.
Mireu la línia 1 de l'exemple següent:
*/
async function runProcess() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log(json)
}

runProcess();
/*
Creació d'una funció asíncrona
---------------------------------------------------------------------
Aquí, s'ha creat una funció asíncrona anomenada runProcess().
Aleshores podem executar la funció asíncrona cridant-la, igual que una funció normal.

Com gestionar els errors a Async/Await
Per gestionar un error que es pugui produir des de la sintaxi async/wait, podeu utilitzar el bloc try/catch per detectar qualsevol rebuig de la vostra promesa.

Vegeu l'exemple següent:
*/
async function runProcess() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

runProcess();
/*
COMPARACIÓ
Comparació de codi Promise vs. Async/Await
---------------------------------------------------------------------
A la versió async/wait, el resultat de la promesa s'assigna directament a una variable. A la versió estàndard de promesa, el resultat de la promesa es passa com a argument al mètode .then().
La majoria dels desenvolupadors prefereixen la versió asíncrona/espera, ja que sembla més senzilla.

Com usar Async/Await en IIFE i funcions "Arrow"/fletxa
---------------------------------------------------------------------
Una expressió de funció invocada immediatament (IIFE=Immediately Invoked Function Expression) és una tècnica utilitzada per executar una funció immediatament tan bon punt la defineixes.
A diferència de les funcions i variables habituals, els IIFE s'eliminaran del procés en execució un cop s'executin.
A part de la funció estàndard, també podeu fer un IIFE asíncron. Això és útil quan només necessiteu executar la funció asíncrona una vegada:
*/
(async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();

//Amb notació fletxa:
const runProcess = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

runProcess();
/*
Per què utilitzar la sintaxi async/wait?
La sintaxi async/wait permet gestionar promeses sense utilitzar l'encadenament del mètode .then() i .catch().
Aquest avantatge és important quan teniu un procés complex després de la liquidació de la promesa.

Tornant al nostre exemple anterior, suposem que teniu una instrucció condicional dins del mètode .then() de la següent manera:
*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    if (json.userId == 1) {
      json.completed == false;
    } else {
      json.completed == true;
    }
  })
  .catch(error => console.log(error));
 /*
Aquí, podeu veure que la funció de devolució de trucada que accepta les dades json té un bloc if/else dins.
Aquest codi és difícil de raonar i modificar en comparació amb la versió async/wait de la següent manera:
*/
(async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    if (json.userId == 1) {
      json.completed == false;
    } else {
      json.completed == true;
    }
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();
/*
Mitjançant l'ús de la sintaxi async/wait, reduïu la necessitat d'encadenar mètodes i de devolucions de trucada imbricades.
Això afecta la llegibilitat del vostre codi, especialment quan teniu codi imbricat com if/else i un bloc de bucle for.

Conclusió
---------------------------------------------------------------------
La sintaxi fa que treballar amb promeses sigui molt més fàcil eliminant la necessitat d'encadenar els mètodes .then() i .catch()
Tot i que la paraula clau await només es pot utilitzar dins d'una funció asíncrona, podeu utilitzar un IIFE per invocar la funció asíncrona només una vegada.
*/
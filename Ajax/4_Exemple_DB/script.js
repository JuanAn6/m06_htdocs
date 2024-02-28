let book; // valor indicat en la caixa de text
document.addEventListener('DOMContentLoaded',funcioPrincipal);
function funcioPrincipal()
{
  document.getElementById('book').addEventListener('keyup',book_suggestion);
}

function book_suggestion()
{
    book = document.getElementById("book").value;
    let xhr = new XMLHttpRequest();
    let data = "book_name=" + book;
    xhr.open("POST", "./servidor.php", true); 
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
    xhr.send(data); // enviem un paràmetre
    xhr.onreadystatechange = function () {display_data(xhr)};
} 

function display_data(xhr) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let a = JSON.parse(xhr.responseText);
        console.info(a);
        if (a.length==0)
            document.getElementById("suggestion").innerHTML = "No hi ha suggeriments per '<b>"+book+"</b>'";
        else
        {
        if (document.getElementById('llista').children.length!=0)
        {
          while (document.getElementById('llista').children.length>0)
            document.getElementById('llista').lastElementChild.remove();
        }
        if (document.getElementById('suggestion').children.length!=0)
        {
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
      }// fi else mostrant book_name's
    }else{ // estats de petició diferetns (sense recepció de dades)
        switch (xhr.readyState)
          {
          case 0:console.info(' No està inicialitzat l\'objecte');break;
          case 1:console.info(' S\'ha instanciat l\'objecte');break;
          case 2:console.info(' S\'està enviant el valor de l\'objecte al servidor');break;
          case 3:console.info(' S\'estan reben les dades processades del servidor');break;
          }
    }
} 
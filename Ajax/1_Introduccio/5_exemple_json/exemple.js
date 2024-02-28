document.addEventListener('DOMContentLoaded',function ()
{
	document.body.children[1].addEventListener('click',peticio);
});

function peticio()
{
    let objecteAjax = new XMLHttpRequest();
    objecteAjax.open("GET","./persones.json");
    objecteAjax.onreadystatechange =( function ()
        {
            if (objecteAjax.readyState == 4 && objecteAjax.status == 200)  
            {
                dibuixarTaula(objecteAjax.responseText);    
            }
        })
    objecteAjax.send();
    document.body.children[1].removeEventListener('click',peticio);
}

function dibuixarTaula(dades)
{
    let obj = JSON.parse(dades);
    let titols = Object.keys(obj[0])
    let t = crearTaula(obj.length,titols.length,titols,obj);
    document.body.appendChild(t);
}

function crearTaula(qF,qC,cap,obj)
{
      let t = document.createElement('table');
      t.setAttribute('border',1);
      // afegint el titol a la taula, de moment està buit
      let tt = document.createElement('caption');
      t.appendChild(tt);
      // gestionant la capçalera
      let f = crearFila();
          for (let j=0;j<qC;j++)
          {
            let c = crearCela(true,cap[j]);
            f.appendChild(c);
          }
      let cc = crearCap();
      cc.appendChild(f);    
      t.appendChild(cc);       
        // gestionant el peu de la taula
      let p = crearPeu();
      f = crearFila();
          for (let j=0;j<qC;j++)
          {
            let c = crearCela(false,cap[j]);
            f.appendChild(c);
          }
      p.appendChild(f);    
      t.appendChild(p);            
       // gestionant el cos de la taula
      for (let i=0;i<qF;i++)
      {
          f = crearFila();
          for (let j=0;j<qC;j++)
          {
            let c = crearCela(false,obj[i][cap[j]]);
            f.appendChild(c);
          }
          t.appendChild(f);
      }
      return t;
}

function crearCap()
{
  return document.createElement('thead');
}

function crearPeu()
{
  return document.createElement('tfoot');
}
function crearFila()
{
  return document.createElement('tr');
}
/*
esCap: paràmetre boolèa que indica si la cel·la serà resaltada o no
*/
function crearCela(esCap,contingut)
{
    let ele;
    if (esCap) 
         ele='th' 
    else ele='td';
    let c;
    if (contingut == 'undefined')
    {
       c = crearText('contingut aleatori');
    } else
    {
       c = crearText(contingut);
    }
    let cela = document.createElement(ele);
    cela.appendChild(c);
    return cela;
}

function crearText(valor)
{
    let t = document.createTextNode(valor);
    return t;
}


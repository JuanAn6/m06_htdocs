document.addEventListener('DOMContentLoaded', f_main);
let cotxes = [];
let catalog = [];
function f_main()
{
    peticio_marques();
    peticio_artistes();
}


function peticio_marques()
{
    let objecteAjax = (window.XMLHttpRequest) ?  new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    objecteAjax.open("GET","./cotxes.xml");
    objecteAjax.onreadystatechange = ( function ()
        {
            if (objecteAjax.readyState == 4 && objecteAjax.status == 200)  
            {
                get_marques(objecteAjax.responseXML);   
            }
        })
    objecteAjax.send();
}

function get_marques(dades)
{
    cotxes = dades;
    let marques = [];
    Array.from(dades.getElementsByTagName('marca')).forEach(element => {
        !marques.includes(element.textContent) ? marques.push(element.textContent): null;
    });
    f_omplir_select(marques);
}

function f_omplir_select(marques)
{
    let select = document.getElementById('llista');
    marques.forEach((element)=>{
        let o = document.createElement('option');
        o.textContent = element;
        o.value = element;
        select.appendChild(o);
    });
    select.addEventListener('change', f_mostrar_marca);
}

function f_mostrar_marca()
{
    let dades = [];
    let select = document.getElementById('llista');
    Array.from(cotxes.getElementsByTagName('automovil')).forEach((element)=>{
        if(element.querySelector('marca').textContent == select.value){
            dades.push(element);
        }
    });
    
    let p = document.getElementById('resultatsEx1')

    Array.from(p.children).forEach(element => {
        if(element.id != 'llista'){
            element.remove();
        }
    });

    let h2 = document.createElement('h2');
    h2.textContent = select.value;
    p.appendChild(h2);

    
    let dl = document.createElement('dl')
    Array.from(dades).forEach((element)=>{
        let model = element.querySelector('model').textContent;
        let color = element.querySelector('color').textContent;
        let motor = element.querySelector('motor').textContent;

        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let dd2 = document.createElement('dd');

        dt.textContent = model;
        dd.textContent = color;
        dd2.textContent = motor;

        dl.append(dt,dd,dd2);
    });

    p.appendChild(dl);
    

    
}


function peticio_artistes()
{
    let objecteAjax = new XMLHttpRequest();
    objecteAjax.open("GET","./cd_Catalog.xml");
    objecteAjax.onreadystatechange = ( function ()
        {
            if (objecteAjax.readyState == 4 && objecteAjax.status == 200)  
            {
                get_artistes(objecteAjax.responseXML);   
            }
        })
    objecteAjax.send();
}

function get_artistes(dades)
{
    catalog = dades;
    let artistes = [];
    Array.from(dades.getElementsByTagName('ARTIST')).forEach(element => {
        !artistes.includes(element.textContent) ? artistes.push(element.textContent): null;
    });

    artistes.sort();

    let ol = document.createElement('ol');
    artistes.forEach((ele)=>{
        let li = document.createElement('li');
        li.textContent = ele;
        li.addEventListener('click', mostrar_dades_artista);
        li.style = 'cursor: pointer;';
        ol.append(li);
    })
    document.getElementById('resultatsEx2').appendChild(ol);

}
function mostrar_dades_artista(evt)
{

    // let dades = {
    //     title : '',
    //     artist : '',
    //     country : '',
    //     company : '',
    //     price : '',
    //     year : '',
    // };

    // let keys = Object.keys(dades)
    // Array.from(catalog.getElementsByTagName('CD')).forEach((ele)=>{
    //     for(let i = 0; i < keys.length; i++){
    //         dades[keys[i]] = ele.children[i].textContent;
    //     }
    // })
    // console.log(dades);

    let dades;
    let element = Array.from(catalog.getElementsByTagName('CD')).filter((ele)=>{
        return ele.getElementsByTagName('ARTIST')[0].textContent == evt.target.textContent
    });

    let div = document.getElementById('div');

    if(div == null){
        div = document.createElement('div');
        div.id = 'div';
    }else{
        Array.from(div.children).forEach((ele)=>{ele.remove()});
    }

    Array.from(element).forEach((tag)=>{
        Array.from(tag.children).forEach((ele)=>{
            let span = document.createElement('span');
            span.textContent = ele.textContent;
            div.append(span, document.createElement('br'));
        });
    });

    document.getElementById('resultatsEx2').after(div);
}
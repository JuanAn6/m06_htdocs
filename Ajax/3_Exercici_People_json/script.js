document.addEventListener('DOMContentLoaded', f_main);
let dades;
function f_main()
{
    peticio_fields();
    peticio();
    document.getElementById('boto').addEventListener('click', f_mostrar_persones);
}

function peticio_fields()
{
    let objecteAjax = (window.XMLHttpRequest) ?  new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    objecteAjax.open("GET","./fields.json");
    objecteAjax.onreadystatechange = (() => {
        if (objecteAjax.readyState == 4 && objecteAjax.status == 200){
            f_dades_fields(JSON.parse(objecteAjax.responseText));   
        }
    });
    objecteAjax.send();
}

function peticio()
{
    let objecteAjax = (window.XMLHttpRequest) ?  new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    objecteAjax.open("GET","./people.json");
    objecteAjax.onreadystatechange = (() => {
        if (objecteAjax.readyState == 4 && objecteAjax.status == 200){
            dades = JSON.parse(objecteAjax.responseText);   
        }
    });
    objecteAjax.send();
}

function f_dades_fields(data)
{
    let fields = document.getElementById('fields');
    data.forEach((element, i, a) => {
        let label = document.createElement('label');
        label.textContent = element;
        let radio = document.createElement('input');
        radio.type ='radio';
        radio.name = 'field';
        radio.value = element;
        radio.addEventListener('click',f_mostrar_filtre);
        fields.append(radio,label,document.createElement('br'));
    });
}

function f_mostrar_filtre(evt)
{
    let filtre = evt.target.value;
    
    let checkboxes = document.getElementById('dades');
    let filterDades = [];
    dades.forEach((obj)=>{ !filterDades.includes(obj[filtre]) ? filterDades.push(obj[filtre]) : null });

    Array.from(document.getElementById('dades').children).forEach(element => {
        element.remove();
    });
    
    filterDades.forEach((ele)=>{
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.name = 'checks[]';
        check.value = ele;
        let label = document.createElement('label');
        label.textContent = ele;
        document.getElementById('dades').append(check,label, document.createElement('br'));
    });
}

function f_mostrar_persones()
{
    let checks = document.querySelectorAll('input[name="checks[]"]:checked');
    
    let filters = [];
    Array.from(checks).forEach((ele)=>{
        filters.push(ele.value);
    });
    
    let show = dades.filter((obj) =>
        Object.values(obj).some(value => filters.includes(value))
    );
    
    Array.from(document.getElementById('persones').children).forEach((ele)=>{ ele.remove()});
    
    show.forEach((ele)=>{
        let label = document.createElement('label');
        label.textContent = JSON.stringify(ele);
        document.getElementById('persones').append(label, document.createElement('br'));
    });
}

$('document').ready(()=>{
    $('#boto').on('click', validarEntrada);

    f_altures();
    f_crearBotons();
    ex4();
});

function validarEntrada ()
{
    let valor = Number($('#valor').val());
    if(isNaN(valor)){
        $('#valor').val('');
        $('#res').text('El valor ha de ser un numero');
        return;
    }
    if(valor > 7 || valor < 1){
        $('#valor').val('');
        $('#res').text('El valor ha de ser un numero entre 1 i 7');
        return;
    }
    let dies_setmana = ['dilluns','dimarts','dimecres','dijous','divendres','dissabte','diumenge'];
    $('#res').text('El dia de la setmana corresponent es: '+ dies_setmana[valor-1]);
}

function f_altures ()
{
    let altures = [];
    $.each($('body').children(),(i, ele)=>{
        altures.push($(ele).height());
        
    });
    $('#res1').text(altures.join(' - '));

    $('p:not(:has(img))').height(80);

    let altures2 = [];

    $.each($('p'),(i,ele)=>{
        altures2.push($(ele).outerHeight());
    });
    
    $('#res2').text(altures2.join(' - '));

}

function f_crearBotons()
{
    let b1 = $('<button></button>').text('Mostrar');
    b1.prop('id', 'mostrar');
    b1.on('click', ()=>{
        //$('img')[0].show(); Aixo no m'ho deixa fer;
        let img =$('img')[0]; 
        $(img).show();
    });

    let b2 = $('<button id="Amagar">Amagar</button>');
    b2.on('click', ()=>{
        let img =$('img')[0]; 
        $(img).hide();
    });

    $('img')[0].before(b1[0],b2[0]);
}


function ex4()
{
    let select = $('<select>');
    select.append($('<option>').text('Selecciona una opcio'));
    
    $(opcions).each((i,ele)=>{
        select.append($('<option>', {value: i}).text(ele));
    });

    $('img').eq(1).before(select);

    select.on('click', f_img);
}

function f_img(evt)
{
    //let opcions = ['slideDown','slideUp','fadeIn','fadeOut','opacitat','treure opacitat'];
    let select = evt.target.value

    let img = $('img').eq(1);
    switch(Number(select)){
        case 0:
            $(img).slideDown();
            break;
        case 1:
            $(img).slideUp();
            break;
        case 2:
            $(img).fadeIn();
            break;
        case 3:
            $(img).fadeOut();
            break;
        case 4:
            $(img).fadeTo(null,1);
            break;
        case 5:
            $(img).fadeTo(null,0);
            break;
        default:
            break;
    }
}


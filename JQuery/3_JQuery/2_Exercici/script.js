let contentData = [];
const itemsPage = 5;
let index = 0;
let page = 0;
let max_page = 0;

$('document').ready(()=>{
    $('table tbody tr').each((i,ele)=>{
        contentData.push($(ele).clone());
    });    
    $('table tbody').empty();

    mostrarControls();
    mostrarLlista();
});

function mostrarControls(){
    let div = $('<div>');
    $(div).addClass('pagina');
    $('table').before($(div));

    max_page = Math.ceil(contentData.length/itemsPage) - 1;

    let span_inici = $('<span>').addClass('boto').prop('id', 'anterior').text('Anterior').on('click', canviPagina);
    $(div).append($(span_inici));

    for(let i = 0; i <  Math.ceil(contentData.length/itemsPage); i++ ){
        let span = $('<span>');
        $(span).addClass('boto');
        $(span).prop('id', i);
        $(span).text(i+1);
        $(span).on('click', canviPagina);
        $(div).append($(span));
    }

    let span_final = $('<span>').addClass('boto').prop('id', 'seguent').text('Següent').on('click', canviPagina);
    $(div).append($(span_final));

}

function mostrarLlista(){
    $('table tbody').empty();
    index = page * itemsPage;
    for(let i = index; i < index+itemsPage && i < contentData.length; i++){
        $('table tbody').append(contentData[i][0]);
    }
    $('#'+page).css({backgroundColor: 'mediumturquoise'});
}

function canviPagina(evt){
    $('span').css({backgroundColor: ''});
    
    let new_page = evt.target.id;
    
    if(new_page == 'anterior'){
        page = page - 1 < 0 ? 0 : page - 1;
    }else if(new_page == 'seguent'){
        page = page + 1 > max_page ? max_page : page + 1;
    }else{
        page = Number(new_page);
    }
    
    mostrarLlista();
}
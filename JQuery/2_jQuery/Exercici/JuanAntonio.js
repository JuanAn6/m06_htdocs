
$('document').ready(()=>{
    jQuery('#boto').on('click', f_ex5);

    f_ex6();
    f_ex7();

    $('input[value="esborrar"').on('click', f_ex8);

    f_ex9();
});

function f_ex5()
{
    // let html = jQuery('#ex5').html()
    // html += 'Paragraf Modificat';
    // jQuery('#ex5').html(html);

    jQuery('#ex5').html( jQuery('#ex5').html()+'Paragraf Modificat');
}

function f_ex6()
{
    $('li:nth-child(even)').css({color: 'white', backgroundColor: 'CornflowerBlue'});

    $('li').eq(2).css({fontSize: '20pt'});
    
    $('li:nth-child(n+4)').css({fontFamily: 'arial'});
    
    $('li:nth-child(n-3)').css({fontFamily: 'italic'});
}

function f_ex7()
{
    $('td').each((i,ele)=>{
        $(ele).text().includes('es') ? $(ele).css({backgroundColor: 'peachpuff'}) : null ;
    });
    
    $('td').each((i,ele)=>{
        console.log($(ele).text().trim().length <= 0);
        if($(ele).text().trim().length <= 0){
            $(ele).css({backgroundColor: 'yellow',});
        }
    });

    let tr = $('tr').eq(0).clone();
    $('table').append(tr);
}

function f_ex8(evt)
{
    let boto = evt.target;
    $(boto).next().remove();
    $(boto).prev().remove();
}

function f_ex9()
{
    $('#capa').addClass('nova');

    $('.boto').on('click', ()=>{
        $('#capa p').empty();
    });
}
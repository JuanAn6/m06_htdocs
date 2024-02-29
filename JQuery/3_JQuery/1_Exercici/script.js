let index_sort = -1;

$('document').ready(()=>{
    $('table').css({marginInline: 'auto', borderCollapse: 'collapse'});
    $('table td').css({ border: '1px solid chocolate', padding: '0.3rem'})
    $('table tbody td').addClass('cells');
    $('table tbody tr:nth-child(even)').addClass('parell');
    $('table tbody tr:nth-child(odd)').addClass('imparell');
    $('td').each((i,ele)=>{
        if(!isNaN(Number($(ele).text().replace(/\./g,'').replace(/\%/g,'').replace(/\,/g,'')))){
        //if($(ele).text().match(/\d/)){
            $(ele).css({textAlign: 'right',});
        }
    });
    $('thead tr').addClass('hover');
    $('thead tr td').on('click', (event)=>{
        
        let index = $('thead tr td').toArray().findIndex((ele)=>{
            return $(ele).text() == $(event.target).text();
        });

        let array = $('tbody tr');
        let array_sorted = [];

        if(index_sort != index){
            switch(index){
                case 0:
                    array_sorted = array.sort((a,b)=>{
                        return $(a).children().eq(0).text().localeCompare($(b).children().eq(0).text()); 
                    })
                    break;
                case 1:
                    array_sorted = array.sort((a,b)=>{
                        return Number($(a).children().eq(1).text().replace(/\./g,'')) - Number($(b).children().eq(1).text().replace(/\./g,'')); 
                    })
                    break;
                case 2:
                    array_sorted = array.sort((a,b)=>{
                        return Number($(a).children().eq(2).text().replace(/\%/g,'').replace(/\,/g,'.')) - Number($(b).children().eq(2).text().replace(/\%/g,'').replace(/\,/g,'.')); 
                    })
                    break;
            }
            index_sort = index;
        }else{
            switch(index){
                case 0:
                    array_sorted = array.sort((a,b)=>{
                        return $(b).children().eq(0).text().localeCompare($(a).children().eq(0).text()); 
                    })
                    break;
                case 1:
                    array_sorted = array.sort((a,b)=>{
                        return Number($(b).children().eq(1).text().replace(/\./g,'')) - Number($(a).children().eq(1).text().replace(/\./g,'')); 
                    })
                    break;
                case 2:
                    array_sorted = array.sort((a,b)=>{
                        return Number($(b).children().eq(2).text().replace(/\%/g,'').replace(/\,/g,'.')) - Number($(a).children().eq(2).text().replace(/\%/g,'').replace(/\,/g,'.')); 
                    })
                    break;
            }
            index_sort = -1;
        }
        
        $('tbody').empty();
        $('tbody').append(...array_sorted);
    })
});


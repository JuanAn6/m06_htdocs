$('document').ready(()=>{
    $('table').css({marginInline: 'auto', borderCollapse: 'collapse'});
    $('table td').css({ border: '1px solid chocolate', padding: '0.3rem'})
    $('table tbody td').addClass('cells');
    $('table tbody tr:nth-child(even)').addClass('parell');
    $('table tbody tr:nth-child(odd)').addClass('imparell');
});


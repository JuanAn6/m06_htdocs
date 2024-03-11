$('document').ready(()=>{
    carregarElements();
    primeraPeticio();
});

function carregarElements(dades)
{
    let select1 = $('<select>').prop('id', 'select1').prop('disabled', true).append(
        $('<option>').prop('value', '').text('Selecciona una opció')
    );
    let select2 = $('<select>').prop('id', 'select2').prop('disabled', true).append(
        $('<option>').prop('value', '').text('Selecciona una opció')
    );
    let select3 = $('<select>').prop('id', 'select3').prop('disabled', true).append(
        $('<option>').prop('value', '').text('Selecciona una opció')
    );
    $('body').append(select1, select2, select3);
}

function primeraPeticio()
{
    $.ajax({
        type: 'POST',
        url: 'http://localhost/M06/JQuery/Exercici1/servidor.php',
        data: { inici: true},
        dataType: 'json', //json parse directemnt de les dades
        success: function (data) {
            //console.log('primeraCarrega', data);
            $('#select1').append(...
                $(data).map((i,ele)=>{
                    return $('<option>').prop('value', ele.id_comunidad).text(ele.nombre);
                })
            ).prop('disabled', false).on('change', segonaPeticio);
           
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function segonaPeticio(evt)
{
    $('#select2').prop('disabled', true);
    $('#select3').prop('disabled', true);
    $('body span').remove();
    if(evt.target.value != ''){
        $.post('http://localhost/M06/JQuery/Exercici1/servidor.php', { comunitats: evt.target.value}, (data)=>{
            //console.log('segonaCarrega', data);
            $('#select2').empty().append($('<option>').prop('value', '').text('Selecciona una opció'));
            $('#select2').append(...
                $(data).map((i,ele)=>{
                    return $('<option>').prop('value', ele.id_provincia).text(ele.provincia);
                })
            ).prop('disabled', false).on('change', terceraPeticio);
        },'json');//json parse directament de les dades
    }
}

function terceraPeticio(evt)
{
    $('#select3').prop('disabled', true);
    $('body span').remove();
    if(evt.target.value != ''){
        const promesa = $.ajax({
            url: 'http://localhost/M06/JQuery/Exercici1/servidor.php',
            method: 'POST',
            data: {provincies: evt.target.value},
            dataType: 'json', //json parse directament de les dades
        });   
        promesa.then(function(data) {
            //console.log('terceraCarrega', data);
            $('#select3').empty().append($('<option>').prop('value', '').text('Selecciona una opció'));
            $('#select3').append(...
                $(data).map((i,ele)=>{
                    return $('<option>').prop('value', ele.id_municipio).text(ele.nombre);
                })
            ).prop('disabled', false).on('change', mostrarDades);
        }).catch(function(error) {
            console.error('Error:', error);
        });
    }
}

function mostrarDades(evt)
{

    if(evt.target.value != ''){
        $('body span').remove();
        $('body').append($('<span>').text(
                'Comunitat: '+$('#select1').find('option:selected').text()+', '+
                'Provincia: '+$('#select2').find('option:selected').text()+', '+
                'Municipi: '+$('#select3').find('option:selected').text()

            )
        )
    }else{
        $('body span').remove();
    }
    
}

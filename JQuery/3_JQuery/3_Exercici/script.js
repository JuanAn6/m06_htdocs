let titols = ['detall','producte','preu','quantitat','cost','data'];
let detalls = {};
$('document').ready(()=>{
    printarComandes();
});

async function printarComandes(){
    detalls = await getComades();

    let comandes = [];
    $(detalls).each((i,ele)=>{
        if(!comandes.includes(ele.comanda)){
            comandes.push(ele.comanda);
        };
    })

    let elements = []
    $(comandes).each((i,ele)=>{
        elements.push($('<p>').prop('id', ele).text(ele).on('dblclick', mostrarComanda));
    })
    $('#comandes').append(elements);
}
async function getComades(){
    try {
        const response = await fetch('./comandes.json');
        const json =  await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
      
}

function mostrarComanda(event)
{
    let showDetalls = detalls.filter((ele)=>{ return ele.comanda == event.target.id});
    console.log(showDetalls);

    $('#detalls :not(h2)').remove();
    $('#detalls').append($('<h3>').text('Comanda '+showDetalls[0].comanda+' del client '+showDetalls[0].client));


    let table = $('<table>');
    table.append(
        $('<tr>').append(...
            $(titols).map((i, ele)=>{
                return $('<td>').text(ele);
            })
        )
    )
    
    $(showDetalls).each((i, ele)=>{
        table.append(
            $('<tr>').append(...
                $(titols).map((i,titol)=>{
                    return $('<td>').text(ele[titol]);
                })
            )
        )  
    });
    
    $('#detalls').append($(table));
}
//SELECCION:

/*-------------- Llenado seccion carriers ---------------*/

var flete_min = 0
var flete_max = 99999.99
var gastos_min = 0
var gastos_max = 99999.99

var carriers = []
var diaslibres = []
var tiempotransito = []

$('#flete_min').on("change", function () {
    if ($('#flete_min').val()== ""){
        flete_min = 0
    }
    else{
        flete_min = parseFloat($('#flete_min').val())
    }
    mostrarItemsSegunPrecio()
})

$('#flete_max').on("change", function () {
    if ($('#flete_max').val()== ""){
        flete_max = 99999.99
    }
    else{
        flete_max = parseFloat($('#flete_max').val())
    }
    mostrarItemsSegunPrecio()
})

$('#gastos_min').on("change", function () {
    if ($('#gastos_min').val()== ""){
        gastos_min = 0
    }
    else{
        gastos_min = parseFloat($('#gastos_min').val())
    }
    mostrarItemsSegunPrecio()
})

$('#gastos_max').on("change", function () {
    if ($('#gastos_max').val()== ""){
        gastos_max = 99999.99
    }
    else{
        gastos_max = parseFloat($('#gastos_max').val())
    }
    mostrarItemsSegunPrecio()
})
    
var seleccion_items= [
    {
        "item_id": 1,
        "carrier": "MSC",
        "importe-flete": 7500,
        "importe-gastos": 450,
        "free-days": 21,
        "transit-time": 45,
        "ETD": "30/07/2022",
        "ETA": "10/09/2022",
        "buque": "HYUNDAI COLOMBO",
        "recorrido": "Directo",

    },
    {
        "item_id": 2,
        "carrier": "MAERSK",
        "importe-flete": 7300,
        "importe-gastos": 800,
        "free-days": 15,
        "transit-time": 45,
        "ETD": "29/07/2022",
        "ETA": "10/09/2022",
        "buque": "CMA CGM FORT STE MARIE",
        "recorrido": "1 Trasbordo",
    },  
    {
        "item_id": 3,
        "carrier": "MSC",
        "importe-flete": 7100,
        "importe-gastos": 600,
        "free-days": 15,
        "transit-time": 30,
        "ETD": "30/07/2022",
        "ETA": "10/09/2022",
        "buque": "MAERSK LEBU",
        "recorrido": "Directo",
    },  
    {
        "item_id": 4,
        "carrier": "EVERGREEN",
        "importe-flete": 7200,
        "importe-gastos": 500,
        "free-days": 21,
        "transit-time": 45,
        "ETD": "27/07/2022",
        "ETA": "10/09/2022",
        "buque": "LOG IN DISCOVERY",
        "recorrido": "1 Trasbordo",
    },  
    {
        "item_id": 5,
        "carrier": "EVERGREEN",
        "importe-flete": 7500,
        "importe-gastos": 548,
        "free-days": 15,
        "transit-time": 30,
        "ETD": "25/07/2022",
        "ETA": "10/09/2022",
        "buque": "DUBLIN EXPRESS",
        "recorrido": "Directo",
    },  
    {
        "item_id": 6,
        "carrier": "MAERSK",
        "importe-flete": 7500,
        "importe-gastos": 690,
        "free-days": 21,
        "transit-time": 30,
        "ETD": "28/07/2022",
        "ETA": "10/09/2022",
        "buque": "REINA DEL PARANA",
        "recorrido": "1 Trasbordo",
    },  
    {
        "item_id": 7,
        "carrier": "EVERGREEN",
        "importe-flete": 7200,
        "importe-gastos": 500,
        "free-days": 15,
        "transit-time": 45,
        "ETD": "31/07/2022",
        "ETA": "10/09/2022",
        "buque": "COSCO SHIPPING THAMES",
        "recorrido": "2 Trasbordos",
    },
    {
        "item_id": 8,
        "carrier": "MSC",
        "importe-flete": 7000,
        "importe-gastos": 490,
        "free-days": 15,
        "transit-time": 30,
        "ETD": "29/07/2022",
        "ETA": "10/09/2022",
        "buque": "MONTE ALEGRE",
        "recorrido": "Directo",
    },
]

function mostrarItems() {
    $("#mostrar-items-div").empty()
    for (let i = 0; i < seleccion_items.length; i++) {
        carriers.push(seleccion_items[i]['carrier'])
        tiempotransito.push(seleccion_items[i]['transit-time'])
        diaslibres.push(seleccion_items[i]['free-days'])
        let item_content = '<div class="bg-white grid grid-cols-5 rounded-lg h-max shadow-md mt-6 result-container ' + seleccion_items[i]['carrier'] + ' ' + seleccion_items[i]['free-days'] + ' ' + seleccion_items[i]['transit-time'] + '">                <div class="col-span-4 grid grid-cols-4 auto-rows-max px-5 pt-4">      <div class="flex justify-start border-r mr-4">        <img src="../img/logo-' + seleccion_items[i]['carrier'] + '.png" class="h-6 mt-10">      </div>      <div class="text-left">        <div class="mt-6 text-xs font-bold flex just text-clrAzul"><img src="../img/brazil.png" class="h-4 mr-1">Rio de Janeiro<br>(BRRIO)</div>        <div class="flex justify-start mt-0.5">          <div class="mt-2 text-xs font-normal text-clrAzul">ETD:</div>          <div class=" ml-2 mt-2 text-xs font-bold text-clrAzul">' + seleccion_items[i]['ETD'] + '</div>        </div>      </div>      <div class="text-center">        <div class="flex justify-center mt-2">          <img src="../img/ship.svg" class="h-6 mt-0.5">          <div class="pt-1 px-1 ml-2 text-xs font-normal rounded-sm text-clrCeleste mt-0.5">' + seleccion_items[i]['buque'] + '</div>       </div>        <div class="mt-2 text-xs font-bold text-clrAzul">' + seleccion_items[i]['transit-time'] + ' dias, ' + seleccion_items[i]['recorrido'] + '</div>        <div class="flex justify-center" aria-hidden="true">          <div class="h-0.5 w-7 mt-2 mr-1 bg-clrAzul"></div>          <div class="h-0.5 w-4 mt-2 bg-clrGrisOscuro"></div>          <div class="h-0.5 w-7 mt-2 ml-1 bg-clrAzul"></div>        </div>        <div class="flex justify-center mt-3">          <div class="py-1 px-0.5 text-xxs font-light rounded-xl text-white bg-clrGrisOscuro">EXW</div>          <div class="py-1 px-1 ml-2 text-xxs font-light rounded-xl text-white bg-clrCeleste">IMO</div>        </div>      </div>      <div class="text-right">        <div class="mt-6 text-xs font-bold flex justify-end text-clrAzul"><img src="../img/china.png" class="h-4 mr-1">Hong Kong<br>(HKHKG)</div>        <div class="flex justify-end mt-0.5">          <div class="mt-2 text-xs font-normal text-clrAzul">ETA:</div>          <div class=" ml-2 mt-2 text-xs font-bold text-clrAzul">' + seleccion_items[i]['ETA'] + '</div>        </div>      </div>     </div>    <div class=" ml-5 col-span-1 rounded-lg border border-clrGrisOscuro scale-110 bg-white">      <div>        <h2 class="sr-only">Price</h2>       <p class="relative grid mt-3">          <span class="flex flex-col text-center">            <span class="mt-2 text-xs font-medium text-clrAzul">Total Flete</span>            <span class="text-base font-bold text-clrCeleste tracking-tight">USD $' + seleccion_items[i]['importe-flete'] + '</span>            <span class="text-xxs text-clrCeleste tracking-tight">Gastos locales +IVA USD $' + seleccion_items[i]['importe-gastos'] + '</span>            <span class="text-xxs text-clrGrisOscuro tracking-tight">Tarifa valida hasta 28/10/2022</span>          </span>        </p>      </div>      <div class="bg-white hover:bg-clrGrisClaro border-clrCeleste">        <button type="button" class=" w-full text-center py-1 border border-transparent text-xs font-medium rounded-lg shadow-sm text-clrCeleste bg-white hover:bg-clrGrisClaro">Comparar</button>      </div>     <div class="bg-clrCeleste hover:bg-opacity-80 rounded-b-lg">          <button type="button" class=" w-full text-center py-1 border border-transparent text-xs font-medium rounded-b-lg shadow-sm text-white bg-clrCeleste hover:bg-opacity-80">Seleccionar</button>      </div>    </div>  </div>'
        $("#mostrar-items-div").append(item_content)
    }
    const filtroCarriers = carriers.filter(function(ele , pos){
        return carriers.indexOf(ele) == pos;
    })
    $("#mostrar_carriers_div").empty() 
    for (let i = 0; i < filtroCarriers.length; i++) {
        let mostrar_carriers = '<div class="flex items-center"><input id="filter-'+filtroCarriers[i]+'" name="category[]" value="'+filtroCarriers[i]+'" type="checkbox" class="h-4 w-4 border-clrGrisOscuro rounded text-clrCeleste focus:ring-clrCeleste"><label for="filter-'+filtroCarriers[i]+'" class="ml-2 text-sm text-clrAzul">'+filtroCarriers[i]+'</label></div> '
        $("#mostrar-carriers-div").append(mostrar_carriers)
    }
    const filtroTransitTime = tiempotransito.filter(function(ele , pos){
        return tiempotransito.indexOf(ele) == pos;
    })
    $("#mostrar_transittime_div").empty() 
    for (let i = 0; i < filtroTransitTime.length; i++) {
        let mostrar_tiempotransito = '<div class="flex items-center"><input id="filter-'+filtroTransitTime[i]+'" name="category[]" value="'+filtroTransitTime[i]+'" type="checkbox" class="h-4 w-4 border-clrGrisOscuro rounded text-clrCeleste focus:ring-clrCeleste"><label for="filter-'+filtroTransitTime[i]+'" class="ml-2 text-sm text-clrAzul">'+filtroTransitTime[i]+' dias</label></div> '
        $("#mostrar-transittime-div").append(mostrar_tiempotransito)
    }
    const filtroFreeDays = diaslibres.filter(function(ele , pos){
        return diaslibres.indexOf(ele) == pos;
    })
    $("#mostrar_freedays_div").empty() 
    for (let i = 0; i < filtroFreeDays.length; i++) {
        let mostrar_diaslibres = '<div class="flex items-center"><input id="filter-'+filtroFreeDays[i]+'" name="category[]" value="'+filtroFreeDays[i]+'" type="checkbox" class="h-4 w-4 border-clrGrisOscuro rounded text-clrCeleste focus:ring-clrCeleste"><label for="filter-'+filtroFreeDays[i]+'" class="ml-2 text-sm text-clrAzul">'+filtroFreeDays[i]+' dias</label></div> '
        $("#mostrar-freedays-div").append(mostrar_diaslibres)
    }       
}

$(document).ready(function () {
    mostrarItems()
})

$(document).ready(function () {
    $("input").change(function () {
        let filters = {}
        $(':input:checked,select').each(function(index, el) {
            let group = $(el).data("id")
            filters[group] = (filters[group] || []).concat("." + el.value)
        })
                            
        let $filtered = $(".result-container").hide()
        for (let group in filters) $filtered = $filtered.filter(filters[group].join(","))
        $filtered.show()
    })
})


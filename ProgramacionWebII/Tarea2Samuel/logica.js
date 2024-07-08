function soloNumeros(e){
    let key = e.keyCode || e.which;
    let numeros = "0123456789";
    let tecla = String.fromCharCode(key).toLocaleLowerCase();

    if(numeros.indexOf(tecla) == -1)
    {
        return false;
    }

}


var content = 0;
var contpizz = 0;
var contesp = 0;
var contpos = 0;

var panajo = 0;
var ensala= 0;
var pizzper =0;
var pizzgra =0;
var past=0;
var pascho =0;
var cophela=0;

function camposvacios()
{
    if(document.getElementById("slct1").value == "" && document.getElementById("slct2").value == ""  && document.getElementById("precio").value == ""){
        alert("Por favor, complete los campos");
    }
    else {
        agregar();
    }

}

function agregar(){
     

    let categoria = document.getElementById("slct1").value;
    let platillo = document.getElementById("slct2").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let fecha = document.getElementById("fecha").value;
    

    let registro = "<tr><td>"+ categoria + "</td><td>" + platillo + "</td><td>" + precio + "</td><td>" + fecha +"</td><td><button class='btnDel' onclick='eliminar(event)';>Eliminar</button></td></tr>";
    let fila = document.createElement("tr");
    fila.innerHTML = registro;

    document.getElementById("grilla").appendChild(fila);

    if(categoria == "Entradas" && platillo == "Pan de ajo"){
        content++;
        panajo=panajo+precio;
    }
   else if(categoria == "Entradas" && platillo == "Ensalada"){
        content++;
        ensala=ensala+precio;
    }


    else if(categoria == "Pizzas" && platillo == "Pizza Personal")
        {
            contpizz++;
            pizzper=pizzper+precio;
        }
    else if(categoria == "Pizzas" && platillo == "Pizza Grande")
            {
                contpizz++;
                pizzgra=pizzgra+precio;
            }

       
    else if(categoria == "Plato Especial" || platillo == "Pasta Carbonara"){
        contesp++;
        past=past+precio;
    }


    else if(categoria == "Postres" && platillo == "Pastel de Chocolate")
        {
        contpos++;
        pascho=pascho+precio;
        }
        else if(categoria == "Postres" && platillo == "Copa de Helado")
            {
            contpos++;
            cophela=cophela+precio;
            }


}

function cancelar(){
    document.getElementById("slct1").value = "";
    document.getElementById("slct2").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("fecha").value = "";
}

function eliminar(evento){
    if(confirm('Estas seguro que deseas eliminar este registro?'))
    {
        let fila = evento.target.parentNode.parentNode;
        let celda = fila.getElementsByTagName("td");
        let descontar = parseFloat(celda[2].innerHTML);

        if(celda[0].innerHTML == "Entradas" && celda[1].innerHTML == "Pan de ajo"){
            content--;
            panajo=panajo - descontar;
        }
       else if(celda[0].innerHTML == "Entradas" && celda[1].innerHTML == "Ensalada"){
            content--;
            ensala=ensala- descontar;
        }


        else if(celda[0].innerHTML == "Pizzas" && celda[1].innerHTML == "Pizza Personal")
            {
                contpizz--;
                pizzper=pizzper-descontar;
            }
            else if(celda[0].innerHTML == "Pizzas" && celda[1].innerHTML == "Pizza Grande")
                {
                    contpizz--;
                    pizzgra=pizzgra-descontar;
                }
            


        else if(celda[0].innerHTML == "Plato Especial" || celda[1].innerHTML == "Pasta Carbonara"){
            contesp--;
            past=past - descontar;
        }


        else if(celda[0].innerHTML == "Postres" && celda[1].innerHTML == "Pastel de Chocolate")
            {
                contpos--;
                pascho=pascho - descontar;
            }
            else if(celda[0].innerHTML == "Postres" && celda[1].innerHTML == "Copa de Helado")
                {
                    contpos--;
                    cophela=cophela - descontar;
                }
        
        fila.remove();
        generarGrafico();
    }

}

function generarGrafico(){
    google.charts.load('current', {'packages' : ['corechart']});
    google.charts.setOnLoadCallback(grafico);

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(grafico2);

    function grafico(){
        let data = google.visualization.arrayToDataTable([
            ['Articulo', 'Articulos'],
            ['Entradas', content],
            ['Pizzas', contpizz],
            ['Platos Especiales', contesp],
            ['Postres', contpos],
        ]);

        let option = {
            title: 'Platos'
        };
         
        let chart = new google.visualization.PieChart(document.getElementById("pieChart"));
        chart.draw(data, option);
    }

   function grafico2(){
        let datas = google.visualization.arrayToDataTable([
            ['Lempiras', 'Lempiras'],
            ['Pan de ajo', panajo],
            ['Ensalada', ensala],
            ['Pizza Personal', pizzper],
            ['Pizza Grande', pizzgra],
            ['Pasta Carbonara', past],
            ['Pastel de Chocolate', pascho],
            ['Copa de Helado', cophela],
        ]);
         
        var options = {
            chart: {
              title: 'Total Acumulado en lempiras'
            },
            bars: 'horizontal'
          };

        let Charts = new google.charts.Bar(document.getElementById("barChart"));
        Charts.draw(datas,google.charts.Bar.convertOptions(options));
        console.log(datas);
    }


}


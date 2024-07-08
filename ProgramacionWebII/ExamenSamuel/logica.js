function soloNumeros(e){
    let key = e.keyCode || e.which;
    let numeros = "0123456789";
    let tecla = String.fromCharCode(key).toLocaleLowerCase();

    if(numeros.indexOf(tecla) == -1)
    {
        return false;
    }

}


var contestu = 0;
var contlav = 0;
var contref = 0;
var contlic = 0;

function camposvacios()
{
    if(document.getElementById("cantidad").value == "" || document.getElementById("precio").value == "" ){
        alert("Por favor, complete los campos");
    }
    else {
        agregar();
    }

}

function agregar(){
     

    let articulo = document.getElementById("articulo").value;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").value);
    let subtotal = cantidad*precio;
    let isv = subtotal*0.15;
    let total = subtotal+isv;

    document.getElementById("subtotal").value= subtotal;
    document.getElementById("isv").value= isv;
    document.getElementById("total").value= total;
    

    let registro = "<tr><td>"+ articulo + "</td><td>" + cantidad + "</td><td>" + precio + "</td><td>" + subtotal + "</td><td>" + isv + "</td><td>" + total +"</td><td><button class='btnDel' onclick='eliminar(event)';>Eliminar</button></td></tr>";
    let fila = document.createElement("tr");
    fila.innerHTML = registro;

    document.getElementById("grilla").appendChild(fila);

    if(articulo == "estufa")
        contestu= contestu + total;
    else if(articulo == "lavadora")
        contlav=contlav + total;
    else if(articulo == "refrigeradora")
        contref=contref + total;
    else if(articulo == "licuadora")
        contlic= contlic + total;

}

function cancelar(){
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("subtotal").value = "";
    document.getElementById("isv").value = "";
    document.getElementById("total").value = "";
}

function eliminar(evento){
    if(confirm('Estas seguro que deseas eliminar este registro?'))
    {
        let fila = evento.target.parentNode.parentNode;
        let celda = fila.getElementsByTagName("td");

        if(celda[0].innerHTML == "estufa")
            contestu = contestu - celda[5].innerHTML;
        else if(celda[0].innerHTML == "lavadora")
            contlav = contlav - celda[5].innerHTML;
        else if(celda[0].innerHTML == "refrigeradora")
            contref = contref - celda[5].innerHTML;
        else if(celda[0].innerHTML == "licuadora")
            contlic = contlic - celda[5].innerHTML;

        fila.remove();
        generarGrafico();
    }

}

function generarGrafico(){
    google.charts.load('current', {'packages' : ['corechart']});
    google.charts.setOnLoadCallback(grafico);

    function grafico(){
        let data = google.visualization.arrayToDataTable([
            ['Articulo', 'Articulos'],
            ['estufa', contestu],
            ['lavadora', contlav],
            ['refrigeradora', contref],
            ['licudora', contlic],
        ]);

        let option = {
            title: 'Electrodomesticos'
        };

        let chart = new google.visualization.PieChart(document.getElementById("pieChart"));
        chart.draw(data, option);
    }

}
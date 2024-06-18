function soloNumeros(e){
    let key = e.keyCode || e.which;
    let numeros = "0123456789";
    let tecla = String.fromCharCode(key).toLocaleLowerCase();

    if(numeros.indexOf(tecla) == -1)
    {
        return false;
    }

    if(e.target.id == "edad")
    {
        return maxEdad();
    }

}

function soloLetras(e){
    let key = e.keyCode || e.which;
    let letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    let tecla = String.fromCharCode(key).toLocaleLowerCase();

    if(letras.indexOf(tecla) == -1)
    {
        return false;
    }
}


function maxEdad(){
    if(document.getElementById("edad").value.length >= 2)
        return false;
}

var contComp = 0;
var contInd = 0;
var contElec = 0;
var contMec = 0;

function agregar(){
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let carrera = document.getElementById("carreras").value;
    let fecha = document.getElementById("fecha").value;

    let registro = "<tr><td>"+ id + "</td><td>" + nombre + "</td><td>" + edad + "</td><td>" + carrera + "</td><td>" + fecha + "</td><td><button class='btnDel' onclick='eliminar(event)';>Eliminar</button></td></tr>";
    let fila = document.createElement("tr");
    fila.innerHTML = registro;

    document.getElementById("grilla").appendChild(fila);

    if(carrera == "computacion")
        contComp++;
    else if(carrera == "industrial")
        contInd++;
    else if(carrera == "electronica")
        contElec++;
    else if(carrera == "mecatronica")
        contMec++;

    //alert("Compu: " + contComp + ", Ind: " + contInd + ", Elec: " + contElec + ", Mec: " + contMec);

}

function cancelar(){
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("carreras").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("id").focus();
}

function eliminar(evento){
    if(confirm('Estas seguro que deseas eliminar este registro?'))
    {
        let fila = evento.target.parentNode.parentNode;
        let celda = fila.getElementsByTagName("td");

        if(celda[3].innerHTML == "computacion")
            contComp--;
        else if(celda[3].innerHTML == "industrial")
            contInd--;
        else if(celda[3].innerHTML == "electronica")
            contElec--;
        else if(celda[3].innerHTML == "mecatronica")
            contMec--;

        fila.remove();
    }

    //alert("Compu: " + contComp + ", Ind: " + contInd + ", Elec: " + contElec + ", Mec: " + contMec);
}

function generarGrafico(){
    google.charts.load('current', {'packages' : ['corechart']});
    google.charts.setOnLoadCallback(grafico);

    function grafico(){
        let data = google.visualization.arrayToDataTable([
            ['Carrera', 'Matriculados por carrera'],
            ['computación', contComp],
            ['industrial', contInd],
            ['electronica', contElec],
            ['mecatronica', contMec],
        ]);

        let option = {
            title: 'Matriculados por Carrera'
        };

        let chart = new google.visualization.PieChart(document.getElementById("pieChart"));
        chart.draw(data, option);
    }

}
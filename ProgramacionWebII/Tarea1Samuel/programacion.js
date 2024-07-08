function alerta(){

    let nombre = document.getElementById("txtnombre").value;
    let edad = document.getElementById("txtedad").value;
    let genero = document.getElementById("genero").value;
    let direccion = document.getElementById("txtarea").value;

    alert("Nombre:"+ nombre +"\nEdad:"+ edad + "\nGenero:"+genero+"\nDireccion"+direccion);
}

function fondo(){
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    
}

function negrita(){
    document.getElementById("txtedad").style.fontWeight = "bold";
    document.getElementById("txtnombre").style.fontWeight = "bold";
    document.getElementById("genero").style.fontWeight = "bold";
    document.getElementById("txtarea").style.fontWeight = "bold";
}

function bloquear(){
    document.getElementById("txtedad").disabled =true;
    document.getElementById("txtnombre").disabled =true;
    document.getElementById("genero").disabled =true;
    document.getElementById("txtarea").disabled =true;
}

function desbloquear(){
    document.getElementById("txtedad").disabled =false;
    document.getElementById("txtnombre").disabled =false;
    document.getElementById("genero").disabled =false;
    document.getElementById("txtarea").disabled =false;
}

function eliminar(){
    document.getElementById("txtedad").style.display = 'none';
    document.getElementById("txtnombre").style.display = 'none';
    document.getElementById("genero").style.display = 'none';
    document.getElementById("txtarea").style.display = 'none';
}

function crear(){
    document.getElementById("txtedad").style.display = '';
    document.getElementById("txtnombre").style.display = '';
    document.getElementById("genero").style.display = '';
    document.getElementById("txtarea").style.display = '';
}
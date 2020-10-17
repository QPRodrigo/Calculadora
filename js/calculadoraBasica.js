var operandoA;
var operandoB;
var operador;

function init(){
    //variable de resultado 
    var resultado = document.getElementById("resultado");
    //Variable de los numeros
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    //Variables de operacion
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    //Variable de igualdad
    var igual = document.getElementById("igual");
 
    //Variable de resetear
    var reset = document.getElementById("reset");


    //Evento de los Numeros
    uno.onclick = function(e){
        resultado.textContent=resultado.textContent+"1";
    }
    dos.onclick = function(e){
        resultado.textContent=resultado.textContent+"2";
    }
    tres.onclick = function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick = function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick = function(e){
        resultado.textContent=resultado.textContent+"6";
    }
    siete.onclick = function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick = function(e){
        resultado.textContent=resultado.textContent+"8";
    }
    nueve.onclick = function(e){
        resultado.textContent=resultado.textContent+"9";
    }
    cero.onclick = function(e){
        resultado.textContent=resultado.textContent+"0";
    }
    //Evento de las operaciones
    suma.onclick = function (e){
        operandoA = resultado.textContent;
        operador = "+";
        limpiar();
    }
    resta.onclick = function (e){
        operandoA = resultado.textContent;
        operador = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e){
        operandoA = resultado.textContent;
        operador = "*";
        limpiar();
    }
    division.onclick = function (e){
        operandoA = resultado.textContent;
        operador = "/";
        limpiar();
    }
    //Evento de igual
    igual.onclick = function (e){
        operandoB = resultado.textContent;
        resolver();
    }
    //Evento de reset
    reset.onclick = function (e){
        resetear();
    }
}

//Funcion limpiar
function limpiar(){
    resultado.textContent = "";
}

//Funcion Resetear
function resetear(){
    resultado.textContent="";
    operandoA=0;
    operandoB=0;
    operador="";
}

//Funcion Resolver
function resolver(){
    var res=0;
    switch(operador){
        case "+":
            res = parseFloat (operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat (operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat (operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat (operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    resultado.textContent = res;
}
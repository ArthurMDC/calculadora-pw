

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    saveToLocalStorage();
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
    saveToLocalStorage();
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    saveToLocalStorage();
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
    saveToLocalStorage(); 
} 

function saveToLocalStorage() {
    var resultado = document.getElementById('resultado').innerHTML;
    localStorage.setItem('calc_resultado', resultado);
}

function loadFromLocalStorage() {
    var resultado = localStorage.getItem('calc_resultado');
    if (resultado) {
        document.getElementById('resultado').innerHTML = resultado;
    } 
}

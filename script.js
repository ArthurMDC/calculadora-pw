window.onload = function () {
    document.getElementById('resultado').value = '';
    document.getElementById('resultado').innerHTML = localStorage.getItem('calc_resultados') || '';
}
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        // Calcula o resultado usando 'eval', mas tome cuidado com a segurança ao usar eval
        try {
            let calcResultado = eval(resultado);

            // Limitar a 3 casas decimais
            calcResultado = parseFloat(calcResultado.toFixed(2));

            // Exibir o resultado com até 3 casas decimais
            document.getElementById('resultado').innerHTML = calcResultado;
            localStorage.setItem('calc_resultado', calcResultado.toString());
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nenhum valor";
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

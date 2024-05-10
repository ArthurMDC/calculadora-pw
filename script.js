window.onload = function () {
    loadFromLocalStorage();
}

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            let calcResultado = eval(resultado);
            calcResultado = parseFloat(calcResultado.toFixed(2));
            document.getElementById('resultado').innerHTML = calcResultado;
            saveToLocalStorage(calcResultado); // Salvando o resultado atual
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nenhum valor";
    }
}

function saveToLocalStorage(resultado) {
    var historico = localStorage.getItem('calc_historico');
    var historicoArray = historico ? JSON.parse(historico) : [];

    historicoArray.push(resultado);

    localStorage.setItem('calc_historico', JSON.stringify(historicoArray));
}

function loadFromLocalStorage() {
    var historico = localStorage.getItem('calc_historico');
    if (historico) {
        var historicoArray = JSON.parse(historico);
        // Exemplo de como você pode iterar sobre o histórico e fazer algo com ele
        historicoArray.forEach(function (resultado, index) {
            console.log('Resultado ' + (index + 1) + ': ' + resultado);
            // Aqui você pode exibir o histórico na interface do usuário, se desejar
        });
    }
}
  // Função para verificar se a expressão é válida
  function isValidExpression(expression) {
    try {
        eval(expression);
        return true;
    } catch (error) {
        return false;
    }
}

// Função para calcular a expressão matemática
function calculateExpression() {
    const input = document.getElementById('expressionInput');
    const resultElement = document.getElementById('result');

    const expression = input.value;

    if (isValidExpression(expression)) {
        try {
            const result = eval(expression);
            resultElement.textContent = `Resultado: ${result}`;
        } catch (error) {
            resultElement.textContent = 'Erro ao calcular a expressão';
        }
    } else {
        resultElement.textContent = 'Expressão inválida';
    }
}

// Vincular o evento de entrada para verificar a validade da expressão
const expressionInput = document.getElementById('expressionInput');
expressionInput.addEventListener('input', () => {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = !isValidExpression(expressionInput.value);
});

// Vincular o evento de clique ao botão de cálculo
// const calculateButton = document.getElementById('calculateButton');
// calculateButton.addEventListener('click', calculateExpression);

function enviarParaWhatsApp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cargo = document.getElementById("cargo").value;
    var empresa = document.getElementById("empresa").value;

    var mensagemWhatsApp  = "Olá, meu nome é " + nome +
    " ,email " + email +
    " ,telefone " + telefone +
    " ,cargo " + cargo +
    " ,empresa " + empresa +
    " gostaria de saber mais sobre"
    " minha empresa é a: "+ empresa +
    " vim pelo site da relaci";

    var linkWhatsApp = "https://wa.me/" + '+558592545342' + "?text=" + encodeURIComponent(mensagemWhatsApp);

    window.open(linkWhatsApp, "_blank");

    alert("Mensagem enviada com sucesso");
}
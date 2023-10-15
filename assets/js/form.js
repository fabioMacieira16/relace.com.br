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
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateExpression);



class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {

    try {
      if (this.validateAndSubmit()) {
        alert('Por favor, preencha todos os campos antes de enviar o formulário.');
      }
      else {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      }
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }

  //#region -- validação de campos
  validateAndSubmit() {
    // Obtenha os valores dos campos
    const name = this.form.elements['name'].value;
    const email = this.form.elements['email'].value;
    const phone = this.form.elements['phone'].value;
    const cargo = this.form.elements['$cargo'].value;
    const empresa = this.form.elements['$empresa'].value;
    const calcular = this.form.elements['calcular'].value;

    if (this.validaCalculoSubmit(calcular)) {
      alert('Por favor, preencha o campo de cálculo corretamente');
      return true;
    }

    if (!this.validaTermosSubmit()) {
      alert('Por favor, aceite os termos e condições antes de enviar o formulário.');
      return true;
    }

    // Realize a validação (por exemplo, verifique se os campos não estão vazios)
    if (name.trim() === '' || email.trim() === '' ||
        phone.trim() === '' || cargo.trim() === '' ||
        empresa.trim() === '' || calcular.trim() === '') {
       return true;
    }
  }

  validaCalculoSubmit(calcular) {
    if (calcular.trim() !== '5') {
      return true;
    }
  }

  validaTermosSubmit() {
    const checkbox = document.getElementById('aceitoTermos');

    if (checkbox.checked) {
      return true;
    }
  }
  ////#endregion
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();

// ==================== functio usado para whatsapp ====================
// Função para verificar se a expressão é válida
// function isValidExpression(expression) {
//     try {
//         eval(expression);
//         return true;
//     } catch (error) {
//         return false;
//     }
// }

// Função para calcular a expressão matemática
// function calculateExpression() {
//     const input = document.getElementById('expressionInput');
//     const resultElement = document.getElementById('result');

//     const expression = input.value;

//     if (isValidExpression(expression)) {
//         try {
//             const result = eval(expression);
//             resultElement.textContent = `Resultado: ${result}`;
//         } catch (error) {
//             resultElement.textContent = 'Erro ao calcular a expressão';
//         }
//     } else {
//         resultElement.textContent = 'Expressão inválida';
//     }
// }

// Vincular o evento de entrada para verificar a validade da expressão
// const expressionInput = document.getElementById('expressionInput');
// expressionInput.addEventListener('input', () => {
//     const calculateButton = document.getElementById('calculateButton');
//     calculateButton.disabled = !isValidExpression(expressionInput.value);
// });

// Vincular o evento de clique ao botão de cálculo
// const calculateButton = document.getElementById('calculateButton');
// calculateButton.addEventListener('click', calculateExpression);

// function enviarParaWhatsApp() {
//     var nome = document.getElementById("nome").value;
//     var email = document.getElementById("email").value;
//     var telefone = document.getElementById("telefone").value;
//     var cargo = document.getElementById("cargo").value;
//     var empresa = document.getElementById("empresa").value;

//     var mensagemWhatsApp = "Olá, meu nome é " + nome +
//         " ,email " + email +
//         " ,telefone " + telefone +
//         " ,cargo " + cargo +
//         " ,empresa " + empresa +
//         " gostaria de saber mais sobre"
//     " minha empresa é a: " + empresa +
//         " vim pelo site da relaci";

//     var linkWhatsApp = "https://wa.me/" + '+558592545342' + "?text=" + encodeURIComponent(mensagemWhatsApp);

//     window.open(linkWhatsApp, "_blank");

//     alert("Mensagem enviada com sucesso");
// }

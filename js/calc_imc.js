const CalcularImc = () => {
    const pesoElement = document.getElementById("peso");
    const alturaElement = document.getElementById("altura");
    const idadeElement = document.querySelector('input[name="idade"]:checked');

    if (!pesoElement || !alturaElement || !idadeElement) {
        alert("Alguns elementos não foram encontrados!");
        return;
    }

    const peso = parseFloat(pesoElement.value);
    const altura = parseFloat(alturaElement.value.replace(",", "."));
    const idade = idadeElement.value;
    const imc = peso / (altura * altura);

    console.log("O valor do IMC é:", imc); // Adicionando o print do IMC

    if (!idade || isNaN(altura) || isNaN(peso)) {
        alert("Há campos vazios!");
    } else {
        const { figura, mensagem } = RecomandacoesImc(idade, imc);

        const saidasDiv = document.querySelector('.container-main-calculadora-principal-saidas');
        saidasDiv.innerHTML = `
        <h3>Seu IMC é: ${imc.toFixed(2)}</h3> <!-- Adicionando o valor do IMC -->
        <img src="${figura}" alt="Figura" class="resultado-imc-img">
        <h3>Recomendações: </h3>
        <p>${mensagem}</p>
      `;
    }
};

const RecomandacoesImc = (idade, imc) => {
    let figura = "";
    let mensagem = "";

    if (idade === "adulto") {
        if (imc < 18.5) {
            figura = "../img/abaixo_do_peso.png";
            mensagem = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            figura = "../img/peso_normal.png";
            mensagem = "Peso normal";
        } else if (imc >= 24.9 && imc < 29.9) {
            figura = "../img/sobrepeso.png";
            mensagem = "Acima do peso";
        } else if (imc >= 29.9 && imc < 34.9) {
            figura = "../img/obesidade_grau_I.png";
            mensagem = "Obesidade Grau I";
        } else if (imc >= 34.9) {
            figura = "../img/obesidade_grau_II.png";
            mensagem = "Obesidade Grau II";
        }
    } else if (idade === "idoso") {
        if (imc < 22) {
            figura = "../img/abaixo_do_peso.png";
            mensagem = "Abaixo do peso";
        } else if (imc >= 22 && imc < 27) {
            figura = "../img/peso_normal.png";
            mensagem = "Peso normal";
        } else if (imc >= 27 && imc < 30) {
            figura = "../img/sobrepeso.png";
            mensagem = "Acima do peso";
        } else if (imc >= 30) {
            figura = "../img/obesidade_grau_I.png";
            mensagem = "Obesidade Grau I";
        }
    }
    return { figura, mensagem };
};

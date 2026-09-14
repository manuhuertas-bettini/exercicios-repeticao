// Nível Básico
// 1. VERIFICAR MAIORIDADE
let idade = document.getElementById("idade");
let btnIdade = document.getElementById("btnIdade");
btnIdade.addEventListener("click", function () {
    if (idade.value >= 18) {
        alert("Você é maior de idade");
    } 
    else {
        alert("Você é menor de idade");
    }
});
// 2. POSITIVO OU NEGATIVO
let numeroPositivo = document.getElementById("numeroPositivo");
let btnPositivo = document.getElementById("btnPositivo");
btnPositivo.addEventListener("click", function () {
    if (numeroPositivo.value > 0) {
        alert("O número é positivo");
    } 
    else {
        alert("O número é negativo");
    }
});
// 3. APROVAÇÃO EM UMA PROVA
let nota = document.getElementById("nota");
let btnNota = document.getElementById("btnNota");
btnNota.addEventListener("click", function () {
    if (nota.value >= 60) {
        alert("Aprovado");
    } 
    else {
        alert("Reprovado");
    }
});
// 4. POSITIVO, NEGATIVO OU ZERO
let numeroZero = document.getElementById("numeroZero");
let btnZero = document.getElementById("btnZero");
btnZero.addEventListener("click", function () {
    if (numeroZero.value > 0) {
        alert("O número é positivo");
    } 
    else if (numeroZero.value < 0) {
        alert("O número é negativo");
    } 
    else {
        alert("O número é zero");
    }
});
// 5. CLASSIFICAÇÃO DE IDADE
let idadeClassificacao = document.getElementById("idadeClassificacao");
let btnClassificacao = document.getElementById("btnClassificacao");
btnClassificacao.addEventListener("click", function () {
    let idade = Number(idadeClassificacao.value);
    if (idade >= 0 && idade <= 12) {
        alert("Você é uma Criança");
    } 
    else if (idade >= 13 && idade <= 17) {
        alert("Você é um Adolescente");
    } 
    else if (idade >= 18) {
        alert("Você é um Adulto");
    } 
    else {
        alert("Idade inválida, insira um número positivo.");
    }
});
// 6. PAR OU ÍMPAR
let numeroPar = document.getElementById("numeroPar");
let btnPar = document.getElementById("btnPar");
btnPar.addEventListener("click", function () {
    if (numeroPar.value % 2 === 0) {
        alert("O número é par");
    } 
    else {
        alert("O número é ímpar");
    }
});
//Nível Intermediário
// 7. CALCULADORA
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacao = document.getElementById("operacao");
let btnCalculadora = document.getElementById("btnCalculadora");
btnCalculadora.addEventListener("click", function () {
    let n1 = Number(numero1.value);
    let n2 = Number(numero2.value);
    let resultado;
    if (operacao.value == "+") {
        resultado = n1 + n2;
    } 
    else if (operacao.value == "-") {
        resultado = n1 - n2;
    } 
    else if (operacao.value == "*") {
        resultado = n1 * n2;
    } 
    else if (operacao.value == "/") {
        resultado = n1 / n2;
    }
    alert("Resultado: " + resultado);
});
// 8. MAIOR DE TRÊS NÚMEROS
let numero3_1 = document.getElementById("numero3_1");
let numero3_2 = document.getElementById("numero3_2");
let numero3_3 = document.getElementById("numero3_3");
let btnMaior = document.getElementById("btnMaior");
btnMaior.addEventListener("click", function () {
    let n1 = Number(numero3_1.value);
    let n2 = Number(numero3_2.value);
    let n3 = Number(numero3_3.value);
    let maior;
    if (n1 >= n2 && n1 >= n3) {
        maior = n1;
    } 
    else if (n2 >= n1 && n2 >= n3) {
        maior = n2;
    } 
    else {
        maior = n3;
    }
    alert("O maior número é: " + maior);
});
// 9. DESCONTO NA COMPRA
let valorCompra = document.getElementById("valorCompra");
let btnDesconto = document.getElementById("btnDesconto");
btnDesconto.addEventListener("click", function () {
    let valor = Number(valorCompra.value);
    if (valor > 100) {
        let desconto = valor * 0.10;
        let valorFinal = valor - desconto;
        alert(
            "Você ganhou 10% de desconto!\n" +
            "Valor final: R$ " +
            valorFinal.toFixed(2)
        );
    } 
    else {
        alert(
            "Valor normal: R$ " +
            valor.toFixed(2)
        );
    }
});
// 10. LOGIN
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");
let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function () {
    if (usuario.value == "admin" && senha.value == "1234") {
        alert("Login bem-sucedido!");
    } 
    else {
        alert("Acesso negado.");
    }
});
//Nível Avançado
// 11. VALOR DO FRETE
let valorFrete = document.getElementById("valorFrete");
let btnFrete = document.getElementById("btnFrete");
btnFrete.addEventListener("click", function () {
    let valor = Number(valorFrete.value);
    let frete;
    if (valor == 100) {
        frete = 0;
    } 
    else if (valor == 50) {
        frete = 10;
    } 
    else {
        frete = 20;
    }
    alert("Valor do frete: R$ " + frete.toFixed(2));
});
// 12. ENTRADA EM UM EVENTO
let idadeEvento = document.getElementById("idadeEvento");
let convite = document.getElementById("convite");
let btnEvento = document.getElementById("btnEvento");
btnEvento.addEventListener("click", function () {
    let idade = Number(idadeEvento.value);
    if (idade >= 18 || convite.value == "sim") {
        alert("Pode entrar!");
    } 
    else {
        alert("Entrada barrada.");
    }
});
// 13. CONCEITO DA NOTA
let notaConceito = document.getElementById("notaConceito");
let btnConceito = document.getElementById("btnConceito");
btnConceito.addEventListener("click", function () {
    let nota = Number(notaConceito.value);
    if (nota >= 90 && nota <= 100) {
        alert("Conceito A");
    } 
    else if (nota >= 80) {
        alert("Conceito B");
    } 
    else if (nota >= 70) {
        alert("Conceito C");
    } 
    else if (nota >= 60) {
        alert("Conceito D");
    } 
    else if (nota >= 0) {
        alert("Conceito F");
    } 
    else {
        alert("Nota inválida.");
    }
});
// 14. CÁLCULO DO IMC
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let btnImc = document.getElementById("btnImc");
btnImc.addEventListener("click", function () {
    let p = Number(peso.value);
    let a = Number(altura.value);
    let imc = p / (a * a);
    if (imc < 18.5) {
        alert(
            "Abaixo do peso.\nIMC: " +
            imc.toFixed(2)
        );
    } 
    else if (imc < 25) {
        alert(
            "Peso normal.\nIMC: " +
            imc.toFixed(2)
        );
    } 
    else if (imc < 30) {
        alert(
            "Sobrepeso.\nIMC: " +
            imc.toFixed(2)
        );
    } 
    else {
        alert(
            "Obesidade.\nIMC: " +
            imc.toFixed(2)
        );
    }
});
// 15. ESTOQUE
let estoque = document.getElementById("estoque");
let btnEstoque = document.getElementById("btnEstoque");
btnEstoque.addEventListener("click", function () {
    let quantidade = Number(estoque.value);
    if (quantidade == 10) {
        alert("Produto disponível");
    } 
    else if (quantidade >= 1 && quantidade < 10) {
        alert("Últimas unidades");
    } 
    else if (quantidade == 0) {
        alert("Esgotado");
    } 
    else {
        alert("Quantidade de estoque inválida.");
    }
});
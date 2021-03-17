// use strict

// -> procedimentos
// -> sub-rotina
// -> função
// -> métodos

function soma(a, b) {
    return a + b;
}
const total = soma (5, 10);

// -> parâmetros (variaveis que vão receber valores "argumentos")
// -> argumentos (são os valores a ser passados)

// Por que usar funções
// -> Reutilizar o código
// -> Evitar repetição de código
// -> Diminuir o tamanho do código
// -> Facilitar a leitura

// Boas práticas
// -> Responsabilidade única (SOLID)
// -> Funções pequenas
// -> Funções puras (Dado uma entrada sempre será a mesma saida)
// -> semantica (significado)
// -> quantidade de parâmetros (0, 1, 2, 3)

const num1 = number(document.getElementById('nota1').value)
const num2 = number(document.getElementById('nota2').value)

function calcularMedia (n1, n2) {
    return (n1 + n2) / 2
}

function situacao () {
    const media = calcularMedia (nota1, nota2)
    if(media >= 5) {
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}
alert (situacao(media));

// -> Função no javascript são "objetos de primeira classe"
// -> Funções de "alta ordem", ou seja, os famosos calback
// document.getElementById('container').addEventListener('click', situacao) callback

// função declarada / tradicional
function quadrado (numero){
    return numero * numero;
}

// funções anonimas
const quadrado = function (numero) {
    return numero * numero;
}

// arrow1 function f(x) = x * x
const quadrado2 = (numero) => {
    return numero * numero;
}

// arrow2 function
const quadrado3 = (numero) => numero * numero

// document.getElementById('container')
//         .addEventListener('click', function(){ alert ("Olá Mundo!") })
document.getElementById('container')
        .addEventListener('click', msg)
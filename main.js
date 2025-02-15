let nome = '';
let idade = '';
let linguagem = '';
let opcao;

opcao = parseInt(opcao);

while (nome === '') {
    nome = prompt('Qual o seu nome ?');
}

while (idade === '') {
    idade = prompt('Qual a sua idade ?');
}

while (linguagem === '') {
    linguagem = prompt('Qual linguagem de programação você está estudando ?');
}

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

while (opcao != 1 & opcao != 2) {
    opcao = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`));
}

if (opcao === 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso');
} else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}
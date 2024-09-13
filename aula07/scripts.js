// Aprendendo a criar variáveis no Javascript

// var <nomeDaVariavel> = <valor>;
var string = 'string';
var numerico = 12;
var boolean = false;
var array = ['melancia', 'tomate', 12];
var hashmap = {'chave1': 'valor1', 'chave2': 'valor2'};

console.log(string);
console.log(numerico);
console.log(boolean);
console.log(array);
console.log(hashmap);

// Aprendendo a manipular elementos do documento HTML no Javascript 
var h1 = document.getElementById('titulo');
console.log(h1);

var listaDeTextos = document.getElementsByClassName('texto-imagem');
console.log(listaDeTextos[0]);

// ATENCAO: For eache não cai na prova!!!!
Array.from(listaDeTextos).forEach(elemento => {
    elemento.textContent = 'Qualquer coisa muito louca';
});

// listaDeTextos[1].innerHTML = 'Qualquer coisa';

titulo.innerHTML = 'O que você ganha jogando League of Legends';

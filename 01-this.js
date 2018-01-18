/**
  Exemplo de uso do 'this' para acessar o objeto que invocou a função (variável
  que fica antes do ponto).
*/
let pessoas = [
  {
    nome: 'Bandido',
    sobrenome: 'Maulz',
    falar: dizerNome
  },
  {
    nome: 'Monstro',
    sobrenome: 'Sagrado',
    falar: dizerNome
  },
  {
    nome: 'Jacinto',
    sobrenome: 'Paez',
    falar: dizerNome
  }
];

function dizerNome(){
  console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}

pessoas[0].falar();
pessoas[1].falar();
pessoas[2].falar();

//array.push
//console.log

// Objetos

// Propriedades de Objetos
const pessoa = {
  nome: "Richard",
  altura: 1.75,
  idade: 19,
};

console.log(pessoa);

// let respostaUsuario = prompt("Informe o identificador de alguma propriedade no objeto pessoa: ");
// console.log(pessoa[respostaUsuario]);

console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.log("");

// Alterando, Adicionando e Excluindo propriedades
pessoa.idade = 20;
console.log(pessoa);
console.log(pessoa.idade);

console.log("");

pessoa.ultimoNome = "Oliveira";
console.log(pessoa);
console.log(pessoa.ultimoNome);

console.log("");

delete pessoa.altura;
console.log(pessoa);

console.log("");

// Verificando existência de propriedade em objeto
let testePropriedade = ("idade" in pessoa);

console.log(testePropriedade);

console.log("");

// Objetos Aninhados
const pessoa2 = {
  nome: "Tim",
  sobrenome: "Bernardes",
  profissao: "musico",
  instrumento: {
    tipo: "cordas",
    material: "madeira",   
  },
};

console.log(pessoa2);
console.log(pessoa2.instrumento);

console.log("");

// Métodos de Objetos
const carro = {
  marca: "Toyota",
  modelo: "Supra",
  ano: 1998,
  acelerar: function () {
    return `O ${this.marca} ${this.modelo} acelerou.`;
  }
};

console.log(carro.acelerar());

console.log("");

// Adicionando Método em Objeto
carro.derrapar = function () {
  return `O ${this.marca} ${this.modelo} derrapou.`;
};

console.log(carro.derrapar());

console.log(carro);



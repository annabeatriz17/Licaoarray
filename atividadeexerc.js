//método push;
//Adicionando novos refrigerantes ao final da lista;
let refrigerantes = ['Coca-Cola', 'Pepsi'];
refrigerantes.push('Guaraná'); 
console.log(refrigerantes); 

refrigerantes.push('Fanta', 'Sprite');
console.log(refrigerantes); 

//método pop;
//Remove refrigerantes do final da lista;
let refrigerante = ['Coca-Cola', 'Pepsi', 'Guaraná']
let ultimoRefrigerante = refrigerantes.pop;
console.log (ultimoRefrigerante); //Removeu da lista o Guaraná;

console.log(refrigerantes); // Removeu da lista a Coca-Cola e a Pepsi;

//Retirando o primeiro cachorro da lista para passear;
let cachorros = ['Labrador', 'Golden', 'Bulldog'];
let primeiroCachorro = cachorros.shift;
console.log(primeiroCachorro); //Retirei o Labrador para passear;

console.log(cachorros); //Retirei o Golden e o Bulldog para passear;

//método unshitf;
//Adicionando um ou mais cachorros da lista para passear;
let cachorro = ['Poodle', 'Bulldog'];
cachorros.unshift('Labrador');
console.log(cachorros); //Adicionei o Labrador a lista para passear;

cachorros.unshift('Dálmata', 'Pug');
console.log(cachorros); //Adicionei o Dálmata e o Pug a lista para passear;

//método splice;
//Mudando a cor de uma parede na paleta de cores.
let cores = ['vermelho', 'azul', 'verde'];
cores.splice(1, 1, 'amarelo');
console.log(cores); // adicionado o vermelho, amarelo e o verde;

//método map
// Criando uma lista de cachorros com idades.
let dogs = ['Labrador', 'Poodle', 'Bulldog'];
let dogsComIdades = dogs.map(dog => ({ nome: dog, idade: 5 }));
console.log(cachorrosComIdades);
//adicionado Labrador com 5 anos de idade, Poodle com 5 anos de idade e o Bulldog com 5 anos de idade;

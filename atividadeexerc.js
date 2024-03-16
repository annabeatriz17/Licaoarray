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
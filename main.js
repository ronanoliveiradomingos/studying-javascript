
const employers = [
    { name: "João da Silva", salary: 1000.00 },
    { name: "Maria da Silva", salary: 600.00 },
    { name: "Paula da Silva", salary: 2000.00 },
    { name: "Nuno da Silva", salary: 1800.00 },
    { name: "Pedro da Silva", salary: 500.00 },
    { name: "Danilo da Silva", salary: 450.00 },
    { name: "Marcos da Silva", salary: 1800.00 },
];

// let count = employers.length;
// let sum = 0;
// let media = 0;

// employers.map((data) => {
//     sum += data.salary;
// });

// media = (sum / count);

// console.log(media);





// # instanceof - O operador instanceof testa se um objeto tem, em seu prototype, a função construtora. (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
// defenindo construtores
function C() { }
function D() { }

var o = new C();

// true, porque: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, porque D.prototype não está no prototype desse objeto
o instanceof D;

o instanceof Object; // true, porque:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, porque C.prototype não está mais no prototype desse objeto
o instanceof C;

D.prototype = new C(); // use inheritance
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true

// Other example
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car;    // retorna true
var b = mycar instanceof Object; // retorna true

// # Design Patterns no JavaScript – Singleton (https://nandovieira.com.br/design-patterns-no-javascript-singleton)
// O Singleton Pattern diz que você pode ter apenas uma única instância de uma classe (ou, no caso do JavaScript, função construtora). Isso significa que uma vez que a classe for instanciada, você deve sempre retornar esta mesma instância em chamadas subsequentes.



// # Array.prototype.reduce() - O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno. - (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

[0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, indice, array) {
    return acumulador + valorAtual;
}, 10);

// 20

// Soma todos os valores de uma array
var total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
// total == 6

// Contando valores iguais em um objeto
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Juntando arrays contidos num array de objetos usando o operador spread e o valorInicial

// friends - um array de objetos 
// onde o campo "books" é a lista de livros favoritos 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - lista que contém todos os livros de friends +
// lista adicional contida em valorInicial
var allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
}, ['Alphabet']);

  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]

//  Removendo itens duplicados num array
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]
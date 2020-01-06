// What is a callback function is and provide a simple example
// O que é uma função de retorno de chamada e fornece um exemplo simples

// callback function is a function that is executed after another function has finished executing. Another way to describe this — a callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
// Uma função de retorno de chamada é uma função executada após a conclusão de outra função. Outra maneira de descrever isso - uma função de retorno de chamada é uma função que é passada para outra função como argumento e é executada após a conclusão de alguma operação.


function writeBlog(topic, callback) {
    console.log(`Starting my ${topic} blog.`);
    callback();
}

writeBlog('JavaScript', function() {
    console.log('Finished my blog');
});

// What is a primitive? What are the primitive values in JavaScript?
// O que é um primitivo? Quais são os valores primitivos em JavaScript?

// A primitive is not an object and has no methods of its own. All primitives are immutable. There are six types of primitives in JS:
// Um primitivo não é um objeto e não possui métodos próprios. Todos os primitivos são imutáveis. Existem seis tipos de primitivas no JS:

// Boolean — true or false
// Null — no value
// Undefined — a variable that is declared but has not been given a value
// Number — integers, floats, etc.
// String — anything inside of “ ”
// Symbol — a unique value that is not equal to any other value (introduced in ES6)

console.log(Symbol('x') === Symbol('x')) // false

// How can you check if a number is an integer?
// Como você pode verificar se um número é um número inteiro?

// A quick way would be to divide the number by 1 and see if there is a remainder.
// Uma maneira rápida seria dividir o número por 1 e ver se há um restante.

function isAnInteger(num) {
    return num % 1 === 0;
}

console.log(isAnInteger(10)); // true
console.log(isAnInteger(1.1)); // false
console.log(isAnInteger(0.5)); // false


// How does the keyword “this” work? What is an example?
// Como a palavra-chave "this" funciona? O que é um exemplo?

// this keyword refers to an object. Specifically it is the object that is executing the current JS code. Meaning every JS function has a reference to its execution context (how the function is called), known as this.
// esta palavra-chave se refere a um objeto. Especificamente, é o objeto que está executando o código JS atual. Significando que toda função JS tem uma referência ao seu contexto de execução (como a função é chamada), conhecida como this.

// The job of state() function is console logging the this.name. This means that it is trying to print the value of the name property of the current execution context (this object).
// **this keyword goes much more in-depth, there is default and implicit binding and explicit and fixed binding. Read more about this to get a better understanding.**
// O trabalho da função state () é o console registrando o this.name. Isso significa que ele está tentando imprimir o valor da propriedade name do contexto de execução atual (este objeto).
// ** essa palavra-chave é muito mais aprofundada, existe ligação padrão e implícita e ligação explícita e fixa. Leia mais sobre isso para entender melhor. **

function state() {
    console.log(this.name);
}

var name = "NY";

var obj1 = { name: "IN", state: state };
var obj2 = { name: "CA", state: state };

state(); // NY
obj1.state(); // IN
obj2.state(); // CA

// What does this code snippet return? True or False?
// O que esse snippet de código retorna? Verdadeiro ou falso?

// See below
// Veja abaixo

console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE > 0);

console.log(Number.NEGATIVE_INFINITY);
// The answer is true! You would think MIN_Value is 0 but actually Number.MIN_VALUE is 5e-234. This is the smallest positive number that can be represented as a float. Basically, it is the closest you can get to 0. So what is the smallest value? Number.NEGATIVE_INFINITY.
// A resposta é verdadeira! Você pensaria que MIN_Value é 0, mas na verdade Number.MIN_VALUE é 5e-234. Este é o menor número positivo que pode ser representado como um float. Basicamente, é o mais próximo que você pode chegar de 0. Então, qual é o menor valor? Number.NEGATIVE_INFINITY.
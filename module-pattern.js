// # Module Pattern - https://nandovieira.com.br/design-patterns-no-javascript-module
// Every Possible Way to Define a Javascript Function - (https://www.bryanbraun.com/2014/11/27/every-possible-way-to-define-a-javascript-function/)

// O IIFE significa "Immediately-invoked function expression", 
// ou então podemos chamar de função imediata. Como o próprio 
// nome diz, ela executa a função imediatamente depois que criada, mas por que usar?

// Por que usar funções imediatas?
// Encapsulamento! Tenha em mente que variáveis em Javascript 
// têm como escopo a função da qual elas foram definidas (podem ser acessadas 
// somente dentro da função, jamais fora). Ao criar uma função anônima com execução imediata, 
// podemos criar um escopo temporário para nossas funções e variáveis. Com isso evitamos 
// poluição no nosso escopo global e possíveis conflitos de variáveis ou funções com o mesmo nome.

// função anônima
// (function() {
//     console.log("teste");
// })();

// Função imediata com parâmetro
// (function doEmployers(param) {
//     console.log("Module Pattern " + param);
// })("in execution");

// Método de Douglas Crockford
// (function() { /* codigo */ }()); 

// Exemplo Atribuído e invocado
// var Counter = (function () {
//     var count = 0;

//     return {
//         count: function () {
//             return count;
//         },
//         increment: function () {
//             return count += 1;
//         }
//     };
// })();

// console.log(Counter.increment());
// console.log(Counter.increment());

// Note que ambas as funções referenciam a variável count, que não pode ser acessada diretamente de fora da função auto-executável. Dessa forma, podemos encapsular todo o comportamento, sem termos que nos preocupar com modificações feitas sem ser pela função Counter.increment().
// Essa técnica de retornar uma interface pública à partir de um módulo também é chamada de Revealing Module Pattern.

// Exemplo com Arrow Functions

// Anonymous
// var Count = (num1, num2) => {
//     return num1 + num2
// };

// console.log(Count(5, 6));

// Anonymous w/out optional
// bracketed return
// var Count = (num1, num2) => num1 + num2;
// console.log(Count(5, 4));


const create = ({ } = {}) => ({});

const createUser = ({
    userName = "Anonymous",
    avatar = "default.png"
} = {}) => ({
    userName,
    avatar
});

console.log(createUser({userName: "echo", avatar: "echo.png"}));
console.log(createUser());

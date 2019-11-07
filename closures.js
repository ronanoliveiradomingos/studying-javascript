// Neste exemplo definimos a função makeAdder(x) que toma um único argumento x e retorna uma nova função.
// A função retornada toma então um único argumento, y, e retorna então a soma de x e de y.
// Na essência o makeAdder trata-se de uma função factory - irá construir outras funções que podem 
// adicionar um determinado valor específico a seu argumento. No exemplo acima usamos a factory de 
// funções para criar duas novas funções - uma que adiciona 5 ao argumento, e outra que adiciona 10.
// Ambas as funções add5 e add10 são closures. Compartilham o mesmo corpo de definição de função mas 
// armazenam diferentes ambientes. No ambiente da add5, por exemplo, x equivale a 5, enquanto na add10 o valor de x é 10.

// reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures

/*
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5  = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
*/

var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
})();


Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.decrement();
Counter.decrement();
console.log(Counter.value()); //4

function Carro (model, factory) {
    this.model = model;
    // this.factory = factory || "Ford";
}

Carro.prototype.buzina = function () {
    console.log("Be Be Be");
}

Carro.prototype.factory = "Ford";

function Monza (ano) {
    this.ano = ano;
    // Carro.call(this, "Monza", "Opel");
}

//Monza.prototype = { ...Carro.prototype };

Monza.prototype = Object.create(Carro.prototype);
// Monza.prototype.buzina = function () {
//     console.log(`${this.model} be be be`);
// }

// Monza.prototype.constructor = Monza;

const m = new Monza(1989);
m.buzina()
console.log(m.factory);
console.log(m.ano);
console.log(Carro.prototype.constructor);
console.log(Monza.prototype.constructor);

const getAnimals = (name) => {
    switch (name) {
        case "Porc":
            return "Great, find your porc!";
        case "Chicken":
            return "Great, find your chicken!";
        case "Cow":
            return "Great, find your cow!";
        default:
            return "Fail, not found";
    }
};

console.log(getAnimals("Porc"));

// ALTERNATIVE código abaixo fazemos interações usando property.object 
// onde interagimos diretamente com os objetos e não com os values dos respectivos, 
// assim conseguimos fazer com que o nosso code seja ordenado por lista e a gente 
// possa abandonar o switch/case das nossas aplicações.

const getOtherAnimals = (name) => ({
    "Porc": "Great, find your porc!",
    "Chicken": "Great, find your chicken!",
    "Cow": "Great, find your cow!"
}[name] || "Fail, not found");

console.log(getOtherAnimals('Chicken'));
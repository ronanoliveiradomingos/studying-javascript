let animals = {
    walk() {
        if (!this.isSlepping) {
            console.log("I walk");
        }
    },
    sleep() {
        this.isSlepping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animals
};


rabbit.sleep();

console.log(rabbit.isSlepping);
console.log(animals.isSlepping);
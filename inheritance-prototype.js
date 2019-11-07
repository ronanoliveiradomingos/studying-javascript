function UsarPrototype() {
    this.save = () => console.log("Usando save do prototype")
    // this.save = function() {
    //     console.log("Usando save do prototype")
    // }
}

var obj = [];

console.time("Usando prototype");
for (let i; i < 2000000; i++) {
    obj.push(new UsarPrototype());
}
console.timeEnd("Usando prototype");


function UsarObjeto() {
    this.save = () => console.log("Usando save do objeto")
    // this.save = function() {
    //     console.log("Usando save do objeto")
    // }
}

var obj = [];

console.time("Usando objetos locais");
for (let i; i < 2000000; i++) {
    obj.push(new UsarObjeto());
}
console.timeEnd("Usando objetos locais");


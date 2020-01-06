function state() {
    console.log(this.name);
}

var name = "NY";

var obj1 = { name: "IN", state: state };
var obj2 = { name: "CA", state: state };

state(); // NY
obj1.state(); // IN
obj2.state(); // CA
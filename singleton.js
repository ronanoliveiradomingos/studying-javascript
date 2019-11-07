var MyApp;

(function () {
    var instance;

    MyApp = function () {
        if (instance) {
            return instance;
        }

        instance = this;
    };
})();

var instance = new MyApp();
console.log(instance === new MyApp());
//=> true
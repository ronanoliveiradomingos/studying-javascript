let gotoSchool = function () {
    return new Promise(function (resolve, reject) {
        resolve('I went to school');
    });
};

let ComeBackToHome = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' I came back from school');
    });
};
let doLunch = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' I did lunch');
    });
};

gotoSchool()
    .then(function (result) {
        return ComeBackToHome(result);
    }).then(function (result) {
        return doLunch(result);
    }).then(function (result) {
        console.log('finish ' + result);
    })
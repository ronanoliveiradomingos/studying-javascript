let resolveAfter2secondes = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1seconds = function () {
    console.log("stating fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000)
    });
};

let sequentialStart = async function () {
    console.log("==SEQUENCIAL START==");

    let slow = await resolveAfter2secondes();
    console.log(slow);

    let fast = await resolveAfter1seconds();
    console.log(fast);
};

sequentialStart();

let concurrentStart = async function () {
    console.log("==CONCURRENT START with await==");

    let slow = resolveAfter2secondes();
    let fast = resolveAfter1seconds();

    console.log(await slow);
    console.log(await fast);
};

concurrentStart();

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');

    return Promise.all([resolveAfter2secondes(), resolveAfter1seconds()]).then((message) => {
        console.log(message[0]);
        console.log(message[1]);
    });
};

concurrentPromise();


let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');

    await Promise.all([
        (async()=>console.log(await resolveAfter2secondes()))(),
        (async()=>console.log(await resolveAfter1seconds()))()
    ]);
};

parallel();


// Bad
function getCity (state) {
    let city;
    switch (state) {
        case "MG":
            city = "Belo Horizonte";
            break;
        case "RJ":
            city = "Rio de Janeiro";
            break;
        case "SP":
            city = "São Paulo";
            break;
        default:
            city = "Não encontrado";
    }
    return city;
};

// Good
function getCity(state) {
    const city = {
        "MG": () => "Belo Horizonte",
        "RJ": () => "Rio de Janeiro",
        "SP": () => "São Paulo",
        "default": () => "Não encontrado"
    };
    return (city[state] || city["default"])();
}

console.log(getCity("SP"));
console.log(getCity());
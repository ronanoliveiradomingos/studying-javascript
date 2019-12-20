const data = { red: 1, blue: 2 };

const colors = Object.keys(data);
console.log(colors);

const counts = Object.values(data);
console.log(counts);

const colorCounts = Object.entries(data);
console.log(colorCounts);

const filteredData = Object.fromEntries(
    colorCounts.filter(([key, value]) => value === 2)
);
console.log(filteredData);
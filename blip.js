const employees = [
  {
    id: 0,
    name: "a",
    salary: 1000,
    department: "HR"
  },
  {
    id: 1,
    name: "b",
    salary: 1500,
    department: "IT"
  },
  {
    id: 2,
    name: "c",
    salary: 1300,
    department: "IT"
  }
];

//departments
[
  { id: "RH", salaryAverage: 1000 },
  { id: "IT", salaryAverage: 1400 }
]


//corrigir os salarios abaixo da media e +10%




function fixSalariesBelowAvg(employees, factor = 1.1, avgObject = averageByDeptObject(employees)) {
  return employees.map(e => {
    e.salary = (e.salary < avgObject[e.department])
      ? +(e.salary * factor).toFixed(2)
      : e.salary;
    return e;
  });
}

function averageByDeptObject(employees) {
  return employees.reduce((acc, { department, salary }) => {
    acc[department] = (acc[department] != undefined) // necessario comparar explicitamente, { salary : 0 } zeraria algum valor anterior de { acc[department] }
      ? (acc[department] + salary) / 2 // a ideia de ouro. Me passou pela cabe'ca mas deixei voar... recalcular a media a cada novo valor, e nao "esperar" pelo { length }
      : salary;
    return acc;
  }, {});
}

function averageByDeptList(employees) {
  const avgObject = averageByDeptObject(employees);
  return Object.keys(avgObject)
    .reduce((acc, curr) => acc = [...acc, { id: curr, salaryAverage: avgObject[curr] }], []);
}

/*
console.log(
  "\nEmployees (original)\n", employees, 
  "\nDepartments Average: \n", averageByDeptList(employees),
  "\nRaised salaries: \n", fixSalariesBelowAvg(employees),
);
*/

/*
(function() {
  console.log(1);
  var st2 = setTimeout(() => console.log(2), 0);
  setTimeout(() => console.log(3), 100);
  console.log(4);
  console.log(5);
})()
*/

/*
let i = 0;
const timer = setInterval(() => {
  if(i >= 4) clearInterval(timer);
  console.log(++i)
}, 500);
*/

(function () {
  //console.log(i);

  ///for(let i = 0; i < 4; i++) console.log(i);
  //console.log(i);

})();


function preSum(a) {
  return function (b) {
    return a + b;
  }
}
const preSum3 = preSum(3);


function preSumBind(a, b) {
  return a + b;
}
const preSumBind10 = preSumBind.bind(null, 10);

console.log(
  "\n",
  preSum(3)(4),
  "\n",
  preSumBind.call(null, 10, 10),
  "\n",
  [1, 2, 3, 4, 5, 6, 7].map(preSum3),
  "\n",
  [1, 2, 3, 4, 5, 6, 7].map(preSumBind10)

);

//json -javascript object notation
//JSON is a format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.
//eg.

// {
//     "employees":[
//       {"firstName":"John", "lastName":"Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//     ]
//     }
    
let jsondata = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
};

console.log(jsondata.employees);
console.log(jsondata.employees[1]);
console.log(jsondata.employees[1].firstName);

//json .stringify(),json.parse()
let student = {
    name : 'amol',
    age : 20
}

let stringifyedData = JSON.stringify(student);
console.log(student);
console.log(stringifyedData);

let parsedData = JSON.parse(stringifyedData);
console.log(parsedData);

    

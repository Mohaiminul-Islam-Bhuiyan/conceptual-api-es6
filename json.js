const person = {
    name: {
      common: "John",
      fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
      street: "13/A St Joseph",
      house: 10,
    },
  };

  const stringifiedJson = JSON.stringify(person);
  //{"name":{"common":"John","fullName":["John","Doe"]},"age":32,"isMale":false,"address":{"street":"13/A St Joseph","house":10}}
  console.log(stringifiedJson);

  const parsedJson = JSON.parse(stringifiedJson);
  console.log(parsedJson);

const {name, age, isMale, address} = parsedJson;
const {common, fullName} = name;

const personContainer = document.getElementById('person-container');
personContainer.innerHTML = `
  <h2>Common Name: ${common}</h2>
  <h3>Full Name: ${fullName[0]} ${fullName[1]}</h3>
  <h3>Full Name: ${fullName.join(' ')}</h3>
  <p>Age: ${age}</p>
  <p>Gender: ${isMale ? "Male" : "Female"} </p>
`
// Write your solution in this file!
//updateEmployeeWithKeyAndValue(employee, key, value)
//          "before each" hook for "returns an employee with the original key value pairs and the new key value pair":
const employee = {name:"Kenyansa", streetAddress: "Naivasha Rd"};
beforeEach(function(){
  for (const key in emplyoee){
    delete employee[key];
  }
});

function updateEmployeeWithKeyAndValue(employee, key, value) {
let nemployee = {...employee};
nemployee[key] = value;
return nemployee;
}
beforeEach(function(){
  for (const key in employee){
    delete employee[key];
  }
});
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee;
}

beforeEach(function(){
  for (const key in employee){
    delete employee[key];
  }
});

function deleteFromEmployeeByKey(employee, key){
  let nemployee = {...employee};
  delete nemployee;
}
beforeEach(function(){
  for (const key in employee){
    delete employee[key];
  }
});
      //  destructivelyDeleteFromEmployeeByKey(employee, key)
      //    modifies the original employee:
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
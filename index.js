// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "32 Canal st"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

updateEmployeeWithKeyAndValue(employee, "name", "Tonya");
updateEmployeeWithKeyAndValue(employee, "streetAdress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"name", "Tonya");
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
  let employee2 = {...employee}
  delete employee2.name;
  return employee2;
}
deleteFromEmployeeByKey(employee, name);
 
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
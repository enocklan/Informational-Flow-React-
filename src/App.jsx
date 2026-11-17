import { useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App(){
const [employees, setEmployees] = useState([]);

  function handleDelete(employeeToDelete) {
    setEmployees(currentEmployees =>
      currentEmployees.filter(employee => employee.id !== employeeToDelete.id)
    );
  }

  function handleEdit(updatedEmployee) {
    setEmployees(currentEmployees =>
      currentEmployees.map(employee =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  }

  return(
    <>
    <div>
      <Header/>
      <EmployeeForm setEmployees={setEmployees}/>
      <EmployeeList
        employees={employees}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

    </div>
    </>
  )
}

export default App;
import Employee from './Employee';
 
function EmployeeList({ employees, handleDelete, handleEdit }) {
  return (
    <div>
      <h3>All Employees</h3>
      <table>
        <tbody>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Remove</th>
          </tr>
          {employees.map((employee) => (
              <Employee 
                key={employee.id} 
                employee={employee} 
                handleDelete={handleDelete} 
                handleEdit={handleEdit}
              />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
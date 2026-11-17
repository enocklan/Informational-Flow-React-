import { useState } from 'react';

function Employee({ employee, handleDelete, handleEdit }) {
  const [edit, setEdit] = useState(false);
  const [roleEdit, setRoleEdit] = useState(employee.role);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedEmployee = { ...employee, role: roleEdit };
    handleEdit(updatedEmployee);
    setEdit(false);
  }

  return (
    <tr>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td onClick={() => setEdit(true)}>
            {edit ? (
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setRoleEdit(e.target.value)}
                  value={roleEdit}
                />
              </form>
            ) : employee.role}
        </td>
        <td>
          <button onClick={() => handleDelete(employee)}> X </button>
        </td>
    </tr>
  );
}

export default Employee;
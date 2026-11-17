import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // package to generate a simple ID

function EmployeeForm({ setEmployees }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Create new employee object by form inputs
    const newEmployee = {
      id: uuidv4(),
      firstName,
      lastName,
      role,
    };

    setEmployees(previousEmployees => {
      return [...previousEmployees, newEmployee]
    });

    // Clear the form
    setFirstName('');
    setLastName('');
    setRole('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
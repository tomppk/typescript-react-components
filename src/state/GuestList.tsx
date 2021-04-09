// Import useState hook from React
import { useState } from 'react';

// Define state property name and its setter
// Set default value to be empty string
const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  // Set up controlled input. On input change receive event object.
  // Call setName and set name state value as e.target.value which is
  // input value
  return (
    <div>
      <h3>Guest List</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add Guest</button>
    </div>
  );
};

export default GuestList;

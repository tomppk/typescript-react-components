// Import useState hook from React
import { useState } from 'react';

// Define state property name, guests and their setters
// Set default values to be empty string and empty array
// Define guests type to be an array of strings. Otherwise Typescript cannot
// infer the type from empty array and will set type to never[] ie. permanently
// empty array
const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  // Set up controlled input. On input change receive event object.
  // Call setName and set name state value as e.target.value which is
  // input value
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;

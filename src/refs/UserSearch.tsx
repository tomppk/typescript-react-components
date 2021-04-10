// Import useState and useRef hooks
import { useState, useRef } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 23 },
  { name: 'Michael', age: 24 },
  { name: 'Susie', age: 21 },
];

// Add possible types user piece of state can have
// Create a Ref that is going to refer to some HTML element
// in the DOM when it gets rendered
// Give Ref the HTML element type so it knows the correct type
// To get a list of all possible HTMLElement interfaces just write
// HTMLElement and ctrl+click it to see the type definition file
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // Iterate through all users in the array and return user whose
  // name property matches our name state
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
    setName('');
  };

  // user && user.name means only try to access user.name property if user is
  // a truthy value. So only if user is not undefined.
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;

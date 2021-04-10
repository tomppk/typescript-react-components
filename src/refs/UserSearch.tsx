// Import useState, useRef and useEffect hooks
import { useState, useRef, useEffect } from 'react';

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
// Ref is either type HTMLInputElement or null, with default value null.
// null is needed as Typescript does not know whether the element will be
// rendered at some point in time or not
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // useEffect similar to component lifecycle methods.
  // Make sure inner function is invoked only one time
  // Add empty array as second argument so it is called only once when
  // component is rendered.
  // Reference to DOM rendered html node or element is available with 'current'
  // attribute of the ref.
  // Add type guard to check if there is no inputRef.current, then return early
  // If there is HTML node rendered on the screen with the ref.current then
  // as the component is rendered focus mouser pointer automatically to input
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

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

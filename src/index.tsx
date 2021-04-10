import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearch from './classes/UserSearch';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 23 },
  { name: 'Michael', age: 24 },
  { name: 'Susie', age: 21 },
];

const App = () => {
  return (
    <div>
      <UserSearch users={users} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

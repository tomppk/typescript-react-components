import { Component } from 'react';

// Define interface for user object
interface User {
  name: string;
  age: number;
}

// We expect this component to receive as props an array of objects
// that will have name and age properties {name: string, age: number}[]
interface UserSearchProps {
  users: User[];
}

// Define state User can have
interface UserSearchState {
  name: string;
  user: User | undefined;
}

// Expects to have type UserSearchProps as props
class UserSearch extends Component<UserSearchProps> {
  // Define default values for state
  state: UserSearchState = { name: '', user: undefined };

  // Iterate through all users in the array and return user whose
  // name property matches our name state
  // Use arrow function to bind 'this' and not get undefined
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ name: '', user: foundUser });
  };

  render() {
    // Destructure name and user
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;

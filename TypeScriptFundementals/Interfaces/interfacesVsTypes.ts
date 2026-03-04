// Using an interface to define a shape
interface User {
  id: number;
  name: string;
  email: string;
}

// Using a type alias to define the same shape
type UserType = {
  id: number;
  name: string;
  email: string;
};

// Example usage
const alice: User = { id: 1, name: "Alice", email: "alice@example.com" };
const bob: UserType = { id: 2, name: "Bob", email: "bob@example.com" };

console.log(alice)
// Using optional and readonly properties in object types

type UserProfile = {
  readonly id: number; // Cannot be changed after creation
  username: string;
  email?: string; // Optional property
  details?: {
    age: number;
    address?: string; // Nested optional property
  };
};

const user1: UserProfile = {
  id: 1,
  username: "alice"
};

// Valid: email and details are optional
const user2: UserProfile = {
  id: 2,
  username: "bob",
  email: "bob@example.com",
  details: {
    age: 30
  }
};

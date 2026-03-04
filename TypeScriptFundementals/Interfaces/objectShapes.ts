interface User {
    name: string,
    age: number
}

function printUserInfo(user:User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user1 = { name: "Chioma", age: 88}
printUserInfo(user1)


interface User {
  name: string;
  age: number;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const user2 = { name: "Bob", age: 25 };
console.log(greetUser(user2));
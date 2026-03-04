interface User {
    name: string,
    age: number
}

function printUserInfo(user:User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user1 = { name: "Chioma", age: 88}
printUserInfo(user1)
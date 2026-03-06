let username: string | undefined;

console.log(username);

// Function that returns nothing:
function logMessage(): void {
    console.log("Hello TypeScript");
}

const result = logMessage();
console.log(result)

// Missing object property:
type User = {
    name: string;
    age?: number;
};

const user: User = {
    name: "Chioma"
};
console.log("User age is:", user.age);
function logMessage(msg: string): void {
  console.log("Log:", msg);
}

function throwError(): never {
  throw new Error("Something went wrong!");
}

// Valid calls
logMessage("System started"); // Output: Log: System started
logMessage("User logged in"); // Output: Log: User logged in

// Invalid (failure) calls
// logMessage(); // Error: Expected 1 argument, but got 0.
// logMessage(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Correct usage of throwError
throwError(); // Uncommenting this will immediately throw an error and stop execution.

// Invalid (failure) calls
// throwError("Oops"); // Error: Expected 0 arguments, but got 1.
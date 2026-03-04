interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const developer: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "Engineering"
};
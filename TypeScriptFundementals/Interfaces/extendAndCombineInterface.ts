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

interface Contactable {
  phone: string;
}

interface Emailable {
  email: string;
}

type ContactInfo = Contactable & Emailable;

const customer: ContactInfo = {
  phone: "555-1234",
  email: "customer@example.com"
};
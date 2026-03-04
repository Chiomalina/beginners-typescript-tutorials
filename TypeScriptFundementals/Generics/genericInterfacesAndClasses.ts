// A generic interface for a box that holds a value of any type
interface Box<T> {
  value: T;
}

// Using Box with different types
const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "hello" };



// A generic class for storing and retrieving items
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Using Repository with strings
const stringRepo = new Repository<string>();
stringRepo.add("apple");
stringRepo.add("banana");
console.log(stringRepo.getAll()); // Output: ["apple", "banana"]

// Using Repository with numbers
const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
console.log(numberRepo.getAll()); // Output: [1, 2]
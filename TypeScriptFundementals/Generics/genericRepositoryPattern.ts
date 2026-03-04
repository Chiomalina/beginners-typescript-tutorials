// 1. Define a generic interface for a repository
interface Repository<T> {
  add(item: T): void;
  getAll(): T[];
  findById(id: number): T | undefined;
}

// 2. Define types for User and Product
type User = { id: number; name: string };
type Product = { id: number; title: string };

// 3. Create a single generic repository class
class GenericRepository<T extends { id: number }> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

// 4. Use the repository for Users and Products
const userRepo = new GenericRepository<User>();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

const productRepo = new GenericRepository<Product>();
productRepo.add({ id: 101, title: "Laptop" });
productRepo.add({ id: 102, title: "Phone" });

// 5. Display results
console.log("All users:", userRepo.getAll());
console.log("User #2:", userRepo.findById(2));

console.log("All products:", productRepo.getAll());
console.log("Product #101:", productRepo.findById(101));

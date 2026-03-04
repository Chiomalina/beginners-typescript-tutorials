interface Product {
  readonly id: number;
  name: string;
  description?: string;
}

const book: Product = {
  id: 101,
  name: "TypeScript Handbook",
};

const pen: Product = {
  id: 102,
  name: "Blue Pen",
  description: "A smooth-writing blue pen",
};

console.log(pen);

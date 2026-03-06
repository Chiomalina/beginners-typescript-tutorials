const id = Symbol("id");

const user = {
  name: "Chioma",
  [id]: 123,
};

for (const key in user) {
  console.log(key);
}

// The symbol property is hidden

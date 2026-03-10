function showId(this: { id: number }): void {
  console.log("ID:", this.id);
}

const user = { id: 101, showId };

user.showId(); // Output: ID: 101

const detachedShowId = user.showId;
// detachedShowId(); // Error in TypeScript: The 'this' context of type 'void' is not assignable to method's 'this' of type '{ id: number }'.
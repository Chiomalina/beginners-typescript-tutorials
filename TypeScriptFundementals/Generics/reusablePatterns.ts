// Define a generic interface for API responses
interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}


type User = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
};



// Example function that fetches user data and returns a typed ApiResponse<User>
async function fetchUser(userId: number): Promise<ApiResponse<User>> {
  try {
    // Simulate fetching user data from an API
    const user: User = { id: userId, name: "Alice" };
    return {
      data: user,
      error: null,
      status: 200,
    };
  } catch (e) {
    return {
      data: null,
      error: "Failed to fetch user",
      status: 500,
    };
  }
}
// Mock API functions
export const registerUser = async (userData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: 1,
    name: 'Test User',
    email: userData.email
  };
};

export const fetchUser = async (userId) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (userId === 1) {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    };
  }
  
  throw new Error('User not found');
};
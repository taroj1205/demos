'use server'

export const authenticateUser = async (email: string, password: string): Promise<{ success: boolean, user?: { id: string, email: string } }> => {
  if (!email || !password) {
    return { success: false };
  }

  const validUsers = [
    { id: '1', email: 'user@example.com', password: 'password123' },
    { id: '2', email: 'admin@example.com', password: 'admin123' },
    { id: '3', email: 'guest@example.com', password: 'guest123' },
  ];

  const user = validUsers.find(u => u.email === email && u.password === password);

  if (user) {
    return { 
      success: true, 
      user: { 
        id: user.id, 
        email: user.email 
      } 
    };
  }

  return { success: false };
}
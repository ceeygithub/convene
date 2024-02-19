// Auth.js
import userDatabase from './users';

const Auth = {
  login: (username, password) => {
    const user = userDatabase.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Set user information in localStorage or a secure storage mechanism
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    return null;
  },

  logout: () => {
    // Clear user information from localStorage or secure storage
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    // Retrieve user information from localStorage or secure storage
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  },
};

export default Auth;

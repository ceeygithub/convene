
class Auth {
  static isAuthenticated() {
    // Check if the user is authenticated (example: check for a token)
    const token = localStorage.getItem('userToken'); // Retrieve token from localStorage

    return !!token; // Return true if token exists, indicating the user is authenticated
  }

  static isAdmin() {
    // Check if the user is an admin (example: check for admin role)
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

    return user && user.role === 'Admin'; // Return true if the user is an admin
  }

  static isRegularUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.role !== 'Admin';
  }

  static logout() {
    // Clear authentication-related data on logout
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
  }

  static setAuthData(token, user) {
    // Save authentication data in localStorage or secure storage mechanism
    localStorage.setItem('userToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  static clearAuthData() {
    // Clear authentication data from localStorage or secure storage mechanism
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
  }
}

export default Auth;

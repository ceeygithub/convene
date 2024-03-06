
// const Auth = {
//   login: async (username, password) => {
//     try {
//       const response = await fetch('http://localhost:3002/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const user = await response.json();
//         return user;
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error);
//       }
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       throw error;
//     }
//   },

//   getCurrentUser: async () => {
//     try {
//       const response = await fetch('http://localhost:3002/user/login', {
//         credentials: 'include', // Include credentials (cookies)
//       });

//       if (response.ok) {
//         const user = await response.json();
//         return user;
//       } else {
//         console.error('Error fetching current user:', response.statusText);
//         return null;
//       }
//     } catch (error) {
//       console.error('Error fetching current user:', error.message);
//       return null;
//     }
//   },

//   isAdmin: (user) => {
//     return user && user.isAdmin;
//   },

//   isAuthenticated: async () => {
//     const user = await Auth.getCurrentUser();
//     return !!user;
//   },

//  logout: async () => {
//   try {
//     const response = await fetch('http://localhost:3002/user/logout', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // Include credentials (cookies)
//     });

//     if (response.ok) {
//       localStorage.clear(); // Clear the entire local storage
//       return true;
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.error);
//     }
//   } catch (error) {
//     console.error('Logout failed:', error.message);
//     throw error;
//   }
// },

// };

// export default Auth;

// Auth.js
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

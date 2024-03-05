

// const Auth = {
//   users: [
//     { id: 1, username: 'user1', password: 'password1', isAdmin: false },
//     { id: 2, username: 'admin', password: 'adminpass', isAdmin: true },
//   ],

//   login: (username, password) => {
//     const user = Auth.users.find((u) => u.username === username && u.password === password);

//     if (user) {
//       localStorage.setItem('user', JSON.stringify(user));
//     }

//     return user || null;
//   },

//   // logout: () => {
//   //   localStorage.removeItem('user');
//   // },
//   logout: () => {
//     localStorage.clear(); // Clears the entire local storage
  
//   },


//   addUser: (username, email, password) => {
//     const user = { id: Auth.users.length + 1, username, email, password, isAdmin: false };
//     Auth.users.push(user);
//     return user;
//   },

//  getCurrentUser: () => {
//     const userString = localStorage.getItem('user');
//     const currentUser = userString ? JSON.parse(userString) : null;

//     console.log('Fetched User:', currentUser); // Log the fetched user

//     return currentUser;
//   },


//   updateUserIsAdmin: (username, isAdmin) => {
//     const user = Auth.users.find((u) => u.username === username);
    
//     if (user) {
//       user.isAdmin = isAdmin;
//       return true; // Successfully updated
//     }

//     return false; // User not found
//   },

//   isAuthenticated: () => {
//     return !!Auth.getCurrentUser();
//   },

  
// };

// export default Auth;

const Auth = {
  login: async (username, password) => {
    try {
      const response = await fetch('http://localhost:3002/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        return user;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  },



logout: async () => {
  try {
    const response = await fetch('http://localhost:3002/user/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return true;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    console.error('Logout failed:', error.message);
    throw error;
  }
},

// ...


  isAuthenticated: async () => {
    try {
      const response = await fetch('http://localhost:3002/user/login');

      if (response.ok) {
        const isAuthenticated = await response.json();
        return isAuthenticated;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Authentication check failed:', error.message);
      throw error;
    }
  },
};

export default Auth;



// const Auth = {
//   login: (username, password) => {
//     // In a real-world application, you'd likely make an API call for authentication
//     // For simplicity, using local data for demonstration purposes
//     const users = [
//       { id: 1, username: 'user1', password: 'password1', isAdmin: false },
//       { id: 2, username: 'admin', password: 'adminpass', isAdmin: true },
//     ];

//     const user = users.find((u) => u.username === username && u.password === password);

//     if (user) {
//       // Set user information in localStorage or a secure storage mechanism
//       localStorage.setItem('user', JSON.stringify(user));
//     }

//     return user || null;
//   },

//   logout: () => {
//     // Clear user information from localStorage or secure storage
//     localStorage.removeItem('user');
//   },
  

//   getCurrentUser: () => {
//     // Retrieve user information from localStorage or secure storage
//     const userString = localStorage.getItem('user');
//     const currentUser = userString ? JSON.parse(userString) : null;

//     return currentUser;
//   },
// };

// export default Auth;

const Auth = {
  users: [
    { id: 1, username: 'user1', password: 'password1', isAdmin: false },
    { id: 2, username: 'admin', password: 'adminpass', isAdmin: true },
  ],

  login: (username, password) => {
    const user = Auth.users.find((u) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user || null;
  },

  // logout: () => {
  //   localStorage.removeItem('user');
  // },
  logout: () => {
    localStorage.clear(); // Clears the entire local storage
  
  },


  addUser: (username, email, password) => {
    const user = { id: Auth.users.length + 1, username, email, password, isAdmin: false };
    Auth.users.push(user);
    return user;
  },

 getCurrentUser: () => {
    const userString = localStorage.getItem('user');
    const currentUser = userString ? JSON.parse(userString) : null;

    console.log('Fetched User:', currentUser); // Log the fetched user

    return currentUser;
  },


  updateUserIsAdmin: (username, isAdmin) => {
    const user = Auth.users.find((u) => u.username === username);
    
    if (user) {
      user.isAdmin = isAdmin;
      return true; // Successfully updated
    }

    return false; // User not found
  },

  isAuthenticated: () => {
    return !!Auth.getCurrentUser();
  },

  
};

export default Auth;

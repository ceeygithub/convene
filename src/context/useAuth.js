
// import { createContext, useState, useEffect } from 'react';
// import Auth from '../services/Auth';

// export const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
  

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 // Check if there is a user in local storage
//                 const storedUser = JSON.parse(localStorage.getItem('user'));

//                 if (storedUser) {
//                     setUser(storedUser);
//                 } else {
//                     // If no user in local storage, make the API call
//                     const response = await fetch('http://localhost:3002/user/login');
//                     if (response.ok) {
//                         const userData = await response.json();
//                         setUser(userData);

//                         // Save the user data to local storage
//                         localStorage.setItem('user', JSON.stringify(userData));
//                     } else {
//                         console.error('Error fetching user - Server responded with error:', response.statusText);
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching user - Network error or exception:', error);
//             }
//         };

//         fetchUser();
//     }, []);

 


//     const login = (userData) => {
//         setUser(userData);
//         Auth.setAuthData(userData.token, userData.user);
//     };

//     const logout = () => {
//         setUser(null);
//         Auth.clearAuthData();
//     };

//     const isAdmin = () => {
//         // Check if the user has admin privileges based on your user data structure
//         return user && user.role === 'admin';
//     };
//     const value = {
//         user,
//         login,
//         logout,
//         isAdmin
//     };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
import { createContext, useState, useEffect } from 'react';
import Auth from '../services/Auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             // Check if there is a user in local storage
    //             const storedUser = JSON.parse(localStorage.getItem('user'));

    //             if (storedUser) {
    //                 setUser(storedUser);
    //             } else {
    //                 // If no user in local storage, make the API call
    //                 const response = await fetch('http://localhost:3002/user/login');
    //                 if (response.ok) {
    //                     const userData = await response.json();
    //                     setUser(userData);

    //                     // Save the user data to local storage
    //                     localStorage.setItem('user', JSON.stringify(userData));
    //                 } else {
    //                     console.error('Error fetching user - Server responded with error:', response.statusText);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error fetching user - Network error or exception:', error);
    //         }
    //     };

    //     fetchUser();
    // }, []);

    const login = (userData) => {
        setUser(userData);
        Auth.setAuthData(userData.token, userData.user);
    };

    const logout = () => {
        setUser(null);
        Auth.clearAuthData();
    };

    const isAdmin = () => {
        // Check if the user has admin privileges based on your user data structure
        return user && user.role === 'admin';
    };
    const isRegularUser = () => {
        return user && user.role !== 'admin';
    };

    // const createUser = async (newUserData) => {
    //     try {
    //         const response = await fetch('http://localhost:3002/user/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(newUserData),
    //         });

    //         if (response.ok) {
    //             const createdUser = await response.json();
    //             console.log('User created successfully:', createdUser);
    //         } else {
    //             console.error('Error creating user - Server responded with error:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error creating user - Network error or exception:', error);
    //     }
    // };

    const value = {
        user,
        login,
        logout,
        isAdmin,
        // createUser,
        isRegularUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

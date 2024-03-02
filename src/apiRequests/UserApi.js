// import { useNavigate } from 'react-router-dom';

// export const StoreUser = async (data) => {

//     const navigate = useNavigate();
//     try {

//         navigate('/profile');
//         const response = await fetch("http://localhost:3002/create", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//         console.log(response);
//         if (response.ok) {
//             // The signup was successful, you can redirect to the profile page
//             navigate('/profile');

//             return await response.json();
//         } else {
//             // Handle errors or show appropriate messages
//             console.error('Sign Up Failed:', response.statusText);
//             // You might want to throw an error or handle it according to your application logic
//             return null;

//         }
//     } catch (error) {
//         console.error('Error during sign up:', error);
//         // You might want to throw an error or handle it according to your application logic
//         return null;

//     }
// };
// UserApi.js

// import { useNavigate } from 'react-router-dom';

//  export const StoreUser = async (data) => {
//     const navigate = useNavigate();

//     try {
//         const response = await fetch("http://localhost:3002/create", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             // If the signup was successful, you can redirect to the profile page
//             navigate('/profile');
//             return await response.json();
//         } else {
//             // Handle errors or show appropriate messages
//             console.error('Sign Up Failed:', response.statusText);
//             return null;
//         }
//     } catch (error) {
//         console.error('Error during sign up:', error);
//         return null;
//     }
// };

// export default StoreUser;

// UserApi.js
// UserApi.js
// const StoreUser = async (userData) => {
//     try {
//         const response = await fetch('http://localhost:3002/users/create', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             return data; // Assuming the server returns the user data upon successful creation
//         } else {
//             throw new Error(`User creation failed with status: ${response.status}`);
//         }
//     } catch (error) {
//         console.error('Error during user creation:', error);
//         throw new Error('Error during user creation');
//     }
// };

// export { StoreUser };

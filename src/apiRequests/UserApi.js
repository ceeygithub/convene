import { useNavigate } from 'react-router-dom';

export const StoreUser = async (data) => {

    const navigate = useNavigate();
    try {

        navigate('/profile');
        const response = await fetch("http://localhost:3002/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
console.log(response);
        if (response.ok) {
            // The signup was successful, you can redirect to the profile page
            navigate('/profile');
            
            return await response.json();
        } else {
            // Handle errors or show appropriate messages
            console.error('Sign Up Failed:', response.statusText);
            // You might want to throw an error or handle it according to your application logic
        }
    } catch (error) {
        console.error('Error during sign up:', error);
        // You might want to throw an error or handle it according to your application logic
    }
};

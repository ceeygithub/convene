// CreateMeetup.js

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../services/Auth';

const CreateMeetup = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulating user authentication or fetching user data from an API
        setUser(Auth.login());
    }, []);

    if (!user || !user.isAdmin) {
        // Redirect to home if the user is not authenticated or not an admin
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Create a Meetup</h1>
            <p>This page is accessible only to admin users.</p>
        </div>
    );
};

export default CreateMeetup;

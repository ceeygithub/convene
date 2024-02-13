import React from 'react';

const UserProfile = () => {
    // Replace the following with actual user data fetched from your backend or state
    const userData = {
        username: 'john_doe',
        email: 'john@example.com',
        questionsPosted: 10,
        commentsPosted: 20,
        upcomingMeetups: ['Meetup 1', 'Meetup 2', 'Meetup 3'],
    };

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                <p>Questions Posted: {userData.questionsPosted}</p>
                <p>Comments Posted: {userData.commentsPosted}</p>
            </div>
            <div>
                <h2>Upcoming Meetups</h2>
                <ul>
                    {userData.upcomingMeetups.map((meetup, index) => (
                        <li key={index}>{meetup}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;

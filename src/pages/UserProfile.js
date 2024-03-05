import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfileCss from '../styles/UserProfile.module.css';
import { FaThumbsUp } from "react-icons/fa";


const UserProfile = () => {
    // const [profileHeight, setProfileHeight] = useState(100); // Initial height in vh

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrolledHeight = window.scrollY;
    //         setProfileHeight(Math.max(0, 100 - scrolledHeight * 0.5)); // Ensure height is not negative
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         // Cleanup: remove the event listener when the component is unmounted
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []); // Empty dependency array to run the effect only once on mount

    const { state } = useLocation();
    const selectedInterests = state?.selectedInterests || [];
    const [questions, setQuestions] = useState([
        { id: 1, text: 'What is your favorite book?', upvotes: 0 },
        { id: 2, text: 'Do you enjoy outdoor activities?', upvotes: 0 },
   
    ]);
    

    const handleUpvote = (questionId) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) =>
                question.id === questionId ? { ...question, upvotes: question.upvotes + 1 } : question
            )
        );
    };

    return (
        < div className={UserProfileCss.container}  >
            <div className={UserProfileCss.profileContainer}>
                <h2 className={UserProfileCss.interestHeading}>Your Picked Interests:</h2>
                <ul className={UserProfileCss.interestList}>
                    {selectedInterests.map((interest, index) => (
                        <li key={index}>
                            <p>{interest.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={UserProfileCss.eventsContainer}>
                <div class="cardOne">
                    <div class="photo">
                        <img src="https://images.pexels.com/photos/7550298/pexels-photo-7550298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""/>
                    </div>
                </div>
                <div className='cardTwo'>
                    <p>date of event</p>
                    <ul>
                        {questions.map((question) => (
                            <li key={question.id}>
                                <p>{question.text}</p>
                                <button onClick={() => handleUpvote(question.id)}> <FaThumbsUp />Upvote ({question.upvotes})</button>
                            </li>
                        ))}
                    </ul>
                </div>
            
            </div>
        </div>
    );
};

export default UserProfile;


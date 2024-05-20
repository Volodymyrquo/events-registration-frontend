import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './Home.styled';

const Home = () => {
    return (
        <Main>
            <ul>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/event-participants">EventParticipants</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
            </ul>
        </Main>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import EventCard from './components/EventCard';
import * as S from './Event.styled';

const Event = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            axios.get(`/events/${id}`).then(({ data }) => setData(data));
        } catch (error) {
            console.warn(error);
        }
    }, [id]);
    return (
        <S.EventContainer>
            {data?.participant?.map((el) => (
                <EventCard
                    key={el._id}
                    fullName={el.fullName}
                    email={el.email}
                />
            ))}
        </S.EventContainer>
    );
};

export default Event;

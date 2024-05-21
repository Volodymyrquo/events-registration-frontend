import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
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
            <S.Title>{`"${data?.title}" participants`}</S.Title>
            <S.ParticipantList>
                {!isEmpty(data?.participant) ? (
                    data?.participant?.map((el) => (
                        <EventCard
                            key={el._id}
                            fullName={el.fullName}
                            email={el.email}
                        />
                    ))
                ) : (
                    <S.WelcomeText>
                        You could be the first participant of this event.{' '}
                        <Link to="/registration" state={{ eventId: id }}>
                            Register
                        </Link>
                    </S.WelcomeText>
                )}
            </S.ParticipantList>
        </S.EventContainer>
    );
};

export default Event;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import * as S from './Card.styled';

const Card = ({ title, description, _id, organizer, eventDate }) => {
    const navigate = useNavigate();
    const handleOnRegister = () => {
        navigate('/registration', { state: { eventId: _id } });
    };
    const handleOnView = () => {
        navigate(`/events/${_id}`);
    };
    return (
        <S.CardContainer>
            <S.EventInfo>
                <S.Title>{title}</S.Title>
                <p>{description}</p>
                <div>
                    <S.SubtitleWrapper>
                        <S.Subtitle>Organizer:</S.Subtitle> {organizer}
                    </S.SubtitleWrapper>
                    <S.SubtitleWrapper>
                        <S.Subtitle>Event date:</S.Subtitle>{' '}
                        {format(new Date(eventDate), 'dd-MM-yyyy')}
                    </S.SubtitleWrapper>
                </div>
            </S.EventInfo>
            <S.ButtonContainer>
                <button type="button" onClick={handleOnRegister}>
                    Register
                </button>
                <button type="button" onClick={handleOnView}>
                    View
                </button>
            </S.ButtonContainer>
        </S.CardContainer>
    );
};

export default Card;

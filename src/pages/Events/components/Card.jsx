import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Card.styled';

const Card = ({ title, description, id }) => {
    const navigate = useNavigate();
    const handleOnRegister = () => {
        navigate('/registration', { state: { eventId: id } });
    };
    const handleOnView = () => {
        navigate(`/events/${id}`);
    };
    return (
        <S.CardContainer>
            <div>
                <S.Title>{title}</S.Title>
                <p>{description}</p>
            </div>
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

import React from 'react';

import * as S from './EventCard.styled';

const EventCard = ({ fullName, email }) => {
    return (
        <S.EventCardContainer>
            <S.Name>{fullName}</S.Name>
            <S.Email>{email}</S.Email>
        </S.EventCardContainer>
    );
};

export default EventCard;

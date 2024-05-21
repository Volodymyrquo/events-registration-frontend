import styled, { css } from 'styled-components';

export const EventsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px 20px;
    padding: 10px;
    width: 100%;
`;

export const PageNumber = styled.span`
    margin-left: 10px;
    cursor: pointer;
    ${({ isActive }) =>
        isActive &&
        css`
            font-weight: bold;
        `}
`;

export const PageArrow = styled.span`
    position: relative;
    bottom: 3px;
    margin-left: 10px;
    cursor: pointer;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    color: blue;
`;

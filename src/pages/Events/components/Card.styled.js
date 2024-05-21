import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 200px;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        background-color: transparent;
        border: none;
        color: blue;
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
`;

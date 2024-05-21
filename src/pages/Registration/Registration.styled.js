import styled from 'styled-components';

export const RegistrationContainer = styled.div`
    padding: 100px;
`;
export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
`;
export const Subtitle = styled.h3`
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 5px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled.input`
    height: 40px;
    font-size: 20px;
`;

export const RadioLabel = styled.span`
    margin-left: 5px;
    font-size: 18px;
    margin-right: 20px;
`;
export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 40px;
`;

export const HelperText = styled.span`
    display: block;
    color: red;
`;

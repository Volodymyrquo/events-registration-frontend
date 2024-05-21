import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import * as S from './Registration.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: '',
            email: '',
            dateOfBirth: '',
            resource: '',
        },
        mode: 'onChange',
        reValidateMode: 'onBlur',
    });
    const location = useLocation();
    const navigate = useNavigate();
    const event = location.state.eventId;
    const onSubmit = async (data) => {
        try {
            await axios.post('/register', { ...data, event });
            navigate('/events');
        } catch (error) {
            console.warn(error);
        }
    };
    return (
        <S.RegistrationContainer>
            <S.Title>Event registration</S.Title>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Label>
                    <S.Subtitle>Full name</S.Subtitle>
                    <S.Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        {...register('fullName')}
                    />
                    {errors.fullName?.message ? (
                        <S.HelperText>{errors.fullName?.message}</S.HelperText>
                    ) : (
                        ''
                    )}
                </S.Label>
                <S.Label>
                    <S.Subtitle>Email</S.Subtitle>
                    <S.Input
                        type="email"
                        id="email"
                        name="email"
                        {...register('email')}
                    />
                    {errors.email?.message ? (
                        <S.HelperText>{errors.email?.message}</S.HelperText>
                    ) : (
                        ''
                    )}
                </S.Label>
                <S.Label>
                    <S.Subtitle>Date of birth</S.Subtitle>
                    <S.Input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        {...register('dateOfBirth')}
                    />
                    {errors.dateOfBirth?.message ? (
                        <S.HelperText>
                            {errors.dateOfBirth?.message}
                        </S.HelperText>
                    ) : (
                        ''
                    )}
                </S.Label>
                <S.Subtitle>Were did you hear about this event?</S.Subtitle>
                <div>
                    <label>
                        <input
                            type="radio"
                            id="media"
                            name="resource"
                            value="media"
                            {...register('resource')}
                        />
                        <S.RadioLabel>Social media</S.RadioLabel>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="friends"
                            name="resource"
                            value="friends"
                            {...register('resource')}
                        />
                        <S.RadioLabel>Friends</S.RadioLabel>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="myself"
                            name="resource"
                            value="myself"
                            {...register('resource')}
                        />
                        <S.RadioLabel>Found myself</S.RadioLabel>
                    </label>
                </div>
                {errors.resource?.message ? (
                    <S.HelperText>{errors.resource?.message}</S.HelperText>
                ) : (
                    ''
                )}
                <S.Button type="submit">Submit</S.Button>
            </S.Form>
        </S.RegistrationContainer>
    );
};

export default Registration;

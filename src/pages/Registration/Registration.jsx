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
                    Full name
                    <S.Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        {...register('fullName')}
                    />
                    {errors.fullName?.message ? (
                        <span>{errors.fullName?.message}</span>
                    ) : (
                        ''
                    )}
                </S.Label>
                <S.Label>
                    Email
                    <S.Input
                        type="email"
                        id="email"
                        name="email"
                        {...register('email')}
                    />
                    {errors.email?.message ? (
                        <span>{errors.email?.message}</span>
                    ) : (
                        ''
                    )}
                </S.Label>
                <S.Label>
                    Date of birth
                    <S.Input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        {...register('dateOfBirth')}
                    />
                    {errors.dateOfBirth?.message ? (
                        <span>{errors.dateOfBirth?.message}</span>
                    ) : (
                        ''
                    )}
                </S.Label>
                Were did you hear about this event?
                <div>
                    <label>
                        Social media
                        <input
                            type="radio"
                            id="media"
                            name="resource"
                            value="media"
                            {...register('resource')}
                        />
                    </label>
                    <label>
                        Friends
                        <input
                            type="radio"
                            id="friends"
                            name="resource"
                            value="friends"
                            {...register('resource')}
                        />
                    </label>
                    <label>
                        Found myself
                        <input
                            type="radio"
                            id="myself"
                            name="resource"
                            value="myself"
                            {...register('resource')}
                        />
                    </label>{' '}
                    {errors.resource?.message ? (
                        <div>{errors.resource?.message}</div>
                    ) : (
                        ''
                    )}
                </div>
                <button type="submit">Submit</button>
            </S.Form>
        </S.RegistrationContainer>
    );
};

export default Registration;

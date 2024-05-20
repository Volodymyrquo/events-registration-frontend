import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import * as S from './Registration.styled';

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            dateOfBirth: '',
            resource: '',
        },
        mode: 'onChange',
    });
    const location = useLocation();
    const navigate = useNavigate();
    const event = location.state.eventId;
    const onSubmit = async (data) => {
        await axios.post('/register', { ...data, event });
        navigate('/events');
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
                        {...register('fullName', { required: 'Add full name' })}
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
                        {...register('email', { required: 'Add email' })}
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
                        {...register('dateOfBirth', {
                            required: 'Add your date of birth',
                        })}
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
                            {...register('resource', {
                                required: 'Add where you hear about the event',
                            })}
                        />
                    </label>
                    <label>
                        Friends
                        <input
                            type="radio"
                            id="friends"
                            name="resource"
                            value="friends"
                            {...register('resource', {
                                required: 'Add where you hear about the event',
                            })}
                        />
                    </label>
                    <label>
                        Found myself
                        <input
                            type="radio"
                            id="myself"
                            name="resource"
                            value="myself"
                            {...register('resource', {
                                required: 'Add where you hear about the event',
                            })}
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

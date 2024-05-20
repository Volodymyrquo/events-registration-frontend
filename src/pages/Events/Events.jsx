import Card from './components/Card';
import axios from '../../axios';
import * as S from './Events.styled';
import { useEffect, useState } from 'react';

const Events = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            axios.get('/events').then(({ data }) => setData(data));
        } catch (error) {
            console.warn(error);
        }
    }, []);

    return (
        <S.EventsContainer>
            {data.map((el) => (
                <Card
                    key={el._id}
                    title={el.title}
                    description={el.description}
                    id={el._id}
                />
            ))}
        </S.EventsContainer>
    );
};
export default Events;

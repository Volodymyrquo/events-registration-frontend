import { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from '../../axios';
import * as S from './Events.styled';
import { ArrowLeft } from '../../assets/ArrowLeft';
import { ArrowRight } from '../../assets/ArrowRight';

const Events = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState([]);
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePage = (page) => {
        setCurrentPage(page);
    };
    const fetchEvents = async (page) => {
        try {
            const response = await axios.get(`/events?page=${page}&pageSize=9`);
            const { events, totalPages } = response.data;
            setData(events);
            setTotalPages(totalPages);
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        fetchEvents(currentPage);
    }, [currentPage]);

    return (
        <>
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
            <S.PaginationContainer>
                <S.PageArrow
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <ArrowLeft />
                </S.PageArrow>
                {Array.from({ length: totalPages }, (v, i) => i + 1).map(
                    (el) => (
                        <S.PageNumber
                            key={el}
                            onClick={() => handlePage(el)}
                            isActive={el === currentPage}
                        >
                            {el}
                        </S.PageNumber>
                    )
                )}
                <S.PageArrow
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <ArrowRight />
                </S.PageArrow>
            </S.PaginationContainer>
        </>
    );
};
export default Events;

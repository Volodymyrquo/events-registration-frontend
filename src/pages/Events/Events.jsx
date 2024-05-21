import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from '../../axios';
import Select from 'react-select';
import * as S from './Events.styled';
import { ArrowLeft } from '../../assets/ArrowLeft';
import { ArrowRight } from '../../assets/ArrowRight';

const Events = () => {
    const [currentPage, setCurrentPage] = useState({
        page: 1,
        value: 'title',
        sort: 'asc',
    });
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState([]);
    const handlePrevPage = () => {
        if (currentPage.page > 1) {
            setCurrentPage({ ...currentPage, page: currentPage.page - 1 });
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage({ ...currentPage, page: currentPage.page + 1 });
        }
    };
    const handlePage = (page) => {
        setCurrentPage({ ...currentPage, page });
    };
    const fetchEvents = async ({ page, value, sort }) => {
        try {
            const response = await axios.get(
                `/events?page=${page}&pageSize=9&sortBy=${value}&sortDirection=${sort}`
            );
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

    const handleSelect = ({ value, sort }) => {
        setCurrentPage({ ...currentPage, value, sort });
    };
    const eventsOptions = [
        { value: 'title', label: 'Title ascending', sort: 'asc' },
        { value: 'title', label: 'Title descending', sort: 'desc' },
        { value: 'eventDate', label: 'Event date ascending ', sort: 'asc' },
        { value: 'eventDate', label: 'Event date descending', sort: 'desc' },
        { value: 'organizer', label: 'Organizer ascending', sort: 'asc' },
        { value: 'organizer', label: 'Organizer descending', sort: 'desc' },
    ];

    return (
        <S.EventsContainer>
            <S.SelectWrapper>
                <div>Sort by:</div>
                <Select options={eventsOptions} onChange={handleSelect} />
            </S.SelectWrapper>
            <S.EventsListContainer>
                {data.map((el) => (
                    <Card
                        key={el._id}
                        title={el.title}
                        description={el.description}
                        id={el._id}
                    />
                ))}
            </S.EventsListContainer>
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
                            isActive={el === currentPage.page}
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
        </S.EventsContainer>
    );
};
export default Events;

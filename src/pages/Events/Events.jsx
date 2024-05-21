import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { ArrowLeft } from '../../assets/ArrowLeft';
import { ArrowRight } from '../../assets/ArrowRight';
import axios from '../../axios';
import Card from './components/Card';
import * as S from './Events.styled';

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

    const handleSelect = ({ value }) => {
        setCurrentPage({ ...currentPage, value: value[0], sort: value[1] });
    };
    const eventsOptions = [
        { value: ['title', 'asc'], label: 'Title ascending' },
        { value: ['title', 'desc'], label: 'Title descending' },
        { value: ['eventDate', 'asc'], label: 'Event date ascending ' },
        { value: ['eventDate', 'desc'], label: 'Event date descending ' },
        { value: ['organizer', 'asc'], label: 'Organizer ascending' },
        { value: ['organizer', 'desc'], label: 'Organizer descending' },
    ];
    return (
        <S.EventsContainer>
            <S.SelectWrapper>
                <S.Subtitle>Sort by:</S.Subtitle>
                <Select options={eventsOptions} onChange={handleSelect} />
            </S.SelectWrapper>
            <S.EventsListContainer>
                {data.map((el) => (
                    <Card key={el._id} {...el} />
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

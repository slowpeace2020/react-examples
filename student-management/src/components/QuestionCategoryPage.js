import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, Button, List } from 'antd';
import 'antd/dist/antd.css';
import config from '../config';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const { Option } = Select;

const QuestionCategoryPage = () => {
    const [category, setCategory] = useState('BQ');
    const [questions, setQuestions] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const params = queryString.parse(window.location.search);
        if (params.category) setCategory(params.category);
        if (params.page) setPage(parseInt(params.page, 10));
        if (params.size) setSize(parseInt(params.size, 10));
        fetchQuestions();
    }, []);

    useEffect(() => {
        fetchQuestions();
    }, [category, page, size]);

    const fetchQuestions = async () => {
        if (!category) return;
        try {
            const response = await axios.get(`${config.questionApiUrl}/questions`, {
                params: { category, page, size }
            });
            setQuestions(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleCategoryChange = value => {
        setCategory(value);
        setPage(1);
    };

    const handleQuestionClick = question => {
        navigate(`/question/${question.id}`, {
            state: {
                question: question,
                page: page,
                size: size,
                category: category,
            }
        });
    };


    const handlePrevPageClick = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPageClick = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Select
                placeholder="Select Category"
                style={{ width: 200, marginBottom: 20 }}
                value={category}
                onChange={handleCategoryChange}
            >
                <Option value="AWS">AWS</Option>
                <Option value="Java">Java</Option>
                <Option value="BQ">BQ</Option>
                <Option value="System Design">System Design</Option>
                {/* Add more categories as needed */}
            </Select>

            <List
                itemLayout="horizontal"
                dataSource={questions}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={[<Button type="link" onClick={() => handleQuestionClick(item)}>View Details</Button>]}
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />

            <div style={{ marginTop: 20 }}>
                <Button disabled={page <= 1} onClick={handlePrevPageClick} style={{ marginRight: '10px' }}>Prev</Button>
                <Button disabled={page >= totalPages} onClick={handleNextPageClick}>Next</Button>
            </div>
        </div>
    );
};

export default QuestionCategoryPage;

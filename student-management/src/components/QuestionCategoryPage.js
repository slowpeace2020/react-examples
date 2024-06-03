import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, Button } from 'antd';
import 'antd/dist/antd.css';
import config from '../config';
import Question from './Question'; // 导入 Question 组件

const { Option } = Select;

const QuestionCategoryPage = () => {
    const [category, setCategory] = useState('');
    const [questions, setQuestions] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (category) {
            fetchQuestions(category, 1); // Reset to first page on category change
        }
    }, [category]);

    const fetchQuestions = async (category, page) => {
        try {
            const response = await axios.get(`${config.questionApiUrl}/questions`, {
                params: { category, page, size: 1 } // Default size to 20
            });
            setQuestions(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleQueryClick = () => {
        if (category) {
            fetchQuestions(category, 1); // Reset to first page on query
            setPage(1);
        }
    };

    const handlePrevPageClick = () => {
        if (page > 1) {
            const prevPage = page - 1;
            setPage(prevPage);
            fetchQuestions(category, prevPage);
        }
    };

    const handleNextPageClick = () => {
        if (page < totalPages) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchQuestions(category, nextPage);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Select
                placeholder="Select Category"
                style={{ width: 200, marginRight: '10px' }}
                value={category}
                onChange={handleCategoryChange}
            >
                <Option value="AWS">AWS</Option>
                <Option value="Java">Java</Option>
                <Option value="BQ">BQ</Option>
                {/* Add more categories as needed */}
            </Select>

            <Button type="primary" onClick={handleQueryClick} style={{ marginRight: '10px' }}>Query</Button>

            <div style={{ marginBottom: '20px' }}>
                {questions.map((question, index) => (
                    <Question key={question.id} question={question} index={index}/>
                ))}
            </div>

            <div>
                <Button disabled={page === 1} onClick={handlePrevPageClick} style={{ marginRight: '10px' }}>Prev</Button>
                <Button disabled={page === totalPages} onClick={handleNextPageClick}>Next</Button>
            </div>
        </div>
    );
};

export default QuestionCategoryPage;

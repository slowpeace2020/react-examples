import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import ProgressBar from './ProgressBar';
import config from '../config';
import './QuestionDetailPage.css'; // Ensure CSS for styling

const QuestionDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [question, setQuestion] = useState(location.state?.question);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedQuestion, setEditedQuestion] = useState(question ? {...question, progress: question.progress / 100} : null);

    useEffect(() => {
        if (!question) { // If no question is passed, fetch it
            fetchQuestion(id);
        }
    }, [id, question]);

    const fetchQuestion = async (questionId) => {
        try {
            const response = await axios.get(`${config.questionApiUrl}/questions/${questionId}`);
            setQuestion(response.data);
            setEditedQuestion({...response.data, progress: response.data.progress / 100});
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        const questionToSave = {...editedQuestion, progress: editedQuestion.progress * 100};
        try {
            await axios.put(`${config.questionApiUrl}/questions/${question.id}`, questionToSave);
            setQuestion(questionToSave);
            setEditedQuestion(questionToSave);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating question:', error);
        }
    };

    const handleBackClick = () => {
        // Safely navigate back with default values if not specified
        const page = location.state?.page || 1;
        const size = location.state?.size || 10;
        const category = location.state?.category || 'BQ';
        navigate(`/questionlist?category=${category}&page=${page}&size=${size}`);
    };

    if (!question) {
        return <div>Loading...</div>;
    }

    return (
        <div className="question-container">
            <div className="tags">
                {isEditing ? (
                    <input
                        type="text"
                        placeholder="Tags"
                        value={editedQuestion?.tags}
                        onChange={(e) => setEditedQuestion({...editedQuestion, tags: e.target.value})}
                    />
                ) : (
                    <span><strong>Tags:</strong> {question.tags}</span>
                )}
            </div>
            <div className="category">
                {isEditing ? (
                    <input
                        type="text"
                        placeholder="Category"
                        value={editedQuestion?.category}
                        onChange={(e) => setEditedQuestion({...editedQuestion, category: e.target.value})}
                    />
                ) : (
                    <span><strong>Category:</strong> {question.category}</span>
                )}
            </div>
            <ProgressBar
                progress={editedQuestion?.progress}
                onProgressChange={(newProgress) => setEditedQuestion({...editedQuestion, progress: newProgress})}
            />
            <div className="question-text">
                {isEditing ? (
                    <textarea
                        value={editedQuestion?.content}
                        onChange={(e) => setEditedQuestion({...editedQuestion, content: e.target.value})}
                    />
                ) : (
                    <span>{question.content}</span>
                )}
            </div>
            <div className="answer">
                <Button onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </Button>
                <div className="answer-text" style={{ display: showAnswer ? 'block' : 'none' }}>
                    {isEditing ? (
                        <textarea
                            value={editedQuestion?.answer}
                            onChange={(e) => setEditedQuestion({...editedQuestion, answer: e.target.value})}
                        />
                    ) : (
                        <span>{question.answer}</span>
                    )}
                </div>
            </div>
            {isEditing ? (
                <Button onClick={handleSaveClick}>Save</Button>
            ) : (
                <Button onClick={handleEditClick}>Edit</Button>
            )}
            <Button onClick={handleBackClick}>Back to List</Button>
        </div>
    );
};

export default QuestionDetailPage;

import React, { useState } from 'react';
import './Question.css'; // 导入 Question.css 文件
import axios from 'axios';
import config from '../config';
import ProgressBar from './ProgressBar'; // 导入 ProgressBar 组件
import { Button } from 'antd'; // 导入 Ant Design 的 Button 组件
import 'antd/dist/antd.css'; // 导入 Ant Design 的样式

const Question = ({ question, index }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedQuestion, setEditedQuestion] = useState({ ...question, progress: question.progress/100 });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        const questionToSave = { ...editedQuestion, progress: editedQuestion.progress * 100 }; // 乘以 100
        console.log('Saving question:', questionToSave); // 检查 questionToSave 对象
        try {
            await axios.put(`${config.questionApiUrl}/questions/${question.id}`, questionToSave);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating question:', error);
        }
    };

    return (
        <div className="question-container">
            <div className="tags">
                {isEditing ? (
                    <input
                        placeholder="tags"
                        type="text"
                        value={editedQuestion.tags || ''}
                        onChange={(e) => setEditedQuestion({ ...editedQuestion, tags: e.target.value })}
                    />
                ) : (
                    <span><strong>Tags:</strong> {question.tags}</span>
                )}
            </div>
            <div className="category">
                {isEditing ? (
                    <input
                        placeholder="category"
                        type="text"
                        value={editedQuestion.category}
                        onChange={(e) => setEditedQuestion({ ...editedQuestion, category: e.target.value })}
                    />
                ) : (
                    <span><strong>Category:</strong> {question.category}</span>
                )}
            </div>
            <ProgressBar
                progress={editedQuestion.progress}
                onProgressChange={(newProgress) => setEditedQuestion({ ...editedQuestion, progress: newProgress })}
            />
            <div className="question">
                <div className="question-text">
                    {isEditing ? (
                        <textarea
                            className="edit-textarea"
                            value={editedQuestion.content}
                            onChange={(e) => setEditedQuestion({ ...editedQuestion, content: e.target.value })}
                        />
                    ) : (
                        <span>{question.content}</span>
                    )}
                </div>
            </div>
            <div className="answer">
                <div className="answer-text" style={{ display: showAnswer ? 'block' : 'none' }}>
                    {isEditing ? (
                        <textarea
                            className="edit-textarea"
                            value={editedQuestion.answer}
                            onChange={(e) => setEditedQuestion({ ...editedQuestion, answer: e.target.value })}
                        />
                    ) : (
                        <span>{question.answer}</span>
                    )}
                </div>
                <Button className="answer-button" onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </Button>
            </div>
            {isEditing ? (
                <Button className="save-button" onClick={handleSaveClick}>Save</Button>
            ) : (
                <Button className="edit-button" onClick={handleEditClick}>Edit</Button>
            )}
        </div>
    );
};

export default Question;

import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css';

const API_URL = 'http://localhost:9091/api/questions';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [category, setCategory] = useState('');
    const [tags,setTags] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            content: question,
            answer
        };

        try {
            setSubmitting(true); // 开始提交
            const response = await axios.post(API_URL, data);
            console.log('Response:', response.data);
            setSuccessMessage('Form submitted successfully!');
            setQuestion(''); // 清空问题
            setAnswer(''); // 清空答案
            setCategory(''); // 清空答案
            setTags(''); // 清空答案
            // 在提交成功后延迟三秒刷新页面
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            // 可以在这里添加错误处理逻辑
        } finally {
            setSubmitting(false); // 结束提交
        }
    };

    return (
        <div className="form-container">
            <h1>Submit Your Question and Answer</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="AWS">AWS</option>
                        <option value="BQ">BQ</option>
                        <option value="Java">Java</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="tags">Tags:</label>
                    <input id="tags" type="text" value={tags} onChange={(e)=>setTags(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="question">Question:</label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        rows="20"
                        cols="120"
                    />
                </div>
                <div>
                    <label htmlFor="answer">Answer:</label>
                    <textarea
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                        rows="15"
                        cols="120"
                    />
                </div>
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>
    );
};

export default QuestionForm;

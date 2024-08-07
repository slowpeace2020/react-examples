import React, { Suspense, lazy } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const QuestionCategoryPage = lazy(() => import('./components/QuestionCategoryPage'));
const StudentTable = lazy(() => import('./components/StudentTable'));
const QuestionForm = lazy(() => import('./components/QuestionForm'));
const QuestionDetailPage = lazy(() => import('./components/QuestionDetailPage')); // 导入详情页组件

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <ul className="nav-links">
                        <NavLink to="/questions" label="Add Question" />
                        <NavLink to="/questionlist" label="Question Category Page" />
                        {/* 如果需要其他页面，可以在这里添加 */}
                    </ul>
                </nav>

                <div className="content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/questionlist" element={<QuestionCategoryPage />} />
                            <Route path="/questions" element={<QuestionForm />} />
                            <Route path="/question/:id" element={<QuestionDetailPage />} />
                            {/* 如果需要其他页面，可以在这里添加 */}
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </Router>
    );
}

function NavLink({ to, label }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    );
}

export default App;

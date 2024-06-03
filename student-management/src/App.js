import React, { Suspense, lazy } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const QuestionCategoryPage = lazy(() => import('./components/QuestionCategoryPage'));
const StudentTable = lazy(() => import('./components/StudentTable'));
const QuestionForm = lazy(() => import('./components/QuestionForm'));

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <ul className="nav-links">
                        <NavLink to="/questions" label="Add Question" />
                        {/* 如果需要其他页面，可以在这里添加 */}
                        <NavLink to="/questionlist" label="Question Category Page" />
                    </ul>
                </nav>

                <div className="content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/questionlist" element={<QuestionCategoryPage />} />
                            {/* 如果需要其他页面，可以在这里添加 */}
                            <Route path="/questions" element={<QuestionForm />} />
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

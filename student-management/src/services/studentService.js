// src/services/studentService.js

import axios from 'axios';

const API_URL = 'http://student-project.us-east-2.elasticbeanstalk.com/api/students';
// const API_URL = 'http://localhost:8080/api/students';

export const getStudents = () => axios.get(API_URL);
export const getStudentById = (id) => axios.get(`${API_URL}/${id}`);
export const createStudent = (student) => axios.post(API_URL, student);
export const updateStudent = (id, student) => axios.put(`${API_URL}/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);

import React, { useEffect, useState } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../services/studentService';
import './StudentTable.css';

const StudentTable = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ firstName: '', lastName: '', email: '' });

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const response = await getStudents();
            setStudents(response.data.map(student => ({ ...student, isEditing: false })));
        } catch (error) {
            console.error('Error loading students:', error);
        }
    };

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        setStudents(students.map(student =>
            student.id === id ? { ...student, [name]: value } : student
        ));
    };

    const handleCreateStudent = async () => {
        try {
            await createStudent(newStudent);
            setNewStudent({ firstName: '', lastName: '', email: '' });
            loadStudents();
        } catch (error) {
            console.error('Error creating student:', error);
        }
    };

    const handleEditStudent = (id) => {
        setStudents(students.map(student =>
            student.id === id ? { ...student, isEditing: true } : student
        ));
    };

    const handleUpdateStudent = async (id) => {
        const studentToUpdate = students.find(student => student.id === id);
        try {
            await updateStudent(id, studentToUpdate);
            setStudents(students.map(student =>
                student.id === id ? { ...student, isEditing: false } : student
            ));
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    const handleDeleteStudent = async (id) => {
        try {
            await deleteStudent(id);
            loadStudents();
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className="student-table">
            <h1>Student Management</h1>
            <div className="add-student">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={newStudent.firstName}
                    onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={newStudent.lastName}
                    onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                />
                <button type="submit" className="normal-button" onClick={handleCreateStudent}>Add Student</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.isEditing ? (
                            <input
                                type="text"
                                name="firstName"
                                value={student.firstName}
                                onChange={(e) => handleInputChange(e, student.id)}
                            />
                        ) : (
                            student.firstName
                        )}</td>
                        <td>{student.isEditing ? (
                            <input
                                type="text"
                                name="lastName"
                                value={student.lastName}
                                onChange={(e) => handleInputChange(e, student.id)}
                            />
                        ) : (
                            student.lastName
                        )}</td>
                        <td>{student.isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={student.email}
                                onChange={(e) => handleInputChange(e, student.id)}
                            />
                        ) : (
                            student.email
                        )}</td>
                        <td>
                            {student.isEditing ? (
                                <button className="normal-button" onClick={() => handleUpdateStudent(student.id)}>Update</button>
                            ) : (
                                <button className="normal-button" onClick={() => handleEditStudent(student.id)}>Edit</button>
                            )}
                            <button className="delete-button" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './TeacherList.css';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Function to fetch teachers from the backend
    const fetchTeachers = () => {
        axios.get('http://localhost:8080/api/v1/teacher')
          .then(response => {
            setTeachers(response.data);
          })
          .catch(error => {
            console.error('Error fetching teacher data:', error);
            setError(error);
          });
    };

    // Fetch teachers when the component mounts
    useEffect(() => {
        fetchTeachers();
    }, []);

    // Function to navigate to the update teacher page
    const handleUpdateTeacher = (id) => {
        navigate(`/Main/teacher_update/${id}`);
    };

    // Function to handle deleting a teacher
    const handleDeleteTeacher = (id) => {
        axios.delete(`http://localhost:8080/api/v1/teacher/${id}`)
            .then(_response => {
                setTeachers(teachers.filter(teacher => teacher.id !== id));
            })
            .catch(error => {
                console.error('Error deleting teacher:', error);
            });
    };

    return (
        <div className="teacher-table-container">
            <h2>Teacher List</h2>
            {error && <div className="error-message">Error fetching teacher data: {error.message}</div>}
            <button className="add-teacher" onClick={() => navigate('/Main/teacher_add')}>Add</button>
            <table id="teacherTable" className="teacher-table">
                <thead>
                    <tr>
                        <th className="small-col">ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher.id}>
                            <td>{teacher.id}</td>
                            <td>{teacher.teacherName}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.teacherPhone}</td>
                            <td>{teacher.teacherSpecialization}</td>
                            <td>
                                <button onClick={() => handleUpdateTeacher(teacher.id)}>Update</button>
                                <button onClick={() => handleDeleteTeacher(teacher.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;

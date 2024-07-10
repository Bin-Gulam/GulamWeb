import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SubjectList.css';

const SubjectList = () => {
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchSubjects = () => {
        axios.get('http://localhost:8080/api/v1/subject')
            .then(response => {
                setSubjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching subject data:', error);
                setError(error);
            });
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    const handleUpdateSubject = (id) => {
        navigate(`/Main/subject_update/${id}`);
    };

    const handleDeleteSubject = (id) => {
        axios.delete(`http://localhost:8080/api/v1/subject/${id}`)
            .then(_response => {
                setSubjects(subjects.filter(subject => subject.id !== id));
            })
            .catch(error => {
                console.error('Error deleting subject:', error);
            });
    };

    return (
        <div className="subject-table-container">
            <h2>Subject List</h2>
            {error && <div className="error-message">Error fetching subject data: {error.message}</div>}
            <button className="add-subject" onClick={() => navigate('/Main/subject_add')}>Add</button>
            <table id="subjectTable" className="subject-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Teacher</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map(subject => (
                        <tr key={subject.id}>
                            <td>{subject.id}</td>
                            <td>{subject.subject_name}</td>
                            <td>{subject.subject_teacher}</td>
                            <td>
                                <button className="update-button" onClick={() => handleUpdateSubject(subject.id)}>Update</button>
                                <button className="delete-button" onClick={() => handleDeleteSubject(subject.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SubjectList;

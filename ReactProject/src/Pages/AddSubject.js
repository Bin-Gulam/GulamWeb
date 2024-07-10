import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddSubject.css';

const AddSubject = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState({
        subject_name: '',
        subject_teacher: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/v1/subject/${id}`)
                .then(response => {
                    setSubject(response.data);
                })
                .catch(error => {
                    console.error("Error fetching the subject:", error);
                    setError('Failed to fetch subject');
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubject(prevSubject => ({
            ...prevSubject,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!subject.subject_name) {
            setError('Subject name cannot be empty');
            return;
        }

        const request = id
            ? axios.put(`http://localhost:8080/api/v1/subject/${id}`, subject)
            : axios.post('http://localhost:8080/api/v1/subject', subject);

        request
            .then(response => {
                console.log('Subject saved successfully:', response.data);
                navigate('/Main/subject_list');
            })
            .catch(error => {
                console.error('Error saving subject:', error);
                setError('Error saving subject');
            });
    };

    const handleCancel = () => {
        navigate('/Main/subject_list');
    };

    return (
        <div>
            <h2>{id ? 'Update' : 'Add'} Subject</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                <label>
                    Name:
                    <input type="text" name="subject_name" value={subject.subject_name || ''} onChange={handleChange} required />
                </label>
                <label>
                    Teacher:
                    <input type="text" name="subject_teacher" value={subject.subject_teacher || ''} onChange={handleChange} required />
                </label>
                <div className="form-buttons">
                    <button type="submit">{id ? 'Save' : 'Add'}</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddSubject;

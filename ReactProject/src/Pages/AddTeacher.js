import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './AddTeacher.css';

const AddTeacher = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({
    teacherName: '',
    email: '',
    teacherPhone: '',
    teacherSpecialization: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/v1/teacher/${id}`)
        .then(response => {
          setTeacher(response.data);
        })
        .catch(error => {
          console.error('Error fetching teacher data:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id 
      ? axios.put(`http://localhost:8080/api/v1/teacher/${id}`, teacher)
      : axios.post('http://localhost:8080/api/v1/teacher', teacher);

    request
      .then(response => {
        console.log('Teacher saved successfully:', response.data);
        navigate('/Main/teacher_list');
      })
      .catch(error => {
        console.error('Error saving teacher:', error);
      });
  };

  const handleCancel = () => {
    navigate('/Main/teacher_list');
  };

  return (
    <div className="teacher-form-container">
      <h2>{id ? 'Update' : 'Add'} Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="teacherName" value={teacher.teacherName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={teacher.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="teacherPhone" value={teacher.teacherPhone} onChange={handleChange} required />
        </label>
        <label>
          Specialization:
          <input type="text" name="teacherSpecialization" value={teacher.teacherSpecialization} onChange={handleChange} required />
        </label>
        <div className="form-buttons">
          <button type="submit">{id ? 'Save' : 'Add'}</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher ;

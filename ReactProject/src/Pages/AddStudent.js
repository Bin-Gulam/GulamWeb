import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './AddStudent.css';

const AddStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    studentName: '',
    email: '',
    studentGender: '',
    studentAge: '',
    studentAddress: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/v1/student/${id}`)
        .then(response => {
          setStudent(response.data);
        })
        .catch(error => {
          console.error('Error fetching student data:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id 
      ? axios.put(`http://localhost:8080/api/v1/student/${id}`, student)
      : axios.post('http://localhost:8080/api/v1/student', student);

    request
      .then(response => {
        console.log('Student saved successfully:', response.data);
        navigate('/Main/student_list');
      })
      .catch(error => {
        console.error('Error saving student:', error);
      });
  };

  const handleCancel = () => {
    navigate('/Main/student_list');
  };

  return (
    <div className="teacher-form-container">
      <h2>{id ? 'Update' : 'Add'} Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" name="studentName" value={student.studentName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={student.email} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="studentGender" value={student.studentGender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Age:
          <input type="number" name="studentAge" value={student.studentAge} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="studentAddress" value={student.studentAddress} onChange={handleChange} required />
        </label>
        <div className="form-buttons">
          <button type="submit">{id ? 'Save' : 'Add'}</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;

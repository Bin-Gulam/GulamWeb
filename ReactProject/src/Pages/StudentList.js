import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:8080/api/v1/student')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
        setError(error);
      });
  };



  const handleUpdateStudent = (id) => {
    navigate(`/Main/student_update/${id}`); // Navigate to student_add page with ID for updating
  };

  const handleDeleteStudent = (id) => {
    axios.delete(`http://localhost:8080/api/v1/student/${id}`)
      .then(response => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => {
        console.error('Error deleting student:', error);
      });
  };

  const handleAddStudent = () => {
    navigate('/Main/student_add'); // Navigate to student_add page for adding new student
  };

  

  return (
    <div className="student-table-container">
      <h2>Student List</h2>
      {error && <div className="error-message">Error fetching student data: {error.message}</div>}
      <button className="add-student" onClick={handleAddStudent}>Add</button>
      <table id="studentTable" className="student-table">
        <thead>
          <tr>
            <th className="small-col">ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td className="small-col">{student.id}</td>
              <td>{student.studentName}</td>
              <td>{student.email}</td>
              <td>{student.studentGender}</td>
              <td>{student.studentAge}</td>
              <td>{student.studentAddress}</td>
              <td>
                <button onClick={() => handleUpdateStudent(student.id)}>Update</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

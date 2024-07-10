import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import ForgotPassword from './ForgotPassword';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import RegistrationForm from './Register';
import StudentList from './Pages/StudentList';
import AddStudent from './Pages/AddStudent';
import TeacherList from './Pages/TeacherList';
import AddTeacher from './Pages/AddTeacher';
import SubjectList from './Pages/SubjectList';
import AddSubject from './Pages/AddSubject';
import Dashboard from './Home';
import Home from './Home';
import Logout from './Pages/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<Home/>}/>
          <Route path='create' element={<CreateAccount />} />
          <Route path='forgot' element={<ForgotPassword />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='register' element={<RegistrationForm />} />
          <Route path='/Main/student_list' element={<StudentList />} />
          <Route path='/Main/student_add' element={<AddStudent />} />
          <Route path='/Main/student_update/:id' element={<AddStudent />} />
          <Route path='/Main/teacher_list' element={<TeacherList />} />
          <Route path='/Main/teacher_add' element={<AddTeacher />} />
          <Route path='/Main/teacher_update/:id' element={<AddTeacher />} />
          <Route path='/Main/update_subject/:id' element={<AddSubject />} />
          <Route path='/Main/subject_list' element={<SubjectList />} />
          <Route path='/Main/subject_add' element={<AddSubject />} />
          <Route path='/Main/subject_update/:id' element={<AddSubject />} />
          <Route path='logout'element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
 import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Admin/Dashboard';
import Dashboarduser from './pages/User/Dashboard';
import ProjectsMain from './pages/Projects';
import Projects from './pages/Admin/Projects';
import ProjectDetails from './pages/Admin/ProjectDetails';
import Users from './pages/Admin/Users';
import Blog from './pages/Admin/Blog';
import Settings from './pages/Admin/Settings';
import ProjectDetails2 from './pages/ProjectDetails';
import DashboardLayout from './pages/User/DashboardLayout';
import MyAppointment from './pages/User/MyAppointment';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtected from './components/AdminProtected';
import Appointments from './pages/Admin/Appointments';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import BlogDetails from './pages/BlogDetails';

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
  return (
    <BrowserRouter>
        <Header />
        <ToastContainer />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<ProjectsMain/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blog/:slug' element={<BlogDetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/project/:id' element={<ProjectDetails2 />}/>

          <Route path='/admin'>
              <Route path='dashboard' element={<AdminProtected><Dashboard /></AdminProtected>}></Route>
              <Route path='projects' element={<AdminProtected><Projects /></AdminProtected>}></Route>
              <Route path='projects/:id' element={<AdminProtected><ProjectDetails /></AdminProtected>}></Route>
              <Route path='users' element={<AdminProtected><Users /></AdminProtected>}></Route>
              <Route path='blogs' element={<AdminProtected><Blog /></AdminProtected>}></Route>
              <Route path='settings' element={<AdminProtected><Settings /></AdminProtected>}></Route>
              <Route path='appointments' element={<AdminProtected><Appointments /></AdminProtected>}></Route>
          </Route>

          {/* users  */}
          <Route path='/user'>
              <Route path='dashboard' element={<ProtectedRoute><Dashboarduser /></ProtectedRoute>}></Route>
              <Route path='appointments' element={<ProtectedRoute><MyAppointment /></ProtectedRoute>}></Route>
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

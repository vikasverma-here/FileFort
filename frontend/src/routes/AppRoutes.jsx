// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Guide from '../pages/Guide';
import Files from '../pages/Files';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/guide' element={<Guide/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/files' element={<Files/>} />
        
        
      </Route>
    </Routes>
  );
}

export default AppRoutes;

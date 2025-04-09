// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Guide from '../pages/guide';
import Files from '../pages/Files';


{/* <div>
<nav>
<NavLink to="/">
<div>
   <img src="" alt="" />
   home
</div>
</NavLink>
<NavLink to="/upload">Upload</NavLink>
<NavLink to="/files">files</NavLink>
<NavLink to="/dashboard">Dashboard</NavLink>
<NavLink to="/guide">FileFort Guide</NavLink>
<div className="div">
<NavLink to="/login">Login</NavLink>
<NavLink to="/register">Register</NavLink>
<NavLink to="/logout">Logout</NavLink>
<NavLink to="/profile">Profile</NavLink>
</div>

</nav>
</div> */}

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

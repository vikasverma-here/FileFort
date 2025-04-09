import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
        
      <Navbar />
        <Outlet />
     
      <Footer />
    
    </div>
  )
}

export default MainLayout

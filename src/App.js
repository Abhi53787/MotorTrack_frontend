import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './about';
import Footer from './footer';
import Home from './Home';
import Contact from './Contact';
import AddVehicle from './AddVehicle';
import Employee from './EmployeeForm';
import Carlist from './Carlist';
import CarDetails from './cardetails';
import LoginComponent from './loginlogic/login';
import LogoutComponent from './loginlogic/logout';
import ProtectedRoute from './loginlogic/protectRoute';
import EditCarform from './EditCarform';
import Addcar from './AddCar';
import RegisterComponent from './loginlogic/RegisterComponent';
function App() {
  const [isUserAuthenticated,setAuthentication] =useState(false);
  const userLogin=()=>{
    setAuthentication(true);
  }
  const userLogout=()=>{
    setAuthentication(false);
  }
  return (
    <div className="App">
      <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm" data-testid="menu-content">
      <div className="container-fluid">
        
        {/* Brand Name */}
        <Link to="/Home" className="navbar-brand fw-bold text-light">MotorTrack</Link>
        
        {/* Mobile Menu Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">  {/* Moves links to the right */}
            {isUserAuthenticated && (
              <>
                <li className="nav-item"><Link to="/Home" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/AddVehicle" className="nav-link">Vehicles</Link></li>
                <li className="nav-item"><Link to="/EmployeeForm" className="nav-link">Employee Form</Link></li>
                <li className="nav-item"><Link to="/carlist" className="nav-link">Car List</Link></li>

                {/* Logout Button */}
                <li className="nav-item">
                <button className="btn btn-outline-light ms-3 d-flex align-items-center"
                                        data-bs-toggle="modal" 
                                        data-bs-target="#logoutModal">
  <span className="material-symbols-outlined me-1">logout</span> Logout
</button>


                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="logoutModalLabel">Confirm Logout</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to Logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={userLogout} data-bs-dismiss="modal">
                            <span className="material-symbols-outlined me-1">logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </nav>
        <Routes>
          <Route element={<ProtectedRoute isUserAuthenticated={isUserAuthenticated}/>}>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddVehicle" element={<AddVehicle />} />
          <Route path="/EmployeeForm" element={<Employee />} />
          <Route path="/carlist" element={<Carlist />} />
           
          <Route path="/cardetail/:id" element={<CarDetails />} />
          <Route path="/editcar/:id" element={<EditCarform />} />
          <Route path="/addcar" element={<Addcar />} />
          
        
          {/* /editcar/${id} */}
         
          </Route>
          <Route path='/' element={<LoginComponent login={userLogin}/>}></Route>
          <Route path="/register" element={<RegisterComponent />} />

        </Routes>

      
      </div>
    </div>
  );
}

export default App;

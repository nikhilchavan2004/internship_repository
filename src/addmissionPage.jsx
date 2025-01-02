import React from 'react';
import '../../styles/Headers.css';
import logo from '../../assets/images/FBS_logo.png';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <>
      <div className="topbar flex flex-col sm:flex-row justify-between items-center p-1">
      
        <div className="social-icons hidden sm:flex">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-youtube' style={{ color: 'red' }}></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram' style={{ color: '#ff07cf' }}></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin' style={{ color: '#0000a8' }}></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-facebook' style={{ color: '#3b5998' }}></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-whatsapp' style={{ color: '#00d100' }}></i>
          </a>
        </div>

        <Link to='/announcements'>
          <div className="info flex items-center">
            <i className='bx bx-bell bell-icon'></i>
            <span className="announcement">Announcement</span>
          </div>
        </Link>

        <div className="contact-info flex items-center">
          <i className='bx bxs-phone'></i>
          <span className='relative right-[1rem]'>(+91) 915 888 2688</span>
          <i className='bx bxs-envelope '></i>
          <span className='relative right-[0.8rem]'>admission@fbsedu.in</span>
        </div>
      </div>

     
      <header className='headers-headers'>
        <div className="headers-container">
         
          <div className="logo-container">
            <img src={logo} alt="FINXL Business School" className="logo" />
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link" style={{ "--i": ".6s" }}>
                  <Link to='/'>Home</Link>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link to='/about' >Why FBS<i className="fas fa-caret-down"></i></Link>
                 
                 

                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to='/about'>Overview</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/about/mission'>Vission & Mission</Link>
                      </li>
                      <li className="dropdown-link">
                        <a href="#">Recognition & Approvals</a>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/about/campus'>Campus Life</Link>
                      </li>

                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": "1.1s" }}>
                  <Link to='/courses'>Courses<i className="fas fa-caret-down"></i></Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to='/courses'>View Courses</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/certifications'>View Certification</Link>
                      </li>

                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to='/eligibility'>Addmissions<i className="fas fa-caret-down"></i></Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to='/eligibility'>Overview & Eligiblity</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/scholarship'>Scholarships</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/fees'>Fee Structure</Link>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to='/careers'>Careers</Link>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to='/placed-student'>Placments<i className="fas fa-caret-down"></i></Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to='/placed-student'>Placed Students</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/recruiters'>Our Recruiters</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/placment-team'>Placment Team</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to='/placment-policy'>Placement Policy</Link>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to='/contact'>Contact Us</Link>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to='/register'>Register</Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>

      
      <style jsx>{`
        @media (max-width: 640px) {
          .topbar {
            padding-top: 0.5rem; /* Reduce top padding */
            padding-bottom: 0.5rem; /* Adjust bottom padding if needed */
          }

          .headers-container {
            padding-top: 0.5rem; /* Reduce top padding */
            padding-bottom: 0.5rem; /* Adjust bottom padding if needed */
            overflow-x: hidden; /* Prevent overflow on smaller screens */
          }

          .nav-links ul {
            flex-direction: column; /* Stack nav links vertically */
            align-items: center; /* Center nav links */
            width: 100%; /* Ensure full width */
          }

          .nav-link {
            margin-bottom: 0.5rem; /* Space between nav links */
            width: 100%; /* Ensure full width for each link */
            text-align: center; /* Center text */
          }
        }
      `}</style>

    </>
  );
}

export default Headers;

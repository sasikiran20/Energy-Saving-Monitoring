import React from "react";
import logo from '../assets/img/logo.jpg';
import fena from '../assets/img/fena.jpg';
import messages1 from '../assets/img/messages-1.jpg';
import messages2 from '../assets/img/messages-2.jpg';


function TopMenu (){
    return(
     <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src={logo} alt=""/>
                <span className="d-none d-lg-block">Ode to Code</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>{/*End Logo */}

            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">

                <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search"></i>
                </a>
                </li>{/*End Search Icon*/}

                <li className="nav-item dropdown">

                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell"></i>
                    <span className="badge bg-primary badge-number">4</span>
                </a>{/*End Notification Icon*/} 

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                    You have 3 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Congradulations</h4>
                        <p>You have saved this amount of energy</p>
                        <p>30 min. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>....</h4>
                        <p>Please switch off your lights</p>
                        <p>1 hr. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    

                    <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Caution</h4>
                        <p>Your lights need attention.</p>
                        <p>4 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr className="dropdown-divider"/>
                    </li>
                    <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                    </li>

                </ul>{/*End Notification Dropdown Items*/}

                </li>{/*End Notification Nav*/} 

                

                <li className="nav-item dropdown pe-3">

                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src={fena} alt="Profile" className="rounded-circle"/>
                    <span className="d-none d-md-block dropdown-toggle ps-2">L F. Keiponye</span>
                </a>{/*End Profile Iamge Icon*/} 

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                    <h6>Fenah Keiponye</h6>
                    <span>UI/UX Designer</span>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                    </li>

                </ul>{/* End Profile Dropdown Items */}
                </li>{/* End Profile Nav */}

            </ul>
            </nav>
            {/* End Icons Navigation */}
     </header>
    )

}

export default TopMenu;
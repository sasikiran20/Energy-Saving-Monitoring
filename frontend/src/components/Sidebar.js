import React from "react";

function Sidebar(){
    return(
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <a className="nav-link collapsed" href="/dashboard">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>{/*End Dashboard Nav*/}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/energy_savings">
                <i className="bi bi-lightbulb-off-fill"></i>
                <span>Save Energy</span>
                </a>
            </li>{/*End Save Energy*/}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/points">
                <i className="bi bi-star-half"></i>
                <span>Points</span>
                </a>
            </li>{/*End Points*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/rewards">
                <i className="bi bi-award"></i>
                <span>Rewards</span>
                </a>
            </li>{/*End Rewards*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/appliances">
                <i className="bi bi-window-stack"></i>
                <span>Appliances</span>
                </a>
            </li>{/*End Dashboard Nav*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/leaderboard">
                <i className="bi bi-table"></i>
                <span>Leaderboard</span>
                </a>
            </li>{/*End Dashboard Nav*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/profile">
                <i className="bi bi-person-circle"></i>
                <span>Profile</span>
                </a>
            </li>{/*End Dashboard Nav*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/login">
                <i className="bi bi-box-arrow-left"></i>
                <span>Log Out</span>
                </a>
            </li>{/*End Dashboard Nav*/}          

            </ul>

  </aside>
    )
}

export default Sidebar;

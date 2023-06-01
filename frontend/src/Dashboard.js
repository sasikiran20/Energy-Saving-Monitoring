import React from "react";

import TopMEnu from './components/topMenu';
import Sidebar from './components/Sidebar';
import DashboardComponent from "./components/Dashboard";

function Dashboard (){
    return(
        <div>
            <div>
                <TopMEnu></TopMEnu>
                <Sidebar></Sidebar>
            </div>
            <DashboardComponent></DashboardComponent>

        </div>
    );

}

export default Dashboard;
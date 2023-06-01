import React from "react";

import TopMenu from './components/topMenu';
import Sidebar from './components/Sidebar';
import ApliancesComp from "./components/Apliances";

function Appliances(){
    return(
        <div>
            <div>
                <TopMenu></TopMenu>
                <Sidebar></Sidebar>
           </div>
           <ApliancesComp></ApliancesComp>

        </div>
    )
}

export default Appliances;
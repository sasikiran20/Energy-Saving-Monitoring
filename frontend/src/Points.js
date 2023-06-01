import React from "react";

import TopMenu from "./components/topMenu";
import Sidebar from "./components/Sidebar";
import PointsComponen from "./components/PointsComponents";

function Points(){
    return(
        <div>
            <div>
                <TopMenu></TopMenu>
                <Sidebar></Sidebar>
            </div>
            <PointsComponen></PointsComponen>
        </div>
    )

}

export default Points;

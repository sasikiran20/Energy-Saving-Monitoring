import React from "react";

import TopMenu from "./components/topMenu";
import Sidebar from "./components/Sidebar";
import RewardsComponent from './components/RewardsComponent'

function Rewards(){

    return(
        <div>
            <div>
                <TopMenu></TopMenu>
                <Sidebar></Sidebar>
            </div>
            <RewardsComponent></RewardsComponent>

        </div>
    )

}

export default Rewards;
import React from "react";

import TopMenu from "./components/topMenu";
import Sidebar from "./components/Sidebar";
import LeadeboarComponent from "./components/LeaderboardCompo";

function Leaderboard(){
    return(
        <div>
            <div>
                <TopMenu></TopMenu>
                <Sidebar></Sidebar>
            </div>
            <LeadeboarComponent></LeadeboarComponent>

        </div>
    )
}

export default Leaderboard;
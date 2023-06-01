import React from "react";

import TopMenu from './components/topMenu'
import Sidebar from './components/Sidebar'
import EnergySavinComp from './components/EnergySavingComponent';

function EnergySaving(){
    return(
        <div>
            <div>
                <TopMenu></TopMenu>
                <Sidebar></Sidebar>
            </div>
            <EnergySavinComp></EnergySavinComp>
        </div>
    );
}

export default EnergySaving;
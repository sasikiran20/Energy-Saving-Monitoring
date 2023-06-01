import React from "react";

import TopMEnu from './components/topMenu';
import Sidebar from './components/Sidebar';
import ProfileUs from './components/ProfileUser';

function ProfilePage(){
    return(
        <div>
         <div>
            <TopMEnu></TopMEnu>
            <Sidebar></Sidebar>
         </div>
      
          <ProfileUs></ProfileUs>
        </div>

    );
}

export default ProfilePage;
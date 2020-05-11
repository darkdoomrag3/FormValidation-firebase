import React from 'react'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ProfilePage from '../ProfilePage/ProfilePage';
import PasswordReset from '../Passwordreset/PasswordReset ';
import {

    Router,
    Route
  } from "react-router-dom";


const Aouth = () => {
  
    const user = null;
    return (
       
       user ?    
          <ProfilePage/>
          :
         <>
          <Route>
           <SignUp path="/signup"/>
          <SignIn path="/signin" />
        
            <PasswordReset path="/passwordreset" />
           
           </Route>
           </>
      
    )
}

export default Aouth

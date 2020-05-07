import React from 'react'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ProfilePage from '../ProfilePage/ProfilePage';
import PasswordReset from '../Passwordreset/PasswordReset ';
import {

    Router
  } from "react-router-dom";


const Aouth = () => {
  
    const user = null;
    return (
       
       user ?    
          <ProfilePage/>
          :
          <Router>
           <SignUp/>
          <SignIn path="/signin" />
        
            <PasswordReset path="/passwordreset" />
            </Router>
      
    )
}

export default Aouth

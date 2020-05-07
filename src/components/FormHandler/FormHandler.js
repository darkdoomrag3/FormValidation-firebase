import React from 'react'
import Aouth from '../autentication/Aouth'
import UserProvider from '../../Providers/UserProvider'


const FormHandler = () => {
    return (
            <UserProvider>
                
        <Aouth/>

            </UserProvider>

    )
}

export default FormHandler;



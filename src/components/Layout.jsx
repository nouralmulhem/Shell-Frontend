import React, { useState } from 'react'
import { ContainerObj } from '../styles/Layout'
import Signin from './Signin'
import SignInOverlay from './SignInOverlay'
import Signup from './Signup'
import SignUpOverlay from './SignUpOverlay'

function Layout() {
    const [signIn, setSignIn] = useState(true)
    const handleClick=(param)=>{
        setSignIn(param);
    }
    return (
        <ContainerObj id='container'>
            {signIn?
            <>
            <Signin/>
           <SignUpOverlay handleClick={handleClick}/>
           </>:
           <><SignInOverlay handleClick={handleClick}/>
           <Signup/></>
           }
        </ContainerObj>
    )
}

export default Layout
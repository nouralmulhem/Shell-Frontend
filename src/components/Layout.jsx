import React, { useState } from 'react'
import { ContainerObj } from '../styles/Layout'
import Signin from './Signin'
import SignInOverlay from './SignInOverlay'
import Signup from './Signup'
import SignUpOverlay from './SignUpOverlay'

function Layout() {
    const [signIn, setSignIn] = useState(true)
    return (
        <ContainerObj id='container'>
            {signIn?
            <>
            <Signin></Signin>
           <SignUpOverlay signIn setSignIn></SignUpOverlay>
           </>:
           <><SignInOverlay/>
           <Signup/></>
           }
        </ContainerObj>
    )
}

export default Layout
import React, { useState } from 'react'
import { ContainerObj } from '../styles/Layout'
import Signin from './Signin'
import SignUpOverlay from './SignUpOverlay'

function Layout() {
    // const [signIn, setSignIn] = useState(true)
    return (
        <ContainerObj id='container'>
           {/* Signin */}
           <Signin></Signin>
           <SignUpOverlay></SignUpOverlay>
           {/* Overly signup */}
        </ContainerObj>
    )
}

export default Layout
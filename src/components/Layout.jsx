import React from 'react'
import { ContainerObj } from '../styles/Layout'
import Signin from './Signin'
import SignUpOverlay from './SignUpOverlay'

function Layout() {
    return (
        <ContainerObj>
           {/* Signin */}
           <Signin></Signin>
           <SignUpOverlay></SignUpOverlay>
           {/* Overly signup */}
        </ContainerObj>
    )
}

export default Layout
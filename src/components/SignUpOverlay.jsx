// import {  Button, Typography } from '@mui/material'
import React from 'react'
import { ButtonSignUp, SignUpOverlayObj, TypographyH3, TypographyParagraph } from '../styles/SignupOverlay'

function SignUpOverlay() {
  return (
    <SignUpOverlayObj>
      <TypographyH3 variant='h3' sx={{ marginBottom: 4}}>Hi There!</TypographyH3>
      <TypographyParagraph variant='p'>Enter your personal details to open an account with us</TypographyParagraph>
      <ButtonSignUp variant="outlined" onClick={() => document.getElementById('container').classList.add("right-panel-active")}>Sign UP</ButtonSignUp>
    </SignUpOverlayObj>
  )
}

export default SignUpOverlay
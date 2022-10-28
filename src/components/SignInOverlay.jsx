import React from 'react'
import { ButtonSignUp, SignUpOverlayObj, TypographyH3, TypographyParagraph } from '../styles/SignupOverlay'

function SignInOverlay({handleClick}) {
  const toggle =()=>{
    handleClick(true)
  }
  return (
    <SignUpOverlayObj>
      <TypographyH3 variant='h4' sx={{ marginBottom: 4}}>Welcome Back!</TypographyH3>
      <TypographyParagraph variant='p'>To keep connected with us please login with your personal details</TypographyParagraph>
      <ButtonSignUp variant="outlined" onClick={toggle}>Sign In</ButtonSignUp>
    </SignUpOverlayObj>
  )
}

export default SignInOverlay
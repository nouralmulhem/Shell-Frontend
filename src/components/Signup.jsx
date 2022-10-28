import { Typography, TextField, Link } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
import { ButtonSign, SignConatiner} from '../styles/Signin'
import { TypographyH3 } from '../styles/SignupOverlay'
import SocialAccounts from './SocialAccounts'


function Signup() {
  return (
         <SignConatiner>
            {/* Sign up */}
            <TypographyH3 variant='h4' sx={{color:"black", fontSize:40}}>Create Account</TypographyH3>
            <SocialAccounts/>
            <Typography variant='subtitle'>or use your email for regrstration</Typography>
            <TextField label="Name" variant="standard" size='small' sx={{width: '80%'}}></TextField>
            <TextField label="Email" variant="standard" size='small' sx={{width: '80%'}}></TextField>
            <TextField label="Password" variant="standard" size='small' sx={{width: '80%', marginBottom:2}}></TextField>
            <ButtonSign variant="outlined">Sign up</ButtonSign>
        </SignConatiner>
  )
}

export default Signup
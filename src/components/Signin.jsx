import { Typography, TextField, Link } from '@mui/material'
import React from 'react'
import { ButtonSign, SignConatiner} from '../styles/Signin'
import { TypographyH3 } from '../styles/SignupOverlay'
import SocialAccounts from './SocialAccounts'

function Signin({btn}) {
    return (
        <SignConatiner>
            {/* Sign in */}
            <TypographyH3 variant='h3' sx={{color:"black"}}>Sign in</TypographyH3>
            <SocialAccounts/>
            <Typography variant='subtitle'>or use your account</Typography>
            <TextField label="Email" variant="standard" size='small' sx={{width: '80%'}}></TextField>
            <TextField label="Password" variant="standard" size='small' sx={{width: '80%'}}></TextField>
            
            <Link href="#" variant="body2">
                Forgot your password?
            </Link>
            <ButtonSign variant="outlined">Sign in</ButtonSign>
            {btn}
        </SignConatiner>
    )
}

export default Signin
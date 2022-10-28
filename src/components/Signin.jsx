import { Avatar, Typography, TextField, Link, IconButton } from '@mui/material'
import React from 'react'
import { ButtonSignIn, SigninConatiner, TextFieldStyled, ThirPartyContainer } from '../styles/Signin'
import { TypographyH3 } from '../styles/SignupOverlay'


function Signin() {
    return (
        <SigninConatiner>
            {/* Sign in */}
            <TypographyH3 variant='h3' sx={{color:"black"}}>Sign in</TypographyH3>

            <ThirPartyContainer>
                <IconButton><Avatar src="facebook.png" style={{
                    border: '1px solid lightgray',
                    backgroundColor: "#396fd6",
                    padding: 5,
                }}></Avatar>
                </IconButton>
                <IconButton>
                    <Avatar src="googleplus.png" style={{
                        border: '1px solid lightgray',
                        backgroundColor: "#396fd6",
                        padding: 5,
                    }}>
                    </Avatar>
                </IconButton>
                <IconButton>
                    <Avatar src="linkedin.png" style={{
                        border: '1px solid lightgray',
                        backgroundColor: "#396fd6",
                        padding: 5,
                    }}></Avatar>
                </IconButton>
            </ThirPartyContainer>
            <Typography variant='subtitle'>or use your account</Typography>
            {/* <TextFieldStyled label="Email" variant="filled"/> */}
            {/* <TextFieldStyled label="Password" variant="filled"/> */}
            <TextField label="Email" variant="standard" size='small' sx={{width: '80%'}}></TextField>
            <TextField label="Password" variant="standard" size='small' sx={{width: '80%'}}></TextField>
            
            <Link href="#" variant="body2">
                Forgot your password?
            </Link>
            <ButtonSignIn variant="outlined">Sign in</ButtonSignIn>
        </SigninConatiner>
    )
}

export default Signin
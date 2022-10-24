import { Avatar, Typography, TextField, Link, Button, IconButton } from '@mui/material'
import React from 'react'
import { ButtonSignUp, SigninConatiner, ThirPartyContainer } from '../styles/Signin'

import FacebookIcon from '@mui/icons-material/Facebook';
function Signin() {
    return (
        <SigninConatiner>
            {/* Sign in */}
            Sigin
            <ThirPartyContainer>
                <IconButton><Avatar src="facebook.png" style={{
                    border: '1px solid lightgray',
                    backgroundColor: "blue",
                    padding:5,
                }}></Avatar>
                </IconButton>
                <IconButton>
                <Avatar src="googleplus.png" style={{
                    border: '1px solid lightgray',
                    backgroundColor: "blue",
                    padding:5,
                }}>
                </Avatar>
                </IconButton>
                <IconButton>
                <Avatar src="linkedin.png" style={{
                    border: '1px solid lightgray',
                    backgroundColor: "blue",
                    padding:5,
                }}></Avatar>
                </IconButton>
            </ThirPartyContainer>
            <Typography variant='subtitle'>or use your account</Typography>
            <TextField label="Email" variant="filled" />
            <TextField label="Password" variant="filled" />
            <Link href="#" variant="body2">
                Forgot your password?
            </Link>
            <ButtonSignUp variant="outlined">Sign UP</ButtonSignUp>
        </SigninConatiner>
    )
}

export default Signin
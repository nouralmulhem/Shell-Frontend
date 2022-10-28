import { Typography, TextField, Box } from '@mui/material'
import { ButtonSign, SignConatiner} from '../styles/Signin'
import { TypographyH3 } from '../styles/SignupOverlay'
import SocialAccounts from './SocialAccounts'

function Signup({btn2, condition}) {
  return (
    <SignConatiner condition={condition}>
        {/* Sign up */}
        <TypographyH3 variant='h4' sx={{color:"black"}}>Create Account</TypographyH3>
        <SocialAccounts/>
        <Typography variant='subtitle'>or use your email for regrstration</Typography>
        <TextField label="Name" variant="standard" size='small' sx={{width: '80%'}}></TextField>
        <TextField label="Email" variant="standard" size='small' sx={{width: '80%'}}></TextField>
        <TextField label="Password" variant="standard" size='small' sx={{width: '80%', marginBottom:2}}></TextField>
        <ButtonSign variant="outlined">Sign up</ButtonSign>
        {btn2}
    </SignConatiner>
  )
}

export default Signup
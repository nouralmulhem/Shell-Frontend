// MUI
import { Typography, TextField } from '@mui/material';

// Styles
import { useState } from 'react';
import { ButtonSign, SignConatiner } from '../../styles/Signin';
import { TypographyH3 } from '../../styles/SignupOverlay';
import SocialAccounts from './SocialAccounts';

// Components
import SnackBar from '../SnackBar';

// Server
import { logIn } from './server';
// import { isAdmin } from './server';

function Signin({ btn, condition }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBar, setSnackBar] = useState({ message: '' });
  return (
    <>
      <SignConatiner
        condition={condition}
        onSubmit={(e) => {
          e.preventDefault();
          logIn(userName, password, setOpenSnackBar, setSnackBar);
        }}
      >
        {/* Sign in */}
        <TypographyH3 variant="h3" sx={{ color: 'black' }}>
          Sign in
        </TypographyH3>
        <SocialAccounts />
        <Typography variant="subtitle">or use your account</Typography>
        <TextField
          label="Username"
          type="text"
          required
          variant="standard"
          size="small"
          sx={{ width: '80%' }}
          onChange={(e) => {
            setUserName(e.target.value.trim());
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          variant="standard"
          size="small"
          sx={{ width: '80%', marginBottom: 2 }}
          onChange={(e) => {
            setPassword(e.target.value.trim());
          }}
        />
        {/* <Link href="/" variant="body2">
          Forgot your password?
        </Link> */}
        <ButtonSign variant="outlined" type="submit">Sign in</ButtonSign>
        {btn}

      </SignConatiner>
      <SnackBar open={openSnackBar} setOpen={setOpenSnackBar} message={snackBar.message} />
    </>
  );
}

export default Signin;

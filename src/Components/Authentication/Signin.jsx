// axios
// import axios from '../../services/instance'
import axios from 'axios';

// MUI
import { Typography, TextField, Link } from '@mui/material';

// Styles
import { useState } from 'react';
import { ButtonSign, SignConatiner } from '../../styles/Signin';
import { TypographyH3 } from '../../styles/SignupOverlay';
import SocialAccounts from './SocialAccounts';

// Components
import SnackBar from '../SnackBar';

function Signin({ btn, condition }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBar, setSnackBar] = useState({ message: '' });

  const signIn = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);

    axios.post('https://cuert-backend-api.herokuapp.com/auth/login/', {
      username: userName,
      password,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          localStorage.setItem('shellToken', JSON.stringify(response.data));
          window.location.href = './';
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // Unauthorized
          setOpenSnackBar(true);
          setSnackBar({
            message: 'Incorrect username or password',
          });
        } else {
          console.log(error);
        }
      });
  };
  return (
    <SignConatiner condition={condition} onSubmit={signIn}>
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
      <Link href="/" variant="body2">
        Forgot your password?
      </Link>
      <ButtonSign variant="outlined" type="submit">Sign in</ButtonSign>
      {btn}

      <SnackBar open={openSnackBar} setOpen={setOpenSnackBar} message={snackBar.message} />
    </SignConatiner>
  );
}

export default Signin;

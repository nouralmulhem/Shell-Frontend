import { Typography, TextField } from '@mui/material';
// import axios from '../../services/instance'
import axios from 'axios';
import { useState } from 'react';
import { ButtonSign, SignConatiner } from '../../styles/Signin';
import { TypographyH3 } from '../../styles/SignupOverlay';

// Components
import SnackBar from '../SnackBar';
import SocialAccounts from './SocialAccounts';

function Signup({ btn2, condition }) {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBar, setSnackBar] = useState({ message: '' });

  const signUp = (e) => {
    e.preventDefault();
    const [first, last] = name.split(' ');
    axios.post('https://cuert-backend-api.herokuapp.com/auth/register/', {
      username: userName,
      password,
      password2,
      email,
      first_name: first,
      last_name: last,
    })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200 || response.status === 201) {
          localStorage.setItem('shellToken', JSON.stringify(response.data));
          window.location.href = './';
        }
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.data?.email || error?.response?.data?.username) {
          // Unauthorized
          setOpenSnackBar(true);
          setSnackBar({
            message: `${error?.response?.data?.email}\n${error?.response?.data?.username}`,
          });
        } else if (error?.response?.data?.password !== undefined) {
          setOpenSnackBar(true);
          setSnackBar({
            message: error?.response?.data?.password,
          });
        }
      });
  };

  return (
    <SignConatiner condition={condition} onSubmit={signUp}>
      <TypographyH3 variant="h4" sx={{ color: 'black' }}>
        Create Account
      </TypographyH3>
      <SocialAccounts />
      <Typography variant="subtitle">
        or use your email for regrstration
      </Typography>
      <TextField
        label="Name"
        type="text"
        required
        variant="standard"
        size="small"
        sx={{ width: '80%' }}
        onChange={(e) => {
          setName(e.target.value.trim());
        }}
      />
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
        label="Email"
        type="email"
        required
        variant="standard"
        size="small"
        sx={{ width: '80%' }}
        onChange={(e) => {
          setEmail(e.target.value.trim());
        }}
      />
      <TextField
        label="Password"
        type="password"
        required
        variant="standard"
        size="small"
        sx={{ width: '80%' }}
        onChange={(e) => {
          setPassword(e.target.value.trim());
        }}
      />
      <TextField
        label="Repeat Password"
        type="password"
        required
        variant="standard"
        size="small"
        sx={{ width: '80%', marginBottom: 2 }}
        onChange={(e) => {
          setPassword2(e.target.value.trim());
        }}
      />
      <ButtonSign variant="outlined" type="submit">Sign up</ButtonSign>
      {btn2}

      <SnackBar open={openSnackBar} setOpen={setOpenSnackBar} message={snackBar.message} />
    </SignConatiner>
  );
}

export default Signup;

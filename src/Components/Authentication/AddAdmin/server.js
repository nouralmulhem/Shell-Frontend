import axios from 'axios';

export const addAdmin = (email, setOpenSnackBar, setSnackBar) => {
  let token = JSON.parse(localStorage.getItem('shell'));
  token = token.access;
  axios.post(
    'https://cuert-backend-api.herokuapp.com/auth/addadmin/',
    {
      email,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
    .then((response) => {
      if (response.status === 200) {
        // Admin Added Successfully
        // set Snack Bar State to True
        setOpenSnackBar(true);
        setSnackBar({
          message: 'Admin Added Successfully',
          status: 'success',
        });
      }
    })
    .catch((error) => {
      setOpenSnackBar(true);
      // 401 unauthorized
      if (error.response.status === 401) {
        // You aren't authorized to add new admin
        setSnackBar({
          message: 'You are not authorized to add new admin',
          status: 'error',
        });
        console.log('401');
      } else if (error.response.status === 400) {
        console.log('error', error);
        // 400 no user with the given email(msg)
        setSnackBar({
          message: error.response.data.msg,
          status: 'error',
        });
      } else {
        setSnackBar({
          message: 'Error !!',
          status: 'error',
        });
      }
    });
};

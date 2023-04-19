import axios from 'axios';
import { setLocalStorage, reDirect } from '../../utils';

async function isAdmin(token) {
  try {
    const response = await axios.get('https://cuert-backend-api.herokuapp.com/auth/isadmin/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const res = response?.data?.bool;
    if (res === 'True') {
      return true;
    }
    return false;// not an admin
  } catch (error) {
    console.log(error);
  }
  return false;// not an admin
}

export const logIn = (userName, password, setOpenSnackBar, setSnackBar) => {
  let errorThrow = false;
  let localStorageItem = {};

  axios.post('https://cuert-backend-api.herokuapp.com/auth/login/', {
    username: userName,
    password,
  }).then(async (response) => {
    if (response.status === 200) {
      localStorageItem = response.data;// access Token & refresh Token
      localStorageItem.loggedIn = true;
    }
  }).catch((error) => {
    errorThrow = true;
    console.log(error);
    if (error.response.status === 401) {
      // Unauthorized
      setOpenSnackBar(true);
      setSnackBar({
        message: 'Incorrect username or password',
      });
    }
  }).then(async () => {
    if (errorThrow) {
      // Incorrect Request
      return;
    }
    const isAdminUser = await isAdmin(localStorageItem.access);
    if (isAdminUser) {
      localStorageItem.admin = true;
    } else {
      localStorageItem.admin = false;
    }
    setLocalStorage('shell', localStorageItem);
    reDirect('./');
  });
};

export const signUp = (username, password, password2, email, firstName, lastName, setOpenSnackBar, setSnackBar) => {
  axios.post('https://cuert-backend-api.herokuapp.com/auth/register/', {
    username,
    password,
    password2,
    email,
    first_name: firstName,
    last_name: lastName,
  }).then((response) => {
    console.log(response.data);
    if (response.status === 201) {
      logIn(username, password, setOpenSnackBar, setSnackBar);
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

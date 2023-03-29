/* eslint-disable no-param-reassign */
import axios from 'axios';

export const isAdmin = (token, localStorageItem) => {
  console.log('Called');
  console.log(token);
  console.log(localStorageItem);

  localStorageItem.admin = false;
  axios.get('https://cuert-backend-api.herokuapp.com/auth/isadmin/', {
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => {
    console.log('Respons', response);
    const res = response?.data?.bool;
    if (res === 'True') {
      localStorageItem.admin = true;
    }
    localStorage.setItem('shell', JSON.stringify(localStorageItem));
    window.location.href = './';
    // setTimeout(() => {
    //   window.location.href = './';
    // }, 1000);
  }).catch((error) => {
    console.log(error);
    localStorage.setItem('shell', JSON.stringify(localStorageItem));
    // window.location.href = './';

    // setTimeout(() => {
    //   window.location.href = './';
    // }, 1000);
  });
};

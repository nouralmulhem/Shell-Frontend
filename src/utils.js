export const getAccessToken = () => {
  const items = JSON.parse(localStorage.getItem('shell'));
  return items.access;
};

export const getRefreshToken = () => {
  const items = JSON.parse(localStorage.getItem('shell'));
  return items?.refresh;
};

export const reDirect = (route) => {
  window.location.href = route;
};

export const isAdmin = () => {
  const items = JSON.parse(localStorage.getItem('shell'));
  console.log('isadmin', items?.admin);
  return items?.admin;
};

export const isLoggedIn = () => {
  const items = JSON.parse(localStorage.getItem('shell'));
  return items?.loggedIn;
};

export const Logout = () => {
  localStorage.removeItem('shell');
};

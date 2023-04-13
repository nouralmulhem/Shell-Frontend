import { useEffect } from 'react';

import useFetch from '../../hooks/useFetch';

export const GetGallery = () => {
  const [data, dataError, statusCode] = useFetch('https://cuert-backend-api.herokuapp.com/gallery');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);

  return [data];
};

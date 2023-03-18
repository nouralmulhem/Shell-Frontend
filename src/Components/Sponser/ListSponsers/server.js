import { useEffect } from 'react';

import useFetch from '../../../hooks/useFetch';

export const GetSponsor = () => {
  const [data, dataError, statusCode] = useFetch('https://cuert-backend-api.herokuapp.com/sponsors');
  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);

  return [data];
};

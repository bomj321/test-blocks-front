import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const token =
      tokenString && tokenString !== 'undefined'
        ? JSON.parse(tokenString)
        : null;
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

export const parseJwt = () => {
  try {
    return JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
  } catch (e) {
    return null;
  }
};

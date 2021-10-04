import axios from 'axios';

function AxiosConf() {
  axios.defaults.headers['Content-Type'] = 'application/json';

  axios.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem('token'));
      // Edit request config
      config.headers.get['Content-Type'] = 'application/json';
      if (token) {
        config.headers.authorization = token ? `Bearer ${token}` : '';
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      // Edit response config
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.clear();
        window.location = '/';
      } else {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
}
export default AxiosConf;

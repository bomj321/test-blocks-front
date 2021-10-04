import axios from 'axios';
import environment from '../libs/environment';

export default {
  login: (data) =>
    axios({
      method: 'POST',
      url: `${environment.baseUrl}/auth/login`,
      data,
    }),
};

import axios from 'axios';
import config from 'config';

const woloxService = {
  login: (email, password, cb, signal) => {
    axios
      .post(`${config.WOLOX_API}/login`, { email, password }, { ...(signal && { cancelToken: signal }) })
      .then((response) => cb(response))
      .catch((error) => cb(error));
  },

  getList: (name, cb, signal) => {
    axios
      .get(`${config.WOLOX_API}/${name}`, { ...(signal && { cancelToken: signal }) })
      .then((response) => cb(response))
      .catch((error) => cb(error));
  },
};

export default woloxService;

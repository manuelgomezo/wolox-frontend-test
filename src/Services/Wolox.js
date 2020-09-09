import axios from 'axios';
import config from 'config';

const woloxService = {
  login(email, password, cb, signal) {
    axios
      .post(`${config.WOLOX_API}/login`, { email, password }, { ...(signal && { cancelToken: signal }) })
      .then((response) => cb(response))
      .catch((error) => cb(error));
  },

  async getList(name, cb, signal) {
    const response = await axios.get(`${config.WOLOX_API}/${name}`, { ...(signal && { cancelToken: signal }) }).catch((error) => error);
    if (response.status === 200 && response.data) {
      return [response.data, null];
    }
    return [null, response];
  },
};

export default woloxService;

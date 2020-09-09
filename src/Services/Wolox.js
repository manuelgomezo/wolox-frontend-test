import axios from 'axios';
import config from 'config';

const woloxService = {
  async login(email, password, signal) {
    const response = await axios
      .post(`${config.WOLOX_API}/login`, { email, password }, { ...(signal && { cancelToken: signal }) })
      .catch((error) => error);

    if (response.status === 200 && response.data) {
      return [response.data, null];
    }
    return [null, response];
  },

  async getList(name, signal) {
    const response = await axios.get(`${config.WOLOX_API}/${name}`, { ...(signal && { cancelToken: signal }) }).catch((error) => error);

    if (response.status === 200 && response.data) {
      return [response.data, null];
    }
    return [null, response];
  },
};

export default woloxService;

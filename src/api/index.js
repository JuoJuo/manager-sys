import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    const { response: { data, status } } = error;
    if (status === 401) {
      // eslint-disable-next-line
      alert(data.message);
      // eslint-disable-next-line no-underscore-dangle
      window.__router.push({ name: 'login' });
    }

    return Promise.reject(error);
  },
);

export default instance;

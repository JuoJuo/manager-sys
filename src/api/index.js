import axios from 'axios';

const instance = axios.create();

let currentAlert = false;

instance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    const { response: { data, status } } = error;
    if (status === 401 && !currentAlert) {
      currentAlert = true;
      alert(data.msg);
      window.__router.push({ name: 'login' });
    }

    return Promise.reject(error);
  },
);

export default instance;

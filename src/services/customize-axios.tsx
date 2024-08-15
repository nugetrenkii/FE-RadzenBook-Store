import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:44361'
})

interface ErrorResponse {
  data?: any;
  status?: number;
  headers?: any;
}


instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let res: ErrorResponse = {};

    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    return res;
  }
);

export default instance;
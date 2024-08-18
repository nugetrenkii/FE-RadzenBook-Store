// AuthUtils.js
import axios from 'axios';

const API_URL = 'https://localhost:5001/api';

const AuthUtils = {
  // Hàm để lấy token từ API
  getToken: async (userNameOrEmail, password) => {
    try {
      const response = await axios.post(`${API_URL}/tokens`, {
        userNameOrEmail,
        password,
      },{
        headers: {
          'tenant': 'root'
        }});
      const token = response.data.token;
      // Lưu trữ token trong sessionStorage
      AuthUtils.setToken(token);
      return token;
    } catch (error) {
      console.error('Error fetching token', error);
      throw error;
    }
  },

  // Hàm để lưu trữ token trong sessionStorage
  setToken: (token) => {
    sessionStorage.setItem('authToken', token);
  },

  // Hàm để lấy token từ sessionStorage
  getTokenFromStorage: () => {
    return sessionStorage.getItem('authToken');
  },

  // Hàm để xóa token từ sessionStorage
  clearToken: () => {
    sessionStorage.removeItem('authToken');
  },
};

export default AuthUtils;

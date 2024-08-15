import axios from "./customize-axios";
import AuthUtils from "../utils/AuthUtils";

const GetRolesUserById = async (userId) => {
  try {
    const token = AuthUtils.getTokenFromStorage();
    const response = await axios.get(
      `/api/${userId}/roles`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(
      "Error fetching user roles:",
      error.response ? error.response.data : error.message
    );
  }
};

const LoginApi = (userName: string, password: string) => {
  const token = AuthUtils.getTokenFromStorage();
  return axios.post(
      "/api/Account/Login",
      { userName, password },
      {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
          withCredentials: true,
      }
  );
};

const SignUpApi = (fullname: string, email: string, username: string, passWord: string, numberPhone: string, gender: boolean, address: string, confirmPassWord: string) => {
  return axios.post(
      "api/Account/SignUpUserAsync",
      { fullname, email, username, passWord, numberPhone, gender, address, confirmPassWord },
      {
          headers: {
              'Content-Type': 'application/json',
          },
      }
  );
};

export { GetRolesUserById, LoginApi, SignUpApi };

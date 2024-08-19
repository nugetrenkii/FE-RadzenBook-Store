import axios from "./customize-axios";

const LoginApi = (userName: string, password: string) => {
  return axios.post(
    "/api/Account/Login",
    { userName, password },
    {
      headers: {
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
      withCredentials: true
    }
  );
};

const GetProfileByUserName = async (username: string) => {
  try {
    const token = sessionStorage.getItem('token');
    console.log("Token:", token);  // Log the token for debugging
    const response = await axios.get(
      `/api/Account/FindProfileOfUser?userName=${username}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true
      }
    );
    console.log("Profile data:", response);
    return response;
  } catch (error) {
    console.error(
      "Error fetching profile:",
      error.response ? error.response.data : error.message
    );
  }
}

const GetAllAccounts = async () => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await axios.get(
      'api/Account/GetAllUser',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true
      }
    );
   console.log('ressss', response);
   
    return response;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
}

export { LoginApi, SignUpApi, GetProfileByUserName, GetAllAccounts };

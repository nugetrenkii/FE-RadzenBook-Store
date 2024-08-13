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

const LoginApi = (email: any, password: any) => {
    return axios.post("/api/login", {email, password})
}

export { GetRolesUserById, LoginApi };

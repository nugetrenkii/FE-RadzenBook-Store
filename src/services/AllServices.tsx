import axios from './customize-axios';


const AllUser = () => {
    return axios.get('/api/users?page=1');
}

const LoginApi = (email: any, password: any) => {
    return axios.post("/api/login", {email, password})
}

export {AllUser, LoginApi};
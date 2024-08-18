import React, { useEffect, useState, useContext, FormEvent } from "react";
import * as Components from './Components';
import { memo } from "react";
import { LoginApi, SignUpApi } from "../../services/AllServices";
import { Alert, Snackbar } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AxiosResponse } from "axios";
import { RadioContainer, RadioInput, RadioLabel } from './Components';

interface AlertState {
    open: boolean;
    message: string;
}

interface LoginResponse {
    token: string;
    status?: number;
    fullName: string,
    email: string,
    numberPhone: string,
    address: string
    data?: {
        error?: string;
    };
}


const LoginSignup: React.FC = () => {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState<AlertState>({ open: false, message: "" });
    const [loadingApi, setLoadingAPI] = useState<boolean>(false);


    //sign up
    const [usernameSignUp, setUsernameSignUp] = useState("");
    const [gender, setGender] = useState(true);
    const [passwordSU, setPasswordSU] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [address, setAddress] = useState("");

    const { loginContext } = useContext(UserContext);

    useEffect(() => {
        let token = sessionStorage.getItem("token");
        let role = sessionStorage.getItem('role');
        if (token) {
            if (role === 'KhachHang') {
                navigate("/");
            } else if (role === 'Admin') {
                navigate("/admin");
            }

        }
    }, [navigate]);

    const handleSignup = async (event: FormEvent) => {
        event.preventDefault();

        if (!fullname || !email || !usernameSignUp || !passwordSU || !confirmPassword || !numberPhone || !address) {
            toast.warning("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        if (passwordSU !== confirmPassword) {
            toast.warning("Mật khẩu xác nhận không khớp!");
            return;
        }
        setLoadingAPI(true);
        try {
            const response = await SignUpApi(fullname, email, usernameSignUp, passwordSU, numberPhone, gender, address, confirmPassword);
            console.log("response: ", response);

            if (response['code'] === 200) {
                toast.success(response["message"]);
                window.location.reload();
            } else if (response.status === 400) {
                toast.error(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error: any) {
            console.error("error: ", error);
            toast.error("Đăng ký thất bại, vui lòng thử lại sau. Error catch");
        }
        setLoadingAPI(false);
    };

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        if (!username || !password) {
            toast.warning('Username hoặc mật khẩu là bắt buộc!');
            return;
        }

        setLoadingAPI(true);

        try {
            const response: AxiosResponse<LoginResponse> = await LoginApi(username, password);
            console.log('response.data: ', response["fullName"]);

            if (response && response["token"]) {
                sessionStorage.setItem("token", response["token"]);
                loginContext(username, response["token"], response['role'], response["fullName"], response["email"], response["numberPhone"], response["address"]);
                if (response['role'] === 'KhachHang') {
                    navigate('/');
                } else if (response['role'] === 'Admin') {
                    navigate('/admin');
                }
            } else {
                if (response.status === 400) {
                    toast.error('Có lỗi xảy ra');
                } else {
                    toast.error('Đăng nhập thất bại, vui lòng thử lại sau. 400');
                }
            }
        } catch (error: any) {
            console.log('error: ', error);
            toast.error('Đăng nhập thất bại, vui lòng thử lại sau. Catch');
        }

        setLoadingAPI(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={() => setAlert({ ...alert, open: false })}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity="error">
                    {alert.message}
                </Alert>
            </Snackbar>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Components.Container className="0">
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSignup}>
                        <Components.Title>Tạo tài khoản</Components.Title>
                        <Components.Input type='text' placeholder='Full Name' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Components.Input type='text' placeholder='Username' value={usernameSignUp} onChange={(e) => setUsernameSignUp(e.target.value)} />
                        <Components.Input type='phone' placeholder='Number Phone' value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)} />
                        <RadioContainer>
                            <RadioInput id="male" name="gender" value="true" checked={gender === true} onChange={() => setGender(true)} />
                            <RadioLabel htmlFor="male">Nam</RadioLabel>
                            <RadioInput id="female" name="gender" value="false" checked={gender === false} onChange={() => setGender(false)} />
                            <RadioLabel htmlFor="female">Nữ</RadioLabel>
                        </RadioContainer>
                        <Components.Input type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={passwordSU} onChange={(e) => setPasswordSU(e.target.value)} />
                        <Components.Input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <Components.Button type='submit'>
                            {loadingApi && <FontAwesomeIcon icon={faSpinner} spin />}
                            &nbsp;&nbsp;Đăng ký</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Đăng nhập</Components.Title>
                        <Components.Input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Components.Anchor href='#'>Quên mật khẩu?</Components.Anchor>
                        <Components.Button type='submit'>
                            {loadingApi && <FontAwesomeIcon icon={faSpinner} spin />}
                            &nbsp;&nbsp;Đăng nhập
                        </Components.Button>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Link to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                                <SiFacebook style={{ cursor: 'pointer', marginRight: '10px' }} />
                            </Link>
                            <Link to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                                <FcGoogle style={{ cursor: 'pointer' }} />
                            </Link>
                        </div>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Chào mừng bạn đã trở lại!</Components.Title>
                            <Components.Paragraph>
                                Để giữ kết nối với chúng tôi, vui lòng đăng nhập để tiếp tục!
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Đăng nhập
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Chào bạn mới!</Components.Title>
                            <Components.Paragraph>
                                Nhập thông tin cá nhân của bạn và đăng ký sử dụng trang web của chúng tôi!
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Đăng ký
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    );
}

export default memo(LoginSignup);

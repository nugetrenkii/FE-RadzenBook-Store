import React, { useEffect, useState, useContext, FormEvent } from "react";
import * as Components from './Components';
import { memo } from "react";
import { LoginApi } from "../../services/AllServices";
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

interface AlertState {
    open: boolean;
    message: string;
}

interface SignInProps {
    signinIn: boolean;
}

interface LoginResponse {
    token: string;
    status?: number;
    data?: {
        error?: string;
    };
}

const LoginSignup: React.FC = () => {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState<AlertState>({ open: false, message: "" });
    const [loadingApi, setLoadingAPI] = useState<boolean>(false);

    console.log('email: ', email);
    
    const { loginContext } = useContext(UserContext);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        if (!email || !password) {
            toast.warning('Email hoặc mật khẩu là bắt buộc!');
            return;
        }
        setLoadingAPI(true);
        try {
            const response: AxiosResponse<LoginResponse> = await LoginApi(email, password);
            console.log('ressss', response);
            
            if (response && response.data.token) {
                loginContext(email, response.data.token);
                navigate('/');
            } else {
                if (response.status === 400) {
                    toast.error(response.data.status || 'Có lỗi xảy ra');
                }
            }
        } catch (error) {
            toast.error('Đăng nhập thất bại, vui lòng thử lại sau.');
        }
        setLoadingAPI(false);
    }

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
            <Components.Container className="containerLogin">
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Tạo tài khoản</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Input type='password' placeholder='Confirm Password' />
                        <Components.Button>Đăng ký</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Đăng nhập</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
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

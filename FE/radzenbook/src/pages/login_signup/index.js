import React, { useState } from "react";
import * as Components from './Components';
import { memo } from "react";
import { LoginApi } from "services/AllServices";
import { Alert, Snackbar } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Login_signup = () => {
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ open: false, message: "" });

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            toast.error('Email or Password is required!');
            return;
        }
        let response = await LoginApi(email, password);
        if (response && response.token) {
            toast.success('Login successfully!');
            localStorage.setItem("token", response.token);
            console.log('check response:>>>>>>', response);
        }

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={() => setAlert({ ...alert, open: false })}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity="error">
                    {alert.message}
                </Alert>
            </Snackbar>
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
                        <Components.Button type='submit'>Đăng nhập</Components.Button>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <SiFacebook style={{ cursor: 'pointer', marginRight: '10px' }} />
                            <FcGoogle style={{ cursor: 'pointer' }} />
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

    )
}

export default memo(Login_signup);
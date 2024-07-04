import React, { useState } from "react";
import * as Components from './Components';
import { memo } from "react";
import { LoginApi } from "services/AllServices";
import { Alert, Snackbar } from "@mui/material";

const Login_signup = () => {
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ open: false, message: "" });

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setAlert({ open: true, message: 'Email or Password is required!' });
            return;
        }
        let response = await LoginApi(email, password);
        if(response && response.token){
            localStorage.setItem("token", response.token);
        }
        console.log('check response:>>>>>>', response);
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
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type='submit'>Sigin In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>


            </Components.Container>
        </div>

    )
}

export default memo(Login_signup);
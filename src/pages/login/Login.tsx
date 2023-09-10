import * as React from "react";
import "./login.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import authService from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GridLoadingOverlay } from "@mui/x-data-grid";

function Copyright(props: any) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {"Copyright © "}
            <Link color='inherit' href='#'>
                Ay Khedma
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const username = event.currentTarget.username.value;
            const password = event.currentTarget.password.value;

            const res = await authService.login(username, password);

            localStorage.clear();
            const { token, name } = res.data.body;
            localStorage.setItem("token", token);
            localStorage.setItem("name", name);
            navigate("/");
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className='logo'>
                    <img
                        className='img'
                        src={process.env.PUBLIC_URL + "/logo.png"}
                    />
                </div>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoComplete='username'
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

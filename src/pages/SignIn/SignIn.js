import React, { useState, useEffect  } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

  
const Signin = () => {
     const [ username, setUserName ] = useState('');
     const [ password, setPwd ] = useState('');
     const [ dept, setDept ] = useState('');
     const [ loginStatus, setLoginStatus ] = useState(false);
    const navigate = useNavigate();

axios.defaults.withCredentials = true;

useEffect(() => {
  axios.get("/login").then((response) => {
    if (response.data.loggedIn == true) {
    setLoginStatus(response.data.user);
    }
  });
}, [])    


const handleSubmit = (event) => {
  event.preventDefault();
     axios.post('/login', {
         username : username,
         password : password
       })
       .then((response) => {
        if (!response.data) {
          setLoginStatus(false);
        } else {
          setLoginStatus(true);
          localStorage.setItem("token", response.data.token)
          console.log(response.data.user);
          navigate('/dashboard'); 
        }
       });
      };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={e => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPwd(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
 {/**       <Copyright sx={{ mt: 8, mb: 4 }} /> */} 
      </Container>
    </ThemeProvider>
  );
}


export default Signin;
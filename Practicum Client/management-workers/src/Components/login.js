import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import LoginImage from '../images/logo.png'; // Import your image

const Login = () => {
  const [open, setOpen] = useState(false);
  const [credentials, setCredentials] = useState({ userName: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (credentials.userName === 'meital' && credentials.password === '1234') {
      axios.post("https://localhost:7104/api/Auth", credentials)
        .then((response) => {
          console.log("Successfully logged in");
          localStorage.setItem('item', response.data.token); 
          navigate('/showWorkersTable');
        })
        .catch((error) => {
          console.error("Error logging in: ", error);
          setError('Invalid credentials. Please try again');
        });
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={LoginImage} alt="Login" style={{ width: '40%', marginBottom: '20px' }} /> 
      <br />
      <Button variant="outlined" onClick={handleOpen} style={{ width: '40%', color: 'black', borderColor: 'black' }}>Login</Button> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: 'black' }}>Login</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: 'black' }}>Please enter your credentials</DialogContentText> 
          <TextField
            autoFocus
            margin="dense"
            label="User Name"
            type="text"
            name="userName"
            fullWidth
            value={credentials.userName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            name="password"
            fullWidth
            value={credentials.password}
            onChange={handleChange}
          />
          {error && <DialogContentText color="error">{error}</DialogContentText>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;

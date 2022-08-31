import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const UserAdd = ({ handleClose, handleOpen, open, handleUserSubmit, handleUserInfoChange, userInfo, }) => {

    return(
        <div>      
        <Button onClick={handleOpen} sx={{ }}
        variant="contained" color="success">New User</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2"> 
              </Typography>
              <form      onSubmit={handleUserSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
             Enter New User Information 
            </Typography>
            <TextField 
            sx={{ height: 0.5, mt: 1, mb: 1, mr: 1, ml: 2.5 }}
            required
            id="userName" 
            name="userName"               
            value={userInfo.userName}
            onChange={handleUserInfoChange}
            label="User Name" variant="outlined" />
        <TextField
                 required
                sx={{ height: 0.5, mt: 1, mb: 1, mr: 1, ml: 2.5 }}
                label="User Password"
                name="userPassword"
                id="userPassword"
                type="password"
                value={userInfo.userPassword}
            onChange={handleUserInfoChange}
              />
        <Select
                 required
                sx={{ height: 0.5, width: 0.35, mt: 1, mb: 1, mr: 1,  ml: 2.5 }}
                label="User Department"
                name="userDept"
                id="userDept"
                native
                value={userInfo.userDept}
                onChange={(e) => handleUserInfoChange(e) }
              > <option></option>
              <option>admin</option>
              <option>user</option>
              <option>sales</option>
              </Select>
          <Button
                type="submit"
                size = 'large'
                variant="contained"
                sx={{ mt: 1, mb: 2, ml: 2 }}
              >
                Add New 
              </Button> 
        </form>
            </Box>
          </Fade>
        </Modal></div>
    )
};

export default UserAdd;
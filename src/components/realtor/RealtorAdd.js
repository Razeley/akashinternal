import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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


const RealtorAdd = ({ handleClose, handleOpen, open, handleRealtorSubmit, handleRealtorInfoChange, realtorInfo, }) => {

    return(
        <div>      
        <Button onClick={handleOpen} sx={{ }}
        variant="contained" color="success">New Realtor</Button>
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
              <form      onSubmit={handleRealtorSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
             Enter Realtor Information 
            </Typography>
            <Stack direction='row' > 
            <TextField 
            sx={{ height: 0.5, mt: 1, mb: 1, mr: 1, ml: 2.5 }}
            id="realtorName" 
            name="realtorName"               
            value={realtorInfo.realtorName}
            onChange={handleRealtorInfoChange}
            label="Realtor Name" variant="outlined" />
        <TextField
                 required
                sx={{ height: 0.5, mt: 1, mb: 1, mr: 1, ml: 2.5 }}
                label="Realtor Phone Number"
                name="realtorPhone"
                id="realtorPhone"
                value={realtorInfo.realtorPhone}
            onChange={handleRealtorInfoChange}
              />
              </Stack>
        <TextField
//                 required
                sx={{ height: 0.5, mt: 1, mb: 1, mr: 1,  ml: 2.5 }}
                label="Realtor Email"
                name="realtorEmail"
                id="realtorEmail"
                value={realtorInfo.realtorEmail}
                onChange={handleRealtorInfoChange}
              />
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

export default RealtorAdd;
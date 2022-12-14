import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

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


const CustomerAdd = ({ handleClose, handleOpen, open, handleCustomerSubmit, handleCustomerInfoChange, customerInfo, }) => {

    return(
        <div>      
        <Button onClick={handleOpen}  sx={{ }}
        variant="contained" color="success">New Customer</Button>
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
              <form      onSubmit={handleCustomerSubmit}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
             Enter Customer Information 
            </Typography>
            <TextField 
            sx={{ height: 0.5, mt: 1, mb: 1, mr: 1, ml: 2.5 }}
            id="customerName" 
            name="customerName"               
            value={customerInfo.customerName}
            onChange={handleCustomerInfoChange}
            label="Customer Name" variant="outlined" />
        <TextField
                 required
                sx={{ height: 0.5, mt: 1, mb: 1, mr: 1, ml: 2.5 }}
                label="Customer Phone Number"
                name="customerPhone"
                id="customerPhone"
                value={customerInfo.customerPhone}
            onChange={handleCustomerInfoChange}
              />
        <TextField
//                 required
                sx={{ height: 0.5, mt: 1, mb: 1, mr: 1,  ml: 2.5 }}
                label="Customer Email"
                name="customerEmail"
                id="customerEmail"
                value={customerInfo.customerEmail}
                onChange={handleCustomerInfoChange}
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

export default CustomerAdd;
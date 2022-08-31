import React, { useEffect, useState, useCallback,  } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const HousePopup = ({ productType, sqft, community, handleClose, handleOpen, open, handleSubmit, formData, handleFormChange }) => {





  return (
    <div>
      <Button onClick={handleOpen} sx={{ mt: 2.5}}
      variant="contained" color="success">Add a new Job</Button>
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
            <form      onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
           Enter the Job Number! 
          </Typography>
          <TextField id="jobNumber" name="jobNumber"                       
              value={formData.jobNumber} 
          onChange={handleFormChange} label="Job Number" variant="outlined" />
          
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Address
          </Typography>
          <Stack direction='row'>
      <TextField
               required
              sx={{ height: 0.5, mt: 1, mb: 1, mr: 1 }}
              name="address"
              id="address"
              value={formData.address}
              onChange={handleFormChange}
            />
          <TextField
          name="lot"
          id='lot'
          label="Lot"
          sx={{ height: 0.5, mt: 1, mb: 1, mr: 1 }}
          rows={6}
          value={formData.lot}
          onChange={handleFormChange}
        />
        <TextField
          name="block"
          id='block'
          label="Block"
          sx={{ height: 0.5, mt: 1, mb: 1, mr: 1 }}
          value={formData.block}
          onChange={handleFormChange}
        />
        <TextField
          name="plan"
          id='plan'
          label="Plan"
          sx={{ height: 0.5, mt: 1, mb: 1, mr: 1 }}
          value={formData.plan}
          onChange={handleFormChange}
        />
      </Stack>
      <Typography id="modal-modal-title" variant="h6" component="h2">
            Community
          </Typography>
        <Select
        name='Community_No'
        id='Community_No'
        value={formData.Community_No}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
      ><option>Select a Community</option> 
       {community.length > 0 && community.map(community => {
        return <option  key={community.Community_No} 
       value={community.Community_No}>  
       {community.communityName}         
        </option>; 
     })}         
      </Select>
      <Stack direction='row'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Product Type
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ml:11.5}} >
            Basement
          </Typography>
          </Stack>
        <Select
        id='product_type_No'
        name='product_type_No'
        value={formData.product_type_No}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
      > <option>Select a Product Type</option>   
      {productType.length > 0 && productType.map(productType => {
        return <option  key={productType.product_type_No} 
       value={productType.product_type_No}>  
       {productType.Product_Type}         
        </option>; 
     })}  
      </Select>
      <Select
      id='Basement'
      name='Basement'
      value={formData.Basement}
      onChange={handleFormChange}
      label="Basement"
      size="small"
      sx={{ height: 0.25, mt: 1, mb: 1, ml: 2, }}
      native
      autoFocus
      ><option></option>
      <option>No</option>
      <option>Yes</option>
      </Select>
      <Typography id="modal-modal-title" variant="h6" component="h2">
            Square Foot
          </Typography>
            <Select
        id= 'sqft_No'
        name='sqft_No'
        value={formData.sqft_No}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1, }}
        native
        autoFocus
      > <option>Select Square Footage</option>   
      {sqft.length > 0 && sqft.map(sqft => {
        return <option  key={sqft.sqft_No} 
       value={sqft.sqft_No}>  
    Exterior={sqft.Exterior}, Interior={sqft.Interior}         
        </option>; 
     })}  
      </Select>
        <Button
              type="submit"
              size = 'medium'
              variant="contained"
              sx={{ mt: 1, mb: 2, ml: 2 }}
            >
              Add New 
            </Button> 
      </form>
          </Box>
        </Fade>
      </Modal>

    </div>
  );
}

export default HousePopup;
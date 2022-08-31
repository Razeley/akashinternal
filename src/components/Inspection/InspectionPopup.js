import React, { useEffect, useState, useCallback,  } from 'react';
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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const InspectionPopup = ({clickInfo, formData, handleFormChange, handleSubmit, handleClose, handleOpen, open }) => {

  const field = clickInfo.field;
  const status = clickInfo.value;


  return (
    <div>
      <Button onClick={handleOpen}
      variant="contained" color="success">Change Inspection Status</Button>
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
            Currently, the status for {field} is {status}. 
            </Typography>
            <form onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Select New Status
          </Typography>
            <Select
            name='status'
            required
        status={formData.status}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
      >          
        <option></option>
        <option>Pass</option>
        <option>Fail</option>
        <option>Conditional</option>
        <option>Booked</option>
        <option>Not Ready</option>
        <option>Not Required</option>
        <option>Hold</option>
        <option>VOC Required</option>
        <option>VOC Submitted</option>
        <option>VOC Approved</option>
        <option>N/A</option>
      </Select>
      <Typography id="modal-modal-title" variant="h6" component="h2">
            Select the date
          </Typography>
      <TextField
               required
              sx={{ height: 0.5, mt: 1, mb: 1 }}
              size = 'small'
              name="date"
              type="date"
              id="date"
              value={formData.date}
              onChange={handleFormChange}
            />
                  <Typography id="modal-modal-title" variant="h6" component="h2">
            Select A Failure Reason If Applicable
          </Typography>
        <Select
        name='failureType'
        value={formData.failureType}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
      >          
        <option></option>
        <option>Incomplete Work</option>
        <option>Site Access- Akash</option>
        <option>Site Access- Framers</option>
        <option>Booked In Error- Akash</option>
        <option>Booked In Error- Trade</option>
        <option>VOC Required</option>
        <option>Other</option>
      </Select>

                  <Typography id="modal-modal-title" variant="h6" component="h2">
            Include any notes
          </Typography>
            <TextField
              margin="normal"
              sx={{ height: 1,mt: 1, mb: 1 }}
              fullWidth
              name="notes"
              label="Notes"
              type="notes"
              id="notes"
              value={formData.notes}
              onChange={handleFormChange}
            />
        <Button
              type="submit"
              size = 'small'
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
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

export default InspectionPopup;
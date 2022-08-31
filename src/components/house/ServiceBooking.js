import React, { useState, useEffect, }from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import moment, { Moment }  from 'moment';


const style = {

    bgcolor: 'background.paper',

  };



const ServiceBookings = ({jobInfo}) => {
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleCloseSnackbar = () => setSnackbar(null);
    const handleClose = () => setOpen(false);
    const [ serviceBookings, setServiceBookings ] = useState({
        gasServiceLineStatus: '',
        gasServiceLineDate: '',
        gasSiteIDStatus: '',
        gasSiteIDDate: '',
        gasMeterStatus: '',
        gasMeterDate: '',
        electricSiteIDStatus: '',
        electricSiteIDDate: '',
        electricMeterStatus: '',
        electricMeterDate: '',
    }); 


const houseNo = jobInfo.House_No; 

useEffect(()=> {
        setServiceBookings({
            gasServiceLineStatus: '',
            gasServiceLineDate: '',
            gasSiteIDStatus: '',
            gasSiteIDDate: '',
            gasMeterStatus: '',
            gasMeterDate: '',
            electricSiteIDStatus: '',
            electricSiteIDDate: '',
            electricMeterStatus: '',
            electricMeterDate: '',
        });loadHouseserviceData();
      }, [houseNo]);
        const loadHouseserviceData = async () => {
            return await axios
            .get('/houseservices', {
              params : {
                House_No : houseNo
              }
            })
            .then((response) => setServiceBookings({
                gasServiceLineStatus: response.data[0].gasServiceLine_Status,
                gasServiceLineDate: response.data[0].gasServiceLine_Date,
                gasSiteIDStatus: response.data[0].gasSiteID_Status,
                gasSiteIDDate: response.data[0].gasSiteID_Date,
                gasMeterStatus: response.data[0].gasMeter_Status,
                gasMeterDate: response.data[0].gasMeter_Date,
                electricSiteIDStatus: response.data[0].electricSiteID_Status,
                electricSiteIDDate: response.data[0].electricSiteID_Date,
                electricMeterStatus: response.data[0].electricMeter_Status,
                electricMeterDate: response.data[0].electricMeter_Date,
              }));
        };
        

          const handleServiceBookingChange = (event) => {
            event.preventDefault();
            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;
          
            const newserviceBookings = {...serviceBookings};
            newserviceBookings[fieldName] = fieldValue;
          
            setServiceBookings(newserviceBookings);
          };
          const handleServiceBookingSubmit = async (event ) => {
            event.preventDefault();
            await axios.put('/servicebookings', {
                House_No: houseNo,
                gasServiceLine_Status: serviceBookings.gasServiceLineStatus,
                gasServiceLine_Date: serviceBookings.gasServiceLineDate,
                gasSiteID_Status: serviceBookings.gasSiteIDStatus,
                gasSiteID_Date: serviceBookings.gasSiteIDDate,
                gasMeter_Status: serviceBookings.gasMeterStatus,
                gasMeter_Date: serviceBookings.gasMeterDate,
                electricSiteID_Status: serviceBookings.electricSiteIDStatus,
                electricSiteID_Date: serviceBookings.electricSiteIDDate,
                electricMeter_Status: serviceBookings.electricMeterStatus,
                electricMeter_Date: serviceBookings.electricMeterDate,
            }).then(); 
            setSnackbar({ children: 'Change saved', severity: 'success' }); 
            await new Promise(resolve => setTimeout(resolve, 300));
            loadHouseserviceData();
          };

    return(
        <Box           
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        
//        width: '30%'
      }} >
        <form onSubmit={handleServiceBookingSubmit} >
        <Grid container  sx={{ }} >
            <Grid item xs={12} lg={12} sx={{width: '100%',  }} >
        <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Service/Type"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                defaultValue="Status"
                sx={{width:'30%'}}
                InputProps={{
                readOnly: true,
                 }}
    /> 
            <TextField
                id="outlined-read-only-input"
                defaultValue="Date Entered"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                </Stack>
            <Stack direction='row'>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Gas/Service Line"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='gasServiceLineStatus'
            id='gasServiceLineStatus'
            sx={{width:'30%', }}
            size="small"
            native
            value={serviceBookings.gasServiceLineStatus || ''}
            onChange={handleServiceBookingChange}
          > <option>TBD</option>
          <option>Installed</option>
          <option>Submitted</option>
          </Select>
          <TextField
                id="outlined-read-only-input"
                type='date'
                name="gasServiceLineDate"
                value={serviceBookings.gasServiceLineDate || ''}
                onChange={handleServiceBookingChange}
                sx={{width:'35%'}}
    /> 
          </Stack>
          <Stack direction='row'>
          <TextField
                id="outlined-read-only-input"
                defaultValue="Gas/Site ID"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='gasSiteIDStatus'
            id='gasSiteIDStatus'
            sx={{width:'30%'}}
            size="small"
            native
            value={serviceBookings.gasSiteIDStatus || ''}
            onChange={handleServiceBookingChange}
          > <option>TBD</option>
          <option>Installed</option>
          <option>Submitted</option>
          </Select>
          <TextField
                id="outlined-read-only-input"
                type='date'
                name="gasSiteIDDate"
                value={serviceBookings.gasSiteIDDate || ''}
                onChange={handleServiceBookingChange}
                sx={{width:'35%'}}
    />
                </Stack>
                <Stack direction='row'>
          <TextField
                id="outlined-read-only-input"
                defaultValue="Gas/Meter"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='gasMeterStatus'
            id='gasMeterStatus'
            sx={{width:'30%'}}
            size="small"
            native
            value={serviceBookings.gasMeterStatus || ''}
            onChange={handleServiceBookingChange}
          > <option>TBD</option>
          <option>Installed</option>
          <option>Submitted</option>
          </Select>
          <TextField
                id="outlined-read-only-input"
                type='date'
                name="gasMeterDate"
                value={serviceBookings.gasMeterDate || ''}
                onChange={handleServiceBookingChange}
                sx={{width:'35%'}}
    />
                </Stack>
                <Stack direction='row'>
          <TextField
                id="outlined-read-only-input"
                defaultValue="Electric Site ID"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='electricSiteIDStatus'
            id='electricSiteIDStatus'
            sx={{width:'30%'}}
            size="small"
            native
            value={serviceBookings.electricSiteIDStatus || ''}
            onChange={handleServiceBookingChange}
          > <option>TBD</option>
          <option>Installed</option>
          <option>Submitted</option>
          </Select>
          <TextField
                id="outlined-read-only-input"
                type='date'
                name="electricSiteIDDate"
                value={serviceBookings.electricSiteIDDate || ''}
                onChange={handleServiceBookingChange}
                sx={{width:'35%'}}
    />
                </Stack> 
                <Stack direction='row'>
          <TextField
                id="outlined-read-only-input"
                defaultValue="Electric Meter"
                sx={{width:'35%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='electricMeterStatus'
            id='electricMeterStatus'
            sx={{width:'30%'}}
            size="small"
            native
            value={serviceBookings.electricMeterStatus || ''}
            onChange={handleServiceBookingChange}
          > <option>TBD</option>
          <option>Installed</option>
          <option>Submitted</option>
          </Select>
          <TextField
                id="outlined-read-only-input"
                type='date'
                name="electricMeterDate"
                value={serviceBookings.electricMeterDate || ''}
                onChange={handleServiceBookingChange}
                sx={{width:'35%'}}
    />
                </Stack>
            <Button type="submit"
            sx={{
                width: '35%',
                 height: 55,
            }} variant="contained">Update Services</Button>
            </Grid>
            </Grid>
            </form>
            {!!snackbar && (       
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
        </Box>
    )
}

export default ServiceBookings;
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
import CustomerTable from '../../components/customer/CustomerTable'
import RealtorTable from '../../components/realtor/RealtorTable'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const style = {

    bgcolor: 'background.paper',

  };



const CrudTables = () => {
 
    return(
        <Box           
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        
//        width: '30%'
      }} >
        <Grid container  sx={{ }} >
            <Grid item xs={12} lg={12} sx={{width: '100%',  }} >
                <Paper sx={{width: '100%',  }}>
            <Typography id="modal-modal-title" variant="h6" component="h6">
                    Customer Table
                    </Typography> 
            <CustomerTable />
            </Paper>
            <Paper sx={{width: '100%',  }} > 
            <Typography id="modal-modal-title" variant="h6" component="h6">
                    Realtor Table
                    </Typography> 
                <RealtorTable />
                </Paper>
            </Grid>
            </Grid>
        </Box>
    )
}

export default CrudTables;
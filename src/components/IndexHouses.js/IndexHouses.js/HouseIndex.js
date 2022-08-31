import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
    useGridApiContext } from '@mui/x-data-grid';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import moment  from 'moment';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Select, { SelectChangeEvent }  from '@mui/material/Select';

const useFakeMutation = () => {
  return useCallback(
    (data) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (data.Job_No?.trim() === '') {
            reject(new Error("Error while saving."));
          } else {
            resolve({ ...data, Job_No: data.Job_No?.toUpperCase() });
          }
        }, 200),
      ),
    [],
  );
};





function CustomToolbar(data) {
    return (
      <GridToolbarContainer {...data}>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
        <GridToolbarQuickFilter  />
      </GridToolbarContainer>
    );
  }

const columns = [
    { field: 'Job_No', headerName: 'Job Number', width: 100, editable: false },
    { field: 'BP_Job_No', headerName: 'BP Job Number', width: 125, editable: false },
    { field: 'Address', headerName: 'Address', width: 200, editable: false },
    { field: 'Product_Type', headerName: 'Product Type', width: 125, editable: false },
    { field: 'construction_Started', headerName: 'Construction Started', type: 'boolean', width: 150, editable: true },
    { field: 'Sales_Status', headerName: 'Sales Status', width: 150, editable: true },
    { field: 'intro_Email_Sent', headerName: 'Intro Email Sent', type: 'boolean', width: 150, editable: true },
    { field: 'posession_Letter_Sent', headerName: 'Posession Letter Sent', type: 'boolean', width: 160, editable: true },
    { field: 'job_Sent_BP', headerName: 'Job Sent BP', type: 'boolean', width: 110, editable: true },
    { field: 'Job_Closed', headerName: 'Job Closed', type: 'boolean', width: 125, editable: true },
    { field: 'Staff_Name', headerName: 'Site Supervisor', width: 150, editable: false },
    { field: 'possessionDate', headerName: 'Possession Date',  type: 'dateTime', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY h:mma"), width: 200, editable: true },
    { field: 'Walkthrough_Date', headerName: 'Walkthrough Date',  type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), width: 150, editable: true },
    { field: 'Notes', headerName: 'Notes', width: 300, editable: true },
    { field: 'Name', headerName: 'H/O Name', width: 150, editable: false },
    { field: 'city', headerName: 'City', width: 150, editable: false },
    { field: 'communityName', headerName: 'Community', width: 150, editable: false },
    { field: 'Latest_Inspection', headerName: 'Latest Inspection', width: 175, editable: false },
    { field: 'Inspection_Status', headerName: 'Inspection Status', width: 175, editable: false },
    { field: 'Inspection_Date', headerName: 'Inspection Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), width: 175, editable: false }

  ]


const HouseIndex = () => {
    const [ customers, setCustomers ] = useState([]);
    const [open, setOpen] = useState(false);
    const mutateRow = useFakeMutation();
    const navigate = useNavigate();
    const [ username, setUsername ] = useState('');
    const [snackbar, setSnackbar] = useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [ clickInfo, setClickInfo ]= useState('');
    const [ customerInfo, setCustomerInfo ] = useState({
      customerName: '',
      customerPhone: '',
      customerEmail: '',
    });
    const handleOpen = () => setOpen(true); 
    const handleClose = () =>  {setOpen(false); setCustomerInfo({
      customerName: '',
      customerPhone: '',
      customerEmail: '',
})};
    const [ houseIndex, setHouseIndex ] = useState([]);

    axios.defaults.withCredentials = true;

    useEffect(() => {
      const fetchlogin =()=> {
        axios.get("/login").then((response) => {
          if (response.data.loggedIn == true) {
          setUsername(response.data.user.username);
          }
          if (response.data.user.loggedIn == false  ) {
            navigate('/dashboard');
          }
        });}; 
        fetchlogin();
      }, []);


    useEffect(() => {
        loadHouseIndexData();
      }, []);
      //  [reducerValue]);  
      const loadHouseIndexData = async () => {
        return await axios
        .get('/houseIndex')
        .then((response) => setHouseIndex(response.data))  
      };


const processRowUpdate = useCallback(
        async (newRow) => {axios 
          .put('/updatehouseIndex', {
            House_No: newRow.House_No,
            construction_Started: newRow.construction_Started,
            Sales_Status: newRow.Sales_Status,
            intro_Email_Sent: newRow.intro_Email_Sent,
            posession_Letter_Sent: newRow.posession_Letter_Sent,
            job_Sent_BP: newRow.job_Sent_BP,
            Job_Closed: newRow.Job_Closed,
            possessionDate: newRow.possessionDate,
            Walkthrough_Date: newRow.Walkthrough_Date,
            Notes: newRow.Notes,
            }).then();
      //            res => res.json([]));
          // Make the HTTP request to save in the backend
          const response = await mutateRow(newRow);
          setSnackbar({ children: 'Change saved', severity: 'success' });
          return response;
        },
        [mutateRow],
      );
      
      const handleProcessRowUpdateError = useCallback((error) => {
        setSnackbar({ children: error.message, severity: 'error' });
      }, []);
      
      
      const handleCellClick = (params) => {
        setClickInfo(params);
      }; 
      const handleCustomerInfoChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
      
        const newcustomerInfo = {...customerInfo};
        newcustomerInfo[fieldName] = fieldValue;
      
        setCustomerInfo(newcustomerInfo);
      };
      const handleCustomerSubmit = async (event ) => {
        event.preventDefault();
        await axios.post('/newcustomer', {
          Name: customerInfo.customerName,
          Phone: customerInfo.customerPhone,
          Email: customerInfo.customerEmail,
        }).then(); setOpen(false);handleClose();
        setSnackbar({ children: 'Change saved', severity: 'success' }); 
        await new Promise(resolve => setTimeout(resolve, 300));
        loadHouseIndexData();
      };

    return(
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
          <Grid> 
            <Paper sx={{height:1160}}>
            <Box sx={{
        height: 1100,
        width: '100%',
        '& .pass': {
          backgroundColor: '#19e31c',
        },
        '& .conditional': {
          backgroundColor: '#73f5b8',
        },
        '& .fail': {
          backgroundColor: '#ed4e39',
        },
        '& .booked': {
          backgroundColor: '#19a3e3',
        },
        '& .notReady': {
          backgroundColor: '#FFFFFF',
          color: '#FFFFFF'
        },
        '& .hold': {
          backgroundColor: '#fcba03',
        },
        '& .N': {
          backgroundColor: '#000000',
          color: '#000000',
        },
            }} >
        <Typography id="modal-modal-title" variant="h6" component="h6" sx={{ mt: 3, mb:2 }} >
                    House Index
                    </Typography>
            <DataGrid
                        rows={houseIndex}
                        columns={columns}
                        components={{Toolbar: CustomToolbar}} 
                        getRowId={(row) => row.House_No}
                        editMode="row"
                        processRowUpdate={processRowUpdate}
                        onProcessRowUpdateError={handleProcessRowUpdateError}
                        experimentalFeatures={{ newEditingApi: true }}
                        onCellClick={handleCellClick}
                        getCellClassName={(params)=>{
                          if (params.field === 'Job_No' // || params.value == null 
                          || params.value == '' 
                          ) {
                            return '';
                          } 
                          return params.value === 'Pass' || params.value == 'VOC Approved' || params.value == 'Not Required- Pass' || params.value === '1' ? 'pass' 
                          : params.value === 'Conditional' ? 'conditional' 
                          : params.value === 'Booked' || params.value == 'VOC Submitted'? 'booked' 
                          : params.value === 'Not Ready' || params.value=== null ? 'notReady' 
                          : params.value === 'N/A' ? 'N'
                          : params.value === 'Hold' ? 'hold'
                          : params.value === 'Fail' || params.value === 'VOC Required' || params.value=== 'Haunted By Ghosts' ? 'fail'
                          : ''
                        }}
                        >
            </DataGrid>
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
            </Paper>
            </Grid>
      </Container>


    );
};

export default HouseIndex;
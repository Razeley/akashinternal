import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
    GridActionsCellItem,
    useGridApiContext } from '@mui/x-data-grid';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import moment  from 'moment';
import Typography from '@mui/material/Typography';
import Users from './Users';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

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



const RealtorTable = () => {
    const [ staff, setStaff ] = useState([]);
    const [open, setOpen] = useState(false);
    const mutateRow = useFakeMutation();
    const navigate = useNavigate();
    const [ username, setUsername ] = useState('');
    const [snackbar, setSnackbar] = useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [ clickInfo, setClickInfo ]= useState('');
    const [ realtorInfo, setRealtorInfo ] = useState({
      realtorName: '',
      realtorPhone: '',
      realtorEmail: '',
    });
    const handleOpen = () => setOpen(true); 
    const handleClose = () =>  {setOpen(false); setRealtorInfo({
      realtorName: '',
      realtorPhone: '',
      realtorEmail: '',
})};

axios.defaults.withCredentials = true;

useEffect(() => {
  const fetchlogin =()=> {
    axios.get("/login").then((response) => {
      if (response.data.loggedIn == true) {
      setUsername(response.data.user.username);
      }
      if (response.data.user.dept !== 'admin' ) {
        navigate('/dashboard');
      }
    });}; 
    fetchlogin();
  }, []);


    useEffect(() => {
        loadStaffData();
      }, []);
      //  [reducerValue]);  
      const loadStaffData = async () => {
        return await axios
        .get('/staff')
        .then((response) => setStaff(response.data))  
      };


const processRowUpdate = useCallback(
        async (newRow) => {axios 
          .put('/updatestaff', {
            Staff_No: newRow.Staff_No,
            Staff_Name: newRow.Staff_Name,
            Phone: newRow.Phone,
            Email: newRow.Email,
            Date_Hired: newRow.Date_Hired,
            Date_Terminated: newRow.Date_Terminated,
            Mangment_Notes: newRow.Mangment_Notes,
            Anual_Sick_Time: newRow.Anual_Sick_Time,
            Anual_Holiday_Days: newRow.Anual_Holiday_Days,
            Job_Title: newRow.Job_Title,
            Primary_Location: newRow.Primary_Location,
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

      const handleRealtorInfoChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
      
        const newrealtorInfo = {...realtorInfo};
        newrealtorInfo[fieldName] = fieldValue;
      
        setRealtorInfo(newrealtorInfo);
      };

      const handleRealtorSubmit = async (event ) => {
        event.preventDefault();
        await axios.post('/newrealtor', {
          Name: realtorInfo.realtorName,
          Phone_Number: realtorInfo.realtorPhone,
          Email: realtorInfo.realtorEmail,
        }).then(); setOpen(false);handleClose();
        setSnackbar({ children: 'Change saved', severity: 'success' }); 
        await new Promise(resolve => setTimeout(resolve, 300));
        loadStaffData();
      };



const columns = [
        { field: 'Staff_Name', headerName: 'Name', flex:1, editable: true },
        { field: 'Phone', headerName: 'Phone', flex:1, editable: true },
        { field: 'Email', headerName: 'Email',flex:1, editable: true },
        { field: 'Date_Hired', headerName: 'Date Hired', flex:1, editable: true, type: 'date', valueFormatter: params => 
        moment(params?.value).format("DD/MM/YYYY"), },
        { field: 'Date_Terminated', headerName: 'Date Terminated', flex:1, editable: true, type: 'date', valueFormatter: params => 
        moment(params?.value).format("DD/MM/YYYY"), },
        { field: 'Mangment_Notes', headerName: 'Mangment Notes', flex:1, editable: true },
        { field: 'Anual_Sick_Time', headerName: 'Anual Sick Time', flex:1, editable: true },
        { field: 'Anual_Holiday_Days', headerName: 'Anual Holiday Days', flex:1, editable: true },
        { field: 'Job_Title', headerName: 'Job Title', flex:1, editable: true, type: 'singleSelect', valueOptions: ['Site Supervisor', 'Site Assistant', 'Field Technician',
     'Office Manager', 'Bookkeeper', 'Administrative Assistant', 'Drafting Technician', 'Operations Coordinator', 'QC Lead', 'Production Lead', 'Construction Manager' ] },
        { field: 'Primary_Location', headerName: 'Primary Location', flex:1, editable: true, type: 'singleSelect', valueOptions: ['Edmonton', 'Calgary', 'Fort McMurray' ] },

    ]
    


    return(
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
          <Grid> 
          <Paper sx={{        
                    height: 1050,
        width: 1775,}}>
            <Box sx={{
        height: 1000,
        width: '100%',
        '& .notReady': {
          backgroundColor: '#FFFFFF',
          color: '#FFFFFF'
        },
            }} >

        <Typography id="modal-modal-title" variant="h6" component="h6" sx={{ mb:2 }} >
                    Akash Staff
                    </Typography>
            <DataGrid
                        rows={staff}
                        columns={columns}
                        rowHeight={35}
                        components={{Toolbar: CustomToolbar}} 
                        getRowId={(row) => row.Staff_No}
                        editMode="row"
                        processRowUpdate={processRowUpdate}
                        onProcessRowUpdateError={handleProcessRowUpdateError}
                        experimentalFeatures={{ newEditingApi: true }}
                        onCellClick={handleCellClick}
                        getCellClassName={(params) => {
                          if (params.value=== null    
                          ) {
                            return 'notReady';
                          }             
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
            <Paper sx={{        
                    height: 850,
        width: 750,}} >
            <Typography id="modal-modal-title" variant="h6" component="h6" sx={{ mt: 4, mb:2 }} >
                    Users
                    </Typography>
          <Users />     
            </Paper>
      </Container>


    );
};

export default RealtorTable;
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



const StaffTable = () => {
    const [ staff, setStaff ] = useState([]);


    useEffect(() => {
        loadStaffData();
      }, []);
      //  [reducerValue]);  
      const loadStaffData = async () => {
        return await axios
        .get('/staff')
        .then((response) => setStaff(response.data))  
      };



const columns = [
        { field: 'Staff_Name', headerName: 'Name', flex: 1, editable: false },
        { field: 'Phone', headerName: 'Phone', flex: 1, editable: false },
        { field: 'Email', headerName: 'Email', flex: 1, editable: false },
        { field: 'Date_Hired', headerName: 'Date Hired', flex: 1, editable: false, type: 'date', valueFormatter: params => 
        moment(params?.value).format("DD/MM/YYYY"), },
{/**        { field: 'Date_Terminated', headerName: 'Date Terminated', flex: 1, editable: false, type: 'date', valueFormatter: params => 
        moment(params?.value).format("DD/MM/YYYY"), },
        { field: 'Anual_Sick_Time', headerName: 'Anual Sick Time', flex: 1, editable: false },
        { field: 'Anual_Holiday_Days', headerName: 'Anual Holiday Days', flex: 1, editable: false },  */},
        { field: 'Job_Title', headerName: 'Job Title', flex: 1, editable: false, type: 'singleSelect', valueOptions: ['Site Supervisor', 'Site Assistant', 'Field Technician',
     'Office Manager', 'Bookkeeper', 'Administrative Assistant', 'Drafting Technician', 'Operations Coordinator', 'QC Lead', 'Production Lead', 'Construction Manager' ] },
        { field: 'Primary_Location', headerName: 'Primary Location', flex: 1, editable: false, type: 'singleSelect', valueOptions: ['Edmonton', 'Calgary', 'Fort McMurray' ] },

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
                        >
            </DataGrid>
            </Box>
            </Paper>
            </Grid>
      </Container>


    );
};

export default StaffTable;
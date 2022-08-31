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
import RealtorAdd from './RealtorAdd';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

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
    const [ realtors, setRealtors ] = useState([]);
    const [open, setOpen] = useState(false);
    const mutateRow = useFakeMutation();
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

    useEffect(() => {
        loadRealtorData();
      }, []);
      //  [reducerValue]);  
      const loadRealtorData = async () => {
        return await axios
        .get('/realtors')
        .then((response) => setRealtors(response.data))  
      };


const processRowUpdate = useCallback(
        async (newRow) => {axios 
          .put('/updaterealtor', {
            Realtor_No: newRow.Realtor_No,
            Name: newRow.Name,
            Phone_Number: newRow.Phone_Number,
            Email: newRow.Email,
            Notes: newRow.Notes,
            Opinion_Code: newRow.Opinion_Code,
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
        loadRealtorData();
      };

function startRating(params) {
  return <Rating name="hover-feedback" defaultValue={2} value={params.row.Opinion_Code} />
}

const columns = [
        { field: 'Name', headerName: 'Realtor Name', minWidth: 300, flex:0.5, editable: true },
        { field: 'Phone_Number', headerName: 'Realtor Phone', minWidth: 200, flex:0.5, editable: true },
        { field: 'Email', headerName: 'Realtor Email', minWidth: 300, flex:0.5, editable: true },
        { field: 'Notes', headerName: 'Notes', minWidth: 300, flex:1, editable: true },
        { field: 'Opinion_Code', headerName: 'Opinion Rating', minWidth: 200, flex:0.5, editable: true, type:'number', renderCell: startRating},
    ]
    



    return(
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
          <Grid> 
            <Paper> 
           <RealtorAdd handleRealtorSubmit={handleRealtorSubmit} realtorInfo={realtorInfo} 
           handleRealtorInfoChange={handleRealtorInfoChange}  open={open} 
           handleOpen={handleOpen} handleClose={handleClose} />  
            <Box sx={{
        height: 1000,
        width: '100%',
            }} >
            <DataGrid
                        rows={realtors}
                        columns={columns}
                        components={{Toolbar: CustomToolbar}} 
                        getRowId={(row) => row.Realtor_No}
                        editMode="row"
                        processRowUpdate={processRowUpdate}
                        onProcessRowUpdateError={handleProcessRowUpdateError}
                        experimentalFeatures={{ newEditingApi: true }}
                        onCellClick={handleCellClick}
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

export default RealtorTable;
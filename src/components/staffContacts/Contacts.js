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
import Typography from '@mui/material/Typography';
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



const RealtorTable = () => {
    const [ contacts, setContacts ] = useState([]);
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
        loadContactData();
      }, []);
      //  [reducerValue]);  
      const loadContactData = async () => {
        return await axios
        .get('/contacts')
        .then((response) => setContacts(response.data))  
      };


const processRowUpdate = useCallback(
        async (newRow) => {axios 
          .put('/updatecontacts', {
            Contacts_No: newRow.Contacts_No,
            Contact_Name: newRow.Contact_Name,
            Company_Legal_Name: newRow.Company_Legal_Name,
            Company_Operating_Name: newRow.Company_Operating_Name,
            Industry: newRow.Industry,
            Operating_Areas: newRow.Operating_Areas,
            Mailing_Address: newRow.Mailing_Address,
            Business_Phone: newRow.Business_Phone,
            Cell_Phone: newRow.Cell_Phone,
            Email: newRow.Email,
            Notes: newRow.Notes,
            Inactive: newRow.Inactive, 
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
        loadContactData();
      };



const columns = [
        { field: 'Contact_Name', headerName: 'Contact Name', minWidth: 150, flex: 1, editable: true },
        { field: 'Company_Legal_Name', headerName: 'Company Legal Name', minWidth: 200, flex: 1, editable: true, hide: true },
        { field: 'Company_Operating_Name', headerName: 'Company Operating Name', minWidth: 375, flex: 1, editable: true },
        { field: 'Industry', headerName: 'Industry', minWidth: 200, flex: 1, editable: true },
        { field: 'Operating_Areas', headerName: 'Operating Areas', minWidth: 200, flex: 1, editable: true, hide: true },
        { field: 'Mailing_Address', headerName: 'Mailing Address', minWidth: 150, flex: 1, editable: true, hide: true },
        { field: 'Business_Phone', headerName: 'Business Phone', minWidth: 150, flex: 1, editable: true },
        { field: 'Cell_Phone', headerName: 'Cell Phone', minWidth: 150, flex: 1, editable: true },
        { field: 'Email', headerName: 'Email', minWidth: 300, flex: 1, editable: true },
        { field: 'Notes', headerName: 'Notes', minWidth: 300, flex: 1, editable: true },
        { field: 'Inactive', headerName: 'Inactive', minWidth: 100, flex: 1, editable: true, type: 'singleSelect', valueOptions: ['', 'Yes',] },
    ]
    


    return(
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
          <Grid> 
{/**            <RealtorAdd handleRealtorSubmit={handleRealtorSubmit} realtorInfo={realtorInfo} 
           handleRealtorInfoChange={handleRealtorInfoChange}  open={open} 
           handleOpen={handleOpen} handleClose={handleClose} />  */}
           <Paper sx={{height:1060 }}> 
            <Box sx={{
        height: 1000,
        width: '100%',
            }} >
        <Typography id="modal-modal-title" variant="h6" component="h6" sx={{ mt: 3, mb:2 }} >
                    Contacts List
                    </Typography>
            <DataGrid
                        rows={contacts}
                        rowHeight={30}
                        columns={columns}
                        components={{Toolbar: CustomToolbar}} 
                        getRowId={(row) => row.Contacts_No}
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
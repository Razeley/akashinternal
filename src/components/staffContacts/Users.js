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
import UserAdd from './UserAdd';

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



const UserTable = () => {
    const [ contacts, setContacts ] = useState([]);
    const [open, setOpen] = useState(false);
    const mutateRow = useFakeMutation();
    const [snackbar, setSnackbar] = useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [ clickInfo, setClickInfo ]= useState('');
    const [ userInfo, setUserInfo ] = useState({
      userName: '',
      userPassword: '',
      userDept: '',
    });
    const handleOpen = () => setOpen(true); 
    const handleClose = () =>  {setOpen(false); setUserInfo({
      userName: '',
      userPassword: '',
      userDept: '',
})};

    useEffect(() => {
        loadContactData();
      }, []);
      //  [reducerValue]);  
      const loadContactData = async () => {
        return await axios
        .get('/users')
        .then((response) => setContacts(response.data))  
      };


const processRowUpdate = useCallback(
        async (newRow) => {axios 
          .put('/updateuser', {
            idusers: newRow.idusers,
            username: newRow.username,
            dept: newRow.dept,
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

      const handleUserInfoChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
      
        const newuserInfo = {...userInfo};
        newuserInfo[fieldName] = fieldValue;
      
        setUserInfo(newuserInfo);
      };

      const handleUserSubmit = async (event ) => {
        event.preventDefault();
        await axios.post('/register', {
          username: userInfo.userName,
          password: userInfo.userPassword,
          dept: userInfo.userDept,
        }).then(); setOpen(false);handleClose();
        setSnackbar({ children: 'Change saved', severity: 'success' }); 
        await new Promise(resolve => setTimeout(resolve, 300));
        loadContactData();
      };



const columns = [
        { field: 'username', headerName: 'Name', width: 150, editable: true },
        { field: 'dept', headerName: 'Deparment', width: 200, editable: true, type: 'singleSelect', valueOptions: ['admin', 'user', 'sales']  },
    ]
    


    return(
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
          <Grid> 
            <UserAdd handleUserSubmit={handleUserSubmit} userInfo={userInfo} 
           handleUserInfoChange={handleUserInfoChange}  open={open} 
           handleOpen={handleOpen} handleClose={handleClose} />  
            <Box sx={{
        height: 650,
        width: 685,
            }} >
        <Typography id="modal-modal-title" variant="h6" component="h6" sx={{ mb:2 }} >
                    Contacts List
                    </Typography>
            <DataGrid
                        rows={contacts}
                        rowHeight={30}
                        columns={columns}
                        components={{Toolbar: CustomToolbar}} 
                        getRowId={(row) => row.idusers}
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
            </Grid>
      </Container>


    );
};

export default UserTable;
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
import CustomerAdd from './CustomerAdd';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';
import Select, { SelectChangeEvent }  from '@mui/material/Select';
import Rating from '@mui/material/Rating';
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

function SelectEditInputCell(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event) => {
    await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
    apiRef.current.stopCellEditMode({ id, field }); console.log( id, field, event.target.value);
  };
  return (
    <Select
      value={value == null ? '' : value}
      onChange={handleChange}
      size="small"
      sx={{ height: 1 }}
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
      <option>Haunted By Ghosts</option>
    </Select>
  );
}
SelectEditInputCell.propTypes = {
  /**
   * The column field of the cell that triggered the event.
   */
  field: PropTypes.string.isRequired,
  /**
   * The grid row id.
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.any,
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




const CustomerTable = () => {
    const [ customers, setCustomers ] = useState([]);
    const [open, setOpen] = useState(false);
    const mutateRow = useFakeMutation();
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



    useEffect(() => {
        loadCustomerData();
      }, []);
      //  [reducerValue]);  
      const loadCustomerData = async () => {
        return await axios
        .get('/customers')
        .then((response) => setCustomers(response.data))  
      };

function startRating(params) {
        return <Rating name="hover-feedback" value={params.row.Opinion_Rating} />
      }
      const columns = [
        { field: 'Name', headerName: 'Customer Name', minWidth: 300, flex:0.5, editable: true },
        { field: 'Phone', headerName: 'Customer Phone', minWidth: 200, flex:0.5, editable: true },
        { field: 'Email', headerName: 'Customer Email', minWidth: 300, flex:0.5, editable: true },
        { field: 'Notes', headerName: 'Notes', minWidth: 300, flex:1, editable: true },
        { field: 'Opinion_Rating', headerName: 'Opinion Rating', minWidth: 200, flex:0.5, editable: true, type:'number', renderCell: startRating }
    ]
const processRowUpdate = useCallback(
        async (newRow) => {axios 
          .put('/updatecustomer', {
            Cust_No: newRow.Cust_No,
            Name: newRow.Name,
            Phone: newRow.Phone,
            Email: newRow.Email,
            Notes: newRow.Notes,
            Opinion_Rating: newRow.Opinion_Rating,
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
        loadCustomerData();
      };

    return(
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
          <Grid> 
            <Paper> 
           <CustomerAdd handleCustomerSubmit={handleCustomerSubmit} customerInfo={customerInfo} handleCustomerInfoChange={handleCustomerInfoChange}  open={open} handleOpen={handleOpen} handleClose={handleClose} />  
            <Box sx={{
        height: 1000,
        width: '100%',
            }} >
            <DataGrid
                        rows={customers}
                        columns={columns}
                        components={{Toolbar: CustomToolbar}} 
                        getRowId={(row) => row.Cust_No}
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

export default CustomerTable;
import React, { useEffect, useState, useReducer, useCallback } from 'react';
import { DataGrid, GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport } from '@mui/x-data-grid';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const useFakeMutation = () => {
    return useCallback(
      (data) =>
        new Promise((resolve, reject) =>
          setTimeout(() => {
            if (data.Cust_No?.trim() === '') {
              reject();
            } else {
              resolve(data);
            }
          }, 200),
        ),
      [],
    );
  };
  function computeMutation(newRow, oldRow) {
    if (newRow.Name !== oldRow.Name) {
      return `Name from '${oldRow.Name}' to '${newRow.Name}'`;
    }
    if (newRow.Phone !== oldRow.Phone) {
      return `Age from '${oldRow.Phone || ''}' to '${newRow.Phone || ''}'`;
    }
    if (newRow.Customer_Email !== oldRow.Customer_Email) {
        return `Age from '${oldRow.Email || ''}' to '${newRow.Email || ''}'`;
      }
    return null;
  }


function CustomToolbar(data) {
    return (
      <GridToolbarContainer {...data}>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }


const columns = [
    { field: 'Cust_No', headerName: 'Customer Number', flex: 1, minwidth: 150, editable: false },
    { field: 'Name', headerName: 'Customer Name', flex: 1, minwidth: 150, editable: true },
    { field: 'Phone', headerName: 'Customer Phone', flex: 1, minwidth: 150, editable: true },
    { field: 'Email', headerName: 'Customer Email', flex: 1, minwidth: 150, editable: true },
    { field: 'Notes', headerName: 'Notes', flex: 1, minwidth: 150, editable: true },
    { field: 'Opinion_Rating', headerName: 'Customer Rating', flex: 1, minwidth: 150, editable: true },
]


const CustomerTable = () => {
   const [ data, setData ] = useState([]);
   const [ reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
   const mutateRow = useFakeMutation();
   const noButtonRef = React.useRef(null);
   const [promiseArguments, setPromiseArguments] = React.useState(null);
 
   const [snackbar, setSnackbar] = React.useState(null);
 
   const handleCloseSnackbar = () => setSnackbar(null);


useEffect(() => {
    loadHouseData();
}, [reducerValue]);  
const loadHouseData = async () => {
    return await axios
    .get('/customers')
    .then((response) => setData(response.data))
};

const processRowUpdate = React.useCallback(
    (newRow, oldRow) =>
      new Promise((resolve, reject) => {
        const mutation = computeMutation(newRow, oldRow);
        if (mutation) {
          // Save the arguments to resolve or reject the promise later
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        } else {
          resolve(oldRow); // Nothing was changed
        }
      }),
    [],
  );

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    setPromiseArguments(null);
  };

  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      setSnackbar({ children: 'User successfully saved', severity: 'success' });
      resolve(response);
      setPromiseArguments(null);
    } catch (error) {
      setSnackbar({ children: "Name can't be empty", severity: 'error' });
      reject(oldRow);
      setPromiseArguments(null);
    }
  };

  const handleEntered = () => {
    // The `autoFocus` is not used because, if used, the same Enter that saves
    // the cell triggers "No". Instead, we manually focus the "No" button once
    // the dialog is fully open.
    // noButtonRef.current?.focus();
  };

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;
    const mutation = computeMutation(newRow, oldRow);
    return (
        <Dialog
          maxWidth="xs"
          TransitionProps={{ onEntered: handleEntered }}
          open={!!promiseArguments}
        >
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent dividers>
            {`Pressing 'Yes' will change ${mutation}.`}
          </DialogContent>
          <DialogActions>
            <Button ref={noButtonRef} onClick={handleNo}>
              No
            </Button>
            <Button onClick={handleYes}>Yes</Button>
          </DialogActions>
        </Dialog>
      );
    };

    return(
    <div>   
        {renderConfirmDialog()}
        <DataGrid
            rows={data}
            columns={columns}
            components={{Toolbar: CustomToolbar}}
            processRowUpdate={processRowUpdate} 
            getRowId={(row) => row.Cust_No}
            experimentalFeatures={{ newEditingApi: true }}
            />
            {!!snackbar && (
            <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
            <Alert {...snackbar} onClose={handleCloseSnackbar} />
            </Snackbar>
      )}
    </div>  
    );
};

export default CustomerTable;
import React, { useEffect, useState, useCallback, useReducer } from 'react';
import { DataGrid, 
    GridToolbarContainer,
    GridToolbarExport,
    useGridApiContext } from '@mui/x-data-grid';
import axios from 'axios';
import PropTypes from 'prop-types';
import Select, { SelectChangeEvent }  from '@mui/material/Select';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import moment  from 'moment';
import Typography from '@mui/material/Typography';



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
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }


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
        <option>Incomplete Work</option>
        <option>Site Access- Akash</option>
        <option>Site Access- Framers</option>
        <option>Booked In Error- Akash</option>
        <option>Booked In Error- Trade</option>
        <option>VOC Required</option>
        <option>Other</option>
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
  
  const renderSelectEditInputCell = (params) => {
    return <SelectEditInputCell {...params} />;
  };
  


const columns = [
{ field: 'Job_No', headerName: 'Job Number', minWidth: 100, flex:0.14 },
{ field: 'Inspection_Status', headerName: 'Inspection Status', type: 'singleSelect', valueOptions: ['Pass', 'Fail', 'Conditional', 'Booked', 'Not Ready', 
  'Not Required', 'Hold', 'VOC Required',
  'VOC Submitted', 'VOC Approved', 'N/A' ],
flex: 0.2,minWidth: 125, editable: true, },
{ field: 'Inspection_Date', headerName: 'Date', type: 'date', valueFormatter: params => 
moment(params?.value).format("DD/MM/YYYY"), 
flex: 0.15, minWidth: 105, editable: true },
    { field: 'Failure_Type', headerName: 'Failure Type', renderEditCell: renderSelectEditInputCell,
    flex: 0.25, editable: true, },
    { field: 'Inspection_Notes', headerName: 'Notes', 
    flex: 1, editable: true },
]


const FailureTable = ({ clickInfo, submitted }) => {
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const theme = useTheme();
  const [ failureData, setFailureData ] = useState([]);
  const [ didRender, setDidRender ] = useState(false);



const id = clickInfo.id;
const field = clickInfo.field;


useEffect(()=>{
  setDidRender(true);
},[]);

useEffect(() => {
  if(didRender){
  loadFailureData();}
}, [clickInfo, submitted]);
//  [reducerValue];  
const loadFailureData = async () => {
  return await axios.get('/inspections', {
    params : {
      House_No : id,
      field: field
}}).then((response) => setFailureData(response.data))};


const processRowUpdate = useCallback(
  async (newRow) => {axios 
          .put('/updateinspectionnotes', {
          Inspection_Notes_No : newRow.Inspection_Notes_No, 
          House_No: newRow.House_No,
          Inspection_No: newRow.Inspection_No,
          Failure_Type: newRow.Failure_Type,       
          Inspection_Date: newRow.Inspection_Date,
          Inspection_Notes: newRow.Inspection_Notes,
          }).then();
    const response = await mutateRow(newRow);
    setSnackbar({ children: 'Change saved', severity: 'success' });
    return response;
  },
  [mutateRow],
);

const handleProcessRowUpdateError = useCallback((error) => {
  setSnackbar({ children: error.message, severity: 'error' });
}, []);



return(
      <Box 
      >
        <div style={{ height: 250, width: '100%', fontSize:55 }}>  
        <DataGrid
            rows={failureData}
            columns={columns}
            components={{ Toolbar: CustomToolbar }}
            getRowId={(row) => row.Inspection_Notes_No}
            getRowHeight={() => 'auto'}
            hideFooter= {true} 
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            experimentalFeatures={{ newEditingApi: true }}
            getCellClassName={(params) => {
              if (params.field === 'Failure Reason'   
              ) {
                return '';
              } 
              return params.value=== null ? 'notReady'
              : ''            
            }}
            />
            </div>
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
    );
};

export default FailureTable;
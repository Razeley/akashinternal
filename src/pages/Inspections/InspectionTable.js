import React, { useEffect, useState, useCallback,  } from 'react';
import { DataGrid, GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
   } from '@mui/x-data-grid';
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import FailureTable from '../../components/Inspection/FailureTable';
import moment  from 'moment';
import InspectionPopup from '../../components/Inspection/InspectionPopup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



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
    { field: 'Underground', headerName: 'Underground', 
     width: 125, editable: false },
     { field: 'Underground_Date', headerName: 'Underground Date', type: 'date', valueFormatter: params => 
     moment(params?.value).format("DD/MM/YYYY"), 
     width: 125, editable: false, // hide: true   
    },
    { field: 'Foundation', headerName: 'Foundation',  
    width: 125, editable: false },
    { field: 'Foundation_Date', headerName: 'Foundation Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Temporary_Heat', headerName: 'Temporary Heat',  
    width: 125, editable: false },
    { field: 'Temporary_Heat_Date', headerName: 'Temporary Heat Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Plumbing_GW', headerName: 'Plumbing GW',  
    width: 125, editable: false },
    { field: 'Plumbing_GW_Date', headerName: 'Plumbing GW Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Framing', headerName: 'Framing',  
    width: 125, editable: false },
    { field: 'Framing_Date', headerName: 'Framing Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Plumbing_Stack', headerName: 'Plumbing Stack', 
    width: 125, editable: false },
    { field: 'Plumbing_Stack_Date', headerName: 'Plumbing Stack Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'HVAC_Stack', headerName: 'HVAC Stack', 
    width: 125, editable: false },
    { field: 'HVAC_Stack_Date', headerName: 'HVAC Stack Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Natural_Gas', headerName: 'Natural Gas', 
    width: 125, editable: false },
    { field: 'Natural_Gas_Date', headerName: 'Natural Gas Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Wiring_Rough', headerName: 'Wiring Rough',  
    width: 125, editable: false },
    { field: 'Wiring_Rough_Date', headerName: 'Wiring Rough Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Insulation', headerName: 'Insulation', 
    width: 125, editable: false },
    { field: 'Insulation_Date', headerName: 'Insulation Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Final_Electrical', headerName: 'Final Electrical', 
    width: 125,  editable: false },
    { field: 'Final_Electrical_Date', headerName: 'Final Electrical Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Final_HVAC', headerName: 'Final HVAC',  
    width: 125, editable: false },
    { field: 'Final_HVAC_Date', headerName: 'Final HVAC Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Occupancy', headerName: 'Occupancy',  
    width: 125, editable: false },
    { field: 'Occupancy_Date', headerName: 'Occupancy Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
    { field: 'Detached_Garage', headerName: 'Detached Garage',  
    width: 125,  editable: false },
    { field: 'Detached_Garage_Date', headerName: 'Detached Garage Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: false, // hide: true   
},
]


const InspectionTable = () => {
  const [ data, setData ] = useState([]);
  const [ clickInfo, setClickInfo ]= useState('');
  const theme = useTheme();
  const [ username, setUsername ] = useState('');
  const [ formData, setFormData ] = useState({
    failureType: '',
    date: '',
    status: '',
    notes: '',
    });
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ submitted, setSubmitted ] = useState(false);
  

const id = clickInfo.id;
const field = clickInfo.field;





useEffect(() => {
  loadInspectionData();
}, []);
const loadInspectionData = async () => {
  return await axios
  .get('/houseinspections')
  .then((response) => setData(response.data));  
};


const handleCellClick = (params) => {
  setClickInfo(params);
}; 

const handleFormChange = (event) => {
  event.preventDefault();
  
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = {...formData};
  newFormData[fieldName] = fieldValue;

  setFormData(newFormData);

}

const handleSubmit = async (event ) => {
  event.preventDefault();
  await axios.post('/newinspectionnote',{
      House_No: id,
      field: field,
      Failure_Type: formData.failureType, 
      Inspection_Date: formData.date, 
      Inspection_Notes: formData.notes,
      status: formData.status,
  }).then();
  axios.put('/newupdatehouseinspections',{
      House_No: id,
      field: field,
      status: formData.status, 
      Date: formData.date, 
  }).then();
  axios.put('/updatehouseIndexinspections',{
    House_No: id,
    field: field,
    status: formData.status, 
    Date: formData.date, 
}).then(); setOpen(false); setSubmitted(true); 
  setSnackbar({ children: 'Change saved', severity: 'success' }); 
  await new Promise(resolve => setTimeout(resolve, 300)); 
  loadInspectionData();
}

console.log(clickInfo);

    return(

          <Container maxWidth="false" sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={3}>
              {/* FailureTable */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 325,
                    zIndex: 5 ,
                    position: 'absolute',
                    width: 1000
                  }}
                >
                      <FailureTable clickInfo={clickInfo} submitted={submitted} />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{  display: 'flex', flexDirection: 'column', position:"relative",
        top: 310, height: 1740}}>
                
        <Box sx={{
        height: 1700,
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
      }}
      >
      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div style={{ flexGrow: 1 }}>
      {/**  <div style={{ height: 820, width: '100%' }}> */} 
      <InspectionPopup clickInfo={clickInfo} formData={formData} handleSubmit={handleSubmit} handleFormChange={handleFormChange}
                handleOpen={handleOpen} handleClose={handleClose} open={open} />
        <DataGrid
            rows={data}
            columns={columns}
            components={{Toolbar: CustomToolbar}} 
            getRowId={(row) => row.House_No}
            experimentalFeatures={{ newEditingApi: true }}
            getCellClassName={(params) => {
              if (params.field === 'Job_No' // || params.value == null 
              || params.value == '' 
              ) {
                return '';
              } 
              return params.value === 'Pass' || params.value == 'VOC Approved' || params.value == 'Not Required- Pass' ? 'pass' 
              : params.value === 'Conditional' ? 'conditional' 
              : params.value === 'Booked' || params.value == 'VOC Submitted'? 'booked' 
              : params.value === 'Not Ready' || params.value=== null ? 'notReady' 
              : params.value === 'N/A' ? 'N'
              : params.value === 'Hold' ? 'hold'
              : params.value === 'Fail' || params.value === 'VOC Required' || params.value=== 'Haunted By Ghosts' ? 'fail'
              : ''             
            }}
            onCellClick={handleCellClick}
            />
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
    </div>
    </div>
    </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
    );
};

export default InspectionTable;
import React, { useEffect, useState, useCallback } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { DataGrid, GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
    useGridApiContext
    } from '@mui/x-data-grid';
    import moment  from 'moment';
import WarrantyPopup from '../../components/Warranty/WarrantyPopup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';
import Select  from '@mui/material/Select';


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
          <GridToolbarContainer >
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarExport />
            <GridToolbarQuickFilter  />
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
        <option>Excavating</option>
        <option>Truss/Joist</option>
        <option>Roofing</option>
        <option>Framing</option>
        <option>Framing Lumber</option>
        <option>Stairs - Interior</option>
        <option>Stairs - Concrete</option>
        <option>Piles</option>
        <option>Plumbing/Nat gas</option>
        <option>Electrical</option>
        <option>Cleaners</option>
        <option>Siding</option>
        <option>Drywall</option>
        <option>Painting</option>
        <option>Garage Door</option>
        <option>Flooring</option>
        <option>Cabinets</option>
        <option>Countertops</option>
        <option>Finishing - Material</option>
        <option>Finishing - Labour</option>
        <option>Lighting Supplier</option>
        <option>Interior Hand Rails</option>
        <option>Shower Glass Mirrors</option>
        <option>Wire Shelves</option>
        <option>Exterior Hand Rails</option>
        <option>Windows</option>
        <option>Window Wells</option>
        <option>Parging</option>
        <option>Stone</option>
        <option>Fireplace</option>
        <option>Central Vac</option>
        <option>Appliances</option>
        <option>Landscaping</option>
        <option>Spare</option>
        <option>Garbage removal</option>
        <option>Furnace Cleaning</option>
        <option>Temp Heat</option>
        <option>Stairs - Interior</option>
        <option>Stairs - Garage</option>
        <option>Stairs - Verhanda</option>
        <option>Stairs - Deck</option>
        <option>Concrete - Driveway/sidewalk</option>
        <option>Concrete - BSMT slab</option>
        <option>Concrete - Garage slab</option>
        <option>Concrete- Foundation</option>
        <option>Other(See Notes)</option>
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
  
//      function SelectCompany  (props)  {
//        const { id, value, field } = props;
//        const apiRef = useGridApiContext();
      
//      const handleChange = async (event) => {
//          await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
//          apiRef.current.stopCellEditMode({ id, field }); console.log( id, field, event.target.value);
//        }; console.log(id);
//        return (
//          <Select
//            value={value == null ? '' : value}
//            onChange={handleChange}
//            size="small"
//            sx={{ height: 1 }}
//            native
//            autoFocus
//          >
//      {companies.length > 0 &&  
//         companies.map(companies => {
//        return  <option  key={companies.Contacts_No}>
//       {companies.Company_Operating_Name}         
//       </option>;})}   
//          </Select>
//        );
//      }
//      SelectCompany.propTypes = {
        /**
         * The column field of the cell that triggered the event.
         */
//        field: PropTypes.string.isRequired,
        /**
         * The grid row id.
         */
//        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        /**
         * The cell value, but if the column has valueGetter, use getValue.
         */
//        value: PropTypes.any,
//      };
      
//      const renderSelectCompany = (params) => {
//        return <SelectCompany {...params} />;
//      };
      
      
const columns = [
          { field: 'Job_No', headerName: 'Job Number', width: 100, editable: false },
          { field: 'Date_Recieved', headerName: 'Date Recieved', type: 'date', valueFormatter: params => 
          moment(params?.value).format("DD/MM/YYYY"), 
          width: 125, editable: true, // hide: true   
         },
         { field: 'Issue_Description', headerName: 'Description of Issue',  
         flex: 0.2, editable: true },
         { field: 'Work_Type', headerName: 'Type of Work', type: 'singleSelect',    renderEditCell: renderSelectEditInputCell,
         flex: 0.1, editable: true },
         { field: 'Company', headerName: 'Company', type: 'singleSelect', // renderEditCell: renderSelectCompany,  
          flex: 0.2, editable: true },
          { field: 'Warrantable_Status', headerName: 'Warrantable Status', type: 'singleSelect', valueOptions: ['Yes', 'No', 'Pre-Occ', 'Other'],
          width: 150, editable: true },
        { field: 'Warranty_Notes', headerName: 'Notes',  
        flex: 0.2, editable: false },
        { field: 'Status', headerName: 'Status', type: 'singleSelect', valueOptions: ['Not Assigned', 'Appointement Booked', 'Complete', 'Assumed Complete', 'Seasonal' ],
        width: 125, editable: true },
        { field: 'Back_Charge', headerName: 'Back Charge', width: 100, editable: true, type:'number', valueFormatter: (params) => {
            if (params.value == null) {
              return '';
            }   const valueFormatted = Number(params.value).toLocaleString();
              return `$ ${valueFormatted}`;}},
        ]
      
      

    
const WarrantyTable = () => {
    const [ data, setData ] = useState([]);
    const mutateRow = useFakeMutation();
    const [ clickInfo, setClickInfo ]= useState('');
    const [ username, setUsername ] = useState('');
    const [snackbar, setSnackbar] = useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true); 
    const handleClose = () => {setOpen(false); setFormData({  
        house: '',
        date: '',
        issueDecsription: '',
        industry: '',
        company: '',
        warrantableStatus: '',
        notes: '',
        status: '',
        backCharge: '', 
      })};
    const [ companies, setCompanies ] = useState([]);
    const [ formData, setFormData ] = useState({
        house: '',
        date: '',
        issueDecsription: '',
        industry: '',
        company: '',
        warrantableStatus: '',
        notes: '',
        status: '',
        backCharge: '',
        });

const industry = (clickInfo.row === undefined) ? '' : clickInfo.row.Work_Type;



  useEffect(() => {
    loadWarrantyData();
  }, []);
  const loadWarrantyData = async () => {
    return await axios
    .get('/housewarranty')
    .then((response) => setData(response.data));  
  };

useEffect(() => {
    loadCompanyData();
  }, [clickInfo]);
  const loadCompanyData = async () => {
    return await axios
    .get('/warrantycompany', {
      params : {
        Industry : industry,
  }})
    .then((response) => setCompanies(response.data));  
  };

const handleFormChange = (event) => {
  //  event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormData = {...formData};
    newFormData[fieldName] = fieldValue;
  
    setFormData(newFormData);
  }

  const handleSubmit = async (event ) => {
    event.preventDefault();
    await axios.post('/newwarranty',{
      House_No: formData.house,
        Date_Recieved: formData.date,
        Issue_Description: formData.issueDecsription,
        Work_Type: formData.industry,
        Company: formData.company,
        Warrantable_Status: formData.warrantableStatus,
        Warranty_Notes: formData.notes,
        Status: formData.status,
        Back_Charge: formData.backCharge,
    }).then(); setOpen(false); setFormData('');
    setSnackbar({ children: 'Change saved', severity: 'success' }); 
    await new Promise(resolve => setTimeout(resolve, 300));
    loadWarrantyData();
  };

  const processRowUpdate = useCallback(
    async (newRow) => {axios 
            .put('/updatewarranty', {
 
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
          }}
        >
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{  display: 'flex', flexDirection: 'column',}}>
        <Box sx={{
        height: 820,
        width: '100%',
        }}
        >          
        <WarrantyPopup formData={formData} handleSubmit={handleSubmit} handleFormChange={handleFormChange}
        handleOpen={handleOpen} handleClose={handleClose} open={open} />     

            <DataGrid
            rows={data}
            columns={columns}
            components={{Toolbar: CustomToolbar}} 
            getRowId={(row) => row.Warranty_No}
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            experimentalFeatures={{ newEditingApi: true }}
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
        </Box>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);
}

export default WarrantyTable;
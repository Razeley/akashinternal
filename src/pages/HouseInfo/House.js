import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import HousePopup from '../../components/house/HousePopup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import HouseOverView from '../../components/house/HouseOverView';
import HouseServices from '../../components/house/HouseServices';
import Button from '@mui/material/Button';
import CustomerOverview from '../../components/customer/CustomerOverview';
import ServiceBookings from '../../components/house/ServiceBooking';
import HouseColors from '../../components/house/HouseColors';





const House = () => {
    const [ house, setHouse ] = useState('');
    const [ productType, setProductType ] = useState([]);
    const [ sqft, setSqft ] = useState([]);
    const [ staff, setStaff ] = useState([]);
    const [ username, setUsername ] = useState('');
    const [ community, setCommunity ] = useState([]);
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(null);
    const [ jobInfo, setJobInfo ] = useState({
      House_No: '',
      Address: '',
      Lot: '',
      Block: '',
      Plan: '',
      Community_No: '',
      Build_Pro_Job_No: '',
      product_type_No: '',
      sqft_No: '',
      Staff_No: '',
      Link_Documents: '',

    });
    const handleCloseSnackbar = () => setSnackbar(null);
    const handleOpen = () => setOpen(true); 
    const handleClose = () =>  {setOpen(false); setFormData({
        jobNumber: '',
        address: '',
        lot: '',
        block: '',
        plan: '',
        product_type_No: '',
        Community_No: '',
        sqft_No: '',
        Basement: '',
})};
    const [ houseFormData, setHouseFormData ] = useState({
        House_No: '',
    })
    const [ formData, setFormData ] = useState({
        jobNumber: '',
        address: '',
        lot: '',
        block: '',
        plan: '',
        product_type_No: '',
        Community_No: '',
        sqft_No: '',
        Basement: '',
        });
   

   
 useEffect(()=> {
        loadHouseData();
      }, []);
        const loadHouseData = async () => {
          return await axios
          .get('/houses')
          .then((response) => setHouse(response.data));
        };

const handleHouseChange = async (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
            
    const newhouseFormData = {...houseFormData};
    newhouseFormData[fieldName] = fieldValue;
  
    setHouseFormData(newhouseFormData);
 
}

const handleHouseSubmit = async (event) => {
  event.preventDefault();setJobInfo({
    House_No: '', 
    Address: '',
    Lot: '',
    Block: '',
    Plan: '',
    Community_No: '',
    Build_Pro_Job_No: '',
    product_type_No: '',
    sqft_No: '',
    Staff_No: '',
    Link_Documents:'',
  });
  return await axios.get('/jobInfo', {
    params : {
      House_No : houseFormData.House_No,
}}).then((response) => setJobInfo({
  House_No: response.data[0].House_No, 
  Address: response.data[0].Address,
  Lot: response.data[0].Lot,
  Block: response.data[0].Block,
  Plan: response.data[0].Plan,
  Community_No: response.data[0].Community_No,
  Build_Pro_Job_No: response.data[0].BP_Job_No,
  product_type_No: response.data[0].product_type_No,
  sqft_No: response.data[0].sqft_No,
  Staff_No: response.data[0].Staff_No,
  Link_Documents: response.data[0].Link_Documents,
}));
}


const handleOverViewChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newJobInfo = {...jobInfo};
  newJobInfo[fieldName] = fieldValue;

  setJobInfo(newJobInfo);

}

const handleOverViewSubmint = async (event) => {
    event.preventDefault();
    await axios.put('/updatehouseoverview', {
      House_No: jobInfo.House_No,
      Address: jobInfo.Address ,
      Lot: jobInfo.Lot,
      Block: jobInfo.Block,
      Plan: jobInfo.Plan,
      Community_No: jobInfo.Community_No,
      Build_Pro_Job_No: jobInfo.Build_Pro_Job_No,
      product_type_No: jobInfo.product_type_No,
      sqft_No: jobInfo.sqft_No,
      Staff_No: jobInfo.Staff_No,
      Link_Documents: jobInfo.Link_Documents,
    }).then();
};

const handleFormChange = (event) => {
            //  event.preventDefault();
              
              const fieldName = event.target.getAttribute("name");
              const fieldValue = event.target.value;
            
              const newFormData = {...formData};
              newFormData[fieldName] = fieldValue;
            
              setFormData(newFormData);
            }

const Sales_Status_Fill = 'ACTIVE INVENTORY';
const BP_Job_No_Fill = ' ';
const Sup_No_Fill = ' ';
const Customer_No_Fill = ' ';
const Link_Document_Fill = ' ';

        const handleSubmit = async (event ) => {
            event.preventDefault();
            await axios.post('/newhouse', {
                    Job_No: formData.jobNumber,
                    Address: formData.address,
                    Lot: formData.lot,
                    Block: formData.block,
                    Plan: formData.plan,
                    Community_No: formData.Community_No,
                    Product_Type_No: formData.product_type_No,
                    sqft_No: formData.sqft_No,
                    Basement: formData.Basement,
                    Sales_Status: Sales_Status_Fill,
                    BP_Job_No: BP_Job_No_Fill,
                    Sup_No: Sup_No_Fill,
                    Customer_No: Customer_No_Fill,
                    Link_Documents: Link_Document_Fill,
            }).then(); setOpen(false);handleClose();
            setSnackbar({ children: 'Change saved', severity: 'success' }); 
            await new Promise(resolve => setTimeout(resolve, 300));
            loadHouseData();
          };
useEffect(()=> {
            loadSqftData();
            loadProductData();
            loadCommunityData();
            loadStaffData();
          }, []);
            const loadSqftData = async () => {
              return await 
                axios.get('/newhousesetupsqft').then((response) => setSqft(response.data));   
            };
            const loadProductData = async () => {
                return await axios.get('/newhousesetupproduct').then((response) => setProductType(response.data));
            };
            const loadCommunityData = async () => {
                return await axios.get('/newhousesetupcommunity').then((response) => setCommunity(response.data));
            };
            const loadStaffData = async () => {
              return await axios.get('/housesupe').then((response) => setStaff(response.data));
          };

return(
    <Container maxWidth="false" sx={{ mt: 2, mb: 2, }}>
            <Grid container spacing={3} rowSpacing={5}>
            <Grid item xs={12} md={3} lg={2}  >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
          }}
        > <form onSubmit={handleHouseSubmit} >
        <Typography id="modal-modal-title" variant="h6" component="h6">
                    Select a Job Number
                    </Typography> 
        <Select
        name='House_No'
        required
        value={houseFormData.house}
        onChange={handleHouseChange}
        size="small"
        sx={{ height: 0.2, mt: 2, mb: 3 }}
        native
//        autoFocus
     > <option> </option>
     {house.length > 0 && house.map(house => {
        return <option  key={house.House_No} 
       value={house.House_No}>  
       {house.Job_No}         
        </option>; 
     })}      
      </Select>  
      <Button variant="contained"               
          type="submit" >Find House Data</Button>
          </form>
             <HousePopup productType={productType} sqft={sqft} community={community}
             handleOpen={handleOpen} handleClose={handleClose} open={open} handleSubmit={handleSubmit} handleFormChange={handleFormChange} formData={formData} />
        </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={10}>
        <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: "auto",
                    overflow:"hidden",
                  }}
                >
        <Typography id="modal-modal-title" variant="h6" component="h6">
            Overview 
        </Typography>
        <HouseOverView  
        handleOverViewSubmint={handleOverViewSubmint}
        productType={productType} sqft={sqft} community={community} staff={staff}
        jobInfo={jobInfo} handleOverViewChange={handleOverViewChange} 
        />
                </Paper>
        </Grid>  
        <Grid container spacing={1}>

        <Grid item xs={12} md={4} lg={8}  >

        <Paper
                  sx={{
                    p: 2, display: 'flex', flexDirection: 'column', height: 'auto', mt:2, width: '100%' 
                  }}
                >
                    <HouseServices jobInfo={jobInfo} />    
        </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4} >
        <Paper sx={{   
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
            mt:2,
          }}>
        <Typography id="modal-modal-title" variant="h6" component="h6">
            Buyer Contact 
        </Typography>
            <CustomerOverview jobInfo={jobInfo} />
        <Typography id="modal-modal-title" variant="h6" component="h6" sx={{mt: 3}} >
            Services Bookings 
        </Typography>
            <ServiceBookings jobInfo={jobInfo}/>
        <Typography id="modal-modal-title" variant="h6" component="h6" sx={{mt: 3}} >
            House Colors 
        </Typography>
            <HouseColors />       
        </Paper> 
        </Grid>
        </Grid> 
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
            </Grid>

    </Container>
)
}

export default House;
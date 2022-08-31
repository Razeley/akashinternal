import React, { useState, useEffect, }from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import moment, { Moment }  from 'moment';
import CustomerAdd from './CustomerAdd';
import RealtorAdd from '../realtor/RealtorAdd';


const CustomerOverview = ({jobInfo}) => {
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleCloseSnackbar = () => setSnackbar(null);
    const handleClose = () => {setOpen(false); setCustomerInfo({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
  });setRealtorInfo({
    realtorName: '',
    realtorPhone: '',
    realtorEmail: '',
});};
    const [ customerInfo, setCustomerInfo ] = useState({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
      });
      const [ realtorInfo, setRealtorInfo ] = useState({
        realtorName: '',
        realtorPhone: '',
        realtorEmail: '',
      });
    const [ customerData, setCustomerData ] = useState({
        customerNo: '',
        customerPhone: '',
        customerEmail: '',
      });
    const [ realtorData, setRealtorData ] = useState({
        realtorNo: '',
        realtorPhone: '',
        realtorEmail: '',
      });
    const [ secondCustomer, setSecondCustomer ] = useState({
        secondCustomerNo: '',
        secondCustomerPhone: '',
        secondCustomerEmail: '',
      });
    const [ homeOwner, setHomeOwner ] = useState([]);
    const [ realtor, setRealtors ] = useState([]);
    const [ possessionDate, setPossessionDate ] = useState({
        possessionDate: '',
      });

    const [ steakout, setSteakout ] = useState({
        steakout: '',
      });



const houseNo = jobInfo.House_No; 

useEffect(()=> {
        setCustomerData({
            customerNo: '',
            customerPhone: '',
            customerEmail: '',
          });
          setSecondCustomer({
            secondCustomerNo: '',
            secondCustomerPhone: '',
            secondCustomerEmail: '',
          });
          setRealtorData({
            realtorNo: '',
            realtorPhone: '',
            realtorEmail: '',
          });
          setSteakout({
            steakout: '',
          });
          setPossessionDate({
            possessionDate: '',
          });
        loadCustomerRealtorData();
        loadSecondCustomerData();
        loadHouseRealtorData();
        loadHomeOwnerData();
        loadRealtorData();
        loadHouseDates();
      }, [houseNo]);
        const loadCustomerRealtorData = async () => {
            return await axios
            .get('/customerRealtor', {
              params : {
                House_No : houseNo
              }
            })
            .then((response) => setCustomerData({
                customerNo: response.data[0].Cust_No,
                customerPhone: response.data[0].Phone,
                customerEmail: response.data[0].Email,
              }));
        };
        const loadSecondCustomerData = async () => {
            return await axios
            .get('/customertwo', {
              params : {
                House_No : houseNo
              }
            })
            .then((response) => setSecondCustomer({
                secondCustomerNo: response.data[0].Cust_No,
                secondCustomerPhone: response.data[0].Phone,
                secondCustomerEmail: response.data[0].Email,
              }));
        };
        const loadHouseRealtorData = async () => {
            return await axios
            .get('/houseRealtor', {
              params : {
                House_No : houseNo
              }
            })
            .then((response) => setRealtorData({
                realtorNo: response.data[0].Realtor_No,
                realtorPhone: response.data[0].Phone_Number,
                realtorEmail: response.data[0].Email,
              }));
        };
        const loadHouseDates = async () => {
            return await axios
            .get('/houseDates', {
              params : {
                House_No : houseNo
              }
            })
            .then((response) => {setPossessionDate(
                {
                possessionDate: response.data[0].possessionDate,
              });
                setSteakout({
                steakout:response.data[0].steakoutDate
              })
            });
        };
        const loadHomeOwnerData = async () =>{
            return await axios
            .get('/customers2')
            .then((response) => setHomeOwner(response.data))
        };
        const loadRealtorData = async () => {
            return await axios
            .get('/realtors2')
            .then((response) => setRealtors(response.data))  
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
            loadCustomerRealtorData();
            loadSecondCustomerData();
          };
const handleCustomerChange = (event) => {
      event.preventDefault();
      
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
    
      const newcustomerData = {...customerData};
      newcustomerData[fieldName] = fieldValue;
    
      const newsecondCustomer = {...secondCustomer};
      newsecondCustomer[fieldName] = fieldValue;

      const newrealtorData = {...realtorData};
      newrealtorData[fieldName] = fieldValue;

      const newpossessionDate = {...possessionDate};
      newpossessionDate[fieldName] = fieldValue;

      const newsteakout = {...steakout};
      newsteakout[fieldName] = fieldValue;
    
      setSecondCustomer(newsecondCustomer);
      setCustomerData(newcustomerData);
      setRealtorData(newrealtorData);
      setSteakout(newsteakout);
      setPossessionDate(newpossessionDate);
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


      const handleSubmit = async (event ) => {
        event.preventDefault();
        await axios.put('/customersAndRealtor', {
            House_No: houseNo,
            Customer_No: customerData.customerNo,
            CustomerTwo_No: secondCustomer.secondCustomerNo,
            Realtor_No: realtorData.realtorNo,
            possessionDate: possessionDate.possessionDate,
            steakoutDate: steakout.steakout,
        }).then(); 
        setOpen(false);handleClose();
        setSnackbar({ children: 'Change saved', severity: 'success' }); 
        await new Promise(resolve => setTimeout(resolve, 300));
        setSecondCustomer({
            secondCustomerNo: '',
            secondCustomerPhone: '',
            secondCustomerEmail: '',
          });
          setRealtorData({
            realtorNo: '',
            realtorPhone: '',
            realtorEmail: '',
          });
        loadCustomerRealtorData();
        loadSecondCustomerData();
        loadHouseRealtorData();
      };

    return(
        <Box           
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
//        width: '30%'
      }} >
        <form onSubmit={handleSubmit} >
        <Grid container  sx={{ }} >
            <Grid item xs={12} lg={12} sx={{width: '100%',  }} >

        <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue=""
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                defaultValue="Primary Contact"
                sx={{width:'40%'}}
                InputProps={{
                readOnly: true,
                 }}
    /> 
            <TextField
                id="outlined-read-only-input"
                defaultValue="Secondary Contact"
                sx={{width:'40%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                </Stack>
            <Stack direction='row'>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Name"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='customerNo'
            id='customerNo'
            sx={{width:'40%'}}
            size="small"
            native
            value={customerData.customerNo || ''}
            onChange={handleCustomerChange}
          > <option> </option>
          {homeOwner.length > 0 && homeOwner.map(homeOwner => {
             return <option  key={homeOwner.Cust_No} 
            value={homeOwner.Cust_No}>  
            {homeOwner.Name}         
             </option>; 
          })}  
          </Select>
          <Select
            name='secondCustomerNo'
            id='secondCustomerNo'
            sx={{width:'40%'}}
            size="small"
            native
            value={secondCustomer.secondCustomerNo || ''}
            onChange={handleCustomerChange}
          ><option> </option>
          {homeOwner.length > 0 && homeOwner.map(homeOwner => {
             return <option  key={homeOwner.Cust_No} 
            value={homeOwner.Cust_No}>  
            {homeOwner.Name}         
             </option>; 
          })} 
          </Select>
          </Stack>
          <Stack direction='row'>
        <TextField
                id="outlined-read-only-input"
                defaultValue="Cell"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                name="customerPhone"
                value={customerData.customerPhone || ''}
//                onChange={handlePrimaryChange}
                sx={{width:'40%'}}
                InputProps={{
                    readOnly: true,
                     }}
    /> 
            <TextField
                id="outlined-read-only-input"
                name="secondCustomerPhone"
                value={secondCustomer.secondCustomerPhone || ''}
//                onChange={handlePrimaryChange}
                sx={{width:'40%'}}
                InputProps={{
                    readOnly: true,
                     }}
    />
                </Stack> 
                <Stack direction='row'>
        <TextField
                id="outlined-read-only-input"
                defaultValue="Email"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                name="customerEmail"
                value={customerData.customerEmail || ''}
//                onChange={handlePrimaryChange}
                sx={{width:'40%'}}
                InputProps={{
                    readOnly: true,
                     }}
    /> 
            <TextField
                id="outlined-read-only-input"
                name="secondCustomerEmail"
                value={secondCustomer.secondCustomerEmail || ''}
                sx={{width:'40%'}}
                InputProps={{
                    readOnly: true,
                     }}
    />
                </Stack>
                <CustomerAdd  handleCustomerSubmit={handleCustomerSubmit} customerInfo={customerInfo} handleCustomerInfoChange={handleCustomerInfoChange}  open={open} handleOpen={handleOpen} handleClose={handleClose} />  
 
                <Stack direction='row'>
        <TextField
                id="standard-basic"
                defaultValue=""
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                defaultValue="Realtor"
                sx={{width:'40%'}}
                InputProps={{
                readOnly: true,
                 }}
    /> 
            <TextField
                id="outlined-read-only-input"
                defaultValue="Possession Date"
                sx={{width:'40%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                </Stack>
                <Stack direction='row' >
                <TextField
                id="outlined-read-only-input"
                defaultValue="Name"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='realtorNo'
            id='realtorNo'
            sx={{width:'40%'}}
            size="small"
            native
            value={realtorData.realtorNo || ''}
            onChange={handleCustomerChange}
          > <option> </option>
          {realtor.length > 0 && realtor.map(realtor => {
             return <option  key={realtor.Realtor_No} 
            value={realtor.Realtor_No}>  
            {realtor.Name}         
             </option>; 
          })}  
          </Select>
          <TextField
                id="outlined-read-only-input"
                type='date'
                name="possessionDate"
                value={possessionDate.possessionDate || ''}
                onChange={handleCustomerChange}
                sx={{width:'40%'}}

    />    
{/**            <DesktopDatePicker
          label=""
          name="possessionDate"
          sx={{width:'40%'}}
          value={possessionDate.possessionDate}
          minDate={moment('2020-01-01')}
//          onChange={handleCustomerChange}
          onChange={(newValue) => {
            setPossessionDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />     */}
          </Stack>
          <Stack direction='row'>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Cell"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                name="realtorPhone"
                value={realtorData.realtorPhone || ''}
                sx={{width:'40%'}}
                InputProps={{
                    readOnly: true,
                     }}
    />
          <TextField
                id="outlined-read-only-input"
                defaultValue="Steakout"
                sx={{width:'40%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
          </Stack>
          <Stack direction='row' >
                <TextField
                id="outlined-read-only-input"
                defaultValue="Email"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <TextField
                id="outlined-read-only-input"
                name="secondCustomerEmail"
                value={realtorData.realtorEmail || ''}
                sx={{width:'40%'}}
                InputProps={{
                    readOnly: true,
                     }}
    />
          <TextField
                id="outlined-read-only-input"
                name="steakout"
                type='date'
                value={steakout.steakout || ''}
                onChange={handleCustomerChange}
                sx={{width:'40%'}}

    />
          </Stack>
          <Stack direction='row' >
            <Button type="submit"
            sx={{
                width: '20%',
                 height: 55,
            }} variant="contained">Update</Button>
          <RealtorAdd handleRealtorSubmit={handleRealtorSubmit} realtorInfo={realtorInfo} 
           handleRealtorInfoChange={handleRealtorInfoChange}  open={open} 
           handleOpen={handleOpen} handleClose={handleClose} />
           </Stack>
            </Grid>
            </Grid>
            </form>
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
    )
}

export default CustomerOverview;
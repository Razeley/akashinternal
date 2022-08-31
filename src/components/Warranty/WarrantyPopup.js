import React, { useEffect, useState, useCallback,  } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const WarrantyPopup = ({ formData, handleFormChange, handleSubmit, handleClose, handleOpen, open }) => {
    const [ companies, setCompanies ]= useState([]);
    const [ industry, setIndustry ] = useState('');
    const [ house, setHouse ] = useState([]);

 





useEffect(() => {
    loadCompanyData();
  }, [industry]);
  const loadCompanyData = async () => {
    return await axios
    .get('/warrantycompany', {
      params : {
        Industry : industry,
  }})
    .then((response) => setCompanies(response.data));  
  };


  useEffect(()=> {
    loadHouseData();
  }, []);
    const loadHouseData = async () => {
      return await axios
      .get('/warrantyhouse')
      .then((response) => setHouse(response.data));
    };


 
console.log(formData.house);


  return (
    <div>
      <Button onClick={handleOpen}
      variant="contained" color="success">Add a Warranty</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Currently. 
            </Typography>
            <form  onSubmit={handleSubmit} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Select the Job Number
          </Typography>
        <Select
        name='house'
        required
        value={formData.house}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
     >  {house.length > 0 && house.map(house => {
        return <option  key={house.House_No} 
       value={house.House_No}>  
       {house.Job_No}         
        </option>; 
     })}      

      </Select>  
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Select the date
          </Typography>
      <TextField
               required
              sx={{ height: 0.5, mt: 1, mb: 1, mr: 1 }}
              size = 'small'
              name="date"
              type="date"
              id="date"
              value={formData.date}
              onChange={handleFormChange}
            />
          <TextField
          name="issueDecsription"
          label="Description of Issue"
          multiline
          rows={6}
//          defaultValue="What are they whining about now?"
          value={formData.issueDecsription}
          onChange={handleFormChange}
//          variant="filled"
        />
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Type of Work
          </Typography>
            <Select
            name='industry'
            required
        value={formData.industry}
//        onChange={handleFormChange}
        
        onChange={(e)=> {handleFormChange(e);
            setIndustry(e.target.value);}}
          
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1, ml: 1}}
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
      <Typography id="modal-modal-title" variant="h6" component="h2">
            Company
          </Typography>
        <Select
        name='company'
        fullWidth
        value={formData.company}
//        value={formData.company}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
      >  {companies.length > 0 && companies.map(companies => {
        return  <option  key={companies.Contacts_No}>
        {companies.Company_Operating_Name}         
        </option>; 
      })}        
      </Select>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Warrantable Status
          </Typography>
        <Select
        name='warrantableStatus'
        value={formData.warrantableStatus}
        onChange={handleFormChange}
        size="small"
        sx={{ height: 0.25, mt: 1, mb: 1 }}
        native
        autoFocus
      >          
        <option></option>
        <option>Yes</option>
        <option>No</option>
        <option>Pre-Occ</option>
        <option>Other</option>
      </Select>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
            Include any notes
          </Typography>
            <TextField
              margin="normal"
              sx={{ height: 1,mt: 1, mb: 1 }}
              fullWidth
              name="notes"
              label="Notes"
              type="notes"
              id="notes"
              value={formData.notes}
              onChange={handleFormChange}
            />
                        <Typography id="modal-modal-title" variant="h6" component="h2">
            Status
          </Typography>
      <Select
      name="status"
      id= 'status'
//      value={formData.status}
      value={formData.status}
      onChange={handleFormChange} 
      size="small"
      sx={{ height: 0.25, mt: 1, mb: 1 }}
      native
      autoFocus
  >
    <option ></option>
    <option >Not Assigned</option>
    <option >Appointement Booked</option>
    <option >Complete</option>
    <option >Assumed Complete</option>
    <option >Seasonal</option>
      </Select>
          <InputLabel htmlFor="backCharge">Back Charge</InputLabel>
          <OutlinedInput
          name="backCharge"
            id="backCharge"
            value={formData.backCharge}
            onChange={handleFormChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        <Button
              type="submit"
              size = 'small'
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Add New 
            </Button> 
      </form>
          </Box>
        </Fade>
      </Modal>

    </div>
  );
}

export default WarrantyPopup;
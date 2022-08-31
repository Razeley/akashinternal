import React, { useState }from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';


const HouseOverView = ({jobInfo, handleOverViewSubmint, handleOverViewChange, community, sqft, productType, staff }) => {


    return(

            <Box           
            sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '30%',
          }} >
            <form onSubmit={handleOverViewSubmint} >
            <Grid container  sx={{ }} >
                <Grid item xs={12} lg={12} sx={{width: '100%',  }} >
            <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Address"
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                <TextField id="outlined-basic"  
                name="Address"
                variant="outlined"  value={jobInfo.Address} 
                onChange={(e) => handleOverViewChange(e) }
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Lot/Block/Plan"
                    InputProps={{
                    readOnly: true,
                     }}
        />
                <TextField id="outlined-basic" label="" name='Lot' variant="outlined" 
                value={jobInfo.Lot}
                onChange={(e) => handleOverViewChange(e) } 
                sx={{width:90}} />
                <TextField id="outlined-basic" label="" name='Block' variant="outlined" 
                value={jobInfo.Block} 
                onChange={(e) => handleOverViewChange(e) }
                sx={{width:90}} />
                <TextField id="outlined-basic" label="" name='Plan' variant="outlined" 
                value={jobInfo.Plan} 
                onChange={(e) => handleOverViewChange(e) }
                sx={{width:90}} />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Community"
                    InputProps={{
                    readOnly: true,
                     }}
        />
                <Select
                name='Community_No'
                id='Community'
                value={jobInfo.Community_No}
                onChange={(e) => handleOverViewChange(e) }
                size="small"
                native
                autoFocus
              ><option>Select a Community</option> 
               {community.length > 0 && community.map(community => {
                return <option  key={community.Community_No} 
               value={community.Community_No}>  
               {community.communityName}         
                </option>; 
             })}         
              </Select>
                </Stack>
                </Grid>
                <Grid item xs={12} sx={{ }} >
                <Stack direction= 'row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Supervisor"
                    InputProps={{
                    readOnly: true,
                     }}
        />
            <Select
        id= 'staff'
        name='Staff_No'
        value={jobInfo.Staff_No}
        onChange={(e) => handleOverViewChange(e) }
        size="small"
        sx={{ }}
        native
        autoFocus
      > <option></option>   
      {staff.length > 0 && staff.map(staff => {
        return <option  key={staff.Staff_No} 
       value={staff.Staff_No}>  
        {staff.Staff_Name}         
        </option>; 
     })}  
      </Select>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Build Pro Job Number"
                    InputProps={{
                    readOnly: true,
                     }}
        />
                <TextField id="outlined-basic" label=""  variant="outlined" 
                name="Build_Pro_Job_No" 
                value={jobInfo.Build_Pro_Job_No}
                onChange={(e) => handleOverViewChange(e) }
                />
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Documents Link"
                    InputProps={{
                    readOnly: true,
                     }}
        />
                <TextField id="outlined-basic" label="" variant="outlined" 
                name='Link_Documents'  
                value={jobInfo.Link_Documents}
                onChange={(e) => handleOverViewChange(e) }
                />
                </Stack>
                </Grid>
                <Grid item sx={{ }} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Product Type"
                    InputProps={{
                    readOnly: true,
                     }}
        />
        <Select
        id='product_type_No'
        name='product_type_No'
        value={jobInfo.product_type_No}
        onChange={(e) => handleOverViewChange(e) }
        size="small"
        sx={{  }}
        native
        autoFocus
      > <option>Select a Product Type</option>   
      {productType.length > 0 && productType.map(productType => {
        return <option  key={productType.product_type_No} 
       value={productType.product_type_No}>  
       {productType.Product_Type}         
        </option>; 
     })}  

      </Select>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Sqft Ext/Int"
                    InputProps={{
                    readOnly: true,
                     }}
        />
            <Select
        id= 'sqft_No'
        name='sqft_No'
        value={jobInfo.sqft_No}
        onChange={(e) => handleOverViewChange(e) }
        size="small"
        sx={{ }}
        native
        autoFocus
      > <option>Select Square Footage</option>   
      {sqft.length > 0 && sqft.map(sqft => {
        return <option  key={sqft.sqft_No} 
       value={sqft.sqft_No}>  
    Exterior={sqft.Exterior}, Interior={sqft.Interior}         
        </option>; 
     })}  
      </Select>

                <Button type="submit"
                sx={{
                    width: 120,
                    ml: 3,
                     height: 55,
                }} variant="contained">Update</Button>
                </Stack>
                </Grid>
                </Grid>
                </form>

            </Box>

    )
}

export default HouseOverView; 
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import moment  from 'moment';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



const columns = [
    { field: 'Job_No', headerName: 'Job Number', width: 100, editable: false },
    { field: 'PossessionDate', headerName: 'Possession Date', type: 'date', valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"), 
    width: 125, editable: true, // hide: true   
   },
   { field: 'List_Price', headerName: 'List_Price', width: 100, editable: true, type:'number', valueFormatter: (params) => {
    if (params.value == null) {
      return '';
    }   const valueFormatted = Number(params.value).toLocaleString();
      return `$ ${valueFormatted}`;}},
      { field: 'Sale_Price', headerName: 'Sale Price', width: 100, editable: true, type:'number', valueFormatter: (params) => {
        if (params.value == null) {
          return '';
        }   const valueFormatted = Number(params.value).toLocaleString();
          return `$ ${valueFormatted}`;}},
   { field: 'RealtorName', headerName: 'Realtor Name',  
   flex: 0.2, editable: true },
   { field: 'CutomerName', headerName: 'Customer Name', 
   flex: 0.1, editable: true },
  ]



const HouseSales= ()=> {

  return (
    <Container maxWidth="false" sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={3}>
            <Paper sx={{height:200}}>
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={[
          { id: 1, Job_No: 'A119', 
          PossessionDate: '08/08/2022', List_Price: '230000', Sale_Price:'211500', 
          RealtorName: 'A.Wallace', CutomerName: 'Burt' },
          { id: 2, Job_No: 'A112', 
          PossessionDate: '09/09/2022', List_Price: '230000', Sale_Price: '211500', 
          RealtorName: 'A.Wallace', CutomerName: 'Sandy'},
        ]}
      />
    </div>
    </Paper> 
    </Grid>
    </Container>
  );
}

export default HouseSales;
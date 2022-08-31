import React from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SalesNavbar from './SalesNavbar/SalesNavbar';
import CrudTables from '../AdminTemp4/CrudTables';
import { useNavigate } from "react-router-dom";


function Salesdash() {

  return (
    <Grid >
      <SalesNavbar />   
    </Grid>
  );
}

export default Salesdash;
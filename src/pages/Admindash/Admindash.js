import React from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AdminNavbar from './AdminNavbar/AdminNavbar';
import CrudTables from '../AdminTemp4/CrudTables';
import { useNavigate } from "react-router-dom";


function Admindash() {

  return (
    <Grid >
      <AdminNavbar />   
    </Grid>
  );
}

export default Admindash;
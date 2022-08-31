import React from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import UserNavbar from './UserNavbar/UserNavbar';


function Userdash() {
  return (
    <Grid >
      {/*<Header />*/}
      <UserNavbar />

    </Grid>
  );
}

export default Userdash;
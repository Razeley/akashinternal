import React, { useEffect, useState } from 'react';
import GridWrapper from '../../common/GridWrapper/GridWrapper';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import UserTable from '../../components/UsersTable';
import Paper from '@mui/material/Paper';
import CustomerTable from '../../components/CustomerTable';
import { DataGrid } from '@mui/x-data-grid';

const AdminTemp2 = () => {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState('');


    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("/login").then((response) => {
          if (response.data.loggedIn == true) {
          setUsername(response.data.user.username);
          }
          if (response.data.user.dept !== 'admin' ) {
            navigate('/dashboard');
          }
        });
      }, []);

    return (
        <GridWrapper item xs={8} >
            This is AdminTemp2
 {/**          <UserTable />     */}
                <CustomerTable />   

        </GridWrapper>
    )
}

export default AdminTemp2;
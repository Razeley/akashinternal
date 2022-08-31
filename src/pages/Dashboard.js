import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Admindash from './Admindash/Admindash';
import Userdash from './Userdash/Userdash';
import Salesdash from '../components/Salesdash/SalesNavbar/SalesNavbar';


export default function Dashboard () {

    const [ dept, setDept ] = useState('');


axios.defaults.withCredentials = true;

useEffect(() => {
    axios.get("/login").then((response) => {
      if (response.data.loggedIn == true) {
      setDept(response.data.user.dept);
      }
    });
  }, []);
  
  
return (
    <div>
        {dept == "admin" && <Admindash />}
        {dept == "user" && <Userdash />}
        {dept == "sales" && <Salesdash />}
    </div>
)

}